import React from 'react'


type InputProps = {
    pharmacyName: string,
    pharmacyClass: string,
    tinNo: string,
    tinClass: string,
    containerClass: string,
}


function PharmacyCard({ pharmacyName, pharmacyClass, tinNo, tinClass, containerClass }: InputProps) {
  return (
    <div className={containerClass}>
        <p className={pharmacyClass}>🩹 {pharmacyName}</p> 
        <div className={tinClass}>{tinNo}</div>
    </div>
  )
}

export default PharmacyCard