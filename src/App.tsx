import './App.css'
import { books } from './bd-books/bdBooks'
import BooksList from './components/book/BooksList'
import { Header } from './components/header/Header'

function App() {

  return (
    <div className='app__content'>
      <Header/>
      <BooksList props={books} />
    </div>
  )
}

export default App
