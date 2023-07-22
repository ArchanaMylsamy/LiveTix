import React, { useState } from 'react';
import './Seating.css';
import './Payment'
import {Link} from 'react-router-dom'

const NUM_ROWS = 10;
const NUM_SEATS_PER_ROW = 10;
const SEAT_PRICE = 500;

const MovieSeatBooking = () => {
  const [seatLayout, setSeatLayout] = useState(() => {
    // Initialize seat layout with all seats available
    const layout = [];
    for (let i = 0; i < NUM_ROWS; i++) {
      layout.push(Array(NUM_SEATS_PER_ROW).fill('O'));
    }
    return layout;
  });
  
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (row, seatNum) => {
    if (seatLayout[row][seatNum] === 'O') {
      setSelectedSeats(prevSelectedSeats => [...prevSelectedSeats, [row, seatNum]]);
    } else {
      setSelectedSeats(prevSelectedSeats => prevSelectedSeats.filter(seat => seat[0] !== row || seat[1] !== seatNum));
    }
  };

  const calculateTotalAmount = () => {
    return selectedSeats.length * SEAT_PRICE;
  };

  const bookSeats = () => {
    // Here you can implement the booking logic, e.g., sending a request to the server
    // to book the selected seats. For this example, we'll just update the seatLayout state.
    setSeatLayout(prevLayout => {
      const newLayout = prevLayout.map(row => [...row]);
      selectedSeats.forEach(seat => {
        const [row, seatNum] = seat;
        newLayout[row][seatNum] = 'X';
      });
      return newLayout;
    });

    setSelectedSeats([]);
  };

  return (
    <div className='seatdharu'>
      <br></br>
      <h1>Come on!Hurry Up!!</h1>
      <br></br>
      <div>
        {seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} style={{ marginBottom: '5px' }}>
            {row.map((seat, seatNum) => (
              <span
                key={seatNum}
                className={`seat ${seat === 'O' ? 'available' : 'unavailable'} ${selectedSeats.some(s => s[0] === rowIndex && s[1] === seatNum) ? 'selected' : ''}`}
                onClick={() => handleSeatClick(rowIndex, seatNum)}
              >
                {seat}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div>
        <h3>Selected seats:</h3>
        
        <p>{selectedSeats.map(seat => `Row ${seat[0] + 1} -- Seat ${seat[1] + 1}`).join(', ')}</p>
        <h3>Total amount:</h3>
        <p>RS.{calculateTotalAmount()}</p><br></br>
        <button onClick={bookSeats} disabled={selectedSeats.length === 0}>
          Book Seats
        </button>&nbsp;&nbsp;
        <Link to="/Payment"><button>Confirm and PayNow</button></Link>
      </div>
    </div>
  );
};

export default MovieSeatBooking;
