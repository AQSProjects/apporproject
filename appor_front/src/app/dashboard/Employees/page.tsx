import React from 'react'
import Sidebar from '@/components/dasboard/sidebar'
import Navbar from '@/components/dasboard/navbar'
import Popupform from '../../../components/dasboard/popupform'
const ViewEmployee = () => {
 return (
      <>
       <Sidebar />
         <Navbar />
         <main className="p-4 sm:ml-64 mt-16">
           <h1 className="text-2xl font-semibold mb-4">View Employees</h1>
           <Popupform/>
           <div className="bg-white shadow-md rounded-lg p-4">
           <div className="relative">
          </div>
             <table id="ApprovedCompanies" className="w-full">
               <thead>
                 <tr className="bg-gray-200">
                   <th className="p-2 font-semibold text-left">Names</th>
                   <th className="p-2 font-semibold text-left">Position</th>
                   <th className="p-2 font-semibold text-left">Email</th>
                   <th className="p-2 font-semibold text-left">Employment Start Date</th>
                   <th className="p-2 font-semibold text-left">Accreditation Level</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td className="p-2 border">Laura Uwineza</td>
                   <td className="p-2 border">Human Resources Manager</td>
                   <td className="p-2 border">l.uwineza@africaqs.com</td>
                   <td className="p-2 border">31/October/2022</td>
                   <td className="p-2 border text-green-600 font-semibold">Level 3</td>
                </tr>
                <tr>
                   <td className="p-2 border">Ivan Steve Rwema</td>
                   <td className="p-2 border">Operation Manager</td>
                   <td className="p-2 border">i.rwema@africaqs.com</td>
                   <td className="p-2 border">01/September/2023</td>
                   <td className="p-2 border text-green-600 font-semibold">Level 2</td>
                </tr>
                <tr>
                   <td className="p-2 border">Leslie IREBE</td>
                   <td className="p-2 border">Data Science Intern</td>
                   <td className="p-2 border">l.irebe@africaqs.com</td>
                   <td className="p-2 border">04/September/2023</td>
                   <td className="p-2 border text-green-600 font-semibold">Level 1</td>
                 </tr>
               </tbody>
             </table>
           </div>
         </main>
      </>
   );
 };
 
 export default ViewEmployee;