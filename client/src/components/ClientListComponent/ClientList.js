import React, {useState} from 'react';
import Client from './Client'

const ClientList = ({customers}) => {

    const clonedCustomers = JSON.parse(JSON.stringify(customers))
    const sortedCustomers = clonedCustomers.sort((a,b) => (b.bookings.length - a.bookings.length))
    


   
    
    

    const customerNodes = sortedCustomers.map(customer =>{
        return <Client customer={customer} key={customer.id} />
    })

  return (
      <div>
    {customerNodes}
    </div>
    )
}

export default ClientList