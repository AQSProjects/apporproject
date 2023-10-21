import React from 'react'
import Sidebar from '@/components/dasboard/sidebar'
import Navbar from '@/components/dasboard/navbar'
import MyComponents from '@/components/dateRangePicker'
import { ExportChart } from '@/components/dasboard/export'
import { ActiveChart } from '@/components/dasboard/activeCart'
import ExportTable from '@/components/dasboard/tableExport'
import Link from 'next/link'
import PharmacyCard from '@/components/dasboard/pharmacyCard'

function ApporDashboard() {
  return (
    <>
    
    <Navbar />
    <Sidebar />
    
    <div className="p-4 sm:ml-64 bg-slate-100">
       <div className="sm:flex sm:flex-row mt-16">
        <div className="flex flex-row bg-white rounded-lg p-4 mx-2 w-full justify-between mt-2">
            <div>
            <p className="text-slate-400 text-xs font-bold font-['Poppins'] leading-[18px]">Total Pharmacies</p>
            <div className="flex flex-row">
                <p className="text-gray-700 text-lg font-bold font-['Poppins'] leading-relaxed">250</p>
                <span className=" text-blue-400 text-sm font-bold font-['Poppins'] leading-tight mt-1 ml-2">+20%</span>
            </div>
            </div>
            <div className="bg-blue-400 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                    <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v2h6a.5.5 0 0 1 .5.5c0 .253.08.644.306.958.207.288.557.542 1.194.542.637 0 .987-.254 1.194-.542.226-.314.306-.705.306-.958a.5.5 0 0 1 .5-.5h6v-2A1.5 1.5 0 0 0 14.5 2h-13z"/>
                    <path d="M16 6.5h-5.551a2.678 2.678 0 0 1-.443 1.042C9.613 8.088 8.963 8.5 8 8.5c-.963 0-1.613-.412-2.006-.958A2.679 2.679 0 0 1 5.551 6.5H0v6A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-6z"/>
                </svg>
            </div>
        </div>
        <div className="flex flex-row bg-white rounded-lg p-4 mx-2 w-full justify-between mt-2">
            <div>
            <p className="text-slate-400 text-xs font-bold font-['Poppins'] leading-[18px]">Total Pharmacists</p>
            <div className="flex flex-row">
                <p className="text-gray-700 text-lg font-bold font-['Poppins'] leading-relaxed">640</p>
                <span className=" text-blue-400 text-sm font-bold font-['Poppins'] leading-tight mt-1 ml-2">+5%</span>
            </div>
            </div>
            <div className="bg-blue-400 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM3.668 2.501l-.288.646a.847.847 0 0 0 1.479.815l.245-.368a.809.809 0 0 1 1.034-.275.809.809 0 0 0 .724 0l.261-.13a1 1 0 0 1 .775-.05l.984.34c.078.028.16.044.243.054.784.093.855.377.694.801-.155.41-.616.617-1.035.487l-.01-.003C8.274 4.663 7.748 4.5 6 4.5 4.8 4.5 3.5 5.62 3.5 7c0 1.96.826 2.166 1.696 2.382.46.115.935.233 1.304.618.449.467.393 1.181.339 1.877C6.755 12.96 6.674 14 8.5 14c1.75 0 3-3.5 3-4.5 0-.262.208-.468.444-.7.396-.392.87-.86.556-1.8-.097-.291-.396-.568-.641-.756-.174-.133-.207-.396-.052-.551a.333.333 0 0 1 .42-.042l1.085.724c.11.072.255.058.348-.035.15-.15.415-.083.489.117.16.43.445 1.05.849 1.357L15 8A7 7 0 1 1 3.668 2.501Z"/>
                </svg>
            </div>
        </div>
        <div className="flex flex-row bg-white rounded-lg p-4 mx-2 w-full justify-between mt-2">
            <div>
            <p className="text-slate-400 text-xs font-bold font-['Poppins'] leading-[18px]">Total Nurses</p>
            <div className="flex flex-row">
                <p className="text-gray-700 text-lg font-bold font-['Poppins'] leading-relaxed">52</p>
                <span className=" text-red-400 text-sm font-bold font-['Poppins'] leading-tight mt-1 ml-2">-14%</span>
            </div>
            </div>
            <div className="bg-blue-400 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zm.5 10v-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-2.5.5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1zm-3 0a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-1z"/>
                </svg>
                
            </div>
        </div>
        <div className="flex flex-row bg-white rounded-lg p-4 mx-2 w-full justify-between mt-2">
            <div>
            <p className="text-slate-400 text-xs font-bold font-['Poppins'] leading-[18px]">Licenses</p>
            <div className="flex flex-row">
                <p className="text-gray-700 text-lg font-bold font-['Poppins'] leading-relaxed">1500</p>
                <span className=" text-blue-400 text-sm font-bold font-['Poppins'] leading-tight mt-1 ml-2">+55%</span>
            </div>
            </div>
            <div className="bg-blue-400 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                    <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1h-4z"/>
                </svg>
                
            </div>
        </div>
       </div>
       <div className="flex sm:flex-row flex-col-reverse mt-2">
        <div className="sm:w-2/3 px-4">
            <div className="bg-white rounded-lg p-4 mx-2 w-full mt-2">
                <div className='flex flex-col items-center justify-center'>
                <p className="bg-blue-400 text-white font-bold sm:w-1/2 py-2 px-2 text-center text-2xl rounded-lg">
                    APPORIS DASHBOARD
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
                    <div className="flex flex-row text-blue-300 font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mt-1" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                        </svg>
                        40 Approved
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
                <p className="font-semibold">Licenses overview</p>
                <span className="text-sm text-blue-400 font-semibold">20% expired</span>
                <ExportChart />
            </div>
        </div>
        <div className="sm:w-1/3 px-2">
            <div className="bg-white rounded-lg p-4 sm:mx-2 sm:w-full mt-2">
                <MyComponents />
            </div>
            <div className="bg-gradient-to-r from-blue-800 to-black rounded-lg p-4 sm:w-full sm:mx-2 mt-4">
                <ActiveChart />
            </div>
        </div>
       </div>
       <div className="sm:flex sm:flex-row w-full mt-2">
            <div className="bg-white rounded-md m-2 w-full">
                <div className="flex flex-row justify-between m-1">
                    <div className="flex flex-row">
                        <div className="bg-blue-400 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                            </svg> 
                        </div>
                        <p className="text-slate-400 text-md font-bold font-['Poppins'] leading-[18px] m-1">Pharmacies</p>
                    </div>
                    <p className="text-gray-700 text-lg font-bold font-['Poppins'] leading-relaxed">500</p>
                </div>
                <div className="p-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-red-600 h-2.5 rounded-full w-16"></div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-md m-2 w-full">
                <div className="flex flex-row justify-between m-1">
                    <div className="flex flex-row">
                        <div className="bg-blue-400 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                            </svg> 
                        </div>
                        <p className="text-slate-400 text-md font-bold font-['Poppins'] leading-[18px] m-1">Nurses</p>
                    </div>
                    <p className="text-gray-700 text-lg font-bold font-['Poppins'] leading-relaxed">232</p>
                </div>
                <div className="p-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-yellow-300 h-2.5 rounded-full w-32"></div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-md m-2 w-full">
                <div className="flex flex-row justify-between m-1">
                    <div className="flex flex-row">
                        <div className="bg-blue-400 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg"  width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                                <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                            </svg>
                        </div>
                        <p className="text-slate-400 text-md font-bold font-['Poppins'] leading-[18px] m-1">Pharmacists</p>
                    </div>
                    <p className="text-gray-700 text-lg font-bold font-['Poppins'] leading-relaxed">200</p>
                </div>
                <div className="p-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-red-300 h-2.5 rounded-full w-8"></div>
                    </div>
                </div>
            </div>
            <div className="bg-white rounded-md m-2 w-full">
                <div className="flex flex-row justify-between m-1">
                    <div className="flex flex-row">
                        <div className="bg-blue-400 p-2 rounded-md">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white mt-1" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 .5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10A.5.5 0 0 1 4 .5Zm-4 2A.5.5 0 0 1 .5 2h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 4h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 6h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2A.5.5 0 0 1 .5 8h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm-4 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm4 0a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5Z"/>
                            </svg> 
                        </div>
                        <p className="text-slate-400 text-md font-bold font-['Poppins'] leading-[18px] m-1">Licenses</p>
                    </div>
                    <p className="text-gray-700 text-lg font-bold font-['Poppins'] leading-relaxed">320</p>
                </div>
                <div className="p-1">
                    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                        <div className="bg-blue-300 h-2.5 rounded-full w-48"></div>
                    </div>
                </div>
            </div>
       </div>
       <div className="flex flex-row w-full mt-2">
            <div className="bg-white mx-2 sm:w-3/4 w-full rounded-md">
                <div className="flex flex-row justify-between">
                    <div>
                        <h3 className="text-semibold font-lg text-black pl-2 pt-1">List of Employees</h3>
                        <p className="text-gray-300 font-md text-semibold pl-2">🥏 <span className="text-gray-700">0 done</span> this month</p>
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
            <div className="bg-white mx-2 sm:w-1/4 w-full rounded-md">
                <h3 className="text-semibold font-lg text-black pl-2 pt-1">List Of Pharmacies Registered</h3>
                <p className="text-gray-300 font-md text-semibold pl-2 mb-2"><span className="text-blue-300">+30%</span> this month</p>
                <PharmacyCard 
                    pharmacyName="Abracadabra pharmacy LTD"
                    pharmacyClass="font-bold text-md text-gray-700"
                    tinNo="TIN NO: XXXXXXX"
                    tinClass="text-gray-300 font-bold text-sm vert-line"
                    containerClass=""
                />
                <PharmacyCard 
                    pharmacyName="Isaro pharmacy LTD"
                    pharmacyClass="font-bold text-md text-gray-700"
                    tinNo="TIN NO: XXXXXXX"
                    tinClass="text-gray-300 font-bold text-sm vert-line"
                    containerClass=""
                />
                <PharmacyCard 
                    pharmacyName="Ubuzima pharmacy LTD"
                    pharmacyClass="font-bold text-md text-gray-700"
                    tinNo="TIN NO: XXXXXXX"
                    tinClass="text-gray-300 font-bold text-sm vert-line"
                    containerClass=""
                />
                <PharmacyCard 
                    pharmacyName="Baho pharmacy LTD"
                    pharmacyClass="font-bold text-md text-gray-700"
                    tinNo="TIN NO: XXXXXXX"
                    tinClass="text-gray-300 font-bold text-sm vert-line"
                    containerClass=""
                />
                
                <p className="cursor-pointer text-center underline text-blue-500">+View more</p>
            </div>
       </div>

    </div>
    </>
  )
}

export default ApporDashboard