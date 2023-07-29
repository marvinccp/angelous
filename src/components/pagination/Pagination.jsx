
export const Pagination = ({ currentPage, nPages, setCurrentPage}) => {

const next = () =>{
    if(currentPage !== nPages) setCurrentPage( prev => prev + 1)
}

const prev = () =>{
if (currentPage !== 1) setCurrentPage((prev) => prev - 1);
}
  return (
    <section>
      <button onClick={prev}>Prev</button>
      <h4>
        {currentPage} /
        {nPages}
      </h4>
      <button onClick={next}>Next</button>
    </section>
  );
}
