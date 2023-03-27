import { Component, createRef, RefObject } from 'react';
import Navigation from '../Navigation/navigation';
import './form.css';

interface Props {
  nameInput: string;
  dateInput: string;
  colorSelect: string;
  gender: 'male' | 'female';
}

interface State {
  profilePicture: File | null;
  consentToData: boolean;
  cards: Props[];
  showMessage: boolean;
}

export default class Form extends Component<Props, State> {
  nameInput: RefObject<HTMLInputElement>;
  dateInput: RefObject<HTMLInputElement>;
  colorSelect: RefObject<HTMLSelectElement>;
  gender: RefObject<HTMLInputElement>;
  profilePictureInput: RefObject<HTMLInputElement>;
  consentToDataInput: RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.nameInput = createRef();
    this.dateInput = createRef();
    this.colorSelect = createRef();
    this.gender = createRef();
    this.profilePictureInput = createRef();
    this.consentToDataInput = createRef();

    this.state = {
      profilePicture: null,
      consentToData: false,
      cards: [],
      showMessage: false,
    };
  }

  handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = this.nameInput.current?.value;
    const date = this.dateInput.current?.value;
    const color = this.colorSelect.current?.value;
    const gender = this.gender.current?.value;
    const profilePicture = this.state.profilePicture;
    const consentToData = this.state.consentToData;

    const newCard = { nameInput: name, dateInput: date, colorSelect: color, gender };
    const updatedCards = [...this.state.cards, newCard];
    this.setState({ cards: updatedCards, showMessage: true });

    this.clearForm();
  };

  handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    this.setState({ profilePicture: file });
  };

  handleConsentToDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const consent = event.target.checked;
    this.setState({ consentToData: consent });
  };

  clearForm = () => {
    this.nameInput.current!.value = '';
    this.dateInput.current!.value = '';
    this.colorSelect.current!.value = '';
    this.gender.current!.checked = false;
    this.profilePictureInput.current!.value = '';
    this.consentToDataInput.current!.checked = false;
  };

  renderCards = () => {
    return this.state.cards.map((card, index) => (
      <div key={index} className="card">
        <div className="card-name">{card.nameInput}</div>
        <div className="card-date">{card.dateInput}</div>
        <div className="card-color">{card.colorSelect}</div>
        <div className="card-gender">{card.gender}</div>
        {card.profilePicture && (
          <img src={URL.createObjectURL(card.profilePicture)} alt="Profile Picture" />
        )}
      </div>
    ));
  };

  render() {
    return (
      <div>
        <Navigation />
        <form className="form-container" onSubmit={this.handleOnSubmit}>
          <div className="form-element">
            <label className="form-text" htmlFor="name">
              Name:
            </label>
            <input type="text" id="name" name="name" ref={this.nameInput} />
          </div>
          <div className="form-element">
            <label className="form-text">Date:</label>
            <input type="date" id="date" name="date" ref={this.dateInput} />
          </div>
          <div className="form-element">
            <label className="form-text">Choose a color:</label>
            <select id="selectColor" name="selectColor" ref={this.colorSelect}>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <div className="form-element">
            <label className="form-text">Choose:</label>
            <label className="form-text">
              <input type="radio" name="gender" value="male" ref={this.gender} />
              Male
            </label>
            <label className="form-text">
              <input type="radio" name="gender" value="female" ref={this.gender} />
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
              onChange={this.handleProfilePictureChange}
              ref={this.profilePictureInput}
            ></input>
          </div>
          <div className="form-element">
            <input
              type="checkbox"
              id="personalData"
              name="personalData"
              onChange={this.handleConsentToDataChange}
              ref={this.consentToDataInput}
            />
            <label className="form-personal">I consent to my personal data</label>
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
        {this.state.showMessage && <div className="message">Card added successfully!</div>}
        <div className="cards-container">
          <div className="cards-container">{this.renderCards()}</div>
        </div>
      </div>
    );
  }
}
