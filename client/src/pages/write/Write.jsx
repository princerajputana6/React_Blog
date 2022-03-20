import { useContext, useState } from "react";

import axios from "axios";
import { Context } from "../../context/Context";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) { }
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) { }
  };
  return (
    <div className="conatiner m-4 p-4 shadow">
      <h4 className="text-center">Add Blog</h4>
      {file && (
        <div className="input-group">
<img className="form-control" src={URL.createObjectURL(file)} alt="" />
        </div>
        
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
      <label class="">Upload Blog Post Image</label>
        <div class="input-group mb-3">
          
          <input type="file" class="form-control" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Blog Title</label>
          <input type="text" class="form-control" autoFocus={true}
            onChange={e => setTitle(e.target.value)} />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">blog Description</label>
          <textarea class="form-control" onChange={e => setDesc(e.target.value)} rows="3"></textarea>
        </div>
        <button className="btn btn-success" type="submit">
          Publish
        </button>

      </form>
    </div>
  );
}
