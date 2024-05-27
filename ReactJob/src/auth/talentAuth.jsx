

import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function TalentAuth(){
    const navigate= useNavigate();
//    const [imageTalent, setImage]= useState('');
const [error, setError]= useState([]);
const [talent, setTalent]= useState([
    "fullname" ,
    "skill",
    "email" ,
    "education",
    "category",
    "phone" ,
    "image",

]);
const handletalent=(e)=>{
    e.persist();
    setTalent({...talent, [e.target.name]: e.target.value});
};

// const handleimage=(e)=>{
//     setImage({ image: e.target.file[0] });
// };


const submitTalent=(e)=>{
    e.preventDefault();

    const datatalent= new FormData();

    datatalent.append("fullname", talent.fullname);
    datatalent.append("skill", talent.skill);
    datatalent.append("education", talent.education);
    datatalent.append("category", talent.category);
    datatalent.append("email", talent.email);
    datatalent.append("phone", talent.phone);
    // datatalent.append("image", imageTalent.image);



    axios.post(`/api/talent/` ,datatalent).then((res)=>{
        if (res.data.status === 200) {
            swal('success', res.data.message, 'success');
            setError([]);
            navigate('/Info');
        } else if(res.data.status === 422) {
            swal("All field are mandatory", " ", "error");
            setError(res.data.errors)
        }
    });
};



    return <div className="container">
        <div className="card">
            <div className="card-hearder">
                <h3 className="ps-2 border-2" id="jobbghomeheadh3">Give us the accurate infomation about yourself and your career path.</h3>
            </div>
            <div className="card-body">
                <form className=" form"  >
                    <div className="mb-3 mt-3">
                        <label className="form-label" name="fullname" >Name</label>
                        <input className="form-control shadow-none" type="text" name="fullname" placeholder='Full Name'
                        onChange={handletalent}
                        value={talent.fullname}
                        required></input>
                        <span>{error.fullname}</span>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label" name="skill" >Skills</label>
                        <input className="form-control shadow-none" type="text" name="skill" placeholder='Enter your skills'
                        onChange={handletalent}
                        value={talent.skill}
                        required>
                        </input>
                        <span>{error.skill}</span>
                    </div>
                    <div className="mb-3 mt-3">
                        <label className="form-label" name="education" >Education</label>
                        <input className="form-control shadow-none" type="text" name="education" placeholder='Academic Qualification'
                        onChange={handletalent}
                        value={talent.education}
                        required></input>
                        <span>{error.education}</span>
                    </div>

                    <div className="mt-3 mb-3 shadow-none border-0">
                    <label className='form-label' name="category" >Category</label>
                    <select
                       title='for industry'
                       name='category'
                       className=' form-select border shadow-lg'
                       onChange={handletalent}
                        value={talent.category}
                        required>

                        <option value="select...">select...</option>
                        <option value="Technology">Technology</option>
                        <option value="Finance">Finance</option>
                        <option value="Health">Health</option>
                    </select>
                     <span>{error.category}</span>

                </div>
                 <div className="input-group mb-3 mt-3">
                        <label className="input-group-text" name="expirence" >Contact Info</label>
                        <input className="form-control shadow-none" type="email" name="email" placeholder='Enter Your Email Address'
                        onChange={handletalent}
                        value={talent.email}></input>
                        <span>{error.email}</span>

                        <input className="form-control shadow-none"  type="tel" name="phone" defaultValue="+234" placeholder="Input Whatsapp Number"
                        onChange={handletalent}
                        value={talent.phone}></input>
                        <span>{error.phone}</span>

                    </div>
                    {/* <div className="mb-3 mt-3">
                        <label className="form-label" name="image">User Image</label>
                        <input className="form-control shadow-none" name="image" type="file"
                        onChange={handleimage}

                        required></input>
                        <span>{error.image}</span>

                    </div> */}
                    <div className="mb-3 mt-3">
                        <input className="form-control btn btn-primary" type="submit"
                        onClick={submitTalent}
                        ></input>
                    </div>

                </form>
            </div>


        </div>
    </div>
}
