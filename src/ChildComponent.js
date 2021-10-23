import React from "react";
import { useStore } from "./store/Store";

const ChildComponent = () => {

    const { logoColor } = useStore();

    return(
        <div style={{color: logoColor}}>Child Component</div>
    )
}

export default ChildComponent;