import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar col-lg-3 col-md-3 col-sm-12 shadow ">
      <div className="sidebarItem">
        <span className="sidebarTitle">Blog Categories</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem shadow-sm col-12">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
