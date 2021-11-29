import { useState } from "react";
import { NavLink } from "react-router-dom";
import Summary from "../Shoppingcart/Summary";
import "./Payment.css";
const Payment = () => {
  const [cardNo, setcardNo] = useState("");
  const [expNo, setexpNo] = useState("");
  const [cvv, setcvv] = useState("");
  const [holderName, setholderName] = useState("");

  const [paypalTouched,setPaypalTouched] =useState(false);
  const [creditTouched,setCreditTouched] =useState(false);


  
  const[cardTouched ,setcardTouched] =useState(false);
  const[expTouched ,setexpTouched] =useState(false);
  const[cvvTouched ,setcvvTouched] =useState(false);
  const[NameTouched ,setNameTouched] =useState(false);


  const informationValid = cardNo && expNo && cvv && holderName;

  function PaymentButton() {
    if(paypalTouched){
        return(
        <NavLink to="confirmation">
        <button className="btn-a btn btn-secondary" type="button">
          Pay Now
        </button>
      </NavLink> );
    }
    else if (informationValid && creditTouched) {
      return (
        <NavLink to="confirmation">
          <button className="btn-a btn btn-secondary" type="button">
            Pay Now
          </button>
        </NavLink>
      );
    }else {
      return (
        <button className="btn-a btn btn-secondary" type="button" disabled>
          Pay Now
        </button>
      );
    }
  }


  return (
    <>
      <div class="container-fluid main-container">
        <div class="row">
          <div
            class="d-flex media-q"
            style={{ "justify-content": "space-between" }}
          >
            <div class="div1 ms-5 ">
              <h2>Payment method </h2>
              <div class="border border-dark  m-2">
                <div class="form-check ms-3">
                  <div class="radio-button ms-0 ">
                    <input
                    onClick={(e)=>{
                        setPaypalTouched(false);
                        setCreditTouched(true);
                        console.log("paypal not");
                    }} 
                      class="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      Credit Card
                    </label>
                    <p class="ms-1" style={{ "font-size": "12px" }}>
                      Lorem ipsum dolor sit amet consectetur adipisicin
                    </p>
                  </div>
                  <div class="d-flex  col-md-2 col-sm-3">
                    <div class="card-number">
                      <input
                        className="card-main"
                        type="text"
                        placeholder="0000   0000   0000   0000"
                        autocomplete="email"
                        onChange={(e)=>{
                            setcardTouched(true);
                            if(e.target.value.trim().length === 16){
                                setcardTouched(false);
                                setcardNo(e.target.value)
                            }
                           else{
                              setcardTouched(true);
                              setcardNo('');
                          }
                        }}       
                        type="text"

                      />
                      {cardTouched && <p>16 digits required</p>}
                    </div>
                    <div class="card-month-year">
                      <input
                        className="card-detail"
                        type="text"
                        id="exp"
                        name="expdate"
                        placeholder="MM/YY"
                        onChange={(e)=>{
                            setexpTouched(true);
                            if(e.target.value.trim().length === 5  && e.target.value.includes('/')){
                                setexpTouched(false);
                                setexpNo(e.target.value)
                            }
                            else{
                              setexpTouched(true);
                              setexpNo('');
                          }
                        }}  
                      />
                   {expTouched && <p>*req</p>}

                    </div>
                    <div class="card-cvv ">
                      <input
                        className="card-detail"
                        id="cvv"
                        type="password"
                        placeholder="cvv"
                       onChange={(e)=>{
                            setcvvTouched(true);
                            if(e.target.value.trim().length === 3){
                                setcvvTouched(false);
                                setcvv(e.target.value)
                            }
                            else {
                              setcvvTouched(true);
                              setcvv('');
                          }
                            
                        }}  
                      />
                      {cvvTouched && <p>*req</p>}

                    </div>
                  </div>
                  <div class="card-holder-name mt-4 mb-3">
                    <input
                      className="card-holder"
                      class="card-holder-name-1"
                      type="text"
                      placeholder="Card holder Name"
                     onChange={(e)=>{
                        setNameTouched(true);
                        if(e.target.value.trim() !== ''){
                            setNameTouched(false);
                            setholderName(e.target.value)
                        }
                        else{
                          setNameTouched(true);
                            setholderName('');
                      }
                    }} 
                    />
                    {NameTouched && <p>*req</p>}
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <div class="paypal  d-flex border-dark ms-5  mt-5">
                  <div class="radio-paypal ms-1 w-75">
                    <input
                      class="form-check-input ms-0"
                      onClick={(e)=>{
                        setPaypalTouched(true);
                    }} 
                  
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"


                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      &nbsp; Paypal{" "}
                    </label>
                    <p class="ms-4 paypal-p">
                      Lorem ipsum dolor sit amet consectetur adipisicin lore
                      dolor sit, amet consectetur adipisicing elit. Cumque,
                      consequatur. Quaerat vel dolor
                    </p>
                  </div>
                  <div class="paypal-icon ms-4">
                    <img
                      class=""
                      src="https://cdn.pixabay.com/photo/2015/05/26/09/37/paypal-784404_1280.png"
                      style={{ height: "80px", width: "80px", border: "none" }}
                    />
                  </div>
                </div>
                <div class="mt-5">
                  <div class="d-flex p-2 ">
                    <PaymentButton />
                    <div class="pay-cancel ps-2">
                      <NavLink to="/ship">
                        <button style={{ width: "150px", border: "none" }}>
                          Cancel
                        </button>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row ms-5 d-flex flex-end">
              <Summary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
