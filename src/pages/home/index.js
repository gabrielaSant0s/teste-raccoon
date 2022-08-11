import React from "react";
import CallToAction from "../../components/atoms/call-to-action";
import MenuBar from "../../components/atoms/menu-bar/index"

import "./style.css"

const Home = () => {
    return(
        <div className="backgroundHome"> 
            <MenuBar/>
            <CallToAction/>
        </div>
    )
}

export default Home