import React from "react";
import NotFoundStyle from "../StyledComponents/NotFound";
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <NotFoundStyle>
      <div className="container">
        <div className="error">ERROR</div>
        <div className="circle">
          404 <div className="not"></div>
        </div>
        <div className="found">FOUND</div>
      </div>
      <p className="homePage"><Link to="/">GO TO HOME PAGE 🚀</Link></p>
    </NotFoundStyle>
  );
};

export default NotFound;
