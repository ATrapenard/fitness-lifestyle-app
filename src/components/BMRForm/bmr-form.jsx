import React, { useState } from "react";

const BMRForm = ({ setBMRData }) => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [age, setAge] = useState();

  return (
    <form
      id="bmr__form"
      onSubmit={(e) => {
        e.preventDefault();
        setBMRData([
          { name: "weight", value: weight },
          { name: "height", value: height },
          { name: "age", value: age },
        ]);
      }}
    >
      <label>
        Weight:
        <input
          type="text"
          name="weight"
          onChange={(e) => setWeight(e.target.value)}
        />
      </label>
      <label>
        Height:
        <input
          type="text"
          name="height"
          onChange={(e) => setHeight(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          name="age"
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <button className="submit__button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default BMRForm;
