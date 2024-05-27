// import React from 'react'
import Navbar from './Navbar'
import Layout from './Layout'
import Footer from './Footer'
// import{Home} from './Home'

export default function Admin(){
    return (

       <div className=' mt-1 '>
            <Navbar />

            <div className='py-3 mt-3'>
                <div>
                     <Layout/>
                </div>
                <div>
                    <main>
                        <p>Welcome to the Admin panel user</p>
                    </main>
                </div>

                <Footer/>

            </div>
       </div>




    )
}


