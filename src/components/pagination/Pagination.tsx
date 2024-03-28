import cl from './Pagination.module.css'

export const Pagination = ({ currentPage, totalPages, onPageChange }: any) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className={cl.container}>
      {pages.map((page) => (
        <button className={cl.btn} key={page} onClick={() => onPageChange(page)} disabled={currentPage === page}>
          {page}
        </button>
      ))}
    </div>
  );
};