import React, {useState} from "react";
import * as classnames from "classnames";

const Pagination = ({pagesCount = 500, pageSize, currentPage = 1, portionSize = 10, onPageChange}) => {
    let pages = [];
    for (let i = 0; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionsCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let firstPageInPortion = (portionNumber - 1) * portionSize + 1;
    let lastPageInPortion = portionNumber * portionSize;


    return (
        <nav>
            <ul className='pagination justify-content-center mt-3' >
                {portionNumber > 1 && <li className='page-item' onClick={() => setPortionNumber(portionNumber - 1)}>
                    <span className='page-link'>PREV</span>
                </li>}

                {pages
                    .filter(page => {
                        return page >= firstPageInPortion && page <= lastPageInPortion
                    })
                    .map(page => {
                        let liClassName = classnames('page-item', {'active': +page === currentPage});
                        return <li className={liClassName} key={page}>
                            <span className='page-link' onClick={() => onPageChange(page)}>{page}</span>
                        </li>
                    })}

                {portionNumber < portionsCount && <li className='page-item' onClick={() => setPortionNumber(portionNumber + 1)}>
                    <span className='page-link'>NEXT</span>
                </li>}
            </ul>
        </nav>
    )

}

export default Pagination