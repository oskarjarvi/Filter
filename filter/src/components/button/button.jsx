import React, { Component } from "react";
import {Link} from "@reach/router";

import "./button.css";

const Button = (props) => <div className="Button"><Link to={props.url}> {props.name} </Link> </div>

export default Button;
