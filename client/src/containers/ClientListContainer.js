import React from 'react';
import ClientList from '../components/ClientListComponent/ClientList';

const ClientListContainer = ({customers}) => {
  return (
    <ClientList customers={customers} />
  )
}

export default ClientListContainer