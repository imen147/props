import { Children } from "react";

 const Profile =props=>{
return(
    <div>
       <div> {props.children}</div>
      <h1> {props.fullName}</h1> 
       <h1>{props.bio}</h1> 
        {props.profession}
    </div>
)
}
export default Profile;