import React from 'react'


type InputProps = {
    pharmacistName: string,
    pharmacistClass: string,
    date: string,
    remTime: string,
    dateClass: string,
    containerClass: string,
}


function PharmacistCard({ pharmacistName, pharmacistClass, date, dateClass,remTime, containerClass }: InputProps) {
  return (
    <div className={containerClass}>
        <p className={pharmacistClass}>{pharmacistName}</p>
        <div className="flex flex-row justify-between">
        <p className={dateClass}>{date}</p>
        <p className={dateClass}>{remTime} days remaining</p>
        </div>
    </div>
  )
}

export default PharmacistCard