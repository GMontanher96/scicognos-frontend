import React, { useState } from "react";
import Axios from 'axios';


function FormTest() {
  const [user_name, setUser_name] = useState("");
  const [user_email, setUser_email] = useState("");
  const [user_cpf, setUser_cpf] = useState("");
  const [user_password, setUser_password] = useState("");
  const [user_password_confirm, setUser_password_confirm] = useState("");
  const [user_birth_date, setUser_birth_date] = useState("");
  const [user_sex, setUser_sex] = useState("");
  const [user_fone, setUser_fone] = useState("");
  const [user_fone_whatsapp, setUser_fone_whatsapp] = useState("");
  const [user_receive_offers, setUser_receive_offers] = useState("");
  const [user_receive_offers_whatsapp, setUser_receive_offers_whatsapp] = useState("");
  const [user_status, setUser_status] = useState("");
 
  const handleInsertUsers = () => {
    Axios.post('http://127.0.0.1:8000/api/users/new', {
        user_name: user_name, 
        user_email: user_email, 
        user_cpf: user_cpf,
        user_password: user_password,
        user_password_confirm: user_password_confirm,
        user_birth_date: user_birth_date,
        user_sex: user_sex,
        user_fone: user_fone, 
        user_fone_whatsapp: user_fone_whatsapp,
        user_receive_offers: user_receive_offers,
        user_receive_offers_whatsapp: user_receive_offers_whatsapp,
        user_status: user_status,
    }).then(() => {
        console.log("success");
    })
  }

  return (
    <div className="app--container">
      <div className="register--container">
        <h1>Register new user! </h1>
        <hr />
        <div>
          <label>Name: </label>
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="register--input"
            onChange={(event) => {
              setUser_name(event.target.value);
            }}
          />
        </div>
        <div>
          <label>E-mail: </label>
          <input
            type="email"
            name="user_email"
            placeholder="E-mail"
            className="register--input"
            onChange={(event) => {setUser_email(event.target.value);
            }}
          />
        </div>
        <div>
          <label>CPF: </label>
          <input
            type="text"
            name="user_cpf"
            placeholder="CPF"
            className="register--input"
            onChange={(event) => {
              setUser_cpf(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            name="user_password"
            placeholder="Password"
            className="register--input"
            onChange={(event) => {
              setUser_password(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="user_password_confirm"
            placeholder="Confirm Password"
            className="register--input"
            onChange={(event) => {
              setUser_password_confirm(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Birth Date: </label>
          <input
            type="date"
            name="user_birth_date"
            placeholder="Birth Date"
            className="register--input"
            onChange={(event) => {
              setUser_birth_date(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Genre: </label>
          <input
            type="checkbox"
            name="user_sex"
            className="register--input"
            value="M"
            onChange={(event) => {
              setUser_sex(event.target.value);
            }}
          />
          <label>Male </label>
          <input
            type="checkbox"
            name="user_sex"
            className="register--input"
            value="F"
            onChange={(event) => {
              setUser_sex(event.target.value);
            }}
          />
          <label>Female </label>
        </div>
        <div>
          <label>Phone: </label>
          <input
            type="text"
            name="user_fone"
            placeholder="Phone"
            className="register--input"
            onChange={(event) => {
              setUser_fone(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Phone Whatsapp: </label>
          <input
            type="text"
            name="user_fone_whatsapp"
            placeholder="Phone Whatsapp"
            className="register--input"
            onChange={(event) => {
              setUser_fone_whatsapp(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Receive Offers? </label>
          <input
            type="checkbox"
            name="user_receive_offers"
            className="register--input"
            onChange={(event) => {
              setUser_receive_offers(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Receive Offers Whatsapp? </label>
          <input
            type="checkbox"
            name="user_receive_offers_whatsapp"
            className="register--input"
            onChange={(event) => {
              setUser_receive_offers_whatsapp(event.target.value);
            }}
          />
        </div>
        <div>
          <label>Status: </label>
          <input
            type="checkbox"
            name="user_status"
            className="register--input"
            value="A"
            onChange={(event) => {
              setUser_status(event.target.value);
            }}
          />
        </div>
        <hr />
        <br />
        <div className="flex justify-center">
          <button onClick={handleInsertUsers}>Register</button>
        </div>
      </div>
    </div>
  );
}

export default FormTest;
