import React from "react";
import { Link } from "react-router-dom";

const GuideTile = props => {
  let guide = props;
  return (
    <div className="col-sm-3">
      <p>
        {" "}
        <Link to={`guide/${guide.id}`} title={guide.name}>
          {" "}
          {guide.name}{" "}
        </Link>{" "}
      </p>{" "}
    </div>
  );
};

export default GuideTile;
