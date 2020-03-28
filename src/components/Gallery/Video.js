import React from "react";

const Video = (props) => {
    const id = props.id
    return(
        <video width="320" height="320" controls>
            <source src={require("../../assets/img/videos/"+id+".mp4")} type="video/mp4"/>
        </video>
    )
}

export default Video;