// import './App.css';
import LogIn from './LogIn';
import Navbar from './Navbar';
import SignUp from './SignUp';
import React, { useState, useEffect } from 'react';
import Profile from './Profile';
import AddItemForm from './AddItemForm';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState({});

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
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/sellitem" element={<AddItemForm />} />
          <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
          {/* <Route path="/books" element={<BookList updateClaims={updateClaims} books={books} setBooks={setBooks} />} /> */}
        </Routes>
    </div>
  );
}

export default App;
