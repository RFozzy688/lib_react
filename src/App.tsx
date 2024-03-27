import './App.css'
import Header from './components/Header'
import { Book } from './components/book/Book'
import { books } from './bd-books/bdBooks'

function App() {

  return (
    <div className='app__content'>
      {books.map((book) => {
      return <Book {...book} key={book.id}/>})}
    </div>
  )
}

export default App
