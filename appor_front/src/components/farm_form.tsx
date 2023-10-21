import React from 'react'
import { FormInput } from './form_input'
import FormDropdown from './form_dropdown'

interface Elements {
    id: number
    name: string
  }
  
  const province: Elements[] = [
    { id: 1, name: 'East' },
    { id: 2, name: 'West' },
    { id: 3, name: 'South' },
    { id: 4, name: 'North' },
    { id: 5, name: 'Kigali' }
  ]
  
  const district: Elements[] = [
    { id: 1, name: 'Kicukiro' },
    { id: 2, name: 'Gasabo' },
    { id: 3, name: 'Nyarugenge' }
  ]
  
  const sector: Elements[] = [
    { id: 1, name: 'Kagarama' },
    { id: 2, name: 'Gatenga' },
    { id: 3, name: 'Gikondo' },
    { id: 4, name: 'Gahanga' },
    { id: 5, name: 'Kanombe' },
    { id: 6, name: 'Nyarugunga' },
    { id: 7, name: 'Kigarama' },
    { id: 8, name: 'Masaka' },
    { id: 9, name: 'Niboye' }
  ]
  
  const cell: Elements[] = [
    { id: 1, name: 'Nyanza' },
    { id: 2, name: 'Amahoro' },
    { id: 3, name: 'Ruhuka' },
    { id: 4, name: 'Rebero' },
    { id: 5, name: 'Jyambere' }
  ]

function Farm_form() {
  return (
    <>
            <div className="py-2 px-8 sm:flex sm:flex-row sm:justify-between">
              <FormDropdown
                containerClass="w-full sm:pr-4" 
                labelName='Province'
                elements={province}
              />
              <FormDropdown
                containerClass="w-full sm:pl-4" 
                labelName='District'
                elements={district}
              />
          </div>
          <div className="px-8 sm:flex sm:flex-row sm:justify-between">
              <FormDropdown
                containerClass="w-full sm:pr-4" 
                labelName='Sector'
                elements={sector}
              />
              <FormDropdown
                containerClass="w-full sm:pl-4" 
                labelName='Cell'
                elements={cell}
              />
          </div>
          <div className="py-2 px-8 sm:flex sm:flex-row sm:justify-between">
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pr-4"
                labelName='Types of Crops'
                inputType='text'
                inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='crops'
                inputPlaceholder='Types of Crops'
              />
              <FormInput
                 labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                 containerClass="w-full sm:pl-4"
                labelName='Harmonize System Code (HS)'
                inputType='text'
                inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='hscode'
                inputPlaceholder='H System Code (HS)'
              />
          </div>
          <div className="px-8 sm:flex sm:flex-row sm:justify-between">
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pr-4"
                labelName='pharmacist Code'
                inputType='text'
                inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='pharmacistCode'
                inputPlaceholder='pharmacist Code'
              />
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pl-4"
                labelName='Harvesting Volume'
                inputType='text'
                inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='harvestingVolume'
                inputPlaceholder='Harvesting Volume'
              />
          </div>
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-1/2 sm:pr-4 px-8"
                labelName='Harvesting Time'
                inputType='text'
                inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='harvestingTime'
                inputPlaceholder='Harvesting Time'
              />

            


           </>
  )
}

export default Farm_form