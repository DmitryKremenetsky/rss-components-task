import React from 'react';
import './modal.css';

interface Character {
  id: number;
  name: string;
  image: string;
  species: string;
  location: {
    name: string;
  };
}

interface ModalProps {
  character: Character;
  onClose: () => void;
}

const Modal = ({ character, onClose }: ModalProps) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-wrapper">
        <div className="modal-header">
          <h3 className="modal-title">{character.name}</h3>
          <button className="modal-close-btn" onClick={onClose}>
            X
          </button>
        </div>
        <div className="modal-body">
          <img className="modal-image" src={character.image} alt="" />
          <p className="modal-text">{character.species}</p>
          <p className="modal-text">{character.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
