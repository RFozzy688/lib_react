import cl from './Book.module.css';

export function Book() {
  return (
    <div>
      <div className={cl.book__container}>
        <p className={cl.book__header}>За горным туманом</p>
        <div className={cl.book__content}>
          <img className={cl.book__img} src="beyond_the_highland_mist.jpg" alt="pic" />
          <div>
            <p><span className={cl.book__span}>Название:</span> За горным туманом</p>
            <p><span className={cl.book__span}>Автор:</span> Карен Мари Монинг</p>
            <p><span className={cl.book__span}>Издательтво:</span> Dell</p>
            <p><span className={cl.book__span}>Жанр:</span> Романы</p>
            <p><span className={cl.book__span}>Страниц:</span> 375</p>
            <p className={cl.book__decription}><span className={cl.book__span}>Описание:</span> Сын одного из вождей шотландских горцев Родерик Макиллих вынужден покинуть дом и скрываться под чужим именем, преследуемый кланом Маккейнов. Во время своих скитаний Родерик встречает молодую девушку по имени Джиллиан, чей отец берет мальчика на воспитание. После нападения Маккейнов на семью Джиллиан Родерик убеждает девушку в своем равнодушии к ней и расстается с возлюбленной после горячего поцелуя, который запомнился им обоим навсегда... Пять лет спустя Родерик получает послание от отца девушки, в котором содержится просьба приехать к ним. Полагая, что Джиллиан угрожает опасность, Родерик спешно бросается на помощь... чтобы обнаружить, что отец девушки устроил конкурс поклонников, желая найти жениха своей все еще ожидающей своего возлюбленного дочери...</p>
          </div>
        </div>
        <div className={cl.book__footer}>
          <button>Читать книгу</button>
        </div>
      </div>
    </div>
  )
}
