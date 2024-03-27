import cl from './Book.module.css';

export function Book({name, author, description, gener, pages, img, publishing}: any) {
  return (
    <div>
      <div className={cl.book__container}>
        <div className={cl.book__header}>{name}</div>
        <div className={cl.book__content}>
          <img className={cl.book__img} src={img} alt="pic" />
          <div>
            <div><span className={cl.book__span}>Название:</span> {name}</div>
            <div><span className={cl.book__span}>Автор:</span> {author}</div>
            <div><span className={cl.book__span}>Издательтво:</span> {publishing}</div>
            <div><span className={cl.book__span}>Жанр:</span> {gener}</div>
            <div><span className={cl.book__span}>Страниц:</span> {pages}</div>
            <div className={cl.book__decription}><span className={cl.book__span}>Описание:</span> {description}</div>
          </div>
        </div>
        <div className={cl.book__footer}>
          <button>Читать книгу</button>
        </div>
      </div>
    </div>
  )
}
