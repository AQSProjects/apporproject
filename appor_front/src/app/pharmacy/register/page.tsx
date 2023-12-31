'use client'
import Pharmacist_form from '@/components/pharmacist_form';
import Nurse_form from '@/components/nurse_form';
import { FileUpload } from '@/components/file_upload';
import { SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export default function Home() {
    const [pharmacySideBar, setPharmacySideBar] = useState('Employees info');
    const [menu, setMenu] = useState(false)
    const [pharmacist, setPharmacist] = useState<number[]>([]);
    const [nurse, setNurse] = useState<number[]>([]);

    const handleClick = (data: SetStateAction<string>) => {
        setPharmacySideBar(data);
      };

      const menuClick = (event: any) => {
        setMenu(!menu)
      };

      const [havePharmacist, setHavePharmacist] = useState(true);

      const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
          if(event.target.value === 'no'){
            setHavePharmacist(false)
          } else if(event.target.value === 'yes'){
            setHavePharmacist(true)
          }
          setHavePharmacist(!havePharmacist);
        };

        const addComponent = (event: React.MouseEvent<HTMLDivElement>) => {          
          (event.currentTarget.getAttribute('id') === 'pharmacist')?setPharmacist([...pharmacist, pharmacist.length]):setNurse([...nurse, nurse.length]);
          ;
        };
      
        const deleteComponent = (id: number, buttonSec: string) => {
          if (buttonSec === 'Nurse'){
            const updatednurse = nurse.filter((componentId) => componentId !== id);
            setNurse(updatednurse);
          } else {
            const updatedpharmacist = pharmacist.filter((componentId) => componentId !== id);
            setPharmacist(updatedpharmacist);
          }

        };

        const router = useRouter();
        const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          router.push('/pending');
        };
  
  return (
    <main className="sm:flex sm:flex-row bg-blue-500">
      <div className={menu?'lg:w-4/12 w-full h-screen flex justify-center items-center z-0':"lg:w-4/12 w-full hidden h-screen sm:flex justify-center items-center z-0 "}>
        <div className={menu?"close":'hidden'} onClick={menuClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-white" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
        </div>
        <div className="fixed " onClick={menuClick}>

            {(pharmacySideBar === 'Required Documents')?<div className='vertical-line'></div>:<div className='vertical-line'></div>}
        <ul className='z-20'>
            {(pharmacySideBar === 'Employees info')?<li className="text-white py-2 flex flex-row font-semibold" ><div className="w-4 h-4 bg-gray-400 mt-1 mr-2 rounded-full"></div><div className="w-6 h-6 rounded-full mr-2 active-bullet"></div>Employees info</li>:<li className="text-gray-400 py-2 flex flex-row cursor-pointer" onClick={ () => handleClick('Employees info')}><div className="w-4 h-4 bg-gray-400 mt-1 mr-2 rounded-full"></div>Employees info</li>}
            {(pharmacySideBar === 'Required Documents')?<li className="text-white py-2 flex flex-row font-semibold" ><div className="w-4 h-4 bg-gray-400 mt-1 mr-2 rounded-full"></div><div className="w-6 h-6 rounded-full mr-2 active-bullet"></div>Required Documents</li>:<li className="text-gray-400 py-2 flex flex-row cursor-pointer" onClick={ () => handleClick('Required Documents')}><div className="w-4 h-4 bg-gray-400 mt-1 mr-2 rounded-full"></div>Required Documents</li>}
            {(pharmacySideBar === 'Confirm')?<li className="text-white py-2 flex flex-row font-semibold" ><div className="w-4 h-4 bg-gray-400 mt-1 mr-2 rounded-full"></div><div className="w-6 h-6 rounded-full mr-2 active-bullet"></div>Confirm</li>:<li className="text-gray-400 py-2 flex flex-row cursor-pointer" onClick={ () => handleClick('Confirm')}><div className="w-4 h-4 bg-gray-400 mt-1 mr-2 rounded-full"></div>Confirm</li>}
        </ul>
        </div>
      </div>
      <div className={menu?'sm:block hidden bg-slate-50 lg:w-8/12 w-full py-16':"bg-slate-50 lg:w-8/12 w-full py-16"}>
        <div className='px-8 md:px-16'>
        <div className='pb-8 sm:hidden' onClick={menuClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className='text-blue-600 font-semibold' viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={(pharmacySideBar === 'Employees info')?'block':'hidden'}>
            <h1 className="text-2xl font-bold py-4 text-center">Register your Employees info</h1>
            <div className="px-8 sm:flex sm:flex-row sm:justify-between">
            <div className="w-1/2 sm:pr-4" >
                  <label htmlFor="text" className="text-gray-700 text-sm font-normal font-['Poppins']">Do you have a pharmacist?</label>
                  <select id="countries" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>
            </div>
           {havePharmacist?
            pharmacist.map((id) => (
              <>
                <Pharmacist_form num={id+1} size={pharmacist.length} deleter={deleteComponent}/>
              </>
            ))
           :''} 
           {havePharmacist?
           <p className="cursor-pointer flex text-slate-600 text-md py-4 px-8 font-bold font-['Roboto']" id="pharmacist" onClick={addComponent}>Add Pharmacist<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-700 mt-1 ml-1" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg></p>  
           :''} 
           {nurse.map((id) => (
              <>
                <Nurse_form num={id+1} size={nurse.length} deleter={deleteComponent}/>
              </>
            ))}
           <p className="cursor-pointer flex text-slate-600 text-md py-4 px-8 font-bold font-['Roboto']" id="nurse" onClick={addComponent}>Add Nurse<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="text-blue-700 mt-1 ml-1" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
            </svg></p>
          </div>
          <div className={(pharmacySideBar === 'Required Documents')?'block pb-24':'hidden'}>
            <h1 className="text-2xl font-bold py-4 text-center">Required documents</h1>
            
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
              labelName=  "Lease or proof of premise ownership"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "exportLicense"
              containerClass= "px-8 py-2"
              />

            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Rwanda FDA fee receipt & notarized degree of pharmacist"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "idRepresentative"
              containerClass= "px-8 py-2"
              />
            
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Notarized pharmacy practice license"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "proofAvailability"
              containerClass= "px-8 py-2"
              />

            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "CV of authorized personnel"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "contractAgronomist"
              containerClass= "px-8 py-2"
              />
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Agreement between MD & authorized personnel (if different)"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "idRepresentative"
              containerClass= "px-8 py-2"
              />
            
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "ID or passport of MD & authorized personnel"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "proofAvailability"
              containerClass= "px-8 py-2"
              />

            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Technician's commitment to pharmacy laws"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "contractAgronomist"
              containerClass= "px-8 py-2"
              />
            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Resignation or proof of service from last employer (if relevant)"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "proofAvailability"
              containerClass= "px-8 py-2"
              />

            <FileUpload 
              labelClass= "block text-sm font-medium text-gray-900 dark:text-white"
              labelName=  "Contract between authorized personnel & pharmacy MD"
              inputType= "file"
              inputClass= "relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-white px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none "
              inputName= "contractAgronomist"
              containerClass= "px-8 py-2"
              />
          </div>

          <div className={(pharmacySideBar === 'Confirm')?'block':'hidden'}>
            <h1 className="text-2xl font-bold py-4 text-center">Review & Submit</h1>
            <div className="h-96"></div>
          </div>
        
            {(pharmacySideBar === 'Employees info')?<div className="py-2 px-8 flex flex-row justify-end"> 
              <p className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-1/4 rounded-lg border text-center" onClick={ () => handleClick('Required Documents')}>
                Next
              </p>
            </div>:''}
            {(pharmacySideBar === 'Required Documents')?<div className="py-2 px-8 flex flex-row justify-between ">
              <p className="bg-white hover:bg-slate-50 text-gray-500 font-semibold py-2 w-1/4 rounded-lg border text-center" onClick={ () => handleClick('Employees info')}>
                Back
              </p>
              <p className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-1/4 rounded-lg border text-center" onClick={ () => handleClick('Confirm')}>
                Next
              </p>
            </div>:''}
            {(pharmacySideBar === 'Confirm')?<div className="py-2 px-8 flex flex-row justify-between">
              <p className="bg-white hover:bg-slate-50 text-gray-500 font-semibold py-2 w-1/4 rounded-lg border text-center" onClick={ () => handleClick('Required Documents')}>
                Back
              </p>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-1/4 rounded-lg border" type='submit'>
                Submit
              </button>
            </div>:''}
           
        </form>
        </div>
      </div>
    </main>
  )
}