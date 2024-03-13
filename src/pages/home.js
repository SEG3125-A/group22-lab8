// Home.js
import React from "react";
import '../index.css'

function Home() {
  return (
    <div>
      <div name="header">
        <h1 class="font-bold">Welcome to Haircare</h1>
      </div>

      <div name="Booking">
      <h2>Book an Appointment</h2>
        <button>Book</button>
      </div>
      
      <div name="Services">
      <h2>Our Services</h2>
        <h4>Cut: 25$</h4>
        <h4>Color: 25$</h4>
        <h4>Straighten: 15$</h4>
        <h4>Curl: 15$</h4>
      </div>
      
      <div name="Contact">
        <h2>Contact Us</h2>
        <h4>Phone: 613-XXX-XXX</h4>
        <h4>Email: contact@haircare.com</h4>
        <h4>Address: 19 Neverwinter Drive, Ottawa, Canada</h4>
      </div>
    </div>
  )
  ;
}

export default Home