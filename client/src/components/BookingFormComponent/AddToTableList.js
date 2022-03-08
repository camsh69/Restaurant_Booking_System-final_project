import React from 'react'


const AddToTableList = ({restaurantTable, restaurantTableAdded}) => {
    const handleOnClick = () => restaurantTableAdded(restaurantTable);
    
  return (
    <div className='AddedList'>
        {/* <button type = "check"    className='add-table' onClick={handleOnClick}>+</button> */}
        <input type="checkbox"   onClick={handleOnClick}/>
    </div>
  )
}

export default AddToTableList


