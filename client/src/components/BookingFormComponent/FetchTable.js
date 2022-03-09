import  React, {useState} from 'react';
import AddToTableList from './AddToTableList';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


const FetchTable = ({restaurantTables, sendStartTime, sendEndTime, sendNoOfCustomers, sendTables, completeFlag}) => {
    
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [noOfCustomers, setNoOfCustomer] = useState(1);
    const [tables, setTables] = useState([])


    const handleNoOfCustomersChange = (ev) => setNoOfCustomer(parseInt(ev.target.value));
    const handleStartTimeChange = (ev) => setStartTime(ev.target.value);
    const handleEndTimeChange = (ev) => setEndTime(ev.target.value);

    const toTimestamp = (strDate) => {  
        const dt = Date.parse(strDate);  
        return dt;  
      }
      const fireSwal = withReactContent(Swal);
    
    

    const tableList = restaurantTables.map(restaurantTable => {
        return (
            <li key={restaurantTable.id}>
            <span> Table no:  {restaurantTable.id}  covers:  {restaurantTable.covers} </span>
             <AddToTableList  restaurantTable={restaurantTable} restaurantTableAdded={restaurantTable => onClick(restaurantTable)}  />
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

        const startTimeCompare = toTimestamp(startTime);
        const endTimeCompare = toTimestamp(endTime);
        if (startTimeCompare > endTimeCompare){
            return fireSwal.fire(
                'Cannot create booking',
                'The start time cannot be later than the end time',
                'error'
      )

    }

        sendStartTime(startTime);
        sendEndTime(endTime);
        sendNoOfCustomers(parseInt(noOfCustomers));
        sendTables(tables);
        completeFlag(true);
    }
     
    return (
     <div className='form-container'>
        <div id = "form">
            <div className='inputs'>
        <div className='start-time'>
            <label htmlFor='datetime'>Start Time: </label>
            <input
                className='input'
                name="datetime"
                type="datetime-local"
                value={startTime}
                onChange={handleStartTimeChange}
                required
            />
        </div>
        <br />

        <div className='end-time'>
            <label htmlFor='datetime'>End Time: </label>
            <input
                className='input'
                name="datetime"
                type="datetime-local"
                value={endTime}
                onChange={handleEndTimeChange}
                required
            />
        </div>
        <br />


        <div className='no-of-guest'>
        <label htmlFor='noOfGuest'>No Of Guests</label>
        <input
            className='input'
            name="NoOfGuest"
            type="number"
            value={noOfCustomers}
            onChange={handleNoOfCustomersChange}
            required
            min="1"
        />
        </div>
        <br />


        <div className='table-list'>
        <ul>
            {tableList}
        </ul>
        </div>

            <button className='style-button' onClick={handleConfirm} autoFocus>Confirm Time and Table(s)</button>
        
    </div>
    </div>
    </div>
      
    );
}

export default FetchTable