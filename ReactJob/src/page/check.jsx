// import React from 'react'
import Searchable from './Searchable';
import Mydata from '../Database/data.json'


function check() {
   
  return (
    <div>
     <Searchable placeholder='Make a search..' data={Mydata} />   
     
      <h1>Please show....</h1>
      
    </div>
  )
}

export default check
