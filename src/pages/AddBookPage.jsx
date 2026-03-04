import { useState } from "react";


const AddBookPage = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [publisher, setPublisher] = useState("");
  const [genre, setGenre] = useState("");
  const [isAvailable, setIsAvailable] = useState(true);
  const [dueDate, setDueDate] = useState("");
  const [borrower, setBorrower] = useState("");

  const addBook = async (newBook) => {
    try {
      const res = await fetch("/api/books", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBook),
      });
      if (!res.ok) throw new Error("Failed to add book");
    } catch (error) {
      console.error(error);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    const newBook = {
      title,
      author,
      isbn,
      publisher,
      genre,
      availability: {
        isAvailable,
        dueDate,
        borrower
      }
    };

    addBook(newBook);

    console.log("submitForm called");
  };

  return (
    <div className="create">
      <h2>Add a New Job</h2>
      <form onSubmit={submitForm}>
        <label>Job Title:</label>
        <input type="text" required value={title}
          onChange={(e) => setTitle(e.target.value)} />

        <label>Job type::</label>
         <select value={author} onChange={(e) =>setAuthor(e.target.value)}>
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Remote">Remote</option>
          <option value="Internship">Internship</option>
        </select>

        <label>Job Description:</label>
        <input type="text" required value={isbn}
          onChange={(e) => setIsbn(e.target.value)} />
        <label>Company Name:</label>
        <input type="text" required value={publisher}
          onChange={(e) => setPublisher(e.target.value)} />
        <label>Contact Email:</label>
        <input type="text" required value={genre}
          onChange={(e) => setGenre(e.target.value)} />
       
        <label>Due Date:</label>
        <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
        <label>Contact Phone:</label>
        <input type="text" value={borrower} onChange={(e) => setBorrower(e.target.value)} />
        <button>Add Job</button>
      </form>
    </div>
  );
};

export default AddBookPage;
