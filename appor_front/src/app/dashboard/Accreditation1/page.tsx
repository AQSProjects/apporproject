import React from 'react';
import Sidebar from '@/components/dasboard/sidebar';
import Navbar from '@/components/dasboard/navbar';
import Searchbar from '../../../components/dasboard/searchbar';

const Accreditation1 = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="p-4 sm:ml-64 mt-16">
        <h1 className="text-2xl font-semibold mb-4">Export Reports</h1>
          <div className="relative">
          </div>
          <Searchbar />
          <div className="max-h-[300px] overflow-y-auto">
            <table id="Export Reports" className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="pl-1 font-semibold text-left">HS Code</th>
                  <th className=" font-semibold text-left">Crop Type</th>
                  <th className=" font-semibold text-left">Crop Volume</th>
                  <th className=" font-semibold text-left">Harvesting Period</th>
                  <th className=" font-semibold text-left">Area Of Harvest(m^2)</th>
                  <th className=" font-semibold text-left">Destination Country</th>
                  <th className=" font-semibold text-left">Total Price(Million rwf)</th>
                  <th className=" font-semibold text-left">Export Submission Date</th>
                  <th className="p-4 font-semibold text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                 <tr>
                   <td className="p-2 border">324658</td>
                   <td className="p-2 border">Beans</td>
                   <td className="p-2 border">234000</td>
                   <td className="p-2 border">October</td>
                   <td className="p-2 border">2000</td>
                   <td className="p-2 border">Burundi</td>
                   <td className="p-2 border">3</td>
                   <td className="p-2 border">31/October/2022</td>
                   <td className="p-2 border"><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-1 mr-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Print</button></td>
                 </tr> 
                 <tr>
                   <td className="p-2 border">324658</td>
                   <td className="p-2 border">Beans</td>
                   <td className="p-2 border">234000</td>
                   <td className="p-2 border">October</td>
                   <td className="p-2 border">2000</td>
                   <td className="p-2 border">Burundi</td>
                   <td className="p-2 border">3</td>
                   <td className="p-2 border">31/October/2022</td>
                   <td className="p-2 border"><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-1 mr-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Print</button></td>
                 </tr> 
                 <tr>
                   <td className="p-2 border">324658</td>
                   <td className="p-2 border">Beans</td>
                   <td className="p-2 border">234000</td>
                   <td className="p-2 border">October</td>
                   <td className="p-2 border">2000</td>
                   <td className="p-2 border">Burundi</td>
                   <td className="p-2 border">3</td>
                   <td className="p-2 border">31/October/2022</td>
                   <td className="p-2 border"><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-1 mr-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Print</button></td>
                 </tr> 
                 <tr>
                   <td className="p-2 border">324658</td>
                   <td className="p-2 border">Beans</td>
                   <td className="p-2 border">234000</td>
                   <td className="p-2 border">October</td>
                   <td className="p-2 border">2000</td>
                   <td className="p-2 border">Burundi</td>
                   <td className="p-2 border">3</td>
                   <td className="p-2 border">31/October/2022</td>
                   <td className="p-2 border"><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-1 mr-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">\Print</button></td>
                 </tr> 
                 <tr>
                   <td className="p-2 border">324658</td>
                   <td className="p-2 border">Beans</td>
                   <td className="p-2 border">234000</td>
                   <td className="p-2 border">October</td>
                   <td className="p-2 border">2000</td>
                   <td className="p-2 border">Burundi</td>
                   <td className="p-2 border">3</td>
                   <td className="p-2 border">31/October/2022</td>
                   <td className="p-2 border"><button type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-6 py-1 mr-2 mb-2 mt-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Print</button></td>
                 </tr> 
               </tbody>
             </table>
           </div>
         </main>
      </>
   );
 };
 
 export default Accreditation1;