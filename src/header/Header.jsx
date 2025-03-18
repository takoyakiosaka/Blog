import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1 className="title">who we are</h1>
      <img className="headerImg" src="/Background.jpeg" alt="Background"></img>
      <p>we are Ramen Paradise. thanks for reading.</p>
      <div className="headerTitles">
        <div className="headerTitleSm">About Us</div>
        <img
          className="headerImg"
          src="/Background.jpeg"
          alt="Background"
        ></img>
        <p className="AboutUs">our concept is to offer the authentic ramen.</p>
        <div className="headerTitleLg">History</div>
        <p>we just started.</p>
      </div>
    </div>
  );
}
export default Header;
