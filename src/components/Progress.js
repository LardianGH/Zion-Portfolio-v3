import React from "react";

function Progress(props){
  return (
    <div className="mi-progress">
      <h3 className="mi-progress-title" style={{color:"yellow"}}>{props.title}</h3>
      <div className="mi-progress-inner">
      </div>
    </div>
  );
}

export default Progress;
