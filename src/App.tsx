import { useMemo, useState } from 'react'
import './App.css'
import { books } from './bd/bd'
import { BooksList } from './components/book/BooksList'
import { Header } from './components/header/Header'
import { BookSearch } from './components/book-search/BookSearch'
import { Pagination } from './components/pagination/Pagination'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BookReader } from './components/book/BookReader'

function App() {

  const [searchBy, setSearchBy] = useState('')
  const [searchValue, setSearchValue] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(books.length / itemsPerPage);

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

  const getCurrentItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return bookSearch.slice(startIndex, endIndex);
  };

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className='app__content'>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={
            <>
              <BookSearch onSearchChange={getSearchByAndValue}/>
              <BooksList props={getCurrentItems()} />
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            </>
          }/>
          <Route path='/book/:id' element={<BookReader/>}/>
        </Routes>
      </Router>  

      
          

          
        
    </div>
  )
}

export default App
