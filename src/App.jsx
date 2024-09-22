import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import SearchBox from './components/SearchBox/SearchBox';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import { getPhotosByName } from './gallery-api';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentQuery, setCurrentQuery] = useState('');
  const [page, setPage] = useState(1);

  const handleSearch = async value => {
    if (value !== currentQuery) {
      setPage(1);
    }

    if (!isLoading || value !== currentQuery) {
      setCurrentQuery(value);

      try {
        setIsLoading(true);
        const data = await getPhotosByName(value);
        setImages(data.results);
        setError(false);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleLoadMore = async () => {
    if (!isLoading) {
      try {
        setIsLoading(true);
        const data = await getPhotosByName(currentQuery, page + 1);
        setPage(prevState => prevState + 1);
        setImages(prevState => [...prevState, ...data.results]);
        setTimeout(() => {
          window.scrollBy({
            top:
              document.querySelector('.image-card').getBoundingClientRect()
                .height * 2,
            left: 0,
            behavior: 'smooth',
          });
        }, 100);
        setError(false);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      <SearchBox onSubmit={handleSearch} />

      {images.length > 0 && <ImageGallery images={images} />}

      <div className="center">
        {isLoading && <Loader />}
        {error && <ErrorMessage />}

        {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      </div>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
