import React, { useState } from 'react'
import "./Layout.css"
import Home from '../../pages/Home/Home'
import{ AiFillStepBackward,AiFillStepForward} from "react-icons/ai"
import Menus from '../Menus/Menus'

const Layout = () => {

    const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="sidebar-section">
        <div className={toggle?"sidebar-toggle sidebar":"sidebar"}>
          <div className="sidebar-toggle-icons">
            <p onClick={handleToggle}>
              {toggle ? <AiFillStepBackward size={30}/> : <AiFillStepForward size={30}/>}
            </p>
          </div>
            <Menus toggle={toggle}/>
        </div>
        <div className="container">
          <Home />
        </div>
      </div>
  )
}

export default Layout