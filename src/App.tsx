import { useMemo, useState } from 'react'
import './App.css'
import { books } from './bd/bd'
import BooksList from './components/book/BooksList'
import { Header } from './components/header/Header'
import { BookSearch } from './components/book-search/BookSearch'

function App() {

  const [searchBy, setSearchBy] = useState('')
  const [searchValue, setSearchValue] = useState('');

  const bookSearch = useMemo(() => {
    switch (searchBy){
      case 'author':
        if (searchValue.localeCompare('All')){
          return books.filter(book => book.author.toLowerCase().includes(searchValue.toLowerCase()));
        }
        break;
      case 'genre':
        if (searchValue.localeCompare('All')){
          return books.filter(book => book.gener.toLowerCase().includes(searchValue.toLowerCase()));
        }
        break;
      case 'name':
        if (searchValue.localeCompare('All')){
          return books.filter(book => book.name.toLowerCase().includes(searchValue.toLowerCase()));
        }
        break;
    }
      
    return books;
  }, [searchValue]);

  const getSearchByAndValue = (_searchBy: any, _searchValue: any) => {
    setSearchBy(_searchBy);
    setSearchValue(_searchValue);
  }

  return (
    <div className='app__content'>
      <Header/>
      <BookSearch 
        onSearchChange={getSearchByAndValue}
      />
      <BooksList props={bookSearch} />
    </div>
  )
}

export default App
