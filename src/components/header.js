import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export default  ()=>{

  const [a, setA] = useState('')
  
  useEffect(()=>{
      setA(localStorage.getItem('key'))


    }, [])



  const logout = ()=>{
    setA(localStorage.clear())
  }


    return <nav>
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo center">
        MUHAMMAD BILAL
      </Link>
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li>
          <Link to="/">Home</Link>
        </li>

        {
          a ? <>
        <li>
          <Link to="/signup" onClick={logout}>LogOut</Link>
        </li>  
        <li>
          <Link to="/admin">Admin Panel</Link>
        </li>
          
          </> : <>
        <li>
          <Link to="/signup">Register</Link>
        </li>
        <li>
          <Link to="/login">LogIn</Link>
        </li>
          
          </>
        }
      </ul>
    </div>
  </nav>
  
}