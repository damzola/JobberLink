
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link,useNavigate  } from "react-router-dom";
import swal from "sweetalert";


import "../index.css";
import axios from "axios";

function NavigationPage() {

    const navigate = useNavigate();
    const logout = (e) => {
        e.preventDefault();

    axios.post(`/api/logout`).then(res => {
        if (res.data.status === 200) {
            localStorage.removeItem("auth_token");
            localStorage.removeItem("auth_name");
            swal("Success", res.data.message, "success");
            navigate("/");

        }
    });
};

    var Regisauth = "";
    if (!localStorage.getItem("auth_token")) {
        Regisauth = (
            <ul className=" navbar-nav nav-tabs nav-pills ps-5 border-0 gap-1 p-0 m-0 bg-0 " id="regis-ul">
                <li>
                    <Link
                        className="nav-link float-end "
                        id="signuplink"
                        as={Link}
                        to="Register"
                    >
                        SignUp
                    </Link>
                </li>
                <li>
                    <Link
                        className="nav-link float-end  "
                        as={Link}
                        to="Signin"
                        id="signinlink"
                    >
                        SignIn
                    </Link>
                </li>
            </ul>
        );
    } else {
        Regisauth = (

            <li className="  nav-link ps-5 border-0 gap-1 p-0 m-0 bg-0 ">
                <button
                 onClick={logout}
                 type="button"
                 className="btn btn-danger m-1 float-end"
             >
                 Logout
             </button>
            </li>
        );
    }

    return (
        <Navbar
            expand="lg"
            className=" navbar text-bg-light navbar-light shadow-md  sticky-top"
        >
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                    className=" text-success "
                >
                     <span id='webname'><span className="p-1" id="webnamer">Job</span>berLink</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-5 my-lg-0 gap-1 nav-pills nav-tabs  border-0  ">
                        <Nav.Link as={Link} to="/home" className=" text-dark py-2">
                            Home
                        </Nav.Link>

                        <Nav.Link as={Link} to="Info">
                            Talents
                        </Nav.Link>
                        <Nav.Link as={Link} to="Job">
                            Job
                        </Nav.Link>
                        <Nav.Link as={Link} to="post">
                            Post
                        </Nav.Link>
                      


                    </Nav>
                    {Regisauth}

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationPage;
