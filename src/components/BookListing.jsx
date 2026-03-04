const BookListing = ({book}) => {
  if(!book) {
    return <div>No book available</div>;
  }
  return (
    <div className="book-preview">
      <h2>Job Title: {book.title}</h2>
      <p>Job Type: {book.author}</p>
      <p>Job Description: {book.isbn}</p>
      <p>Company Name: {book.publisher}</p>
      <p>Contact Email: {book.genre}</p>
      <p>Contact Phone: {book.availability.borrower}</p>
    </div>
  );
};

export default BookListing;
