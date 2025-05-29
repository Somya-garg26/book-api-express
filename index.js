const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    console.log('Root route hit');
    res.send('Welcome to the Book API');
});


// app.get('/', (req, res) => {
//   res.send('Welcome to the Book API');
// });


let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'Brave New World', author: 'Aldous Huxley' }
];

// Get all books
app.get('/books', (req, res) => {
  res.json(books);
});

// Get a single book by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

// Add a new book
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = {
    id: books.length + 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Update a book
app.put('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');

  const { title, author } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
});

// Delete a book
app.delete('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Book not found');

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
});

app.listen(port, () => {
  console.log(`Book API running at http://localhost:${port}`);
});
