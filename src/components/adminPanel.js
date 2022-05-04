import { deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useEffect , useState} from 'react'
import { day2ref } from '../firebase/collection'
import { db } from '../firebase/firebase'
import '../App.css'


export default ()=>{
    
  const [users, setUsers] = useState([])
  const [name1 , setName1] = useState('')
  const [name2 , setName2] = useState('')
  const [email , setEmail] = useState('')
  const [phone , setPhone] = useState()
  const [password , setPassword] = useState('')
  const [uid , setUid] = useState('')



//GET DOC
const getusers = ()=>{

    getDocs(day2ref)
    .then(res => {
      let info = res.docs.map(doc=>({
        data : doc.data(),
        id : doc.id
    }))
    setUsers(info)
    })
    .catch(err => console.log(err.message))
}
    

    useEffect(()=>{
        getusers()
    
      }, [])


// Delete Data
const delDoc = (id)=>{

    const delRef = doc(db, 'crudform', id)
        deleteDoc(delRef)
        .then(res=>{
        console.log('Document Deleted');
        })
        .catch(err=>console.log(err.message))
    
        getusers()
    }
    

    //EDIT DATA
    const editDoc = (id, indx)=>{
        document.getElementById('updfrm').style.display = 'block'
        
        setUid(id)
        
        setName1(users[indx].data.name1)
        setName2(users[indx].data.name2)
        setEmail(users[indx].data.email)
        setPhone(users[indx].data.phone)
        setPassword(users[indx].data.password)
    }
    
const updateForm = (e)=>{
        e.preventDefault()
        
        
        const docRef = doc(db, 'crudform', uid)
        updateDoc(docRef, {
            name1 : name1,
            name2 : name2,
            email : email,
            phone : phone,
            password : password
        })
        .then(res=>{
            
            console.log('Document Update')
        })
        .catch(err=>console.log(err.message))
        
        
        setName1('')
        setName2('')
        setEmail('')
        setPhone('')
        setPassword('')
        getusers()
        
        document.getElementById('updfrm').style.display = 'none'
    }
    
    
    return <div>
        <table>
            <tbody>
            <tr>
                <td><b>USER NAME</b></td>
                <td><b>EMAIL</b></td>
                <td><b>PHONE NO.</b></td>
                <td><b>PASSWORD</b></td>
                <td><b>Edit/Delete</b></td>
            </tr>

            {
                users.map((user, indx)=>{
                    return <tr key={user.id}>
                        <td>{user.data.name1} {user.data.name2}</td>
                        <td>{user.data.email}</td>
                        <td>{user.data.phone}</td>
                        <td>{user.data.password}</td>
                        <td>
                            <button className="waves-effect waves-light btn" onClick={e => editDoc(user.id , indx)}>Edit</button>
                            /
                            <button className="waves-effect waves-light btn" onClick={e => delDoc(user.id)}>Delete</button>
                        </td>
                    </tr>
                })
            }

            </tbody>
        </table>


    <form className="col s4" onSubmit={updateForm} id='updfrm' >
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
          Update User
        </button>
      </div>
    </div>
  </form> 

    </div>
}