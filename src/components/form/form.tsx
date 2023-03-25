import React, { createRef } from 'react';
import './form.css';

interface FormState {
  name: string;
  date: string;
  selectColor: string;
  personalData: boolean;
  gender: 'male' | 'Female';
  profilePicture: File;
}

export default class Form extends React.Component<FormState> {
  private fileInputRef = createRef<HTMLInputElement>();

  state: FormState = {
    name: '',
    date: '',
    selectColor: '',
    personalData: false,
    gender: 'other',
  };

  render() {
    const { name, date, selectColor, personalData, gender } = this.state;
    return (
      <form className="form-container">
        <div className="form-element">
          <label className="form-text">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={} />
        </div>
        <div className="form-element">
          <label className="form-text">Date:</label>
          <input type="date" id="date" name="date" value={date} onChange={} />
        </div>
        <div className="form-element">
          <label className="form-text">Choose a something:</label>
          <select
            id="selectColor"
            name="selectColor"
            value={selectColor}
            onChange={}
          >
            <option></option>
            <option></option>
            <option></option>
            <option></option>
          </select>
        </div>
        <div className="form-element">
          <label className="form-text">Choose:</label>
          <label className="form-text">
            <input
              type="radio"
              name="gender"
              id="gender"
              value={gender}
              onChange={}
            />
            Male
          </label>
          <label className="form-text">
            <input
              type="radio"
              name="gender"
              id="gender"
              value={gender}
              onChange={}
            />
            Female
          </label>
        </div>
        <div className="form-element">
          <input
            type="checkbox"
            id="personalData"
            name="personalData"
            checked={personalData}
            onChange={}
          ></input>
          <label className="form-personal">
            "I consent to my personal data" field, list of extra presents (User
            can choose several items from the list)"
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
            ref={}
            onChange={}
          ></input>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
