import toast from 'react-hot-toast';

export default function SearchBox({ onSubmit }) {
  const handleFormSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    if (!value) {
      toast.error('Enter the name of the image');
    } else {
      onSubmit(value);
    }
  };

  return (
    <header className="search-box">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">
          <i className="fas fa-search" style={{ marginRight: '5px' }}></i>
        </button>
      </form>
    </header>
  );
}
