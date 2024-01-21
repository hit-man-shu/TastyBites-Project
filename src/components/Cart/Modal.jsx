import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHireCart}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElements = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onHireCart={props.onHireCart} />,
        portalElements,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElements,
      )}
    </>
  );
};

export default Modal;
