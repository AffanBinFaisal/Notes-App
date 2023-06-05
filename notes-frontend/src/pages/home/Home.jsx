import React from "react";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Calendar from "../../components/calender/Calender";
import Clock from "../../components/clock-turkey/Clock";
import ClockUK from "../../components/clock-uk/ClockUK";
import ClockUS from "../../components/clock-us/ClockUS";
import SearchBar from "../../components/search-bar/SearchBar";
import "./home.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const { search } = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      setPosts(res.data);
    };
    fetchPosts();
  }, [search]);

  const searcher = async (event) => {
    let q = event.target.value;
    const fetchSearchedPosts = async () => {
      const res = await axios.get("/posts/?q=" + q);
      setPosts(res.data);
    };
    fetchSearchedPosts();
  };

  return (
    <>
      <Header />
      {/* <center><div className="calender-wrapper">
        <Calendar />
      </div></center> */}
      <div class="container">
        <div class="row">
          <div class="col-sm">
            <ClockUS />
          </div>
          <div class="col-sm">
            <ClockUK />
          </div>
          <div class="col-sm">
            <Clock />
          </div>
          <div class="col-sm">
            <Calendar />
          </div>
        </div>
      </div>
      <div className="home">
        <SearchBar onChange={searcher} />
        <Posts posts={posts} />
      </div>
    </>
  );
}
