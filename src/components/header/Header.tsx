import cl from './Header.module.css'

export function Header() {
  return (
    <div className={cl.header__container}>
      <div className={cl.header__content}>
        <div className={`${cl.header__title} ${cl.header__title1}`}>ONLINE LIBRARY</div>
        <div className={`${cl.header__title} ${cl.header__title2}`}>FREE READ</div>
      </div>      
    </div>
  )
}

