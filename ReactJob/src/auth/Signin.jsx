// import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { FaEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const Signin = () => {

    const navigate= useNavigate();
    const [loginInput, setloginInput]= useState({
        email:'',
        password: '',
        error_list: [],
    })
    const handlelogin = (e) => {
        e.persist();
        setloginInput({...loginInput, [e.target.name]: e.target.value});
    }
    const loginsubmit = (e) => {
        e.preventDefault();

        const datalog={
            email:loginInput.email,
            password:loginInput.password,
        }
        axios.post(`/api/signin`, datalog).then(res =>{
            if (res.data.status === 200) {
                localStorage.setItem("auth_token", res.data.token);
                localStorage.setItem("auth_name", res.data.username);
                swal("success", res.data.message, "success");
                navigate("/");
            }else if(res.data.message === 401) {
                swal("warning", res.data.message, "warning");
            }else{
                setloginInput({...loginInput, error_list: res.data.validation_errors  });
            }
        }

        )
    }

    return (
        <div className="  damzpage">
            <div className=" row  shadow p-5  ">
                <div className="col-md-6 textdiv">
                    <h3>Login or Create Account</h3>
                </div>
                <div className="col-md-6 formdiv rounded-2">
                    <h1>
                        Welcome to JobberLink
                        <p id="formp">Login Now</p>
                    </h1>

                    <form id="formbody" >
                        <div className="col-6 input-group mb-2">
                            <span id="span" className="input-group-text ">
                                <FaEnvelope />
                            </span>
                            <input
                            onChange={handlelogin}
                             value={loginInput.email}
                                className="form-control "
                                type="email"
                                name="email"
                                placeholder="email"

                            />

                        </div>
                        <span className="p-2 mt-2 ">
                                {loginInput.error_list.email}
                            </span>


                        <div className="col-6 mb-2 input-group">
                            <span id="span" className="input-group-text ">
                                <FaLock />
                            </span>
                            <input
                             onChange={handlelogin}
                             value={loginInput.password}
                                className="form-control "
                                type="password"
                                name="password"
                                placeholder="Password"

                            />
                            </div>
                            <span className="p-2 mt-2 ">
                            {loginInput.error_list.password}
                            </span>


                        <button
                        onClick={loginsubmit}
                            type="submit"
                            id="#"
                            className="w-100 p-2 mt-2  btn-success btn  rounded-top"
                        >Submit</button>
                    </form>
                    <p id="pform">
                        Don&apos;t Have an account !

                          <Link as={Link} to="/Register">
                              SignUp
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;
