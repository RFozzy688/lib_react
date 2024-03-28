import { SelectItem } from "../select-item/SelectItem";
import { authors, genre } from "../../bd/bd";
import { ValueInput } from "../value-input/ValueInput";
import cl from './BookSearch.module.css'

export function BookSearch({onSearchChange}: any) {
  const handleDropdownChangeAuthor = (selectedItem: any) => {
    onSearchChange('author', selectedItem);
    }
  
    const handleDropdownChangeGenre = (selectedItem:any) => {
    onSearchChange('genre', selectedItem);
    }

    const handleInputChange = (event: any) => {
      onSearchChange('name', event.target.value);
    }
  return (
    <div className={cl.container}>
      <SelectItem
        props={authors}
        title={'Поиск по автору:'}
        onChange={handleDropdownChangeAuthor}
      />
      <SelectItem
        props={genre}
        title={'Поиск по жанру:'}
        onChange={handleDropdownChangeGenre}
      />
      <ValueInput 
        type='text'
        placeholder='Поиск по названия...'
        onChange={handleInputChange}/>
    </div>
  )
}
