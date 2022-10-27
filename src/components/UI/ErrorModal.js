import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onConfirm} />;
}

function ModalOverlay(props) {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm}>확인</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <React.Fragment>
      {/* createPortal(렌더링되어야 하는 리액트 노드, 포인터(화살표)) */}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.querySelector("#backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.querySelector("#overlay-root")
      )}
    </React.Fragment>
  );
}

export default ErrorModal;
