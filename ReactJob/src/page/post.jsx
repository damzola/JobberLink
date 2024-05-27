// import React from 'react'

import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";


function Post() {
    const navigate= useNavigate();
    const [postline, setpostline]= useState({
        "title_post":'',
        "company":'',
        "category":'',
        "skill":'',
        "education":'',
        "error_note": [],
    });
    const handlepost=(e)=>{
        e.persist();
        setpostline({...postline, [e.target.name]: e.target.value});
    };
    const submitpost=(e)=>{
        e.preventDefault();
        const postdata={
            title_post:postline.title_post,
            company:postline.company,
            category:postline.category,
            skill:postline.skill,
            education:postline.education,

        };

        axios.post(`/api/job`, postdata).then((res)=>{
            if (res.data.status === 200) {
                swal("success", res.data.message, "success"),
                navigate('/job');
            } else {
                setpostline({
                    ...postline,
                    error_note: res.data.validation_errors,
                });
            }
        })
    }

  return (
    <div className='container'>
         <div className="container">
                    <h5 className="shadow" id="postingjob">Post your availiable job  </h5>
                    <div className="card">
                        <div className="card-header">
                            <img src="/image/jobs.jpg" width="100%" alt=""
                            />
                        </div>

                    </div>
                </div>



        <div className='m-auto mt-3 mb-3'>
            <div className="card">
                <div className="card-header text-center " >
                    <h1>Post your Jobs</h1>
                </div>
                <div className="card-body">
            <form className=' '>
                <div className="mt-3 mb-3 shadow-none border-0">
                    <label className='form-label' name="title" >Job Title</label>
                    <input
                    type='text'
                    title='for job type'
                    name='title_post'
                    placeholder='input job title'
                    className='form-control border-0 shadow-lg'
                    onChange={handlepost}
                    value={postline.title}
                    ></input>
                    <span>{postline.error_note.title_post}</span>
                </div>
                <div className="mt-3 mb-3 shadow-none border-0">
                    <label className='form-label' name="category" >Industry</label>
                    <select
                       title='for industry'
                       name='category'
                       className=' form-select border-0 shadow-lg'
                       onChange={handlepost}
                       value={postline.industry}
                       >
                        <option value="select...">select...</option>
                        <option value="Technology">Technology</option>
                        <option value="Finance">Finance</option>
                        <option value="Health">Health</option>
                    </select>
                    <span>{postline.error_note.category}</span>
                </div>
                <div className="mt-3 mb-3 shadow-none border-0">
                    <label className='form-label' name="company" >Organization Name</label>
                    <input
                    type='text'
                    title='for company name'
                    name='company'
                    placeholder='input company name '
                    className='form-control border-0 shadow-lg'
                    onChange={handlepost}
                    value={postline.company}
                    ></input>
                    <span>{postline.error_note.company}</span>
                </div>
                <div className="mt-3 mb-3 shadow-none border-0">
                    <label className='form-label' name="title" >Required Skills</label>
                    <input
                    type='text'
                    title='use coma(,) for multiple skills'
                    name='skill'
                    placeholder='input skills'
                    className='form-control border-0 shadow-lg'
                    onChange={handlepost}
                    value={postline.skill}
                    ></input>
                    <span>{postline.error_note.skill}</span>
                </div>

                <div className="mt-3 mb-3 shadow-none border-0">
                    <label className='form-label' name="title" >Academic Requirement</label>
                    <input
                    type='text'
                    title='for academic'
                    name='education'
                    placeholder='input education requirement'
                    className='form-control border-0 shadow-lg'
                    onChange={handlepost}
                    value={postline.education}
                    ></input>
                    <span>{postline.error_note.education}</span>
                </div>
                <input
                type='submit'
                onClick={submitpost}
                className="form-control btn btn-primary"
                ></input>
            </form>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Post
