// import { useState } from "react";
import "../index.css";
import Search from "./search";
import { Link } from "react-router-dom";
import Latest from "./latest";
import {
    FaLocationArrow

} from "react-icons/fa";


function Home() {
  

    return (
        <>
            <div className="container ">
                <div className=" mt-1" id="bodygrid">
                    <div className="" id="bodygridcol">
                        <div className="  p-3 mb-2 mt-4" id="homefirstdiv">
                            <h2>Find your dream jobs the legend way </h2>
                            <p>
                                Use the search input and search for your
                                prefared job.
                                <span className="text-black">
                                    Note: When searching for a job there are
                                    some things to be consider, location,
                                    payment, skills...
                                </span>
                            </p>
                            <Search />
                        </div>
                        <div className="d-flex shadow-sm ">
                        <Link  className=" "
                        as={Link}to="#" id="latestlink">Latest</Link>

                        <Link className=" border-0 " as={Link}to="#" id="latestlink">Random</Link>


                           </div>

                        <div className="mt-3">
                            <h3 className="text-start" id="postingjob">
                                Latest Post
                            </h3>
                            
                                   <Latest/> 
                                
                        </div>

                        <div>
                            <h3 id="postingjob" className="text-start shadow">
                                Recomeded jobs Offer
                            </h3>
                        </div>
                        <div className="row" id="recosmain">
                       

                            <div className="col-4" id="recosdiv">
                                <div className=" mb-3 shadow p-3" id="recos">
                                    <div className=" d-flex ps-3 border-bottom  ">
                                        <img
                                            src="./public/image/logo3.jpg"
                                            alt="logo"
                                            className=""
                                            id="sugslogo"
                                        />
                                        <h3 className="">Finance</h3>
                                    </div>
                                    <h4 className="ps-3">Banker</h4>{" "}
                                    <div className=" d-flex">
                                        <p className="p-2">
                                            <FaLocationArrow className="p-1 text-danger" />{" "}
                                            Abuja Nigeria
                                        </p>
                                        <p className=" p-2 text-secondary">
                                            Contract
                                        </p>
                                    </div>
                                    <div className=" d-flex">
                                        <span className=" text-black">
                                            <p className="text-secondary">
                                                May 05 2024
                                            </p>
                                            <h5>Malaika Bank</h5>
                                        </span>
                                        <span className=" text-black">
                                            <img
                                                src="./public/image/logo3.jpg"
                                                alt="logo"
                                                className="ms-5 "
                                                id="sugslogo"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4" id="recosdiv">
                                <div className=" mb-3 shadow p-3" id="recos">
                                    <div className=" d-flex ps-3 border-bottom  ">
                                        <img
                                            src="./public/image/logo3.jpg"
                                            alt="logo"
                                            className=""
                                            id="sugslogo"
                                        />
                                        <h3 className="">Health</h3>
                                    </div>
                                    <h4 className="ps-3">Nurse</h4>{" "}
                                    <div className=" d-flex">
                                        <p className="p-2">
                                            <FaLocationArrow className="p-1 text-danger" />{" "}
                                            Porthighcourt Nigeria
                                        </p>
                                        <p className=" p-2 text-secondary">
                                            Fulltime
                                        </p>
                                    </div>
                                    <div className=" d-flex">
                                        <span className=" text-black">
                                            <p className="text-secondary">
                                                May 02 2024
                                            </p>
                                            <h5>CareMind</h5>
                                        </span>
                                        <span className=" text-black">
                                            <img
                                                src="./public/image/logo3.jpg"
                                                alt="logo"
                                                className="ms-5 "
                                                id="sugslogo"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-4" id="recosdiv">
                                <div className="mb-3 shadow p-3" id="recos">
                                    <div className=" d-flex ps-3 border-bottom  ">
                                        <img
                                            src="./public/image/logo3.jpg"
                                            alt="logo"
                                            className=""
                                            id="sugslogo"
                                        />
                                        <h3 className="">Finance</h3>
                                    </div>
                                    <h4 className="ps-3">Banker</h4>{" "}
                                    <div className=" d-flex">
                                        <p className="p-2">
                                            <FaLocationArrow className="p-1 text-danger" />{" "}
                                            Abuja Nigeria
                                        </p>
                                        <p className=" p-2 text-secondary">
                                            Contract
                                        </p>
                                    </div>
                                    <div className=" d-flex">
                                        <span className=" text-black">
                                            <p className="text-secondary">
                                                May 05 2024
                                            </p>
                                            <h5>Malaika Bank</h5>
                                        </span>
                                        <span className=" text-black">
                                            <img
                                                src="./public/image/logo3.jpg"
                                                alt="logo"
                                                className="ms-5 "
                                                id="sugslogo"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-4" id="recosdiv">
                                <div className="mb-3 shadow p-3" id="recos">
                                    <div className=" d-flex ps-3 border-bottom  ">
                                        <img
                                            src="./public/image/logo3.jpg"
                                            alt="logo"
                                            className=""
                                            id="sugslogo"
                                        />
                                        <h3 className="">Health</h3>
                                    </div>
                                    <h4 className="ps-3">Nurse</h4>{" "}
                                    <div className=" d-flex">
                                        <p className="p-2">
                                            <FaLocationArrow className="p-1 text-danger" />{" "}
                                            Porthighcourt Nigeria
                                        </p>
                                        <p className=" p-2 text-secondary">
                                            Fulltime
                                        </p>
                                    </div>
                                    <div className=" d-flex">
                                        <span className=" text-black">
                                            <p className="text-secondary">
                                                May 02 2024
                                            </p>
                                            <h5>CareMind</h5>
                                        </span>
                                        <span className=" text-black">
                                            <img
                                                src="./public/image/logo3.jpg"
                                                alt="logo"
                                                className="ms-5 "
                                                id="sugslogo"
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <table className="table">
                                <thead>
                                     <tr>
                                    <th>NB</th>
                                    <th>Categories</th>
                                    <th>Avialiable</th>
                                    <th>Apply</th>
                                    <th>Image</th>
                                </tr>
                                </thead>
                                <tbody>
                                      <tr className=" ">
                                    <td>1</td>
                                    <td>Technology</td>
                                    <td className=" badge text-bg-danger ">40</td>
                                    <td>
                                        <button className="btn btn-danger rounded border-0  mt-1 mb-1">
                                            Click
                                        </button>
                                    </td>
                                    <img
                                        className="pt-2 pb-2"
                                        src="./public/image/Tech.jpg"
                                        width="60px"
                                        height="auto"
                                        alt="image"
                                    />
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Health</td>
                                    <td className=" badge text-bg-danger">20</td>
                                    <td>
                                        <button className="btn btn-danger rounded border-0  mt-1 mb-1">
                                            Click
                                        </button>
                                    </td>
                                    <img
                                        className="pt-2 pb-2"
                                        src="./public/image/Health.jpg"
                                        width="60px"
                                        height="auto"
                                        alt="image"
                                    />
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Finance</td>
                                    <td className=" badge text-bg-danger">99+</td>
                                    <td>
                                        <button className="btn btn-danger rounded border-0  mt-1 mb-1">
                                            Click
                                        </button>
                                    </td>
                                    <img
                                        className="pt-2 pb-2"
                                        src="./public/image/Finance.jpg"
                                        width="60px"
                                        height="auto"
                                        alt="image"
                                    />
                                </tr>
                                </tbody>
                               
                              
                            </table>
                        </div>

                        <div className="container">
                            <h5 className="shadow" id="postingjob">
                                Post your availiable job{" "}
                            </h5>
                            <div className="card">
                                <div className="card-body">
                                    <p>
                                        There are thousand of prefessionals and
                                        expert onthis platform ready for
                                        immediate employment. Post your job and
                                        get a qualify staff for your business.
                                    </p>
                                    <div className="input-group">
                                        <Link
                                            className="input-group-text text-success"
                                            as={Link}
                                            to="/post"
                                        >
                                            Post
                                        </Link>
                                        <input
                                            type="text"
                                            value="Use the post button!"
                                            className="form-control shadow-none "
                                            readOnly
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
