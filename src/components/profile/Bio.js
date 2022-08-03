import react from "react";
const Bio = (props) => {
  return (
    <>
      <h1> FullName {props.FullName} </h1>
      <h1> Age {props.Age}</h1>
      <h1> Gender {props.Gender}</h1>
      <h1> Interests {props.Interests}</h1>
    </>
  );
};
export default Bio;
