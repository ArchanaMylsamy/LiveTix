import React, { useState } from "react";

const Seat = ({ seatNumber, selected, onClick }) => {
  const seatClass = selected ? "seat selected" : "seat";
  return <div className={seatClass} onClick={onClick}>{seatNumber}</div>;
};

const App = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    const index = selectedSeats.indexOf(seatNumber);
    let updatedSeats = [...selectedSeats];

    if (index > -1) {
      updatedSeats.splice(index, 1);
    } else {
      updatedSeats.push(seatNumber);
    }

    setSelectedSeats(updatedSeats);
  };

  return (
    <div className="App">
      <h2>Select Seats</h2>
      <div id="seat-map">
        <div className="row">
          <Seat
            seatNumber="1"
            selected={selectedSeats.includes("1")}
            onClick={() => handleSeatClick("1")}
          />
          <Seat
            seatNumber="2"
            selected={selectedSeats.includes("2")}
            onClick={() => handleSeatClick("2")}
          />
          <Seat
            seatNumber="3"
            selected={selectedSeats.includes("3")}
            onClick={() => handleSeatClick("3")}
          />
          {/* Add more seats here */}
        </div>
      </div>

      <div id="selected-seats">
        <h3>Selected Seats:</h3>
        <ul id="seat-list">
          {selectedSeats.map((seat) => (
            <li key={seat}>{seat}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
