// import React from 'react'
import { useState } from "react";
import "../Style/style.css";
import { FaSearch } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import JsonData from "../Database/data.json";

function Search() {
    const [search, setSearch] = useState("");
    const [showSearch, setShowSearch] = useState(JsonData);

    const handleSearch = (e) => {
        const { value } = e.target;
        setSearch(value);
        handlefilter(value);
    };
    const handlefilter = (search) => {
        const filterSearch =
            search.length === 0
                ? null
                : JsonData.filter(
                      (item) =>
                          item.title_post
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                          item.skill
                              .toLowerCase()
                              .includes(search.toLowerCase()) ||
                          item.category
                              .toLowerCase()
                              .includes(search.toLowerCase())
                  );
        setShowSearch(filterSearch);
    };
    // console.log(showSearch);

    const handleclose = () => {
        setSearch("");
        setShowSearch([]);
    };

    return (
        <div>
            <div id="searchdiv">
                <input
                    className="form-control"
                    type="text"
                    placeholder="Search for jobs"
                    id="search-input"
                    onChange={handleSearch}
                    value={search}
                />
                <div>
                    {search === "" ? (
                        <FaSearch id="search-icon" />
                    ) : (
                        <button
                            onClick={handleclose}
                            className="btn btn-transparent rounded-pill"
                        >
                            X
                        </button>
                    )}
                </div>
                <div></div>
            </div>

            <div className=" container text-center mt-1 p-2 ">
                <table className="table">
                    {!search ? (
                        <></>
                    ) : (
                        showSearch.slice(0, 5).map((item) => (
                            <>
                                <tbody>
                                    <tr key={item.id} id="datatable">
                                        <td>{item.title_post}</td>
                                        <td>{item.category}</td>
                                        <td>{item.skill}</td>
                                    </tr>
                                </tbody>
                            </>
                        ))
                    )}
                </table>
            </div>
        </div>
    );
}

export default Search;
