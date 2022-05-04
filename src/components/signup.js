import { useState } from "react"
import { addDoc } from "firebase/firestore"
import { day2ref } from "../firebase/collection"
 

export default ()=>{

  const [name1 , setName1] = useState('')
  const [name2 , setName2] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState()
  const [password , setPassword] = useState('')

  const signupForm = (e)=>{

    e.preventDefault()

        if(name1 == '' || name2 == '' || email == '' || phone == '' || password == ''){
            return
        }

        addDoc(day2ref, {
          name1 : name1,
          name2 : name2,
          email : email,
          phone : phone,
          password : password
        })
        .then(res=>{
            
            alert('SignUp Succeed')
        })
        .catch(err=>console.log(err.message))

        
        setName1('')
        setName2('')
        setEmail('')
        setPhone('')
        setPassword('')
  }



    return <form className="col s4" onSubmit={signupForm}>
    <div className="row">

      <div className="input-field col s12">
        <input id="FirstName" type="text" className="validate" placeholder="First Name"  onChange={e=>setName1(e.target.value)} value={name1}/>
      </div>

      <div className="input-field col s12">
        <input id="LastName" type="text" className="validate" placeholder="Last Name"   onChange={e=>setName2(e.target.value)} value={name2}/>
      </div>

      <div className="input-field col s12">
        <input id="Email" type="email" className="validate" placeholder="Email"  onChange={e=>setEmail(e.target.value)} value={email} />
      </div>

      <div className="input-field col s12">
        <input id="Phone" type="number" className="validate" placeholder="Phone"  onChange={e=>setPhone(e.target.value)} value={phone}/>
      </div>

      <div className="input-field col s12">
        <input id="Password" type="password" className="validate" placeholder="Password"  onChange={e=>setPassword(e.target.value)} value={password}/>
      </div>

      <div className="input-field col s12">
        <button type="submit" className="waves-effect waves-light btn">
          Sign Up
        </button>
      </div>
    </div>
  </form> 
}