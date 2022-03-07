import  React, {useState} from 'react';
import AddToTableList from './AddToTableList';
import moment from 'moment';

const FetchTable = ({restaurantTables, sendStartTime, sendEndTime, sendNoOfCustomers, sendTables}) => {
    
    const [startTime, setStartTime] = useState(moment().format());
    const [endTime, setEndTime] =useState(moment().format());
    const [noOfCustomers, setNoOfCustomer] = useState("")
    const [tables, setTables] = useState([])

    const handleNoOfCustomersChange = (ev) => setNoOfCustomer(ev.target.value);
    const handleStartTimeChange = (ev) => setStartTime(ev.target.value);
    const handleEndTimeChange = (ev) => setEndTime(ev.target.value);
    

    const tableList = restaurantTables.map(restaurantTable => {
        return (
            <li>
            <span> Table no:  {restaurantTable.id}  covers:  {restaurantTable.covers} </span>
             <AddToTableList key={restaurantTable.id} restaurantTable={restaurantTable} restaurantTableAdded={restaurantTable => onClick(restaurantTable)}  />
            </li>
          );
    })

    const onClick = table => {
        if(!tables.includes(table)){
          const updatedTableList = [...tables, table];
          setTables(updatedTableList)
          .then(() => {
              sendStartTime(startTime);
              sendEndTime(endTime);
              sendNoOfCustomers(noOfCustomers);
              sendTables(tables);
          })
        }
      }
     
    return (
        <>

        <div className='start-time'>
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
        <ul>
            {tableList}
        </ul>
        </div>
    </>
      
    );
}

export default FetchTable