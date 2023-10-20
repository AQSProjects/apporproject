import React from 'react';
import Sidebar from '@/components/dasboard/sidebar';
import Navbar from '@/components/dasboard/navbar';
import Searchbar from '../../../components/dasboard/searchbar';
import Dropdownbutton from '../../../components/dasboard/dropdownbutton';
import Link from 'next/link';
const Accreditation3 = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="p-4 sm:ml-64 mt-16">
        <h1 className="text-2xl font-semibold mb-4">Export Reports</h1>
        <Link href='/dashboard/Exportticket/'
        data-modal-target="authentication-modal"
        data-modal-toggle="authentication-modal"
        className="font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
      >
        + Create New Export
        </Link>
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
                  <th className=" font-semibold text-left">Area Of Harvest (m^2)</th>
                  <th className=" font-semibold text-left">Destination Country</th>
                  <th className=" font-semibold text-left">Total Price (Million rwf)</th>
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
                   <td className="p-2 border"><Dropdownbutton/></td>
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
                   <td className="p-2 border"><Dropdownbutton/></td>
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
                   <td className="p-2 border"><Dropdownbutton/></td>
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
                   <td className="p-2 border"><Dropdownbutton/></td>
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
                   <td className="p-2 border"><Dropdownbutton/></td>
                 </tr> 
               </tbody>
             </table>
           </div>
         </main>
      </>
   );
 };
 
 export default Accreditation3;