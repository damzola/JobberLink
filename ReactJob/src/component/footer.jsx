// import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../index.css'
import { FaGithub, FaLinkedin, FaStackOverflow, FaTelegram } from 'react-icons/fa'

import { Link } from 'react-router-dom'

const footer = () => {
  return (
    <footer className='container-fluid text-bg-light'>

        <div className='con'></div>
        <div className='fom'></div>

        <Container className='cont rounded-top-5'>
            <Row>
                <Col className='text-center py-3'>
                  <div className='row mb-4 ' id="foothead">

                    <div className='col-6 ' id="footbody" >

                    <div className='card text-bg-light  border-0 shadow'>
                        <div className='card-header'>
                            <h5>People Employed</h5>
                        </div >
                        <div className='card-body'>
                            <p>2023 January to December

                                <span className='badge rounded-pill m-2 text-bg-danger'>49</span>
                            </p>
                            <p>2023 December to Febuary 2024

                                <span className='badge rounded-pill m-2 text-bg-danger'>28</span>
                            </p>
                            <p>March 2024 to date

                                <span className='badge rounded-pill m-2 text-bg-danger'>79</span>
                            </p>
                        </div>
                        <div className='card-footer'>
                            <p>Do you know that it may take you up to (20) or attempt before you can secure you first ever <strong>Job</strong> </p>
                        </div>

                    </div>
                    </div>
                    <div className='col-6' id="footbody" >
                        <hr/>
                    <div>
                        <h4>Partnership Company</h4>
                        <ul className='nav m-3 gap-3'>
                            <li className='nav-item '>
                               
                                <img src='./image/logo1.jpg' alt='logo' id='logoimage' className='m-1'/>
                                <Link href="#">The Eagle Eye</Link>
                             
                            </li>
                            <li className='nav-item '>
                            <img src='./image/logo1.jpg' alt='logo' id='logoimage' className='m-1'/>
                                <Link href="#">The Eagle Eye</Link>
                             
                            </li>
                            <li className='nav-item '>
                            <img src='./image/logo1.jpg' alt='logo' id='logoimage' className='m-1'/>
                                <Link href="#">The Eagle Eye</Link>
                             
                            </li>
                            <li className='nav-item '>
                            <img src='./image/logo1.jpg' alt='logo' id='logoimage' className='m-1'/>
                                <Link href="#">The Eagle Eye</Link>
                             
                            </li>
                        </ul>
                    </div>

                    <div className='contact m-4 border-0 text-dark'>
                        <h4>Want to know about us? </h4>
                        <Link className='' id="linkmove"  as={Link} to="#" >Contact</Link>
                        <Link className='' id="linkmove" as={Link} to="#" >Help</Link>
                        <Link className='' id="linkmove" as={Link} to="#" >About</Link>
                    </div>

                    <div className='community border-0 m-4'>
                        <h4>Join our like minded community</h4>
                        <Link className='p-3 text-dark' id="linkmove" as={Link} to="#">
                        <FaGithub/>
                        </Link>
                        <Link className='p-3 text-dark' id="linkmove" as={Link} to="#">
                        <FaLinkedin/>
                        </Link>
                        <Link className='p-3 text-dark' id="linkmove" as={Link} to="#">
                        <FaStackOverflow/>
                        </Link>
                        <Link className='p-3 text-dark' id="linkmove" as={Link} to="#">
                        <FaTelegram/>
                        </Link>


                    </div>

                    </div>
                  </div>

                <p>Copyright &copy; 2024  <span id='webname'>JobberLink</span></p>
                </Col>
            </Row>
        </Container>



    </footer>
  )
}

export default footer
