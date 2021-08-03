import * as React from "react";
import preloader from "../../../img/preloader.gif";

const Preloader = () => {
    return <div>
        <img src={preloader} alt="Preloader" style={{width: "200px", height: "200px", borderRadius: "100%",
            border: "4px solid wheat", display: "block", margin: "0 auto" }}/>
    </div>
}

export default Preloader;