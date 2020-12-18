import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className="timeline-event">
    <p className="timeline-person">{props.person}</p>
    <p className="timeline-status">{props.status}</p>
    <p className="event-time"><Timestamp time={props.timeStamp} /></p>
  </div>
  ) 
}

export default TimelineEvent;