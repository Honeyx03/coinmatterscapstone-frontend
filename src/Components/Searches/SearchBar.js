import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "../../CSS/Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import UserList from "./UserList";



// const API = process.env.REACT_APP_API_URL;


export default function SearchBar({ userList, onSearch }) {
    const [zipcode, setZipcode] = useState("");
    

    const handleSearch = (e) => {
        e.preventDefault();
        setZipcode(e.target.value);
        onSearch(userList, zipcode);
    }
   

    return (
        <div className="search-bar-container">
          <div className="search-bar">
            <input className="search-bar-bar"
                type="text"
                placeholder="Enter your zip code"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
            />
            <button className="search-button" onClick={handleSearch}><FontAwesomeIcon icon={faSearch} size="lg" style={{color: "#231a1f",fontSize: "24px", fontWeight: "bold"}} /></button>
          </div>
          <div className="message">
              <ul>
              </ul>
          </div>
        </div>
    );
};