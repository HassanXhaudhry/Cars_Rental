import React,{useState} from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import car1 from "./images/car1.png";
import car2 from "./images/car2.png";
import sort from "./images/sort2.png";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';
import Cars from './components/cars/Cars';

const App = () => {
  const [selectDate, setSelectDate]=useState(null);
  const [dateSelect, setDateSelect]=useState(null);
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <div className="left-side">
          <h1 style={{ marginLeft: "30px", color: "white" }}>
            The Best Plateform <br /> for Car Rental
          </h1>
          <h5 style={{ marginLeft: "30px", color: "white" }}>
            Ease of doing a car rental safely and <br />
            reliably. Of course at a low price.
          </h5>
          <button className="car-button">Rental Car</button>
          <img className="car1" src={car2} alt="" />
        </div>
        <div className="right-side">
          <h1 style={{ marginLeft: "30px", color: "white" }}>
            Easy way to rent a <br />
            car at a low price
          </h1>
          <h5 style={{ marginLeft: "30px", color: "white" }}>
            Providing cheap car rental services <br />
            and safe and comfortable facilities.
          </h5>
          <button className="car-button">Rental Car</button>
          <img className="car2" src={car1} alt="" />
        </div>
      </div>
      <br />

      <div className="container2">
        <div className="pick-up">
          <label>
            <input
              className="radio"
              type="radio"
              name="question_1_2"
              value="3"
            />
            Pick up
          </label>
          <br />
          <div className="pick-up-contents">
            <div className="location">
              <h4>Location</h4>
              <br />
              <select name="city" id="city-select" className="select">
                <option value="">Select your city</option>
                <option value="dog">Lahore</option>
                <option value="cat">Karachi</option>
                <option value="hamster">Islamabad</option>
                <option value="parrot">Quetta</option>
                <option value="spider">Peshawar</option>
                <option value="goldfish">Multan</option>
              </select>
            </div>
            <div className="date">
              <h4>Date</h4>
              <br />
              <div className="select">
                <ReactDatePicker 
                selected={selectDate}
                onChange={date=>setSelectDate(date)}
                dateFormat="dd/MM/yyyy"

                />
              </div>
            </div>

            <div className="time">
              <h4>Time</h4>
              <div className="select">
              <TimePicker
              onChange={onChange} 
              value={value} />
            </div>
            </div>
          </div>
        </div>

        <div className="sort-image">
          <img
            src={sort}
            style={{ paddingLeft: "13px", paddingTop: "13px" }}
            alt=""
            width="23px"
            height="23px"
          />
        </div>

        <div className="drop-off">
          <label>
            <input
              className="radio"
              type="radio"
              name="question_1_2"
              value="3"
            />
            Drop off
          </label>
          <br />
          <div className="drop-off-contents">
            <div className="location">
              <h4>Location</h4>
              <br />
              <select name="city" id="city-select" className="select">
                <option value="">Select your city</option>
                <option value="dog">Lahore</option>
                <option value="cat">Karachi</option>
                <option value="hamster">Islamabad</option>
                <option value="parrot">Quetta</option>
                <option value="spider">Peshawar</option>
                <option value="goldfish">Multan</option>
              </select>
            </div>
            <div className="date">
              <h4>Date</h4>
              <br />
              <div className="select">
              
              <ReactDatePicker
              selected={dateSelect}
              onChange={date=>setDateSelect(date)}
              dateFormat="dd/MM/yyyy"

              />
            </div>
            </div>

            <div className="time">
              <h4>Time</h4>
              <div className="select">
              <TimePicker
              onChange={onChange} 
              value={value} />
            </div>
            </div>
          </div>
        </div>
      </div><br /><br />

     <Cars />
      <Footer />
    </div>
  );
};

export default App;
