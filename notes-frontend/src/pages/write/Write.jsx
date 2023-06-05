import { useState } from "react";
import "./write.css";
import axios from "axios";

export default function Write() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("Modern React With Redux");
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      cat,
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
      } catch (err) {
        console.log(err);
      }
    }
    try {
      console.log(newPost);
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="write">
      {file && (
        <img
          className="writeImg"
          src={URL.createObjectURL(file)}
          alt=""
        />
      )}
      <form
        className="writeForm"
        onSubmit={handleSubmit}>
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div class="row">
          <div class="col-25">
            <label for="Title">Title</label>
          </div>
          <div class="col-75">
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Note Title"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="catagory">Catagory</label>
          </div>
          <div class="col-75">
            <select
              id="catagory"
              name="catagory"
              value={cat}
              onChange={(e) => {
                setCat(e.target.value);
              }}>
              <option value="Modern React With Redux" selected>
                Modern React With Redux
              </option>
              <option value="JavaScript">JavaScript</option>
              <option value="HTML & CSS">HTML & CSS</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-25">
            <label for="Note">Note</label>
          </div>
          <div class="col-75">
            <textarea
              id="note"
              name="note"
              placeholder="Write Your Note"
              onChange={(e) => setDesc(e.target.value)}></textarea>
          </div>
        </div>
        <br />
        <div class="row">
          <input
            type="submit"
            value="Publish"
          />
        </div>
      </form>
    </div>
  );
}
