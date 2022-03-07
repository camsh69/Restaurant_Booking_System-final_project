import React from 'react'

const AddToTableList = ({restaurantTable, restaurantTableAdded}) => {
    const handleOnClick = () => restaurantTableAdded(restaurantTable);
  return (
    <div className='AddedList'>
        <button className='add-table' onClick={handleOnClick}>+</button>
    </div>
  )
}

export default AddToTableList
