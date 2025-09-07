import './App.css';
import Book from './components/book.jsx'

const books = [
  {
    id: 1,
    title: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald exploring wealth, love, and the American Dream."
  },
  {
    id: 2,
    title: "1984",
    description: "George Orwell's dystopian story about surveillance, control, and totalitarianism. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    description: "Harper Lee’s timeless tale about justice, morality, and compassion in the American South."
  },
  {
    id: 4,
    title: "Moby-Dick",
    description: "Herman Melville’s epic story of obsession, revenge, and the sea."
  }
];

function App() {
  return (
    <div>
      { books.map(b =>  <Book key={b.id} book={b}/>)
      }
    </div>
  )
}

export default App