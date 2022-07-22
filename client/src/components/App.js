// import './App.css';
import LogIn from './LogIn';
import Navigation from './Navigation';
import SignUp from './SignUp';
import React, { useState, useEffect } from 'react';
import Profile from './Profile';
// import ItemsForSale from './ItemsForSale';
import AddItemForm from './AddItemForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({});
  const [items, setItems] = useState([])

  function renderNewItem(newItem) {
    setItems(newItem);
  }

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
        console.log(user)
        setUser(user)
  })
      }
    })
  }, [])
  console.log(user);


  return (
    <div className="App">
        <Navigation user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/sell" element={<AddItemForm user={user} setItems={setItems} renderNewItem={renderNewItem} />} />
          <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
          {/* <Route exact path="/" element={<Profile />} /> */}
          {/* <Route path="/buy" element={<ItemsForSale items={items} setItems={setItems} />} /> */}
        </Routes>
    </div>
  );
}

export default App;
