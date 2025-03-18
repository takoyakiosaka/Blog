import "./TopBar.css";

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft"></div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            Product
            <a href="/Product"></a>
          </li>
          <li className="topListItem">
            About
            <a href="/About"></a>
          </li>
          <li className="topListItem">
            Blog
            <a href="/Blog"></a>
          </li>
          <li className="topListItem">
            Email
            <a href="/Email"></a>
          </li>
        </ul>
      </div>
      <div className="topRight"></div>
    </div>
  );
}

export default TopBar;
