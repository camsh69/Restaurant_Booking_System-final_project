import  React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import AddToTableList from './AddToTableList';

const FetchTable = ({restaurantTables, restaurantTableAdded}) => {
    const [startTime, setStartTime] = useState(new Date());
    const [endTime, setEndTime] = useState(new Date());
    const [noOfCustomers, setNoOfCustomer] = useState("")
    const [tables, setTables] = useState([])


    const handleNoOfCustomersChange = (ev) => setNoOfCustomer(ev.target.value);
   

    const tableList = restaurantTables.map((restaurantTable, index) => {
        return (
            <li>
            <span key={index} value={index}> table_no:  {restaurantTable.id}  covers: 
             {restaurantTable.covers} </span>
             <AddToTableList restaurantTable={restaurantTable} restaurantTableAdded={restaurantTableAdded}/>
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


    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="Start_Time"
        value={startTime}
        onChange={(newValue) => {
        setStartTime(newValue);
        }}
    /><br/>
    </LocalizationProvider>

    <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DateTimePicker
        renderInput={(props) => <TextField {...props} />}
        label="End_Time"
        value={endTime}
        onChange={(newValue) => {
        setEndTime(newValue);
        }}
    />
    </LocalizationProvider><br/>

    <input
        name="NoOfGuest"
        type="number"
        value={noOfCustomers}
        onChange={handleNoOfCustomersChange}
        required
        min="1"
    />

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