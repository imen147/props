import { Button } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CardImg } from "react-bootstrap";
import "./App.css";
import Profile from "./components/profile/profile";

function App() {
  const name="imen"
  const img="https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"
   function handleName() {
    alert(`my name is ${name}`)
  } 
  return (
    <div className="App">
      <Profile fullName={name} bio="gomycode" profession="ingenieur">
       
        <CardImg src={img}/>
      </Profile>
      <button onClick={handleName} >click here </button>
    </div>
  );
}

export default App;
