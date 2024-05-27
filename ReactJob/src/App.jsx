// import  React from 'react';
import {Routes,Route} from 'react-router-dom'
import 'bootstrap';
import {Container} from 'react-bootstrap'
import Home from './page/home';
import Info from './page/Info';
import TalentAuth from './auth/talentAuth'
import PrivateRoute from './Unto/PrivateRoute'
import Job from './page/Job'
import Post from './page/post'
import Signin from './auth/Signin';
import Register from './auth/Register';
import NavigationPage from './component/navbar'
import Footer from './component/footer'
import Dashboard from './Dashboard/Admin';
import Notfound from './page/notfound';
import './index.css'
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = "application/json, multipart/form-data";
axios.defaults.headers.post['Accept'] = "application/json";

/** LOGOUT AXIOS CODE START */

  axios.interceptors.request.use(function (config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization= token ? `Bearer ${token}`: '' ;
    return config;
});
/** LOGOUT AXIOS CODE END */


function App() {
  return (
    <>
        <NavigationPage/>

            <Container fluid>


                <Routes>
                <Route index='/' element={<Home/>} />
                <Route path='/home' element={<Home/>} />

                <Route path='/Info' element={<Info/>} />
                <Route path='/Job' element={<Job/>} />
                <Route path='/Register' element={<Register/>} />
                <Route path='/Signin' element={<Signin/>} ></Route>
                <Route path='/Dashboard' element={<Dashboard/>} ></Route>
                <Route element={<PrivateRoute/>} >
                    <Route path='/TalentAuth' element={<TalentAuth/>} />
                     <Route path='/post' element={<Post />}/>
                 </Route>

                <Route path='*' element={<Notfound/>} ></Route>

            </Routes>
            </Container>
            <Footer/>






    </>
  )
}


export default App
