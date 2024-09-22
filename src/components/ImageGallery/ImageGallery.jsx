import ImageCard from '../ImageCard/ImageCard';

export default function ImageGallery({ images }) {
  return (
    <ul className="gallery">
      {images.map(image => (
        <li key={image.id}>
          <ImageCard src={image.urls.small} alt={image.alt_description} />
        </li>
      ))}
    </ul>
  );
}
