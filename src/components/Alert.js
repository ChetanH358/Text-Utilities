import React from "react";

function Alert(props) {
  return (
    //   we are telling like if props.alert is false then return . on doing this we didn't get anything in console
    // as first is evalutated as false
    // but first is true then only second will be evaluated

    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>{props.alert.type}</strong> : {props.alert.msg}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}

export default Alert;
