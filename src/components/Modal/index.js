import React from 'react'

function Modal({ currentPhoto, onClose }) {
    const {name, description, category, index} = currentPhoto;
    return (
        <div className="modalBackdrop" onClick={onClose}>
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/small/${category}/${index}.jpg`).default} alt={category} />
                <p>{description}</p>
                <button type="button" onClick={onClose}>Close this Modal</button>
            </div>
        </div>
    );
}

export default Modal;