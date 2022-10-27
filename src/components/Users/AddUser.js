import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [inputUserName, setInputUserName] = useState("");
  const [inputUserAge, setInputUserAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (e) => {
    e.preventDefault();
    if (inputUserName.trim().length === 0 || inputUserAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Empty values. 공백은 입력할 수 없습니다.",
      });
      return; //함수 실행 종료
    }
    // +단항연산자(문자를 숫자로), input으로 들어온 값은 문자열로 반환됨
    if (+inputUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "유효하지 않은 값 입니다. (0이상의 정수만 입력 가능)",
      });
      return;
    }
    props.onAddUser(inputUserName, inputUserAge);
    setInputUserName("");
    setInputUserAge("");
  };

  const userNameChangeHandler = (e) => {
    setInputUserName(e.target.value);
  };
  const userAgeChangeHandler = (e) => {
    setInputUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {/* 조건부 렌더링 */}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
    </div>
  );
}

export default AddUser;
