import React, {useState} from 'react';

const Client = ({customer}) => {
    



  return (
    <div>
    <a href="#">{customer.name}</a>&nbsp;&nbsp;
    Number of bookings:&nbsp;{customer.bookings.length} <button>View Bookings</button>
    </div>

    )
}

export default Client