import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({ topic, onClick, darkMode }) => {
  const listItemClassName = `topic-list__item ${darkMode ? "dark" : ""}`;

  return (
    <div className={listItemClassName} onClick={onClick}>
      <span className="topic-list__item-text">{topic}</span>
    </div>
  );
};

export default TopicListItem;