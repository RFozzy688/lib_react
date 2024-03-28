import { useParams } from 'react-router-dom';
import FileViewer from '../FileViewer/FileViewer';
import { books } from '../../bd/bd';


export function BookReader() {
  const { id }:any = useParams();
  const name = books[id - 1].name;
  return (
    <div>
      <FileViewer
        name={name}
        id={id}/>
    </div>
  )
}
