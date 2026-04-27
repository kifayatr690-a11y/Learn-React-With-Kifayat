import { Link } from "react-router-dom";

function NaveBar() {
  return (
    <header className="navbar">
      <div className="logo">Learn-React</div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/learnreact">Learn</Link>
        <Link to="/installation">Installation</Link>
        <Link to="/topics">Topics</Link>

        
      </nav>
    </header>
  );
}

export default NaveBar;