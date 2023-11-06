import React, { useRef } from "react";
import "./style.css";

const UserForm = () => {
  const handleSubmit = () => {
    const firstInputValue = firstInputRef.current.value;
    const secondInputValue = secondInputRef.current.value;

    firstInputRef.current.value = "";
    secondInputRef.current.value = "";

    console.log("ПІБ:", firstInputValue);
    console.log("Ваші думки:", secondInputValue);
  };

  const firstInputRef = useRef();
  const secondInputRef = useRef();

  const clearInputs = () => {
    firstInputRef.current.value = "";
    secondInputRef.current.value = "";
  };

  return (
    <div className="user-form">
      <p className="user-form-first-name">Прокоментуй</p>
      <p className="user-form-second-name">статтю</p>
      <div>
        <div className="user-form-first-input">
          <p className="user-form-first-item">ПІБ</p>
          <input
            ref={firstInputRef}
            placeholder="..."
            className="user-form-first-input-input"
          />
        </div>
        <div className="user-form-second-input">
          <div className="user-form-second-text">
            <p className="user-form-second-item-one">Ваші</p>
            <p className="user-form-second-item-two">думки</p>
          </div>
          <input
            ref={secondInputRef}
            placeholder="..."
            className="user-form-second-input-input"
          />
        </div>
        <div className="user-form-button-block">
          <div className="user-form-first-button" onClick={handleSubmit}>
            Відправити
          </div>
          <div className="user-form-second-button" onClick={clearInputs}>
            Очистити
          </div>
        </div>
        <div className="user-form-div-color"></div>
      </div>
    </div>
  );
};

export default UserForm;
