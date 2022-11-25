import React, { useState } from "react";
import "./App.css";

function App() {
  let [userDetails, setuserDetails] = useState({
    Name: "",
    Surname: "",
    Password: "",
    Mobile: "",
    gender:"",
    birth1:"",
     birth2:"",
     birth3:""
  });
  let[printData, setPrintData] = useState({});

  let changeUserName = ({ target: { name, value } }) => {
    setuserDetails({...userDetails,[name]: value });
    console.log(value)
  };

  let submitData = (e) => {
    setPrintData(userDetails);
    setuserDetails({
      Name: "",
      Surname: "",
      Password: "",
      Mobile: "",
     gender:"",
     birth1:"",
     birth2:"",
     birth3:""
    });

    console.log("submitted")
    e.preventDefault();
  };

  return (
    <>
      {/* <table>
        <tr>
          <td>{printData.Name}</td>
          <td>{printData.Surname}</td>
          <td>{printData.Mobile}</td>
          <td>{printData.Password}</td>
          <td>{printData.gender}</td>
          
        </tr>
      </table> */}

      <h1>{JSON.stringify(printData)}</h1>
      <form onSubmit={submitData}>
        <div className="container">
          <h1>Sign Up</h1>
          <p>It's quick and easy.</p>
          <hr />
          <div className="name">
            <input
              className="name1"
              type="text"
              placeholder="Name"
              value={userDetails.Name}
              name="Name"
              onChange={changeUserName}
            />

            <input
              className="name2"
              type="text"
              placeholder="Surname"
              value={userDetails.Surname}
              name="Surname"
              onChange={changeUserName}
            />
          </div>
          <input
            className="mobile"
            type="tel"
            placeholder="Mobile"
            value={userDetails.Mobile}
            name="Mobile"
            onChange={changeUserName}
          />
          <input
            className="password"
            type="password"
            placeholder="New Password"
            name="Password"
            value={userDetails.Password}
            onChange={changeUserName}
          />
          <span className="gen">Gender</span>
          <br />
          <div className="gender">
            <div className="male">
              <label htmlFor="Male">Male</label>
              <input
                type="radio"
                id="Male"
                name="gender"
                value="Male"
                onChange={changeUserName}
              />
            </div>
            <div className="female">
              <label htmlFor="Female">Female</label>
              <input
                type="radio"
                id="Female"
                name="gender"
                value="Female"
                onChange={changeUserName}
              />
            </div>
            <div className="custom">
              <label htmlFor="Custom">Custom</label>
              <input
                type="radio"
                id="Custom"
                name="gender"
                value="Custom"
                onChange={changeUserName}
              />
            </div>
          </div>
          <span className="dob">Date of birth</span> <br />
          <div className="birth">
            <select className="birth1" onChange={changeUserName} name="birth1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
              <option value="13">13</option>
              <option value="14">14</option>
              <option value="15">15</option>
              <option value="">16</option>
              <option value="">17</option>
              <option value="">18</option>
              <option value="">19</option>
              <option value="">20</option>
              <option value="">21</option>
              <option value="">22</option>
              <option value="">23</option>
              <option value="">24</option>
              <option value="">25</option>
              <option value="">26</option>
              <option value="">27</option>
              <option value="">28</option>
              <option value="">29</option>
              <option value="">30</option>
              <option value="">31</option>
            </select>
            <select className="birth2" onChange={changeUserName} name="birth2">
              <option value="">January</option>
              <option value="">Febraury</option>
              <option value="">March</option>
              <option value="">April</option>
              <option value="">May</option>
              <option value="">June</option>
              <option value="">July</option>
              <option value="">August</option>
              <option value="">September</option>
              <option value="">October</option>
              <option value="">November</option>
              <option value="">December</option>
            </select>
            <select className="birth3" onChange={changeUserName} name="birth3">
              <option value="">2022</option>
              <option value="">2021</option>
              <option value="">2020</option>
              <option value="">2019</option>
              <option value="">2018</option>
              <option value="">2017</option>
              <option value="">2016</option>
              <option value="">2015</option>
              <option value="">2014</option>
              <option value="">2013</option>
              <option value="">2012</option>
              <option value="">2011</option>
              <option value="">2010</option>
              <option value="">2009</option>
              <option value="">2008</option>
            </select>
          </div>
          <p>
            People who use our service may have uploaded your contact
            information to Facebook. <a href="">Learn More.</a>
          </p>
          <p>
            By clicking Sign Up, you agree to our Terms, Privacy Policy and
            Cookies Policy. You may receive SMS notifications from us and can
            opt out at any time. Sign Up
          </p>
          <button className="btn" type="submit" id="form">
            Sign Up
          </button>
        </div>
      </form>
    </>
  );
}

export default App;
