import React from 'react'
import { FormInput } from './form_input'
import FormDropdown from './form_dropdown'
import { FileUpload } from './file_upload'

type InputProps = {
    num: any,
    size: number,
    deleter: any
  }

interface Elements {
    id: number
    name: string
    link: string
  }

const exporter: Elements[] = [
    { id: 1, name: 'Individual', link: '/registration/individual' },
    { id: 2, name: 'Company', link: '/' }
  ]
  
  const province: Elements[] = [
    { id: 1, name: 'East', link: '' },
    { id: 2, name: 'West', link: '' },
    { id: 3, name: 'South', link: '' },
    { id: 4, name: 'North', link: '' },
    { id: 5, name: 'Kigali', link: '' }
  ]
  
  const district: Elements[] = [
    { id: 1, name: 'Kicukiro', link: '' },
    { id: 2, name: 'Gasabo', link: '' },
    { id: 3, name: 'Nyarugenge', link: '' }
  ]
  
  const sector: Elements[] = [
    { id: 1, name: 'Kagarama', link: '' },
    { id: 2, name: 'Gatenga', link: '' },
    { id: 3, name: 'Gikondo', link: '' },
    { id: 4, name: 'Gahanga', link: '' },
    { id: 5, name: 'Kanombe', link: '' },
    { id: 6, name: 'Nyarugunga', link: '' },
    { id: 7, name: 'Kigarama', link: '' },
    { id: 8, name: 'Masaka', link: '' },
    { id: 9, name: 'Niboye', link: '' }
  ]
  
  const cell: Elements[] = [
    { id: 1, name: 'Nyanza', link: '' },
    { id: 2, name: 'Amahoro', link: '' },
    { id: 3, name: 'Ruhuka', link: '' },
    { id: 4, name: 'Rebero', link: '' },
    { id: 5, name: 'Jyambere', link: '' }
  ]

function Nurse_form({ num, size, deleter  }: InputProps) {
  return (
    <>
        <div className="flex flex-row justify-between pt-8 px-8">
            <h1 className="text-2xl font-bold">Nurse {num}</h1>
            {(size === num)?
            <div className="bg-white hover:bg-red-700 text-red-600 hover:text-white p-1 rounded-md h-8" onClick={() =>deleter(num-1, 'Nurse')}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className=" " viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
              </svg>
            </div>
            :''}
          </div>
       <FormInput
         labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
         containerClass="px-8 w-full"
         labelName='Nurse Full Name'
         inputType='text'
         inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
         inputName='fullName'
         inputPlaceholder='Full Name'
        />
        <FormInput
         labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
         containerClass="px-8 w-full"
         labelName='Nurse Email'
         inputType='text'
         inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
         inputName='NurseMail'
         inputPlaceholder='Nurse@pharma.com'
        />
       <FormInput
         labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
         containerClass="px-8 py-2" 
         labelName='Nurse Phone Number' 
         inputType='text' 
         inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
         inputName='NursePhone' 
         inputPlaceholder='(+250) 7888321' 
       />
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
   
        <FileUpload 
              labelClass= "text-gray-700 text-sm font-normal font-['Poppins']"
              labelName=  "Upload Nurse License"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "Nurse License"
              containerClass= "px-8 py-2"
              />
    </>
  )
}

export default Nurse_form