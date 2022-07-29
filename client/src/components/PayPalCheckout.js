import React, { useState } from "react";
import PayPal from "./PayPal";

function PayPalCheckout(){
const [checkout, setCheckout] = useState(false)

return (
    <div>
        {checkout ? (
            <PayPal />
        ) : (
            <button 
            onClick={() => {
            setCheckout(true);
            }}
        >
            Checkout
        </button>
        )}
    </div>
    );
}

export default PayPalCheckout;