import './App.css'
import Header from './components/Header'
import { books } from './bd-books/bdBooks'
import BooksList from './components/book/BooksList'

function App() {

  return (
    <div className='app__content'>
      <BooksList props={books} />
    </div>
  )
}

export default App
