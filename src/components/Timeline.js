
import React from 'react';
import './Timeline.css';
import TimelineEvent from './TimelineEvent';

const Timeline = (props) => {
  const timelineComponents = props.events.map((item, i) => {
    return(
      <TimelineEvent
      person={item.person}
      status={item.status}
      timeStamp={item.timeStamp}
      key={i}
      />  
    )
  })
  return (
    <div className="timeline">
      {timelineComponents}
    </div>
  )
}

export default Timeline;