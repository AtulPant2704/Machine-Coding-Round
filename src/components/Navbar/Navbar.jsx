import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav-header">
      <div className="title">
        <i className="fas fa-bars menu-bar"></i>
        <h2 className="nav-title" onClick={() => navigate("/")}>
          Products
        </h2>
        <h2 className="nav-title" onClick={() => navigate("/cart")}>
          Cart
        </h2>
      </div>
    </div>
  );
};

export { Navbar };
