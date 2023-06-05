import React from "react";
import "./searchbar.css";

export default function SearchBar(props) {
  return (
    <div>
      <form>
        <input
          className="search-bar"
          type="text"
          placeholder="search by title"
          onChange= {props.onChange}
        />
      </form>
    </div>
  );
}
