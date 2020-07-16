import React from "react";
import ReactDOM from "react-dom";

const Info = (props) => {
  return (
    <div>
      <h1>Some Shit</h1>
      <p>The info is: {props.info}</p>
    </div>
  );
};

const withAdminWarning = () => {
  return (props) => (
    <div>
      {props.isAdmin && <p>Asd</p>}
      <WrappedComponent {...props}></WrappedComponent>
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<Info info="Again" />, document.getElementById("app"));
