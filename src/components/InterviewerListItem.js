import React from "react";
import classNames from "classnames";
import "./InterviewListItem.scss";

export default function InterviewerListItem(props) {

  const interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  })

  
  return (
    <li 
    className={interviewerClass} 
    key={props.id}
    selected={props.selected}
    onClick={props.setInterviewer} 
    >
      <img
        className="interviewers__item-image"
        src={props.avatar}
        alt={props.name}
      />
      {props.selected && props.name}
    </li>
  );
}
