import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import sign_up_bg from '../../assets/images/sign_up_bg.png';



const CheckMail: React.FC = () => {
  return (
    <div className="overflow-hidden h-screen">
    <main className="flex flex-row w-full bg-slate-50">
      <div className="md:block hidden">
        <Image
          src={sign_up_bg}
          width={800}
          height={400}
          alt="The log in background"
          className="w-full h-full"
        />
      </div>
      <div className="bg-slate-50 lg:w-1/2 w-full">
        <div className="px-8 pt-8 flex flex-row justify-between w-full">
          <div>
            <p className="text-stone-300 text-xs font-medium font-poppins">Step 2 of 3</p>
            <Link href="/signup" className="text-slate-400 text-xs font-bold font-poppins underline">Previous</Link>
          </div>
          <div>
            <p className="text-stone-300 text-xs font-medium font-poppins">Step 3 of 3</p>
            <Link href="/signup" className="text-slate-400 text-xs font-bold font-poppins underline">Next</Link>
          </div>
        </div>
        <div className="p-10 sm:m-10 mx-4">
          <h1 className="text-2xl font-bold text-left font-poppins">Check your Mail</h1>
          <p className="text-slate-400 text-base text-left mt-5">
            We&#39;ve sent a 6-digit confirmation code to <a href="mailto:username@gmail.com" className="underline text-blue-500">username@gmail.com</a>. Make sure you enter the correct code.
          </p>
          <div className="flex flex-row justify-center items-center mt-10 max-w-screen-md mb-9 mt-9">
              {[...Array(6)].map((_, idx) => (
                  <div key={idx}>
                      <input 
                          type="text" 
                          maxLength={1}
                          className="w-14 md:w-14 h-14 md:h-14 border border-gray-300 mx-1 text-gray-900 text-md text-center rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-1.5"
                      />
                  </div>
              ))}
          </div>


          <div className="px-8 py-4">
          <Link href="/resend-code" passHref>
            <p className="mt-4 text-slate-400 text-base text-left font-bold font-poppins cursor-pointer m-1.8">Resend Code</p>
          </Link>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 w-full rounded">
              Verify
          </button>
          </div>
        </div>
      </div>
    </main>
    </div>
  );
};

export default CheckMail;
