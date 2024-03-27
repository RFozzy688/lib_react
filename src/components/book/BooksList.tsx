import { Book } from './Book'

export default function BooksList({props}: any) {
  console.log(props)
  return (
    <div>
      {props.map((book: any) => <Book {...book} key={book.id}/>)}
    </div>
  )
}
