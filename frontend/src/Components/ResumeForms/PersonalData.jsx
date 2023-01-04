import {useState} from 'react';
import { Col, Row } from 'antd';
import { useDispatch } from 'react-redux'
import { addProfile } from '../../features/Resume/resumeSlice';

const PersonalData = () => {
  
  const dispatch = useDispatch((state) => state.resume)

    const [expand, setExpand] = useState(false)
    
  
    const onClick = () =>{
      setExpand(!expand)
    }

    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      email: '',
      headline: '',
      phone: '',
      address: '',
      postal: '',
      city: '',
      gender: '',
      nationality: '',
    })
    


    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value
    }))
    }

    const onSubmit = (e) =>{

      e.preventDefault()
      
      dispatch(addProfile(formData))
    
    }
  
    return (
    <>
      <Row>
      
        <Col span={20}>
          <h2><b>Personal Details</b></h2>
        </Col>
        <Col span={4}>
        <button onClick={onClick} className="button is-link is-light">
          {expand ? (
            <><b>^</b></>
            ) : (<>
              <b>v</b>
            </>) }
          
        </button>
        </Col> 
      
      </Row>
      <br></br>
      {expand ? (
        <> <form onSubmit={onSubmit}>
          <div className="field">
          <div style={{display: 'flex', gap: 10}}>
            <label className="label">First Name</label>
            <div className="control" style={{width: '40%'}}>
              <input 
                className="input" 
                type="text" 
                placeholder="First Name"
                name='firstname'
                onChange={onChange}/>
            </div>
            <label className="label">LastName</label>
            <div className="control" style={{width: '40%'}}>
              <input 
                className="input" 
                type="text" 
                placeholder="Last Name"
                name='lastname'
                onChange={onChange}/>
            </div>
          </div><br></br>
  
            <label className="label">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input 
                className="input is-danger" 
                type="email" 
                placeholder="Email input"
                name='email'
                onChange={onChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
            <label className="label">HeadLine</label>
            <div className="control">
              <input 
                className="input" 
                type="text" 
                placeholder="HeadLine"
                name='headline'
                onChange={onChange}/>
            </div><br></br>
  
            <div style={{display: 'flex', gap: 10}}>
            <label className="label">Phone Number</label>
            <div className="control" style={{width: '40%'}}>
              <input 
                className="input" 
                type="phone" 
                placeholder="Phone Number"
                name='phone'
                onChange={onChange}/>
            </div>
            <label className="label">Address</label>
            <div className="control" style={{width: '40%'}}>
              <input 
                className="input" 
                type="text" 
                placeholder="Address"
                name='address'
                onChange={onChange}/>
            </div>
            </div><br></br>
  
            <label className="label">Post Code</label>
            <div className="control">
              <input 
                className="input" 
                type="number" 
                placeholder="Post code"
                name='postal'
                onChange={onChange}/>
            </div>
            <label className="label">City</label>
            <div className="control">
              <input 
                className="input" 
                type="text" 
                placeholder="City"
                name='city'
                onChange={onChange}/>
            </div><br></br>
            
  
            
            <label className="label">Gender</label>
            <div className="control">
              <input 
                className="input" 
                type="text" 
                placeholder="Gender"
                name='gender'
                onChange={onChange}/>
            </div>
            <label className="label">Nationality</label>
            <div className="control" >
              <input 
                className="input" 
                type="text" 
                placeholder="Nationality"
                name='nationality'
                onChange={onChange}/>
            </div><br></br>
            
  
          </div>
          <div style={{display: 'flex', gap: 8}}>
            <button  style={{position: 'relative'}} className="button is-link is-light" >
              <b>+ Driver's License</b>
            </button>
            <button  style={{position: 'relative'}} className="button is-link is-light" >
              <b>+ Civil Status</b>
            </button>
            <button  style={{position: 'relative'}} className="button is-link is-light">
              <b>+ Website</b>
            </button>
            <button  style={{position: 'relative'}} className="button is-link is-light">
              <b>+ Linkedln</b>
            </button>
            <button  style={{position: 'relative'}} className="button is-link is-light">
              <b>+ Custom Field</b>
            </button>
      </div>
      <button className="button is-link is-light">Submit</button>
      </form>
        </>
      ) : (<></>)}
      <hr></hr>
      
    </>
      
    )
  }

  export default PersonalData;