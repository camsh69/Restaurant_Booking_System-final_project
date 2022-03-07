import  React, {useState} from 'react';
import AddToTableList from './AddToTableList';
import moment from 'moment';

const FetchTable = ({restaurantTables}) => {
    
    const [startTime, setStartTime] = useState(moment().format());
    const [endTime, setEndTime] =useState(moment().format());
    const [noOfCustomers, setNoOfCustomer] = useState("")
    const [tables, setTables] = useState([])

    const handleNoOfCustomersChange = (ev) => setNoOfCustomer(ev.target.value);
    const handleStartTimeChange = (ev) => setStartTime(ev.target.value);
    const handleEndTimeChange = (ev) => setEndTime(ev.target.value);
    

    const tableList = restaurantTables.map((restaurantTable, index) => {
        return (
            <li>
            <span key={index} value={index}> table_no:  {restaurantTable.id}  covers: 
             {restaurantTable.covers} </span>
             <AddToTableList restaurantTable={restaurantTable} restaurantTableAdded={restaurantTabl => onClick(restaurantTabl)}/>
            </li>
          );
    })

    const onClick = table => {
        if(!tables.includes(table)){
          const updatedTableList = [...tables, table];
          setTables(updatedTableList);
        }
      }
     
    return (
        <>

        <div className='stsrt-time'>
            <label htmlFor='datetime'>Start Time: </label>
            <input
                name="datetime"
                type="datetime-local"
                value={startTime}
                onChange={handleStartTimeChange}
                required
            />
        </div>

        <div className='end-time'>
            <label htmlFor='datetime'>End Time: </label>
            <input
                name="datetime"
                type="datetime-local"
                value={endTime}
                onChange={handleEndTimeChange}
                required
            />
        </div>
        <div className='no-of-guest'>
        <label htmlFor='noOfGyest'>No Of Guests</label>
        <input
            name="NoOfGuest"
            type="number"
            value={noOfCustomers}
            onChange={handleNoOfCustomersChange}
            required
            min="1"
        />
        </div>

        <div className='table-list'>
            {tableList}
        </div>

        <div className='table'>
       {table => onClick(table)}
        </div>   
    </>
      
    );
}

export default FetchTable