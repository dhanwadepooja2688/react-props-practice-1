import { reverse } from "./helpers";
 function Namereversed ({name}){
    return (
        <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    )
 }
 export default Namereversed 