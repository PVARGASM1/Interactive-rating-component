import React from "react"

const Rate = ({value, onClick, isSelected}) => {
     return (
    <div className={isSelected ? 'active' : 'no-active'} onClick={onClick}>{value}</div>
) 
 };
    

export default Rate;