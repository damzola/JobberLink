// import { FaUser } from "react-icons/fa"
// import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./search";
import swal from "sweetalert";
import { FaBook, FaEnvelope, FaHouseUser, FaTools, FaUser } from "react-icons/fa";


export default function Job() {
    const [loading, setLoading] = useState(true);
    const [work, setWork] = useState([]);


        useEffect(() =>{
            axios.get(`/api/home`).then(res=>{
                if (res.status === 200) {
                    setWork(res.data.user)
                }
                    setLoading(false);

            });
        }, []);
        var home_HTMLTAG = "";
        if(loading){
            return(
            <h4>Loading Availiable Jobs....</h4>
        )
        }else{
            home_HTMLTAG=
            work.map( (item) => {
                return(

                    <div key={item} className="  border-bottom" id="jobpostdiv">
                        <div className=" ">
                            <div className="d-flex gap-2">
                            <div className="col-6">

                                 <h6>
                                   <FaEnvelope className="me-2"/>
                                <strong>Job Title: </strong> {item.title_post}
                            </h6>
                                </div>

                            <div className="col-6">

                                <h6>
                                   <FaHouseUser className="me-2"/>
                                <strong>Category: </strong> {item.category}
                            </h6>

                                </div>

                            </div>
                            <div className="d-flex gap-2 mt-3 mb-2">
                                <div className="col">
                                <h6>
                                    <FaUser className="me-2"/>
                                <strong>Company: </strong>{item.company}
                            </h6>
                                </div>
                                <div className="col">
                                <h6>
                                <FaTools className="me-2"/>
                                <strong>Requirement: </strong>
                                {item.skill},
                            </h6>
                                </div>
                            </div>




                            <h6>
                              <FaBook className="me-2"/>
                                <strong>Education: </strong>
                                {item.education}
                            </h6>
                            </div>


                          <div className="d-flex mt-3 row  " id="jobdivbg">
                            <div className="col">
                                <p>Type: Remote 6month ago</p>
                            </div>
                            <div className="col">
                                <button
                                onClick={()=>swal("Success", "Applied Successfully") }
                                className="btn   shadow btn-light rounded float-end" id="btnjobposted">Apply
                        </button>
                            </div>

                          </div>
                        </div>
                )
            })
        }
    return (
        <>
            <div className="container mx-auto">
                <Search/>
                <div className="mx-auto">
                    <div className="container border-bottom mb-2 text-center shadow-sm " id="jobbg">
                        <h3 id="jobbghomehead" className="  ">
                            Explore Avaliable Jobs
                        </h3>
                    </div>
                    <div>

                            { home_HTMLTAG}

                    </div>
                </div>

{/*
              <ul className="pagination mt-3 pt-3">
                <li className="page-item">
                    <Link className="page-link">Previous</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link">1</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link">2</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link">3</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link">4</Link>
                </li>
                <li className="page-item">
                    <Link className="page-link">Next</Link>
                </li>
              </ul> */}
            </div>
        </>
    );
}
