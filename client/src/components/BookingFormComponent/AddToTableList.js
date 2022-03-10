import React from 'react'
import "../../Styles/CheckBox.css"

const AddToTableList = ({restaurantTable, restaurantTableAdded, bookedTables}) => {
  const handleChange = (e) => restaurantTableAdded(e.target.checked, restaurantTable);

    let disable = false;
    if (bookedTables.includes(restaurantTable.id)) {
      disable = true;
    }
    
  return (
    <div className="table">
        <input className='style-checkbox' type="checkbox"  onChange={handleChange}  disabled={disable ? "disabled" : ""} />
    </div>
  )
}

export default AddToTableList


