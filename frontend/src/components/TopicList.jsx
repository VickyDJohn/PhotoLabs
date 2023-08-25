import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = ({ topics, onTopicClick, darkMode }) => {
  return (
    <div className={`top-nav-bar__topic-list ${darkMode ? "dark" : ""}`}>
      {topics.map((topic) => (
        <TopicListItem
          key={topic.id}
          topic={topic.title}
          onClick={() => onTopicClick(topic.id)}
          darkMode={darkMode}
        />
      ))}
    </div>
  );
};

export default TopicList;
