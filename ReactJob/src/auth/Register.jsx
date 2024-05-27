import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";


function Register() {
    const navigate = useNavigate();
    const [registerInput, setRegister] = useState({
        name: "",
        email: "",
        password: "",
        category: "",
        country: "",
        agree: "",
        error_list: [],
    });
    const handleInput = (e) => {
        e.persist();
        setRegister({ ...registerInput, [e.target.name]: e.target.value });
    };

    const submitRegister = (e) => {
        e.preventDefault();

        const datalog = {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            category: registerInput.category,
            country: registerInput.country,
            agree: registerInput.agree,
        };

        axios.post(`/api/register`, datalog).then((res) => {
            if (res.data.status === 200) {
                localStorage.setItem("auth_token", res.data.token);
                localStorage.setItem("auth_name", res.data.username);
                // RETURNING SUCCESS MESSAGE WITH SWAL FUNCTION
                swal("Success", res.data.message, "success");
                navigate("/");
            } else {
                setRegister({
                    ...registerInput,
                    error_list: res.data.validation_errors,
                });
            }
        });
    };

    return (
        <>
            <div className="  damzpage">
                <div className=" row shadow p-5  ">
                    <div className="col-md-6 textdiv">
                        <h3>Login or Create Account</h3>
                    </div>
                    <div className="col-md-6 formdiv rounded-2">
                        <h1>
                            Welcome to JobberLink
                            <p id="formp">Signup Now</p>
                        </h1>

                        <form

                            id="formbody"
                            className="row"
                        >
                            <div className="col-6">
                                <label className="form-lable mb-2">Name</label>
                                <input
                                    onChange={handleInput}
                                    value={registerInput.name}
                                    className="form-control mb-3 "
                                    type="text"
                                    name="name"
                                    placeholder="fullname"
                                />
                                <span>{registerInput.error_list.name}</span>
                            </div>

                            <div className="col-6">
                                <label className="form-lable mb-2">Email</label>
                                <input
                                    onChange={handleInput}
                                    value={registerInput.email}
                                    className="form-control mb-3 "
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                />
                                <span>{registerInput.error_list.email}</span>
                            </div>
                            <div className="col-6">
                                <label className="form-lable mb-2">
                                    Password
                                </label>
                                <input
                                    onChange={handleInput}
                                    value={registerInput.password}
                                    className="form-control mb-3 "
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                />
                                <span>{registerInput.error_list.password}</span>
                            </div>
                            <div className="col-6">
                                <label className="form-lable mb-2">
                                    Category
                                </label>
                                <select
                                    onChange={handleInput}
                                    value={registerInput.category}
                                    className="form-select mb-3"
                                    name="category"
                                >
                                    <option defaultValue="select...">
                                        select...
                                    </option>
                                    <option value="User">User</option>
                                    <option value="Admin" disabled>Admin</option>
                                </select>
                                <span>{registerInput.error_list.category}</span>
                            </div>

                            <div className="col-6">
                                <label className="form-lable mb-2">
                                    Country
                                </label>
                                <select
                                    onChange={handleInput}
                                    value={registerInput.country}
                                    className="form-select mb-3"
                                    name="country"
                                >
                                    <option>Select...</option>
                                    <option>Nigeria</option>
                                    <option>Ghana</option>
                                    <option>South Africa</option>
                                    <option>Kanya</option>
                                </select>
                                <span>{registerInput.error_list.country}</span>
                            </div>

                            <div className="input-form-group mb-3">
                                <label className="form-label">
                                    Agree to Terms/Condition
                                </label>
                                <input
                                    onChange={handleInput}
                                    value={registerInput.agree}
                                    type="text"
                                    name="agree"
                                    className="form-control"
                                    placeholder="Yes / No"
                                />
                            
                                <span>{registerInput.error_list.agree}</span>
                            </div>

                            <button
                             onClick={submitRegister}
                                type="submit"
                                id="#"
                                className="w-100 p-2 mt-2  btn-success btn  rounded-top"
                            >Submit</button>
                        </form>
                        <p id="pform">
                            Already have an account! 
                             <Link as={Link} to="/Signin">
                                 SignIn
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
