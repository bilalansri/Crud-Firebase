import { getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { day2ref } from "../firebase/collection"


export default ()=>{

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const [users, setUsers] = useState([])

  useEffect(()=>{
    
    getDocs(day2ref)
    .then(res => {
      let info = res.docs.map(doc=>({
        data : doc.data(),
        id : doc.id
    }))
    setUsers(info)
    })
    .catch(err => console.log(err.message))

  }, [])

  
  const loginForm = (e)=>{
    e.preventDefault()


    let user = users.find( user => user.data.email == email || user.data.password == password)
    
    if(user){
      
      window.location.href='/'
      let a = Math.round(Math.random()*10000)

      // store.dispatch({
      //   type : 'LOGIN_USER',
      //   payload : a
      // })

      localStorage.setItem('key', a)

    } else {
      alert('User Not Found')
    }


  }


    return <div>
    
  <div className="section" />
  <main>
    <center>
      <img
        className="responsive-img"
        style={{ width: 250 }}
        src="https://i.imgur.com/ax0NCsK.gif"
      />
      <h5 className="indigo-text">Please, login into your account</h5>
      <div className="container">

        <div className="z-depth-1 grey lighten-4 row" style={{
            display: "inline-block",
            padding: "32px 48px 0px 48px",
            border: "1px solid #EEE"
          }}
        >
          <form className="col s12" onSubmit={loginForm}>

            <div className="row">
              <div className="input-field col s12">
                <input className="validate" type="email" placeholder="Enter your email" onChange={e => setEmail(e.target.value)} value={email}/>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input className="validate" type="password" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} value={password}/>                
              </div>
              <label style={{ float: "right" }}>
                <a className="pink-text" href="#!" >
                  <b>Forgot Password?</b>
                </a>
              </label>
            </div>

            <br />
            
            <center>
              <div className="row">
                <button type="submit" name="btn_login" className="col s12 btn btn-large waves-effect indigo"
                >
                  Login
                </button>
              </div>
            </center>
          </form>
        </div>
      </div>
    </center>
  </main>
</div>

}