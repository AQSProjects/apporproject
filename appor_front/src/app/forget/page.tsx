'use client'
import Image from 'next/image'
import Link from 'next/link'
import { FormInput } from '@/components/form_input'
import { CheckToggle } from '@/components/check_toggle'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function ForgetPassword() {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/forget/reset_password');
  };
  
  return (
    <main className="flex sm:flex-row bg-slate-300 bg-white flex-col-reverse">
      <div className="lg:w-1/2 w-full pt-56 px-16 h-screen items-center ">
        <>
            <p className=" text-lg font-['Poppins']"><span className="font-bold">Important</span>  Information Please <span className="font-bold">read</span> the information below and then kindly share the requested information. </p>
            <ul className="list-disc px-8 pt-4">
                <li>Do not reveal your password to anybody</li>
                <li>Do not reuse passwords</li>
                <li>Use Alphanumeric passwords</li>
                <li>Your Login ID. and security answer are required</li>
                <li>Login IDs are case sensitive</li>
            </ul>
        </>
      </div>
      <div className="bg-blue-500 lg:w-1/2 w-full py-28 h-screen sm:rounded-l-xl rounded-t-xl">
        
        <h1 className="text-4xl font-bold text-white pt-8 py-2 px-24">Forgot <br/> Password?</h1>
        <p className="text-white px-24 py-4">Don't wory. <span className="font-semibold">We can help.</span></p>

        <FormInput 
            labelClass="text-gray-700 text-sm text-white font-normal font-['Poppins']"
            containerClass="px-24 py-16" 
            labelName='Enter your Email' 
            inputType='email' 
            inputClass='border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
            inputName='email' 
            inputPlaceholder='myemail@mail.com' 
          />

        <div className="flex flex-row justify-end px-24">
          <div className="text-right mr-4">
            <p className="text-white">Remembered your password?</p>
            <h4 className="text-white font-semibold">Back to <Link href='/' className="text-blue-800 font-bold hover:underline">Login</Link></h4>
          </div>
          <form onSubmit={handleSubmit}>
            <button 
             type='submit'
             className="bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg px-4 py-2 border ">
              Next
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
