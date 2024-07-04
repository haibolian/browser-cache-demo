import { useEffect } from "react";
import Axios from 'axios'
function About () {
  useEffect(() => {
    Axios.get('/api/about')
  }, [])
  return (
    <div>
      About
    </div>
  )
}

export default About;


