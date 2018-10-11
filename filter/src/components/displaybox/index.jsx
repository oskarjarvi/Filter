import React from "react";
import {Link} from "@reach/router";

import "./displaybox.css";

const DisplayBox = (props) => <div className="DisplayBox"><Link to={props.link}> <img src={props.url} alt='' /> </Link></div>

export default DisplayBox;
