// import './App.css';
import LogIn from './LogIn';
import WithNav from './WithNav';
import WithoutNav from './WithoutNav';
import SignUp from './SignUp';
import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import Home from './Home';
// import HomeForUsers from './HomeForUsers';
import ItemsList from './ItemsList';
import Footer from './Footer';
import AddItemForm from './AddItemForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({});
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(data => { setItems(data) })
  }, [])

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
  // console.log(user);

  return (
    <div className="App">
        <Routes>
            <Route element={<WithoutNav />}>
            <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
            <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
            <Route exact={true} path="/" element={<Home />} />
            {/* <Route path="/home" element={<Home />} /> */}
            //SHOW NAV BAR IN HOME WHEN YOU'RE SIGNED IN. OTHERWISE NOT
          </Route>
            <Route element={<WithNav user={user} setUser={setUser} />}>
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/sell" element={<AddItemForm user={user} setItems={setItems} />} />
            <Route path="/buy" element={<ItemsList items={items} setItems={setItems} />} />
          </Route>
        </Routes>
        <Footer />
    </div>
  )
}

export default App;
