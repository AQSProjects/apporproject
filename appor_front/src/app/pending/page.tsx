'use client'
import React, { FormEvent } from 'react'
import { useRouter } from 'next/navigation';

const PendingPage: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push('/');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      {/* Title */}
      <div className="text-center mt-10 ">
        <h1 className="text-2xl font-bold text-blue-600">Your Account is under Review</h1>
        <p className="text-blue-600">Please wait</p>
      </div>
      <form onSubmit={handleSubmit}>
      {/* Loading Animation */}
      <div className="flex-grow flex items-center justify-center">
        <div className="border-gray-300 h-40 w-40 animate-spin rounded-full border-8 border-t-blue-600">
      </div>
      </div>
      {/* Footer */}
      <footer className="text-center py-4">
        <p>Copyright @ <span className="text-blue-600 font-bold">APPORIS</span> {currentYear}. All rights reserved!</p>
        <button 
         type='submit'
         className="mt-2 px-4 py-2 bg-047E3C text-white rounded">Logout</button>
      </footer>
      </form>
    </div>
  );
};

export default PendingPage;

// Inline style for a rotating circle loader
const loaderStyles = {
  border: "19px solid #f3f3f3",  // Light gray background
  borderTop: "19px solid #047E3C",  // Green color
  borderRadius: "50%",
  width: "334px",
  height: "324px",
  animation: "rotate 1s linear infinite"
};

// You'll also need to add the @keyframes animation in your global CSS:
/*
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
*/
