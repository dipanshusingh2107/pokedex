const PaginationButtons = (props) => {

    const {handleNext , handlePrevious , page} = props;



    return (  
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className={page.currentPage==1?"page-item disabled":"page-item"}>
                <a className="page-link" href="#" tabIndex="-1" aria-disabled="true" onClick={handlePrevious}>Previous</a>
                </li>
                
                <li className="page-item">
                    <div className="container-sm mt-2">
                        Page {page.currentPage} of {page.totalPages} 
                    </div>
                </li>

                <li className={page.currentPage==page.totalPages?"page-item disabled":"page-item"}>
                <a className="page-link" href="#" onClick={handleNext} aria-disabled="true">Next</a>
                </li>
            </ul>
        </nav>
    );
}
 
export default PaginationButtons;