import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
import Cost from "../Shoppingcart/Cost";
import ProductSummary from "../Shoppingcart/ProductSummary";
import Summary from "../Shoppingcart/Summary";
import "./MainShipping.css";
import ShippingBtn from "./ShippingBtn";
import ShippingSummary from "./ShippingSummary";
import SummaryShip from "./SummaryShip";

const isEmpty = (value) => value.trim() === "";
const isNotEnough = (value) => value.trim().length !== 6;
const phoneCheck = (value) => value.trim().length !== 10;

const MainShipping = () => {
  // const [disabled, setDisabled] = useState(false);
  // const [formInputValidity, setFormInputsValidity] = useState({
  //   FName: true,
  //   Lname: true,
  //   address: true,
  //   country: true,
  //   city: true,
  //   zip: true,
  //   phoneNumber: true,
  // });

  const [firstname, setFirstname] = useState('');
  const [LastName, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const formIsValid =
  firstname &&
  LastName &&
  address &&
  country &&
  city &&
  zip &&
  phoneNumber;

  function SubmitButton(){
    if (formIsValid){
      return <NavLink to='payment'><button className="btn-a btn btn-secondary" type="button">Next</button></NavLink>
    } else {
      return <button className="btn-a btn btn-secondary" type="button" disabled>Next</button>
    };
  };

  const [isTouched,setisTouched] =useState(false)
  const [ phoneTouched , setphoneTouched] =useState(false); 
  return (
    <div className="topMost-ship">
      <div className="main ms-5">
        <form className="row ">
          <div
            className={`col-md-3 col-sm-3`}
          >
            <label htmlFor="inputEmail4" className="form-label">
              First Name
            </label>
            <input
              onChange={(e)=>{setFirstname(e.target.value)}}              type="text"
              className="gap form"
              id="inputEmail4"
            />
          
            {/* {!emailValid && <p>Please check Email</p>} */}
          </div>
          <div
            className={`col-md-3 col-sm-3`}
          >
            <label htmlFor="inputPassword4" className="form-label">
              Last Name
            </label>
            <input
            onChange={ e => setLastname(e.target.value)}
              type="text"
              className="gap form"
              id="inputPassword4"
            />
          </div>

          <p>
            <div
              className={`col-md-6 col-sm-6`}
            >
              <label htmlFor="inputAddress" className="form-label">
                Address
              </label>
              <input
              onChange={ e => setAddress(e.target.value)}
                type="text"
                className="form full"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>
          </p>

          <div className="col-md-6 col-sm-6">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2(*Optional)
            </label>
            <input
              type="text"
              className="form"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>

          <p />
          <div
            className={`col-md-2 col-sm-2`}
          >
            <label htmlFor="inputState" className="form-label">
              Country
            </label>
            <select
            onChange={ e => setCountry(e.target.value)}
              style={{ "font-size": "12px" }}
              id="inputState"
              // value={Country}
              className="form form-select"
            >
              <option selected >Choose...</option>
              <option>India</option>
              <option>Bangladesh</option>
            </select>
          </div>

          <div
            className={`col-md-4 col-sm-3 `}
          >
            <label htmlFor="inputCity" className="form-label">
              City
            </label>
            <input
            onChange={ e => setCity(e.target.value)}
              type="text"
              className="form"
              id="inputCity"
            />
          </div>
          <p />
          <div
            className={`col-md-2 col-sm-3`}
          >
            <label htmlFor="inputZip" className="form-label">
              Zip
            </label>
            <input
              onChange={(e) => {
                setisTouched(true);
                if (e.target.value.trim().length === 6) {
                  setisTouched(false);
                  setZip(e.target.value);
                } else {
                  setisTouched(true);
                  setZip("");
                }
              }}
              type="text"
              className="form"
              id="inputZip"
            />
            {isTouched && <p>6 digit required</p>}
          </div>
          <div
            className={`col-md-4 col-sm-3}`}
          >
            <label htmlFor="inputCity" className="form-label">
              Phone Number
            </label>
           <input
              onChange={(e) => {
                setphoneTouched(true);
                if (e.target.value.trim().length === 10) {
                  setphoneTouched(false);
                  setPhoneNumber(e.target.value);
                } else {
                  setphoneTouched(true);
                  setPhoneNumber("");
                }
              }}
              type="text"
              className="form"
              id="inputCity"
            />
          {phoneTouched && <p>10 digit required</p>}
          </div>
          <p />
          <hr className="col-lg-6 col-sm-3" />
          <ShippingBtn />
          <hr className="mt-2 col-lg-6 col-sm-3" />
          <div className="btns">
          <SubmitButton />

            <NavLink to="/">
              <button type="button" className="btn-b btn btn-light">
                Cancel
              </button>
            </NavLink>
          </div>
        </form>
      </div>
      <div className="shipSum">
        <Summary />
      </div>
      <div />
    </div>
  );
};
export default MainShipping;
