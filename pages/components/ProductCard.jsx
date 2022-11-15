import React from 'react'

export default function ProductCard() {
  return (
    <div className='w-[150px] lg:w-[200px]  border-2 border-slate-500 p-3 hover:scale-100 hover:border-slate-800  duration-200  ' >
      <img className='pt-3' src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MPPJ3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1662046154499' />
      <div className='text-md lg:text-xl my-3'>iPhone 14 Pro Leather</div>
      <div className='text-sm lg:text-lg my-2'>$499</div>
    </div>
  )
}
