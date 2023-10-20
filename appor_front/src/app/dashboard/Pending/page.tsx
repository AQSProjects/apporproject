import React from 'react'
import Sidebar from '@/components/dasboard/sidebar'
import Navbar from '@/components/dasboard/navbar'
import Dropbutton from '../../../components/dasboard/dropbutton'
const PendingCompanies = () => {
 return (
      <>
       <Sidebar />
         <Navbar />
         <main className="p-4 sm:ml-64 mt-16">
           <h1 className="text-2xl font-semibold mb-4">Pending Companies</h1>
           <div className="bg-white shadow-md rounded-lg p-4">
           <div className="relative">
          </div>
             <table id="ApprovedCompanies" className="w-full">
               <thead>
                 <tr className="bg-gray-200">
                   <th className="p-2 font-semibold text-left">Companies</th>
                   <th className="p-2 font-semibold text-left">Companies Tin</th>
                   <th className="p-2 font-semibold text-left">Email</th>
                   <th className="p-2 font-semibold text-left">Status</th>
                   <th className="p-2 font-semibold text-left">Action</th>
                 </tr>
               </thead>
               <tbody>
                 <tr>
                   <td className="p-2 border">Data 1A</td>
                   <td className="p-2 border">Data 1B</td>
                   <td className="p-2 border">Data 1C</td>
                   <td className="p-2 border text-blue-600 font-semibold">Pending</td>
                   <td className="p-2 border"><Dropbutton/></td>
                </tr>
                <tr>
                   <td className="p-2 border">Data 2A</td>
                   <td className="p-2 border">Data 2B</td>
                   <td className="p-2 border">Data 2C</td>
                   <td className="p-2 border text-blue-600 font-semibold">Pending</td>
                   <td className="p-2 border"><Dropbutton/></td>
                </tr>
                <tr>
                   <td className="p-2 border">Data 3A</td>
                   <td className="p-2 border">Data 3B</td>
                   <td className="p-2 border">Data 3C</td>
                   <td className="p-2 border text-blue-600 font-semibold">Pending</td>
                   <td className="p-2 border"><Dropbutton/></td>
                 </tr>
               </tbody>
             </table>
           </div>
         </main>
      </>
   );
 };
 
 export default PendingCompanies;