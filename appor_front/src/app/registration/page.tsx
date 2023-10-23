"use client"
import Image from 'next/image'
import {FormEvent, useState} from 'react'
import Link from 'next/link'
import sign_up_bg from '../../assets/images/sign_up_bg_png.png'
import { FormInput } from '@/components/form_input'
import FormDropdown from '@/components/form_dropdown'
import { FormRadio } from '@/components/form_radio'
import { useData } from '../../redux/getprovince'
import { useRouter } from 'next/navigation'


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

export default function Individual() {
  const data = useData();
  console.log(data);
  const [isEmployee, setIsEmployee] = useState(true);

const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if(event.target.value === 'individual'){
      setIsEmployee(false)
    } else if(event.target.value === 'company'){
      setIsEmployee(true)
    }
    setIsEmployee(!isEmployee);
  };
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/signup');
  };
  return (
    <main className="flex flex-row w-full bg-slate-300">
      <div className="lg:block hidden w-1/2 ">
        <Image
          src={sign_up_bg}
          width={500}
          height={500}
          alt="The log in background"
          className="w-1/2 h-full fixed"
        />
      </div>
      <div className="bg-slate-50 lg:w-1/2 w-full">
        <h1 className="text-2xl font-bold py-8 text-center">Register your account</h1>
        <p className="text-slate-400 text-base font-bold font-['Poppins'] text-center pb-8">Fill the details bellow of {isEmployee? 'Exporter':'Company'} Information</p>
        <form onSubmit={handleSubmit}>
          <div className="px-8 sm:flex sm:flex-row sm:justify-between w-full">     
          <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pr-4"
                labelName='Pharmacy Name'
                inputType='text'
                inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='Pharmacy Name'
                inputPlaceholder='Pharmacy Name'
               />
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pl-4"
                labelName='Managing Director'
                inputType='text'
                inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='Managing Director'
                inputPlaceholder='Managing Director'
               />
          </div>
          <div className="px-8 sm:flex sm:flex-row sm:justify-between">
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pr-4"
                labelName='Email'
                inputType='email'
                inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='Email'
                inputPlaceholder='name@email.com'
              />
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pl-4"
                labelName='TIN'
                inputType='number'
                inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='TIN'
                inputPlaceholder='TIN'
              />
          </div>
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="px-8 py-2" 
                labelName= ' Phone Number' 
                inputType='number' 
                inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                inputName='Phone Number' 
                inputPlaceholder='(+250) 7888321' 
              />
          <p className="px-8 text-gray-700 text-sm font-normal font-['Poppins']">Pharmacy Location</p>
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
          {isEmployee ? 
          
            <FormRadio 
                labelName='Gender'
                containerClass="px-8 py-4"
                values={['Male', 'Female', 'Other']}
            />
          :
          <div className="py-2 px-8 sm:flex sm:flex-row sm:justify-between">
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pr-4"
                labelName='Female'
                inputType='number'
                inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='femaleBen'
                inputPlaceholder='Female Number'
               />
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pl-4" 
                labelName='Male' 
                inputType='number' 
                inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                inputName='maleBen' 
                inputPlaceholder='Male Number' 
              />
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="w-full sm:pl-4" 
                labelName='Other' 
                inputType='number' 
                inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                inputName='otherBen' 
                inputPlaceholder='Other Number' 
              />
          </div>
          } 
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']" 
                containerClass="px-8" 
                labelName='Password' 
                inputType='password' 
                inputClass='border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                inputName='password' 
                inputPlaceholder='Password' 
              />
          <div className="px-8 py-4">
            <button 
             type='submit' 
             className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 w-full rounded">
              Continue
            </button>
          </div>
          <div className="text-center pb-4">
            <p className="">Already have account?<Link href="/" className='text-blue-700'> Login </Link></p>
          </div>
        </form>

      </div>
    </main>
  )
}
