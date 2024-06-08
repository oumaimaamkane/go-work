const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map((number) => number + 1);

  return (
    <div className="flex justify-center md:my-4">
      <button
        className="text-sm md:text-base px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {pages.map((page) => (
        <button
          key={page}
          className={`px-4 text-sm md:text-base py-2 mx-1 rounded ${
            currentPage === page
              ? "bg-teal-500 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        className="text-sm md:text-base px-4 py-2 mx-1 bg-gray-200 rounded hover:bg-gray-300"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
