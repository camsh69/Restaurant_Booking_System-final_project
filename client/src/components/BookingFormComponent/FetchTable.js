import  React, {useState} from 'react';
import AddToTableList from './AddToTableList';

const FetchTable = ({restaurantTables, sendStartTime, sendEndTime, sendNoOfCustomers, sendTables, completeFlag}) => {
    
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [noOfCustomers, setNoOfCustomer] = useState(1);
    const [tables, setTables] = useState([])

    const handleNoOfCustomersChange = (ev) => setNoOfCustomer(parseInt(ev.target.value));
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
        }
      }

    const handleConfirm = () => {
        sendStartTime(startTime);
        sendEndTime(endTime);
        sendNoOfCustomers(parseInt(noOfCustomers));
        sendTables(tables);
        completeFlag(true);
    }
     
    return (
     <div className='form-container'>
        <div id = "form">
        
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
        <label htmlFor='noOfGuest'>No Of Guests</label>
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

        <div>
            <button type="button" onClick={handleConfirm}>Confirm Time and Table(s)</button>
        </div>
    </div>
    </div>
      
    );
}

export default FetchTable