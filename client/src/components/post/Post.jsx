import "./post.css";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "http://localhost:5000/images/";
  return (
      <div class="col">
        <div class="card shadow-sm">
          
          {post.photo && <img className="card-img-top" src={PF + post.photo} alt="" />}

          <div class="card-body">
            <h4>{post.categories.map((c) => (
            c.name
          ))}</h4>
          <h3><Link to={`/post/${post._id}`} className="link">
          <span>{post.title}</span>
        </Link></h3>
            <p class="card-text">{post.desc}</p>
            <div class="d-flex justify-content-between align-items-center">
              <small class="text-muted">{new Date(post.createdAt).toDateString()}</small>
            </div>
          </div>
        </div>
      </div>


  );
}
