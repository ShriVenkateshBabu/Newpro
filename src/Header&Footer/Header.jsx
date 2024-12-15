import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Header = ({title="portfolio"}) => {
  
  let navigate = useNavigate()
  function GotoGitHub(){
   navigate() 
  }
  function GotoLinkeldin(){

  }
  return (
    <header
    className='header'
    >
    {title}
   <button ><Link to="https://github.com/ShriVenkateshBabu/Projects.git"><FaGithub/>
   </Link>
   </button>
   <button ><Link to="https://www.linkedin.com/in/shri-venkatesh-babu-b-592324274"><FaLinkedin/></Link></button>
    </header>
  )
}

export default Header
