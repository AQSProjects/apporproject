import React from 'react'


type InputProps = {
    farmerName: string,
    farmerClass: string,
    idNo: string,
    idClass: string,
    containerClass: string,
}


function FarmerCard({ farmerName, farmerClass, idNo, idClass, containerClass }: InputProps) {
  return (
    <div className={containerClass}>
        <p className={farmerClass}>{farmerName}</p>
        <p className={idClass}>ID NUMBER: {idNo}</p>
    </div>
  )
}

export default FarmerCard