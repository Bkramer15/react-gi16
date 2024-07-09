// BasicInfo.js
import React from 'react';

const BasicInfo = (props) => {
  const { name, number, dob } = props.person;

  return (
    <div>
      <h1>Name: {name}</h1>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <p>Date of Birth: {dob}</p>
    </div>
  );
}

export default BasicInfo;
