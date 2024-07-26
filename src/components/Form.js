import React from "react";
import  { useState } from "react"




function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(name);
  }
  
  function handleChange(event) {
   // console.log(event.target.value);
   //输入input框架内容改变之后 输出改变后的内容
   setName(event.target.value);//每次输入 都会整个保存到name属性中
  }
  



  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
