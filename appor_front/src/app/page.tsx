/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import { FormInput } from '@/components/form_input'
import { CheckToggle } from '@/components/check_toggle'
import logo from '../assets/images/heis_logo.png'

export default function Home() {
  
  return (
    <main className="sm:flex sm:flex-row bg-slate-300 bg-[url('../assets/images/login_bg.png')]">
      <div className="lg:w-1/2 w-full py-28 h-screen">
        <h1 className="text-4xl font-bold text-white pt-8 pb-2 text-center">Welcome Back</h1>
        <p className="text-center text-slate-400 text-lg font-bold font-['Poppins'] leading-tight">Enter your email and password to sign in</p>
        <form>
        <div className="py-8 sm:px-8">
          <FormInput 
            labelClass="text-gray-700 text-sm text-white font-normal font-['Poppins']"
            containerClass="px-16" 
            labelName='Email' 
            inputType='email' 
            inputClass='border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
            inputName='email' 
            inputPlaceholder='Email' 
          />
          <FormInput 
            labelClass="text-gray-700 text-sm text-white font-normal font-['Poppins']"
            containerClass="px-16 pt-2" 
            labelName='Password' 
            inputType='password' 
            inputClass='border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
            inputName='password' 
            inputPlaceholder='Password' 
          />
          <div className="py-4 pl-16">
          <CheckToggle
            labelName="Remember me!"
            labelClass="ml-3 text-sm font-medium text-white dark:text-gray-300"
            inputClass="sr-only peer"
            containerClass="relative inline-flex items-center cursor-pointer"
            inputType="checkbox"
            bulletClass="w-11 h-4 bg-gray-200 rounded-full peer dark:peer-focus:ring-green-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"
          />
          </div>
          <div className="px-16">
            <button className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 w-full rounded-xl">
              SIGN IN
            </button>
          </div>
          <div className="text-center py-4">
          <Link href="/forget" className="text-center text-green-500 font-extrabold font-['Poppins'] leading-tight">Forgot Password?</Link>
          <p className="text-white">Don't have an account? <Link href="/signup" className="text-center text-green-500 font-extrabold font-['Poppins'] leading-tight">Sign Up</Link></p>
          </div>
        </div>
        </form>
      </div>
      <div className="bg-green-500 bg-opacity-40 lg:w-1/2 w-full py-28 h-screen sm:rounded-l-xl rounded-t-xl">
        <Image
          src={logo}
          width={200}
          height={200}
          alt="The log in background"
          className="max-w-lg mx-auto pt-4"
        />
        <h1 className="text-4xl font-bold text-white pt-8 py-2 text-center">Welcome</h1>
        <h1 className="text-4xl font-bold text-white py-2 text-center">HORTICULTURAL EXPORTERS INFORMATION SYSTEM - HEIS</h1>

      </div>
    </main>
  )
}
