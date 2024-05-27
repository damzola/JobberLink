import { Link } from "react-router-dom";
import { FaEnvelopeOpen, FaWhatsapp } from "react-icons/fa";
import "../Style/style.css";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert'


export default function Info() {
   
    const [loading, setloading] = useState(true);
    const [infoTalent, setInfoTalent] = useState([]);


    useEffect(() => {
        axios.get(`api/info`).then((res) => {
            if (res.status === 200) {
                setInfoTalent(res.data.user);
            }
            setloading(false);
        });
    }, []);
    var info_HTMLTAG = "";
    if (loading) {
        return <h4>Loading Talent</h4>;
    } else {
        info_HTMLTAG = infoTalent.map((item) => {
            return (
                <div
                    key={item.id}
                    className="  mt-3 mb-3 clearfix shadow-lg rounded"
                    id="talentbackground"
                >
                    <div className=" text-dark  ">
                        <div
                            id="blocktalent"
                            className="text-center pt-3  justify-content-center"
                        >
                            <div className="d-flex gap-4 p-2 justify-content-center">
                                <div className="">
                            <p>                             
                                <strong>Name: </strong>
                                {item.fullname}
                            </p>
                                </div>
                              
                                <div className="">
                                        <p>
                                
                                <strong>Education: </strong>
                                {item.education}
                            </p>
                                    </div>
                            </div>

                            <div className="d-flex p-2 gap-4 justify-content-center">
                            <div className="">
                            <p>
                              
                              <strong>Skills: </strong>
                              {item.skill}
                          </p>
                                    </div>
                                    <div className="">
                                    <p>
                               
                                <strong>Category: </strong>
                                {item.category}
                            </p>
                                    </div>
                                    </div>
                           
                            
                           
                            
                        </div> 
                        <div className="text-center  ps-2   ">
                           

                            <div className="input-group   pb-2 shadow-none  ">
                                <Link
                                    className="input-group-text text-primary  border-0 bg-transparent  "
                                    as={Link}
                                    to="#"
                                >
                                    <FaEnvelopeOpen />
                                </Link>

                                <input
                                    value={item.email}
                                    className="border-0  bg-transparent shadow-none ps-2"
                                    title="click the icon"
                                    readOnly
                                />
                            </div>

                            <div className="input-group  pb-2 ">
                                <Link
                                    className="input-group-text text-success bg-transparent border-0 shadow-none"
                                    as={Link}
                                    to="#"
                                >
                                    <FaWhatsapp />
                                </Link>
                                <input
                                    value={item.phone}
                                    className="border-0  bg-transparent shadow-none ps-2 "
                                    title="click the icon"
                                    readOnly
                                />
                            </div>
                        </div>
                    </div>
                
                        <button
                        className="
                        btn w-25 float-end"
                        id="btntalent"
                        onClick={()=>swal("Success","Offer Sent Successfull")}
                    >
                        Hire Now
                    </button>
                    <button
                        className="
                        btn  w-25 float-start"
                        id="btntalent"
                        onClick={()=>swal("Success","Resume copied!")}
                    >
                        Get Resume
                    </button>
                   
                    
                </div>
            );
        });
    }

    return (
        <>
        <div className="container bg-tertiary shadow-lg p-3 mb-2 mt-2" id="homefirstdiv">
            <h1>
                Getting a proffesional for your job and organazation is a high priority to us at  <span id="talentspan"> JobberLink</span>
            </h1>
            <p>Search through the below list of great talent availiable on our website and help your business grow to the next level. Note: Every list of names here are all checked and selected based on their performance.</p>
        </div>
            <div className="container">
                {info_HTMLTAG}

                <div className=" mb-3 mt-4 shadow-sm bg-body-secondary ">
                    <h3 className="ps-2 " id="jobbghomeheadh3">
                        Want to become a talent? Use the link below to Signup
                    </h3>
                    <div className="input-group mb-3 mt-2">
                        <input
                            className=" form-control  ps-3   shadow-none border-1"
                            type="text"
                            value="Be visible for employers of labour to find! click the link"
                            readOnly
                        ></input>
                        <label className=" input-group-text">
                            <Link
                                className="btn btn-primary text-light"
                                as={Link}
                                to="/TalentAuth"
                            >
                                SignUp Now
                            </Link>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
}
