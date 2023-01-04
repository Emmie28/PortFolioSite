
import PersonalData from './ResumeForms/PersonalData'
import VarableForm from './ResumeForms/VariableForm'
import SkillsForm from './ResumeForms/SkillsForm'
import ProfileForm from './ResumeForms/ProfileForm'
import { useSelector} from 'react-redux'
import { HeatMapOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';

import { Row, Col, Progress} from 'antd';



function ResumeBuilder() {

  
  const {profile} = useSelector((state) => state.resume);
  const {profileDesc} = useSelector((state) => state.resume);
  const {skills} = useSelector((state) => state.resume)
  const {languages} = useSelector((state) => state.resume)
  const {hobbies} = useSelector((state) => state.resume)
  const filteredProfile = profile
  
  console.log(skills)
  const userDetails = {
    name: '',
    headline: '',
    
  }

  const userContact = {
    email: '',
    phone: '',
    address: '',
   
  }

  

  if(filteredProfile){
    Object.entries(filteredProfile).map(([key, value]) => {
      if(key === 'firstname')
        userDetails.name = value
      if(key === 'lastname')
        userDetails.name += ' ' + value
      if(key === 'email')
        userContact.email = value
      if(key === 'phone')
        userContact.phone = value
      if(key === 'address')
        userContact.address = value
      if(key === 'headline')
        userDetails.headline = value
      if(key === 'postal'){
        userContact.address += ',' + value
      }
        
      if(key === 'city')
        userContact.address += ',' + value
    })
  }

  const {employment} = useSelector((state) =>state.resume)
  const {education} = useSelector((state) => state.resume)
  console.log(profileDesc)
  
  

  return (
    
    <>  
    <div></div>
    <Row>
        <Col span={16}>

          <PersonalData />
          <VarableForm name='Education'/>
          <VarableForm name='Employment'/>
          <SkillsForm name='Skills'/>
          <SkillsForm name='Languages'/>
          <SkillsForm name='Hobbies' />
          <ProfileForm />
        </Col>
        <Col span={8}>
          <div style={{border: '1px solid black', borderRadius: 5, minHeight: '75%', padding: 10}}>
            <div style={{backgroundColor: 'black',color: 'white', minHeight: '75%', padding: 5}}>
              {
                userDetails !== undefined && (Object.entries(userDetails).map(([key,value]) =>{

                  return <>
                  <Row>
                  {(key === 'name') && (
                      
                      <Col span={24}><h2 style={{color: 'white'}}>{value}</h2></Col> 
                  
                  )}  
                   {(key === 'headline') && (
                      
                      <Col span={24}><p style={{color: 'white', fontSize: 10, fontWeight: 8}}>{value}</p></Col>   
                    
                  )}
                  
                  </Row>
                  </>
                }))
              }
              <Row>
                {
                userContact !== undefined && (Object.entries(userContact).map(([key,value]) =>{
                  let icon = ""
                  let num = 8
                  if(key==='email')
                    icon = <MailOutlined />
                  else if(key==='phone'){
                    icon = <PhoneOutlined />
                  num = 6}
                  else if(key==='address'){
                    icon = <HeatMapOutlined />
                    num = 10}

                  return(
                  <>
                    <Col span={num} style={{color: 'white', fontSize: 10, fontWeight: 8}}>{icon }{value}</Col>
                  </>)
                }))
              }
              </Row>
              
            </div>
            
            <Row>
              
              <Col span={16}>
              <Col span={24}><h3><b>Profile</b></h3></Col>
              <Col span={24} style={{fontSize: 10, fontWeight: 8}}><p dangerouslySetInnerHTML={{__html: `${profileDesc.description}`}}></p></Col>
              <div><b>Education</b><br></br></div>
              <Row style={{fontSize: 10, fontWeight: 8}}>
                
                  <Col span={12} >{education.Education}</Col>
                  <Col span={12}>{education.startDate} to {education.endDate}</Col>
                  <Col span={24}>{education.school}</Col>
                  <Col><h1><b>Description</b></h1><p dangerouslySetInnerHTML={{__html: `${education.description}`}}></p></Col>
                  
                
              </Row>
              
              <br></br>

              <div><h2><b>Employment</b></h2></div>

              <Row style={{fontSize: 10, fontWeight: 8}}>

                  <Col span={12} >{employment.companyName}</Col>
                  <Col span={12}>{employment.startDate} to {employment.endDate}</Col>
                  <Col span={24}>{employment.Employment}</Col>
                  <Col span={24}><h1><b>Description</b></h1><p dangerouslySetInnerHTML={{__html: `${employment.description}`}}></p></Col>
                  <Col><p dangerouslySetInnerHTML={{__html: `${profileDesc.description}`}}></p></Col>
              </Row>

             
              
              </Col>
              <Col span={8}>
                <div><b>Hobbies</b></div>
                <div style={{fontSize: 10, fontWeight: 8}}>
                {hobbies !== undefined &&(Object.entries(hobbies).map(([key, value]) => {
                  return(<>
                    <ul>
                      <li>{value}</li>
                    </ul>
                  </>)
                }))}</div> <br></br>
                <div><b>Skills</b></div> 
                <div style={{fontSize: 10, fontWeight: 8}}>
                {skills !== undefined && (Object.entries(skills).map(([key,value]) => {
                 if(key.includes('Skills') && key !== 'name')
                  return( <><p>{value}</p></>)
                 if(key.includes('level'))
                  return(<><p><Progress percent={value} steps={5} /></p></>)
                }))}</div><br></br>

                <div><b>Languages</b></div> <div style={{fontSize: 10, fontWeight: 8}}>
                {languages !== undefined && (Object.entries(languages).map(([key,value]) => {
                 if(key.includes('Languages') && key !== 'name')
                  return( <><p>{value}</p></>)
                 if(key.includes('level'))
                  return(<><p><Progress percent={value} steps={5} /></p></>)
                }))}</div>
              </Col>
            </Row>
          </div>
        </Col>
    </Row>
        
        
    </>
  )

}

export default ResumeBuilder