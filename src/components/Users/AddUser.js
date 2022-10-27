import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [inputUserName, setInputUserName] = useState("");
  const [inputUserAge, setInputUserAge] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      alert("공백은 입력할 수 없습니다.");
      return; //함수 실행 종료
    }
    // +단항연산자(문자를 숫자로), input으로 들어온 값은 문자열로 반환됨
    if (+inputUserAge < 1) {
      alert("갓난 아기이십니까?");
      return;
    }
    console.log(inputUserName, inputUserAge);
    setInputUserName("");
    setInputUserAge("");
  };

  const userNameChangeHandler = (e) => {
    setInputUserName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setInputUserAge(e.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        {/* <label for="결합될 요소 id"></label> */}
        <label htmlFor="userName">이름</label>
        <input
          type="text"
          id="userName"
          value={inputUserName}
          onChange={userNameChangeHandler}
        />
        <label htmlFor="userAge">나이</label>
        <input
          type="number"
          id="userAge"
          value={inputUserAge}
          onChange={userAgeChangeHandler}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;
