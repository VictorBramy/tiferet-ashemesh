import React from "react";

const Image = (props) => {
    const id = props.id
    return(
        <img
            alt="..."
            className="img-raised"
            src={require("../../assets/img/pictures/"+id+".jpg")}
        ></img>
    )
}

export default Image;