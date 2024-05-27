
// import { Link } from "react-router-dom";
import {FaLocationArrow,FaMoneyBill,FaBriefcase, FaBuilding,FaUserCheck,FaMedal} from "react-icons/fa";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import LatestJson from '../Database/latest.json'



function Latest() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <div>
        {LatestJson.map((value, d)=>{
            return(
                 <div className="d-flex w-100 " id="latestposthead" key={d.id}>

                                <div className="col border m-2" id="latestpost">
                                    <div className="d-flex justify-content-center ">
                                        <p className="ps-3">
                                            <span className="text-black">
                                                <FaBriefcase />{" "}
                                            </span>
                                            {value.type}
                                        </p>
                                        <p className="ps-3">
                                            <span className="text-black">
                                                <FaLocationArrow />{" "}
                                            </span>
                                            {value.location}
                                            
                                        </p>
                                        <p className="ps-3">
                                            <span className="text-black">
                                                <FaMoneyBill />{" "}
                                            </span>
                                            {value.salary}
                                            
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p className="ps-3">
                                            
                                            <span className="text-black">
                                                <FaUserCheck />{" "}
                                            </span>
                                            {value.job_type}
                                        </p>
                                        <p className="ps-3">
                                            
                                            <span className="text-black">
                                                <FaBuilding />{" "}
                                            </span>
                                            {value.company}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <p className="ps-3">
                                            <span className="text-black">
                                                <FaMedal />{" "}
                                            </span>
                                            {value.education}
                                        </p>
                                    </div>

                                    <Button variant="primary" onClick={handleShow}
                                    className="btn btn-secondary">
                                Apply
                            </Button>
                                </div>

                               
                            </div> 
      
                
            )
        })}

                            {LatestJson.map((value) =>{
                                return(
                                    <>                                    
                                    <Offcanvas  show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Latest Job</Offcanvas.Title>
                                </Offcanvas.Header>

                                <Offcanvas.Body>
                                <div className="col border m-2"  id="latestpost">
                                    
                                        <> 
                                        <div className="d-flex">
                                        <p className="ps-3">
                                            <span className="text-black">
                                                <FaBriefcase />
                                            </span>
                                            {value.type}
                                        </p>
                                        <p className="ps-3">
                                            <span className="text-black">
                                                <FaLocationArrow />
                                            </span>
                                            {value.location}
                                        </p>
                                        <p className="ps-3">
                                            <span className="text-black">
                                                <FaMoneyBill />
                                            </span>
                                            {value.salary}
                                            
                                        </p>
                                    </div>

                                    <div className="d-flex">
                                        <p className="ps-3">
                                            
                                            <span className="text-black">
                                                <FaUserCheck />
                                            </span>
                                           {value.job_type}
                                        </p>
                                        <p className="ps-3">
                                            
                                            <span className="text-black">
                                                <FaBuilding />
                                            </span>
                                            {value.company}
                                        </p>
                                    </div>
                                     <div className="d-flex">
                                        <p className="ps-3">
                                            <span className="text-black">
                                                <FaMedal />
                                            </span>
                                           {value.education}
                                        </p>
                                    </div>
                                    </>                                                          
                                   
                                    <button 
                                    onMouseOver={()=>alert("Job Not Avialiable.")}
                                    className="btn btn-primary "
                                    id="latestbtnid">
                                        Apply
                                    </button>
                                    
                                </div>
                                </Offcanvas.Body>                                
                            </Offcanvas>
                                    </>
                                )
                            })}
                            

                           

                            
    </div>
  )
}

export default Latest
