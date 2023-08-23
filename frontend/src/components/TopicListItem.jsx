import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onClick }) => {
  return (
    <div className="topic-list__item" onClick={onClick}>
      <span className="topic-list__item-text">{topic}</span>
    </div>
  );
};

export default TopicListItem;