const BookListing = ({book}) => {
  if(!book) {
    return <div>No book available</div>;
  }
  return (
    <div className="book-preview">
      <h2>Book Title: {book.title}</h2>
      <p>Author: {book.author}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Publisher: {book.publisher}</p>
      <p>Genre: {book.genre}</p>
      <p>Available: {book.availability.isAvailable ? "Yes" : "No"}</p>
    </div>
  );
};

export default BookListing;
