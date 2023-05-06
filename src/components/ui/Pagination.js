import { useEffect, useState } from 'react';
import {FaChevronLeft, FaChevronRight} from '../../assets/icons';
import '../../stylesheets/ui/pagination.css';

export default function Pagination() {

  const totalPages = 11;
  const [pages,setPages] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);

  function createPages(){
    let arr = [];
    for (let i = 1; i <= totalPages; i++) {
      arr.push(i)
    }
    setPages(arr.slice(currentPage - 1,currentPage + 2))
  }
  useEffect(()=>{
    createPages()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className='pagination'>
      <span className='pagination_chevronLeft'>
        <FaChevronLeft  />
      </span>
      {pages.map(page=>(
          <span className={`page ${page === currentPage && 'currentPage'}`} >
            {page}
          </span>
        ))
      }
      <span className='page'>...</span>
      <span className='page'>{totalPages}</span>
      <span className='pagination_chevronRight'>
        <FaChevronRight  />
      </span>
    </div>
  )
}