import React from "react";
import "../styles.css";

const Modal = ({ onCloseModal, onNewUser }) => {
  return (
    <div className="inputs">
      <form action="" onSubmit={(e) => onNewUser(e)}>
        <input type="text" name="firstname" placeholder="FirstName" />
        <input type="text" name="lastname" placeholder="LastName" />
        <input type="email" name="email" placeholder="email" />
        <input type="url" name="url" placeholder="Avatar url" />
        <button className="addBtn">Submit</button>
      </form>
      <button className="addBtn" onClick={onCloseModal}>
        X
      </button>
    </div>
  );
};

export default Modal;
