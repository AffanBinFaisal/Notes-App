import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";

import "./singlePost.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const PF = "http://localhost:5000/images/";
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path);
      setPost(res.data);
      setTitle(res.data.title);
      setCat(res.data.cat);
      setDesc(res.data.desc);
    };
    getPost();
  }, [path]);

  // const handleDelete = async () => {
  //   try {
  //     await axios.delete(`/posts/${post._id}`, {
  //       data: {},
  //     });
  //     window.location.replace("/");
  //   } catch (err) {}
  // };

  const handleUpdate = async () => {
    try {
      await axios.put(`/posts/${post._id}`, {
        title,
        desc,
        cat,
      });
      setUpdateMode(false);
    } catch (err) {}
  };

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img
            src={PF + post.photo}
            alt=""
            className="singlePostImg"
          />
        )}
        <h1 className="singlePostTitle">{post.title}</h1>

        <div className="singlePostDate">
          {new Date(post.createdAt).toDateString()}
        </div>
        <div className="singlePostCat">{post.cat}</div>
        {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc.split(/\r\n|\n|\r/gm).map(des => {
            return <React.Fragment>{des}<br /></React.Fragment>
          })}</p>
        )}
        {updateMode && (
          <button
            className="singlePostButton"
            onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}
