import { LocationSearching, PermIdentity, Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./user.scss";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userCreate">Create</button>
        </Link>
      </div>

      <div className="userInfoContainer">
        <div className="userInfoLeft">
          <div className="userInfoHead">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080&width=960"
              alt=""
              className="userImage"
            />
            <div className="userNameTitle">
              <div className="userInfoName">Han Solo</div>
              <div className="userJobTitle">Software Engineer</div>
            </div>
          </div>
          <div className="userInfoTail">
            <div className="userInfoTailTitle">Account Detail</div>
            <div className="userInfoTailDetail">
              <div className="userInfoTailDetailItems">
                <PermIdentity className="userInfoIcon" />
                <span className="userInfoTailDetailItem">hansolo39</span>
              </div>

              <div className="userInfoTailDetailItems">
                <PermIdentity className="userInfoIcon" />
                <span className="userInfoTailDetailItem">Han Solo</span>
              </div>
              <div className="userInfoTailDetailItems">
                <PermIdentity className="userInfoIcon" />
                <span className="userInfoTailDetailItem">han@qq.com</span>
              </div>
              <div className="userInfoTailDetailItems">
                <PermIdentity className="userInfoIcon" />
                <span className="userInfoTailDetailItem">132348993</span>
              </div>
              <div className="userInfoTailDetailItems">
                <LocationSearching className="userInfoIcon" />
                <span className="userInfoTailDetailItem">Beijing</span>
              </div>
            </div>
          </div>
        </div>
        <div className="userInfoRight">
          <span className="userUpdateTitle">Edit</span>
          <form action="" className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="hansolo39"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="Han Solo"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="han@qq.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Phone number</label>
                <input
                  type="text"
                  placeholder="132348993"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Beijing"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080&width=960"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
