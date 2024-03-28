import  { useState, useEffect } from 'react';
import cl from './FileViewer.module.css'

const FileViewer = ({name, id}:any) => {
  const [fileContent, setFileContent] = useState('');
  const filePath = `/src/bd/${id}.txt`;

  useEffect(() => {
      const fetchFileContent = async () => {
          try {
              const response = await fetch(filePath);
              const content = await response.text();
              setFileContent(content);
          } catch (error) {
              console.error('Ошибка при загрузке файла:', error);
          }
      };

      fetchFileContent();
  }, [filePath]);

  return (
      <div className={cl.container}>
          <h2>{name}</h2>
          <div style={{textAlign: 'justify'}} dangerouslySetInnerHTML={{ __html: fileContent }}></div>
      </div>
  );
};

export default FileViewer;