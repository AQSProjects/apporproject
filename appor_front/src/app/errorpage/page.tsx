import React from 'react';
import Image from 'next/image';
import Error_Image from '../../assets/images/Error_Image.jpg'
const ErrorPage = () => {
  return (
    <>
     
      <main>
      <div className="lg:block w-full mt-32 sm:mt-2">
        <Image
          src={Error_Image}
          width={400}
          height={400}
          alt="The log in background"
          className="w-full h-full fixed"
        />
      </div>
         </main>
      </>
   );
 };
 
 export default ErrorPage;