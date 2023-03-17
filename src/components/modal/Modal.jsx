import React, { useState } from 'react'
import "./Modal.scss"

export default function Modal() {
    const [openModal, setOpenModal] = useState(false);
  
    const ModalClick = () => {
      setOpenModal(!openModal);
    };
  
    return (
      <div>
        <button onClick={ModalClick} className="modal-op">&#10005;</button>
        {openModal && (
          <div className="modal-main">
            <div className="modal__content">
              <h2>Are you sure?</h2>
              <button className="close-mod" onClick={ModalClick}>
                Yes
              </button>
              <button className="close-mod" onClick={ModalClick}>
                No
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }