import React from "react";
import { FaSearch } from "react-icons/fa";

function Searchable({ placeholder, data }) {
    return (
        <div>
            <form className="form mt-3 d-flex w-100 shadow me-2 ms-2 bg-tertiary mb-1 rounded p-1 ">
                <label className="text-danger p-1">
                    <FaSearch />
                </label>
                <input
                    type="text"
                    className="form-control bg-transparent w-100 shadow-none border-0 ms-2"
                    placeholder={placeholder}
                ></input>
            </form>
            <div className="text-bg-primary text-center ">
                {data.map((value, d) =>(
                     <ul key={d} className=" text-decoration-none m-3 p-2 d-flex gap-3 " >
                     <h4>{value.title_post}</h4>
                     <h4>{value.skill}</h4>
                     <h4>{value.category}</h4>
                 </ul>
                ))}
            </div>
        </div>
    );
}

export default Searchable;
