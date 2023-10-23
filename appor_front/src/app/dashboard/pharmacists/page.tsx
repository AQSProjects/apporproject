'use client'
import React from 'react'
import Sidebar from '@/components/dasboard/sidebar'
import Navbar from '@/components/dasboard/navbar'
import ExportTable from '@/components/dasboard/tableExport'
import Link from 'next/link'
import SearchBar from '@/components/dasboard/searchbar'
import Pharmacist_form from '@/components/pharmacist_form'


function Pharmacists() {
    const [showModal, setShowModal] = React.useState(false);
  return (
    <>
    
    <Navbar />
    <Sidebar />
    
    <div className="p-4 sm:ml-64 bg-slate-100 pt-16 h-screen">
    <>
      <button
        className="bg-blue-500 m-4 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded-xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        + Add a Pharmacist
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-full">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                
                <div className="relative py-2 px-6 flex-auto">
                  <Pharmacist_form num='new' size={2} deleter=''/>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end py-2 px-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
          <div className="relative mt-4">
          </div>
          <SearchBar />
            <div className="bg-white mx-4 my-4  rounded-md">
                <div className="flex flex-row justify-between">
                    <div>
                        <h3 className="text-semibold font-lg text-black pl-2 pt-1">All Pharmacists Lists</h3>
                        <p className="text-gray-300 font-md text-semibold pl-2">🥏 <span className="text-gray-700">0 registered</span> this month</p>
                    </div>
                    <div className='m-2'>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-white" viewBox="0 0 16 16">
                            <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z"/>
                            <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                        </svg>
                        <span>Print</span>
                    </button>
                    </div>
                </div>
                <ExportTable />

            </div>

    </div>
    </>
  )
}

export default Pharmacists