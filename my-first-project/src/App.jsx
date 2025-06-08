import './App.css';
import background from './assets/discord-background.png';
import logo from './assets/discord-logo-white.png';
import menu from './assets/menu-icon.png';

function App() {
  return (
    <div className="hero">
      <div className="background-div">
        <img src={background} alt="discord-background" className="background-img" />
      </div>

      <img src={logo} alt="discord-logo-white" className="logo-img" />
      <img src={menu} alt="menu-icon" className="menu-img" />

      <div className="hero-content">
        <h1>
          IMAGINE A<br /> PLACE...
        </h1>
        <p>
          ...where you can belong to a school club, a gaming group, or a<br />
          worldwide art community. Where just you and a handful of<br />
          friends can spend time together. A place that makes it easy to<br />
          talk every day and hang out more often.
        </p>
        <div className="buttons">
          <button className="btn-light">Download for Mac</button>
          <button className="btn-dark">Open Discord in your browser</button>
        </div>
      </div>
    </div>
  );
}

export default App;
