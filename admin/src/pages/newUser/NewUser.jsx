import "./newUser.scss";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form action="" className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="hansolo39" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="Han Solo" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="han@qq.com" />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="30927414" />
        </div>
        <div className="newUserItem">
          <label>Location</label>
          <input type="text" placeholder="Beijing" />
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
