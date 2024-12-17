import Home from "../assets/images/Home.png";
import "../styles/Home.css";

function Homepage() {
    return (
      <div className="page">
        <div className="container">
          <div className="homeContainer">
            <img
              src={Home}
              alt="A stack of books on a table in a library"
              className="stackedbooks"
            />
          </div>
        </div>
      </div>
    );
  }
  
  export default Homepage;