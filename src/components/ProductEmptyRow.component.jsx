import React from 'react'

const ProductEmptyRowComponent = ({colSpan,title}) => {
  return (
    <>
      <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"> 
        <td colSpan={colSpan} className="px-6 py-4 text-center">{title}</td>
      </tr>
    </>
  )
}

export default ProductEmptyRowComponent
