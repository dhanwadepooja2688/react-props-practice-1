import { useState } from "react";

function Title(props){
    return(
<h1 className="title">Welcome,{props.userName}!</h1>
    )
    
}
export default Title