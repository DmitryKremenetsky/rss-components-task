import { useState, useRef } from 'react';
import Navigation from '../Navigation/navigation';
import './form.css';

type Card = {
  nameInput: string;
  dateInput: string;
  colorSelect: string;
  profilePicture: File | null;
  consentToData: boolean;
  gender: string;
};

export default function Form() {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [consentToData, setConsentToData] = useState<boolean>(false);
  const [cards, setCards] = useState<Card[]>([]);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [gender, setGender] = useState<string>('');

  const nameInput = useRef<HTMLInputElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);
  const colorSelect = useRef<HTMLSelectElement>(null);
  const profilePictureInput = useRef<HTMLInputElement>(null);
  const consentToDataInput = useRef<HTMLInputElement>(null);
  const genderInput = useRef<HTMLInputElement>(null);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = nameInput.current?.value;
    const date = dateInput.current?.value;
    const color = colorSelect.current?.value;

    const newCard: Card = {
      nameInput: name || '',
      dateInput: date || '',
      colorSelect: color || '',
      profilePicture,
      consentToData: consentToData || false,
      gender: gender || '',
    };

    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
    setShowMessage(true);

    clearForm();
  };

  const handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setProfilePicture(file || null);
  };

  const handleConsentToDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const consent = event.target.checked;
    setConsentToData(consent);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const gender = event.target.value;
    setGender(gender);
  };

  const clearForm = () => {
    if (nameInput.current) nameInput.current.value = '';
    if (dateInput.current) dateInput.current.value = '';
    if (colorSelect.current) colorSelect.current.value = '';
    if (profilePictureInput.current) profilePictureInput.current.value = '';
    if (consentToDataInput.current) consentToDataInput.current.checked = false;
    if (genderInput.current) genderInput.current.checked = false;
  };

  const renderCards = () => {
    return cards.map((card, index) => (
      <div key={index} className="form-card">
        {card.profilePicture && (
          <img
            className="form-image"
            src={URL.createObjectURL(card.profilePicture)}
            alt="Profile Picture"
          />
        )}
        <div className="card-name">{card.nameInput}</div>
        <div className="card-date">{card.dateInput}</div>
        <div className="card-color">{card.colorSelect}</div>
        <div className="card-gender">{card.gender}</div>
      </div>
    ));
  };

  return (
    <div>
      <Navigation />
      <form className="form-container" onSubmit={handleOnSubmit}>
        <h2 className="form-greeting">Enter your data</h2>
        <div className="user-data">
          <input type="text" id="name" name="name" required ref={nameInput} />
          <label htmlFor="name">Name</label>
        </div>
        <div className="user-data">
          <input type="date" id="date" name="date" required ref={dateInput} />
          <label>Date</label>
        </div>
        <div>
          <select
            className="select-input"
            id="selectColor"
            name="selectColor"
            required
            ref={colorSelect}
          >
            <option value="" disabled selected>
              Select your Pos
            </option>
            <option>Front</option>
            <option>Back</option>
            <option>Leader</option>
            <option>UI</option>
          </select>
        </div>
        <div className="switcher">
          <label className="form-text">Gender</label>
          <div className="gender-switcher">
            <input
              type="radio"
              id="male"
              name="gender"
              value="male"
              required
              onChange={handleGenderChange}
              ref={genderInput}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              id="female"
              name="gender"
              required
              value="female"
              onChange={handleGenderChange}
            />
            <label htmlFor="female">Female</label>
            <input
              type="radio"
              id="other"
              name="gender"
              required
              value="other"
              onChange={handleGenderChange}
            />
            <label htmlFor="other">Other</label>
          </div>
        </div>
        <div className="image-chooser">
          <label className="chooser-title">Choose a profile picture</label>
          <input
            className="upload-input"
            type="file"
            accept="image/png, image/jpeg"
            id="profilePicture"
            name="profilePicture"
            onChange={handleProfilePictureChange}
            ref={profilePictureInput}
          ></input>
        </div>
        <div className="form-element">
          <input
            type="checkbox"
            id="personalData"
            required
            name="personalData"
            onChange={handleConsentToDataChange}
            ref={consentToDataInput}
          />
          <label className="form-personal">I consent to my personal data</label>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      {showMessage && <div className="message">Card added successfully!</div>}
      <div>
        <div className="cards-container">{renderCards()}</div>
      </div>
    </div>
  );
}
