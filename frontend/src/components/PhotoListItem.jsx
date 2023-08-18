import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";


const PhotoListItem = ({ sampleData }) => {
  return (
    <div className="photo-list__item">
      <PhotoFavButton />
      <img className="photo-list__image" src={sampleData.urls.regular} />
      <div className="photo-list__user-alldetails">
        <img className="photo-list__user-profile" src={sampleData.user.profile} />
        <div className="photo-list__user-details">
          <div className="photo-list__user-info">{sampleData.user.username}</div>
          <div className="photo-list__user-location">
            {sampleData.location.city} {sampleData.location.country}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
