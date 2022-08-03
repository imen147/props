
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Headder from './components/profile/Headder';
import Bio from './components/profile/Bio';
import FullName from './components/profile/FullName';
import Profession from './components/profile/Profession';


function App() {
  return (
    <div className="App">
      <Headder/>
      <div style={{margin:"150px 100px",fontSize:"1.2rem"}}>
    <h1 style={{color:"blue", size:"ss100px"}}>  My-Profile </h1>
    
      < FullName firstName="imen" lastName="benbelgacem">
      <p>Glad to know you</p>
      </FullName>
      <br/>
      <div style={{border:"black double",  marginTop:"20px",background:"silver"}} id="about">
      <Bio Fullname="imen benbelgacem" Age="32" Gender="Female" Interests="Learning,Farming ,Taking care of animals,
       Watching TV , Eating and Sleeping"  />
      </div>
      </div>
      <div id="profession"><Profession/></div>
      
      
      
      
    </div>
  );
}

export default App;
