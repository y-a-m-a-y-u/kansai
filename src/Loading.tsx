import React from "react"
import './Loading.css'

function Loading(){
    return(
        <div className="Loader" data-text="Loading">
            <span className="Loader__Circle"></span>
            <span className="Loader__Circle"></span>
            <span className="Loader__Circle"></span>
            <span className="Loader__Circle"></span>
        </div>
    )
}

export default Loading