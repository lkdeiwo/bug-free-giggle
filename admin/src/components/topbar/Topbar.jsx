import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React from "react";
import "./topbar.scss";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topleft">
          <div className="logo">Admin</div>
        </div>
        <div className="topright">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_481292845_77896.jpg"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
