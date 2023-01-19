import { useState } from "react";
function Namelength(props){
    return(
<p className="name-length">
        Did you know that {props.Namelength} is {props.length} characters long?!
      </p>
    )
}
export default Namelength