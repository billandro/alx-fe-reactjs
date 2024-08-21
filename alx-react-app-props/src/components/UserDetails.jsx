import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";

function UserDetails() {
    const data = useContext(UserContext);
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
      </div>
    );
}
  
export default UserDetails;