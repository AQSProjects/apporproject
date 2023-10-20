import React from 'react'

function ExportTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg m-2">
        <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-green-700 bg-gray-50">
                <tr>
                    <th scope="col" className="px-1 py-2">
                        H.S.Code
                    </th>
                    <th scope="col" className="px-1 py-2">
                        Crop Type
                    </th>
                    <th scope="col" className="px-1 py-2">
                        Crop Volume <br /> (Tone)
                    </th>
                    <th scope="col" className="px-1 py-2">
                        Toatal Price <br />(Rwf)
                    </th>
                    <th scope="col" className="px-1 py-2">
                        Expected Harvesting <br /> Period
                    </th>
                    <th scope="col" className="px-1 py-2">
                        Area of Harvest <br /> (m²)
                    </th>
                    <th scope="col" className="px-1 py-2">
                        Destination Country
                    </th>
                    
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    342434243424
                    </th>
                    <td className="px-1 py-2">
                        Habanero
                    </td>
                    <td className="px-1 py-2">
                        2000
                    </td>
                    <td className="px-1 py-2">
                        29,578,000
                    </td>
                    <td className="px-1 py-2">
                        October 2022
                    </td>
                    <td className="px-1 py-2">
                        269.5
                    </td>
                    <td className="px-1 py-2">
                        Burundi
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    342434243424
                    </th>
                    <td className="px-1 py-2">
                        Habanero
                    </td>
                    <td className="px-1 py-2">
                        2000
                    </td>
                    <td className="px-1 py-2">
                        29,578,000
                    </td>
                    <td className="px-1 py-2">
                        October 2022
                    </td>
                    <td className="px-1 py-2">
                        269.5
                    </td>
                    <td className="px-1 py-2">
                        Burundi
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    342434243424
                    </th>
                    <td className="px-1 py-2">
                        Habanero
                    </td>
                    <td className="px-1 py-2">
                        2000
                    </td>
                    <td className="px-1 py-2">
                        29,578,000
                    </td>
                    <td className="px-1 py-2">
                        October 2022
                    </td>
                    <td className="px-1 py-2">
                        269.5
                    </td>
                    <td className="px-1 py-2">
                        Burundi
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-1 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        342434243424
                    </th>
                    <td className="px-1 py-2">
                        Habanero
                    </td>
                    <td className="px-1 py-2">
                        2000
                    </td>
                    <td className="px-1 py-2">
                        29,578,000
                    </td>
                    <td className="px-1 py-2">
                        October 2022
                    </td>
                    <td className="px-1 py-2">
                        269.5
                    </td>
                    <td className="px-1 py-2">
                        Burundi
                    </td>
                </tr>
                
            </tbody>
        </table>
        <div className="flex items-center justify-center">
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm my-2">
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Previous</span>
                    <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                </a>
                </li>
                <li>
                <a href="#" aria-current="page" className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">1</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">3</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
                </li>
                <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <span className="sr-only">Next</span>
                    <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                </a>
                </li>
            </ul>
          </nav>
        </div>
    </div>

  )
}

export default ExportTable;