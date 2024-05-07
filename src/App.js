import React, { useState } from 'react';
import './App.css';
import UserList from './components/Users/UserList';
import AddUsers from './components/Users/AddUsers';

const App = () => {
  return (
    <div>
      <AddUsers />
      <UserList />
    </div>
  );
};

export default App;
