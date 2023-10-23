'use client'
import { FileUpload } from '@/components/file_upload';
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'
import Image from 'next/image'
import sign_up_bg from '../../assets/images/sign_up_bg_png.png'
export default function ForgetPassword() {
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/forget/reset_password');
  };
  
  return (
    <main className="flex sm:flex-row bg-slate-300 bg-white flex-col-reverse">
    <div className="lg:block hidden w-1/2 ">
      <Image
       src={sign_up_bg}
       width={500}
       height={500}
       alt="The log in background"
       className="w-1/2 h-full fixed"
        />
      </div>
      <div className="lg:w-1/2 w-full px-16 h-screen items-center ">
            <h1 className="text-2xl font-bold py-4 text-center">Required documents</h1>
            <form>
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Upload RDB Certificate"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "rdbCertificate"
              containerClass= "px-8 py-2"
              />
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Lease Or Proof Of Premise Ownership"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "Lease or proof of premise ownership"
              containerClass= "px-8 py-2"
              />
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Rwanda FDA Fee Receipt & Notarized Degree Of Pharmacist"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "Rwanda FDA fee receipt & notarized degree of pharmacist"
              containerClass= "px-8 py-2"
              />
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Notarized Pharmacy Practice License"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "Notarized pharmacy practice license"
              containerClass= "px-8 py-2"
              />
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "CV of Authorized Personnel"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "CV of authorized personnel"
              containerClass= "px-8 py-2"
              />

            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Agreement Between MD & Authorized Personnel (if different)"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "Agreement between MD & authorized personnel (if different)"
              containerClass= "px-8 py-2"
              />

            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "ID Or Passport Of MD & Authorized Personnel"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "ID or passport of MD & authorized personnel"
              containerClass= "px-8 py-2"
              />

            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Technician's Commitment To Pharmacy Laws"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "Technician's commitment to pharmacy laws"
              containerClass= "px-8 py-2"
              />
            
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Resignation Or Proof Of Service From Last Employer (if relevant)"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "Resignation or proof of service from last employer (if relevant)"
              containerClass= "px-8 py-2"
              />

            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Contract Between Authorized Personnel & Pharmacy MD"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "Contract between authorized personnel & pharmacy MD"
              containerClass= "px-8 py-2"
              />
            <div className=" px-8 pb-4">
             <p className="">By signing in, you’re agree to our <Link href="/" className='text-blue-700'>Terms & Condition </Link>and <Link href="/" className='text-blue-700'>Privacy Policy</Link>.*</p>
            </div>
            <div className="px-8">
              <button className="bg-blue-500 hover:bg-blue-700 text-white text-center font-semibold py-2 px-18 w-1/4 rounded-lg border">
                Signup
              </button>
            </div>
            <div className="pb-4 px-8">
            <p className="">Already have account?<Link href="/" className='text-blue-700'> Login </Link></p>
          </div>
           </form>
      </div>
    </main>
  )
}
