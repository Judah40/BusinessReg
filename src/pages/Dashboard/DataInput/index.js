import React from 'react'
import ProductInput from '../../../components/ProductInput'

export function DataInput() {
  return (
    <div className='flex flex-col flex-1 pl-4'>
      <div className='w-full justify-center flex pt-10'>
        <h1 className='text-xl font-bold'>Enter Daily Transaction</h1>
      </div>

      <div className='w-full items-center pt-4 justify-center flex'>
        <ProductInput/>
      </div>
    </div>
  )
}

