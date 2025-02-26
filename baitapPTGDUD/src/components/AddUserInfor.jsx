import React, { useState } from "react";

const AddUserInfor = ({ handleAddnewUser, userCount }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const handleOnChangeInput = (event) => {
    const { name, value } = event.target;
    if (name === "name") setName(value);
    if (name === "age") setAge(value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    
    if (userCount >= 10) {
      alert("Không thể thêm quá 10 người dùng!");
      return;
    }

    handleAddnewUser({
      id: Math.floor((Math.random() * 100) + 1) + "user",
      Name: name,
      Age: age
    });
    setName('');
    setAge('');
  };

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Enter name" 
          value={name} 
          onChange={handleOnChangeInput} 
        />
        <input 
          type="number" 
          name="age" 
          placeholder="Enter age" 
          value={age} 
          onChange={handleOnChangeInput} 
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddUserInfor;
