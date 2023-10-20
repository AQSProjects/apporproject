import React from 'react';
import Sidebar from '@/components/dasboard/sidebar';
import Navbar from '@/components/dasboard/navbar';
import { FormInput } from '@/components/form_input';
import FormDropdown from '@/components/form_dropdown';

interface Elements {
  id: number
  name: string
}

const Crop: Elements[] = [
  { id: 1, name: 'Select Crop Type'},
  { id: 2, name: 'Beans'},
  { id: 3, name: 'Coffee'},
  { id: 4, name: 'Tea'},
  { id: 5, name: 'Rice'}
]
const HSCode: Elements[] = [
  { id: 1, name: 'Select H.S. Code'},
  { id: 2, name: '1 Beans'},
  { id: 3, name: '2 Peas'},
  { id: 4, name: '3 Coffee'},
  { id: 5, name: '4 Tea'},
  { id: 6, name: '5 Rice'}
]
const Harvesting: Elements[] = [
  { id: 1, name: 'Select Harvesting Period'},
  { id: 2, name: 'January-March'},
  { id: 3, name: 'April-June'},
  { id: 4, name: 'July-September'},
  { id: 5, name: 'October-December'},
]
const Country: Elements[] = [
  { id: 1, name: 'Select Country'},
  { id: 2, name: 'Rwanda'},
  { id: 3, name: 'Brazil'},
  { id: 4, name: 'Poland'},
  { id: 5, name: 'Uganda'},
  { id: 6, name: 'United Kingdom'},
]
const Transport: Elements[] = [
  { id: 1, name: 'Select Mean Of Transportation'},
  { id: 2, name: 'Air'},
  { id: 3, name: 'Land'},
  { id: 4, name: 'Water'},
  { id: 5, name: 'RailWay'},
]
const Exportticket = () => {
  return (
    <>
      <Sidebar />
      <Navbar />
      <main className="p-4 sm:ml-64 mt-16">
        <h1 className="ml-5 text-2xl font-semibold mb-4">Create Export Ticket</h1>
        <h2 className='ml-8 mt-10 text-2x1 font-semibold mb-4'>Crop Info</h2>
        <form>
        <div className="py-8 sm:px-8 w-full ">
          <div className="flex ml-16">
          <FormDropdown
                containerClass="w-1/2 rounded-md sm:pr-4" 
                labelName='Crop Type'
                elements={Crop}
          />
           <FormDropdown
                containerClass="w-1/2 rounded-md sm:pr-4" 
                labelName='Harmonized System Code (H.S. Code)'
                elements={HSCode}  
          />
          </div>
          <div className="flex ml-16">
          <FormDropdown
                containerClass="w-1/2 rounded-md sm:pr-4" 
                labelName='Expected Harvesting Period'
                elements={Harvesting}
          />
            <FormInput 
            labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
            containerClass="w-1/2 sm:pr-4" 
            labelName='Crop Volume (Tones)' 
            inputType='text' 
            inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
            inputName='text' 
            inputPlaceholder='Type in Your Crop Volume'  
          />
          </div>
          <div className="flex ml-16">
          <FormDropdown
                containerClass="w-1/2 rounded-md sm:pr-4" 
                labelName='Destination Country'
                elements={Country}  
          />
            <FormInput 
            labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
            containerClass="w-1/2 sm:pr-4" 
            labelName='Harvesting Area (Hectar)' 
            inputType='text' 
            inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
            inputName='text' 
            inputPlaceholder='Type in Your Harvesting Area'  
          />
            </div>
            <div className="flex ml-16">
            <FormDropdown
                containerClass="w-1/2 rounded-md sm:pr-4" 
                labelName='Means Of Transportation'
                elements={Transport} 
          />
            <FormInput 
            labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
            containerClass="w-1/2 sm:pr-4" 
            labelName='Crop Price (Million Rwandan Francs)'  
            inputType='text' 
            inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
            inputName='text' 
            inputPlaceholder='Type In Your Crop Price'  
          />
            </div>
            <div className="flex ml-16">
            
            <label className="flex items-center ml-4 mr-20 mb-4">
                <input
                  name="exportSubmission"
                  type="checkbox"
                  className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-green-800 focus:ring-2 dark:bg-green-700 dark:border-green-600"
                />
                <span className="ml-2 text-sm font-semibold ">Accept Terms and Conditions</span>
              </label>

             <FormInput 
            labelClass="ml-20 text-gray-700 text-sm font-normal font-['Poppins']"
            containerClass="w-1/2 sm:pr-4" 
            labelName='Export Submission Date' 
            inputType='Date' 
            inputClass='ml-20 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
            inputName='Date' 
            inputPlaceholder='' 
          />
            </div>
          <div className="px-4 flex justify-center items-center h-[100px] mt-10">
            <button className="bg-green-700 hover:bg-green-800  text-white py-3 font-semibold w-1/2 rounded-xl">
              Create Export Ticket
            </button>
          </div>
        </div>
        </form>
      </main>
      </>
   );
 };
 
 export default Exportticket;