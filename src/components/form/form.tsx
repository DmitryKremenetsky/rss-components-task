import React, { createRef } from 'react';
import './form.css';

export default class Form extends React.Component {
  render() {
    return (
      <form className="form-container">
        <div className="form-element">
          <label className="form-text">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-element">
          <label className="form-text">Date:</label>
          <input type="date" id="date" name="date" />
        </div>
        <div className="form-element">
          <label className="form-text">Choose a color:</label>
          <select id="selectColor" name="selectColor">
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="blue">Blue</option>
          </select>
        </div>
        <div className="form-element">
          <label className="form-text">Choose:</label>
          <label className="form-text">
            <input type="radio" name="gender" value="male" />
            Male
          </label>
          <label className="form-text">
            <input type="radio" name="gender" value="female" />
            Female
          </label>
        </div>
        <div className="form-element">
          <label className="form-text">Choose a profile picture:</label>
          <input
            className="upload-input"
            type="file"
            accept="image/png, image/jpeg"
            id="profilePicture"
            name="profilePicture"
          ></input>
        </div>
        <div className="form-element">
          <input type="checkbox" id="personalData" name="personalData" />
          <label className="form-personal">I consent to my personal data</label>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
