import React from 'react'
import Sidebar from '@/components/dasboard/sidebar'
import Navbar from '@/components/dasboard/navbar'
import MyComponents from '@/components/dateRangePicker'
import { ExportChart } from '@/components/dasboard/export'
import { ActiveChart } from '@/components/dasboard/activeCart'
import ExportTable from '@/components/dasboard/tableExport'
import Link from 'next/link'
import pharmacyCard from '@/components/dasboard/pharmacyCard'
import PharmacistCard from '@/components/dasboard/pharmacistCard'

function UserDashboard() {
  return (
    <>
    
    <Navbar />
    <Sidebar />
    
    <div className="p-4 sm:ml-64 bg-slate-100 pt-16">
       <span className=" text-black text-lg font-bold font-['Poppins'] leading-tight my-2 ml-4">Welcome!</span>
       <p className="text-slate-400 text-xl font-bold font-['Poppins'] leading-[18px] ml-4">Abracadabra Pharmacy</p>
       
            <div className="flex sm:flex-row w-full px-4">
            <div className="bg-white rounded-lg p-4 mx-2 w-full justify-between mt-2">
                  <p className="text-slate-400 text-lg font-bold font-['Poppins'] leading-[18px]">Nurses</p>
                  <span className=" text-black text-xl font-bold font-['Poppins'] leading-tight mt-1 ml-2">5</span>
                  <div className="flex flex-row justify-between">
                     <Link href='' className="bg-blue-400 px-4 py-2 rounded-lg text-white">View More</Link>
                     <div className="bg-blue-400 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                              <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                        </svg>
                     </div>
                  </div>
            </div>
            <div className="bg-white rounded-lg p-4 mx-2 w-full justify-between mt-2">
                  <p className="text-slate-400 text-lg font-bold font-['Poppins'] leading-[18px]">Pharmacists</p>
                  <span className=" text-black text-xl font-bold font-['Poppins'] leading-tight mt-1 ml-2">12</span>
                  <div className="flex flex-row justify-between">
                     <Link href='' className="bg-blue-400 px-4 py-2 rounded-lg text-white">View More</Link>
                     <div className="bg-blue-400 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                              <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                        </svg>
                     </div>
                  </div>
            </div>
            <div className="bg-white rounded-lg p-4 mx-2 w-full justify-between mt-2">
                  <p className="text-slate-400 text-lg font-bold font-['Poppins'] leading-[18px]">Notifications</p>
                  <span className=" text-black text-xl font-bold font-['Poppins'] leading-tight mt-1 ml-2">10</span>
                  <div className="flex flex-row justify-between">
                     <Link href='' className="bg-blue-400 px-4 py-2 rounded-lg text-white">View More</Link>
                     <div className="bg-blue-400 p-2 rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                           <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                        </svg>
                     </div>
                  </div>
            </div>
            </div>
            <div className="flex sm:flex-row flex-col-reverse mt-2">
            <div className='sm:w-2/3'>
                <div className="bg-white rounded-lg p-4 mx-4 mt-8">
                    <div className='flex flex-col items-center justify-center'>
                    <p className="bg-blue-400 text-white font-bold sm:w-1/2 py-2 px-2 text-center text-2xl rounded-lg">
                        MY DASHBOARD
                    </p>
                    </div>
                    <div className="sm:flex sm:flex-row sm:justify-between py-8">
                        <div className="flex flex-row text-red-300 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                            10 Cancelled
                        </div>
                        <div className="flex flex-row text-blue-300 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                            20 Pendings
                        </div>
                        <div className="flex flex-row text-green-300 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                            </svg>
                            40 Approved
                        </div>
                    </div>
                </div>
            <div className="bg-white mx-4 my-4 rounded-md">
                <div className="flex flex-row justify-between">
                    <div>
                        <h3 className="text-semibold font-lg text-black pl-2 pt-1">Pharmacist Lists</h3>
                        <p className="text-gray-300 font-md text-semibold pl-2">🥏 <span className="text-gray-700">0 registered</span> this month</p>
                    </div>
                    <div className='m-2'>
                    <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
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
            <div className="bg-white mx-4 my-4  rounded-md">
                <div className="flex flex-row justify-between">
                    <div>
                        <h3 className="text-semibold font-lg text-black pl-2 pt-1">Nurces Lists</h3>
                        <p className="text-gray-300 font-md text-semibold pl-2">🥏 <span className="text-gray-700">0 registered</span> this month</p>
                    </div>
                    <div className='m-2'>
                    <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
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
            <div className="sm:w-1/3 px-4 mt-2">
                <div className="bg-white rounded-lg p-2 mb-4 sm:mx-2 sm:w-full mt-2">
                    <MyComponents />
                </div> 
                <div className="bg-white px-4 my-4 w-full rounded-md">
                <h3 className="font-semibold text-md text-gray-500 pl-2 py-2">Active Licenses</h3>
            
                <PharmacistCard 
                    pharmacistName="Theodore Baganizi"
                    pharmacistClass="font-semibold text-black text-md"
                    date="1/05/2022"
                    remTime='20'
                    dateClass="text-gray-400 text-sm"
                    containerClass="m-2 px-2 py-2 rounded-lg bg-slate-100"
                />
                <PharmacistCard 
                    pharmacistName="Theodore Baganizi"
                    pharmacistClass="font-semibold text-black text-md"
                    date="14/02/2020"
                    remTime='20'
                    dateClass="text-gray-400 text-sm"
                    containerClass="m-2 px-2 py-2 rounded-lg bg-slate-100"
                />
                <PharmacistCard 
                    pharmacistName="Theodore Baganizi"
                    pharmacistClass="font-semibold text-black text-md"
                    remTime='20'
                    date="30/09/2013"
                    dateClass="text-gray-400 text-sm"
                    containerClass="m-2 px-2 py-2 rounded-lg bg-slate-100"
                />
                <PharmacistCard 
                    pharmacistName="Theodore Baganizi"
                    pharmacistClass="font-semibold text-black text-md"
                    date="27/01/2015"
                    dateClass="text-gray-400 text-sm"
                    remTime='20'
                    containerClass="m-2 px-2 py-2 rounded-lg bg-slate-100"
                />
                
                <p className="cursor-pointer text-center underline text-blue-500">+View more</p>
            </div>
            </div>
       </div>
       {/* <div className="sm:flex sm:flex-row w-full mt-2">
            <div className="bg-white mx-2 sm:w-3/4 w-full rounded-md">
                <div className="flex flex-row justify-between">
                    <div>
                        <h3 className="text-semibold font-lg text-black pl-2 pt-1">Pharmacist Lists</h3>
                        <p className="text-gray-300 font-md text-semibold pl-2">🥏 <span className="text-gray-700">0 done</span> this month</p>
                    </div>
                    <div className='m-2'>
                    <button className="bg-blue-400 hover:bg-green-600 text-white font-bold py-1 px-2 rounded inline-flex items-center">
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
            <div className="bg-white mx-2 my-4 w-full rounded-md">
                <h3 className="font-semibold text-md text-gray-500 pl-2 py-2">Active Licenses</h3>
            
                <PharmacistCard 
                    pharmacistName="Theodore Baganizi"
                    pharmacistClass="font-semibold text-black text-md"
                    date="1/05/2022"
                    remTime='20'
                    dateClass="text-gray-400 text-sm"
                    containerClass="m-2 px-2 py-2 rounded-lg bg-slate-100"
                />
                <PharmacistCard 
                    pharmacistName="Theodore Baganizi"
                    pharmacistClass="font-semibold text-black text-md"
                    date="14/02/2020"
                    remTime='20'
                    dateClass="text-gray-400 text-sm"
                    containerClass="m-2 px-2 py-2 rounded-lg bg-slate-100"
                />
                <PharmacistCard 
                    pharmacistName="Theodore Baganizi"
                    pharmacistClass="font-semibold text-black text-md"
                    remTime='20'
                    date="30/09/2013"
                    dateClass="text-gray-400 text-sm"
                    containerClass="m-2 px-2 py-2 rounded-lg bg-slate-100"
                />
                <PharmacistCard 
                    pharmacistName="Theodore Baganizi"
                    pharmacistClass="font-semibold text-black text-md"
                    date="27/01/2015"
                    dateClass="text-gray-400 text-sm"
                    remTime='20'
                    containerClass="m-2 px-2 py-2 rounded-lg bg-slate-100"
                />
                
                <p className="cursor-pointer text-center underline text-blue-500">+View more</p>
            </div>
       </div> */}

    </div>
    </>
  )
}

export default UserDashboard