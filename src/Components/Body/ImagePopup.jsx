import React, { useState } from 'react';
import styled from 'styled-components';
import Curry from '../../assets/Curry.JPG'
const Popup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;

const PopupImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
`;

const CloseButton = styled.button`
  margin-top: 10px;
`;

const ImagePopup = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  }
  
  return (
    <div>
      <img
        src="#"// Replace with the actual path to your image
    
        onClick={togglePopup}
      />
      {popupOpen && (
        <div className="popup">
          <div className="popup-content">
            <img
              src={Curry} // Replace with the actual path to your image
          
            />
            <button onClick={togglePopup}>Close Popup</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImagePopup;