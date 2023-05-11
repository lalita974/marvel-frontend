const Pagination = (props) => {
  const { total, setCurrentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(total / 100); i++) {
    pageNumbers[i] = i;
  }

  return (
    <nav className="container">
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <button
                className="pagination-button"
                onClick={() => {
                  setCurrentPage(number);
                  window.scrollTo(0, 0);
                }}
              >
                {number}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
