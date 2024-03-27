import './App.css'
import Header from './components/Header'
import { Book } from './components/book/Book'

function App() {

  return (
    <div className='app__content'>
      <Book/>
      <Book/>
      <Book/>
    </div>
  )
}

export default App
