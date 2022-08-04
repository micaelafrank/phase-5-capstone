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
import ShoppingCart from './ShoppingCart';
import NewForm from './NewForm';
import StripeContainer from './StripeContainer';
import PurchaseLandingPage from './PurchaseLandingPage';
//

function App() {
  const [user, setUser] = useState({});
  const [items, setItems] = useState([]);
  const [change, setChange] = useState(false);

  function addNewItem(newItem) {
    setItems(...items, newItem)
  }

  // function from payment landing page: updateItems. Deleting the purchased item from the 
  // items list. And updating the id of the buyer to be the new user_id (item belongs to user).
  // ***************************
  // function updateItems(boughtItem){
  //     const updatedItemsList = items.map((item) => item.id === boughtItem.id ? boughtItem : item);
  //     boughtItem.user_id = user.id;
  //     setItems(updatedItemsList);
  // }
  // ***************************

  function deleteBoughtItem(id){
    const updatedItemsList = items.filter((item) => item.id !== id);
    setItems(updatedItemsList);
  }

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then(data => setItems(data))
  }, [])

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user))
      }
    })
  }, [])
  // console.log(user);
  
  return (
    <div>
        <Routes>
            <Route element={<WithoutNav />}>
            <Route path="/login" element={<LogIn user={user} setUser={setUser} />} />
            <Route path="/signup" element={<SignUp user={user} setUser={setUser} />} />
            {/* <Route path="/home" element={<Home />} /> */}
            {/* //SHOW NAV BAR IN HOME WHEN YOU'RE SIGNED IN. OTHERWISE NOT */}
          </Route>
            <Route element={<WithNav user={user} setUser={setUser} />}>
            <Route exact={true} path="/" element={<Home />} />
            <Route path="/profile" element={<Profile user={user} />} />
            <Route path="/sell" element={<AddItemForm addNewItem={addNewItem} user={user} />} />
            <Route path="/buy" element={<ItemsList change={change} setChange={setChange} user={user} />} />
            <Route path="/checkout" element={<StripeContainer total={1000} />} />
            <Route path="/orderconfirmation" element={<PurchaseLandingPage items={items} deleteBoughtItem={deleteBoughtItem} user={user} />} />
          {/* this belongs in the PurchaseLandingPage route:^^^ updateItems={updateItems} */}
            <Route path="/mycart" element={<ShoppingCart total={items} setChange={setChange} change={change} user={user} items={items} />} />
          </Route>
        </Routes>
      {/* <Footer /> */}
    </div>
  )
}

export default App;
