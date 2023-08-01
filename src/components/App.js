import '../index.css';
import {Users} from "./Users";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import { loadUsers} from "../redux/action";
import {Albums} from "./Albums";
import {Route, Routes} from "react-router-dom";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsers())
    }, [])


  return (
      <Routes>
          <Route path='/:id?'
                 element={
              <div className="container">
              <div className='row'>
                  <div className='col-3'>
                      <Users />
                  </div>
                  <div className='col-7'>
                      <Albums />
                  </div>
              </div>
          </div>} />
      </Routes>
  );
}

export default App;
