import React from 'react'
import "../../Styles/CheckBox.css"

const AddToTableList = ({restaurantTable, restaurantTableAdded}) => {

  const handleChange = (e) => restaurantTableAdded(e.target.checked, restaurantTable);
  
    
  return (
    <div className="checkBoxAndText">
        <input className='addedTable' type="checkbox"  onChange={handleChange}/>
    </div>
  )
}

export default AddToTableList


