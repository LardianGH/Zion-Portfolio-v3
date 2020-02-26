import React from "react";

function Progress(props){
  return (
    <div className="mi-progress">
      <h6 className="mi-progress-title">{props.title}</h6>
      <div className="mi-progress-inner">
        <div className="mi-progress-percentage" style={{color:"yellow"}} >{`${props.percentage}`}</div>
      </div>
    </div>
  );
}

export default Progress;
