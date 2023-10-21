import Image from 'next/image'
import Link from 'next/link'
import { FormInput } from '@/components/form_input'
import sign_up_bg from './../../assets/images/sign_up_bg.png'
function Signup() {
  return (
    <main className="flex flex-row w-full bg-back">
      <div className="lg:block w-1/2 ">
        <Image
      src={sign_up_bg}
      width={500}
      height={500}
      alt="The log in background"
      className="w-1/2 h-full fixed"
      />
      </div>
      <div className="bg-slate-50 lg:w-1/2 w-full h-screen">
        <div className="px-8 pt-8 flex flex-row justify-between w-full">
            <div>
                <p className="text-stone-300 text-xs font-medium font-['Poppins']">Step 1 of 3</p>
                <Link href="/registration" className="text-slate-400 text-xs font-bold font-['Poppins'] underline"> Previous </Link>
            </div>
            <div>
                <p className="text-stone-300 text-xs font-medium font-['Poppins']">Step 3 of 3</p>
                <Link href="/" className="text-slate-400 text-xs font-bold font-['Poppins'] underline"> Next </Link>
            </div>
        </div>
        <p className="text-slate-400 text-base font-bold font-['Poppins'] text-center py-8">Fill In The pharmacy Representative Info</p>
        
        <form>
          <div className="px-8 w-full">     
              <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="px-8 w-full"
                labelName='Representative Full Name'
                inputType='text'
                inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='repreentativeName'
                inputPlaceholder='Representative Full Name'
               />
               <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="px-8 w-full"
                labelName='Representative Email'
                inputType='email'
                inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='representativeEmail'
                inputPlaceholder='Representative Email'
               />
               <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="px-8 w-full"
                labelName='Representative National ID/Passport'
                inputType='nationalId'
                inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                inputName='representativeEmail'
                inputPlaceholder='National ID'
               />
               <FormInput
                labelClass="text-gray-700 text-sm font-normal font-['Poppins']"
                containerClass="px-8 py-2" 
                labelName='Representative Phone Number' 
                inputType='text' 
                inputClass='border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5' 
                inputName='pharmacyPhone' 
                inputPlaceholder='(+250) 7888321' 
              />
          </div>
          <div className="px-8">
            <p className="px-8 py-2"><span className="text-slate-400 text-sm font-bold font-['Poppins']">By signing in, you’re agree to our </span><Link href="/" className="text-blue-700 text-sm font-bold font-['Poppins']">Terms & Condition</Link><span className="text-slate-400 text-sm font-bold font-['Poppins']"> and </span><Link href="/" className="text-blue-700 text-sm font-bold font-['Poppins']">Privacy Policy.</Link><span className="text-red-600 text-sm font-bold font-['Poppins']">*</span></p>
          </div>
          <div className="px-16 py-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-full rounded">
              Sign Up
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

export default Signup