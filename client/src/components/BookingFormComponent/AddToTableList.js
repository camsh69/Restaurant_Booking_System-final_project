import React from 'react'
import "../../Styles/CheckBox.css"

const AddToTableList = ({restaurantTable, restaurantTableAdded}) => {
    const handleOnClick = () => restaurantTableAdded(restaurantTable);
    
  return (
    <div className="checkBoxAndText">
        {/* <button type = "check"    className='add-table' onClick={handleOnClick}>+</button> */}
        <input className='addedTable' type="checkbox"  onClick={handleOnClick}/>
    </div>
  )
}

export default AddToTableList


