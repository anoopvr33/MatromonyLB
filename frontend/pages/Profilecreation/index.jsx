import "./profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const getSelectValues = (select) => {
    const result = [];
    const options = select && select.options;
    for (let i = 0; i < options.length; i++) {
      const opt = options[i];
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
    return result;
  };
  //   const selectElement = document.getElementById("frame");
  //   const selectedValues = getSelectValues(selectElement);
  //   console.log(selectedValues); // Array of selected values
  return (
    <div className="profile">
      <h1 className="head">Matrimony</h1>
      <button className="skip">Skip {">>"}</button>
      <div className="box">
        <div className="card1">
          <h1>personal details</h1>
          <div className="card1_1">
            <label htmlFor="">Name</label>
            <input type="text" name="name" />
            <br />
            <label htmlFor="">Gender</label>
            <select name="" id="frame">
              <option value="">Male</option>
              <option value="">Female</option>
              <option value="">Other</option>
            </select>{" "}
            <br />
            <label htmlFor="">DOB</label>
            <input type="date" /> <br />
            <label htmlFor="">Religion</label>
            <input type="text" name="religion" /> <br />
            <label htmlFor="">Mother Toungue</label>
            <input type="text" name="Mother Toungue" />
          </div>
        </div>
        <div className="card2">
          <h1>Basic info</h1>
          <div className="card1_2">
            <label htmlFor="">About</label>
            <textarea name="" id=""></textarea>
            <br />
            <label htmlFor="">Height</label>
            <input type="text" name="Height" />
            <br />
            <label htmlFor="">Weight</label>
            <input label="" type="text" name="Weight" />
            <br />
            <label htmlFor="">Body type</label>
            <input type="text" name="Body type" />
            <br />
            <label htmlFor="">Marrital status</label>
            <input type="text" name="marital status" />
          </div>
        </div>

        <div className="card3">
          <h1>Career</h1>
          <div className="card1_3">
            <label htmlFor="">Education</label>
            <input type="text" name="education" />
            <br />
            <label htmlFor="">Occupation</label>
            <input type="text" name="occupation" />
            <br />
            <label htmlFor="">Annual income</label>
            <input type="text" name="annual nc" />
            <br />
            <label htmlFor="">Passion</label>
            <input type="text" name="passsion" />
            <br />
            <label htmlFor="">Future plans</label>
            <input type="text" name="future" />
          </div>
        </div>
        <div className="card4">
          <h1>family</h1>
          <div className="card1_4">
            <label htmlFor="">Father Name</label>
            <input type="text" name="" />
            <br />
            <label htmlFor="">Father Occupation</label>
            <input type="text" name="" />
            <br />
            <label htmlFor="">Mother Name</label>
            <input type="text" name="" />
            <br />
            <label htmlFor="">Mother Occupation</label>
            <input type="text" name="" />
            <br />
            <label htmlFor="">Siblings</label>
            <input type="text" name="" />
          </div>
        </div>
        <div className="card5">
          <h1>Address</h1>
          <div className="card1_5">
            <label htmlFor="">Contact</label>
            <input type="number" /> <br />
            <label htmlFor="">email</label>
            <input type="number" /> <br />
            <label htmlFor="">Address</label>
            <input type="" name="adres" /> <br />
          </div>
        </div>
        <div className="card6">
          <h1>Lifestyle</h1>
          <div className="card1_6">
            <label htmlFor="">Drinking</label>
            <input type="number" /> <br />
            <label htmlFor="">Smoking</label>
            <input type="number" /> <br />
            <label htmlFor="">Intrests</label>
            <input type="" name="adres" /> <br />
          </div>
        </div>
      </div>

      <Link to="/landing" className="sub">
        Submit
      </Link>

      <footer></footer>
    </div>
  );
};

export default Profile;

{
  /* <h1>lifestyle--eating habit,drinking,smoking,intresting habbit</h1>
          <h1>career information--education,occupation,salary</h1>
          <h1>
            personal details--name,gender,dob,religion,language,state, family
            type,
          </h1>
          <h1>basic information--height,weight,bodytype,</h1>
          <h1>maritalstatus</h1>
          <h1>partner preference</h1> */
}
