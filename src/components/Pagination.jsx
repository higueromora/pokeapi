
const Pagination = ({ resetPage, nextPage, previousPage }) => {
  return (
    <div style={{ display: 'flex', gap: '5px', justifyContent: 'center', marginTop: '20px' }}>
      <button onClick={resetPage}>Reset</button>
      <button onClick={nextPage}>Next Page</button>
      <button onClick={previousPage}>Previous Page</button>
    </div>
  );
};

export default Pagination;
