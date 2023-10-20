import React from 'react'


type InputProps = {
    companyName: string,
    companyClass: string,
    tinNo: string,
    tinClass: string,
    containerClass: string,
}


function CompanyCard({ companyName, companyClass, tinNo, tinClass, containerClass }: InputProps) {
  return (
    <div className={containerClass}>
        <p className={companyClass}>🟢 {companyName}</p> 
        <div className={tinClass}>{tinNo}</div>
    </div>
  )
}

export default CompanyCard