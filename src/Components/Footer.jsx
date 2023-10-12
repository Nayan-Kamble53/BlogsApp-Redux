import React, { useContext } from 'react'
import { AppContext } from '../Context/AppContext'

const Footer = () => {
  const { page, handlerPageChange, totalPages } = useContext(AppContext)

  return (
    <div className='footer fixed bottom-0 bg-slate-800 text-slate-100 py-2 border-t-2 border-t-slate-900 w-full '>
      <div className='flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto'>
        {
          page > 1 &&
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md'     
            onClick={() => handlerPageChange(page - 1)} >
            Previous
          </button>
        }
        {
          page < totalPages &&
          <button className='border-2 border-gray-300 py-1 px-4 rounded-md' onClick={() => handlerPageChange(page + 1)}>Next</button>
        }

        { page === 1 &&
          <p className='text-sm font-semibold ml-auto'>Page {page} of {totalPages}</p>
        } 

        { page > 1 &&
          <p className='text-sm font-semibold ml-auto'>Page {page} of {totalPages}</p>
        }
        
        
      </div>
    </div>
  )
}

export default Footer