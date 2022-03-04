import React, {useState} from 'react';
import Client from './Client'

const ClientList = ({customers}) => {


   
    
    

    const customerNodes = customers.map(customer =>{
        return <Client customer={customer} key={customer.id} />
    })

  return (
      <div>
    {customerNodes}
    </div>
    )
}

export default ClientList