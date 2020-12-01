import React, {useState} from 'react'
import styles from './Pagination.module.css'

type PropsType = {
  totalItemsCount: number
  pageSize: number
  currentPage: number
  onPageChanged: (pageNumber: number) => void
  portionSize?: number
}

const Pagination: React.FC<PropsType> = ({
                                           totalItemsCount,
                                           pageSize,
                                           currentPage,
                                           onPageChanged,
                                           portionSize = 10
                                         }) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);

  let pages: Array<number> = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagination}>
      {portionNumber > 1 &&
      <button onClick={() => {
        setPortionNumber(portionNumber - 1)
      }}>PREV</button>}

      {pages
        .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
        .map(page => {
          return <span className={currentPage === page ? styles.selectedPage : ''} key={page} onClick={(e) => {
            onPageChanged(page);
          }}>{page}</span>
        })}

      {portionCount > portionNumber &&
      <button onClick={() => {
        setPortionNumber(portionNumber + 1)
      }}>NEXT</button>}
    </div>
  )
}

export default Pagination;
