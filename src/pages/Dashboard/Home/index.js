import React from 'react'

export default function Home() {
  return (
    <div className='flex-1'>

        {/* Header */}
        <div className='p-8 lg:pl-10 lg:pr-10 flex xl:p-12 2xl:pl-16 2xl:pr-16  flex-1'>
        <div className='flex h-12 items-center  w-full'>
        <h1 className='text-3xl text-[#424242]'>Dashboard</h1>
        <div className='flex flex-1 justify-end h-12 space-x-4 items-center'>
          <h1 className=' text-[#424242] text-sm lg:text-md'>Welcome, Ronald Eke</h1>

        <div className='w-12 h-12 rounded-full bg-gray-500'>

        </div>
        </div>
        </div>


      </div>


      {/* Values */}
      <div className="lg:flex md:flex justify-center">

        <div className='flex flex-col  md:lg:items-center lg:items-center md:justify-center lg:justify-center md:flex-row lg:flex-row md:w-11/12 lg:w-11/12 md:space-x-2 lg:space-x-2  space-y-4 items-center justify-center '>
          <div className='w-11/12 flex-row items-center  flex bg-white h-28 lg:w-8/12 lg:mt-4 md:mt-4 rounded-xl'>
            {/* Daily Revenue */}

            <div className='pl-4'>
                <div className='space-y-2'>
            {/* Money */}
            <h1 className='font-bold text-xl text-[#424242]'>
                $7,846
            </h1>

            <p className='text-[#424242]'>
                {/* Title */}
                Daily Revenue
            </p>
                </div>


            </div>
            {/* Percentage */}
            <div className='flex flex-1  justify-end pr-4'>
                <div className='bg-[#C8E6C9] w-16 h-16 rounded-lg flex items-center justify-center'>
                <h1 className='text-[#424242]'>+18%</h1>
                </div>
            </div>
          </div>
             {/* Daily Revenue End*/}


          <div className='w-11/12 flex-row items-center flex bg-white lg:w-8/12 h-28 rounded-xl'>
            


             {/* YTD Revenue */}

             <div className='pl-4'>
                <div className='space-y-2'>
            {/* Money */}
            <h1 className='font-bold text-xl text-[#424242]'>
                $1,437,846
            </h1>

            <p className='text-[#424242]'>
                {/* Title */}
                YTD Revenue
            </p>
                </div>


            </div>
            {/* Percentage */}
            <div className='flex flex-1  justify-end pr-4'>
                <div className='bg-[#C8E6C9] w-16 h-16 rounded-lg flex items-center justify-center'>
                <h1 className='text-[#424242]'>+18%</h1>
                </div>
            </div>
          </div>
          {/* eND Of YTD */}


          <div className='w-11/12 flex-row items-center flex lg:w-8/12 bg-white h-28 rounded-xl'>
             {/* Customer */}

             <div className='pl-4'>
                <div className='space-y-2'>
            {/* Number */}
            <h1 className='font-bold text-xl text-[#424242]'>
                17,846
            </h1>

            <p className='text-[#424242]'>
                {/* Title */}
                Customers
            </p>
                </div>


            </div>
            {/* Percentage */}
            <div className='flex flex-1  justify-end pr-4'>
                <div className='bg-[#C8E6C9] w-16 h-16 rounded-lg flex items-center justify-center'>
                <h1 className='text-[#424242]'>+18%</h1>
                </div>
            </div>
          </div>
            {/* Customer End */}


        </div>
      </div>
    </div>
  )
}
