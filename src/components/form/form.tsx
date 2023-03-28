import { Component, createRef, RefObject } from 'react';
import Navigation from '../Navigation/navigation';
import './form.css';

type Props = {
  nameInput: string | undefined;
  dateInput: string | undefined;
  colorSelect: string | undefined;
  profilePicture?: File | null;
  consentToData?: boolean;
  gender?: string | undefined;
};

interface State {
  profilePicture: File | null;
  consentToData: boolean;
  cards: Props[];
  showMessage: boolean;
  gender: string;
}

export default class Form extends Component<Props, State> {
  nameInput: RefObject<HTMLInputElement>;
  dateInput: RefObject<HTMLInputElement>;
  colorSelect: RefObject<HTMLSelectElement>;
  profilePictureInput: RefObject<HTMLInputElement>;
  consentToDataInput: RefObject<HTMLInputElement>;
  genderInput: RefObject<HTMLInputElement>;

  constructor(props: Props) {
    super(props);

    this.nameInput = createRef();
    this.dateInput = createRef();
    this.colorSelect = createRef();
    this.profilePictureInput = createRef();
    this.consentToDataInput = createRef();
    this.genderInput = createRef();

    this.state = {
      profilePicture: null,
      consentToData: false,
      cards: [],
      showMessage: false,
      gender: '',
    };
  }

  handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const name = this.nameInput.current?.value;
    const date = this.dateInput.current?.value;
    const color = this.colorSelect.current?.value;

    const newCard = {
      nameInput: name,
      dateInput: date,
      colorSelect: color,
      profilePicture: this.state.profilePicture,
      consentToData: this.state.consentToData,
      gender: this.state.gender,
    };

    const updatedCards = [...this.state.cards, newCard];
    this.setState({ cards: updatedCards, showMessage: true });

    this.clearForm();
  };

  handleProfilePictureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.files);
    const file = event.target.files && event.target.files[0];
    this.setState({ profilePicture: file });
  };

  handleConsentToDataChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const consent = event.target.checked;
    this.setState({ consentToData: consent });
  };

  handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const gender = event.target.value;
    this.setState({ gender: gender });
  };

  clearForm = () => {
    this.nameInput.current!.value = '';
    this.dateInput.current!.value = '';
    this.colorSelect.current!.value = '';
    this.profilePictureInput.current!.value = '';
    this.consentToDataInput.current!.checked = false;
    this.genderInput.current!.checked = false;
  };

  renderCards = () => {
    return this.state.cards.map((card, index) => (
      <div key={index} className="card">
        {card.profilePicture && (
          <img src={URL.createObjectURL(card.profilePicture)} alt="Profile Picture" />
        )}
        <div className="card-name">{card.nameInput}</div>
        <div className="card-date">{card.dateInput}</div>
        <div className="card-color">{card.colorSelect}</div>
        <div className="card-gender">{card.gender}</div>
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
            <input type="text" id="name" name="name" required ref={this.nameInput} />
          </div>
          <div className="form-element">
            <label className="form-text">Date:</label>
            <input type="date" id="date" name="date" required ref={this.dateInput} />
          </div>
          <div className="form-element">
            <label className="form-text">Choose a color:</label>
            <select id="selectColor" name="selectColor" required ref={this.colorSelect}>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
            </select>
          </div>
          <div className="form-element">
            <label className="form-text">Gender:</label>
            <div className="gender-switcher">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                required
                onChange={this.handleGenderChange}
                ref={this.genderInput}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                required
                value="female"
                onChange={this.handleGenderChange}
              />
              <label htmlFor="female">Female</label>
              <input
                type="radio"
                id="other"
                name="gender"
                required
                value="other"
                onChange={this.handleGenderChange}
              />
              <label htmlFor="other">Other</label>
            </div>
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
              required
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
