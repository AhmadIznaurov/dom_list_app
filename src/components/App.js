import '../index.css';
import {Todos} from "./Todos";
import {Users} from "./Users";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {loadUsers} from "../redux/action";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

  return (
    <div className="container">
     <Users />

      {/*<Todos />*/}

    </div>
  );
}

export default App;
