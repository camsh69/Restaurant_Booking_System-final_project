import React from 'react'
import "../../Styles/CheckBox.css"

const AddToTableList = ({restaurantTable, restaurantTableAdded, bookedTables}) => {
    const handleOnClick = () => restaurantTableAdded(restaurantTable);

    let disable = false;
    if (bookedTables.includes(restaurantTable.id)) {
      disable = true;
    }
    
  return (
    <div className="checkBoxAndText">
        <input className='addedTable' type="checkbox"  onClick={handleOnClick}  disabled={disable ? "disabled" : ""} />
    </div>
  )
}

export default AddToTableList


