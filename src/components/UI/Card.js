import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  // props.children => Card 컴포넌트의 여닫는 태그 사이의 모든 컨텐츠
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
}

export default Card;
