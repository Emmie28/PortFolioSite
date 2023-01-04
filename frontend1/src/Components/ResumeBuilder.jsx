
import PersonalData from './ResumeForms/PersonalData'
import VarableForm from './ResumeForms/VariableForm'
import SkillsForm from './ResumeForms/SkillsForm'
import ProfileForm from './ResumeForms/ProfileForm'
import ResumeDisplay from './ResumeDisplay'
import { Link} from 'react-router-dom';
import { Row, Col} from 'antd';



function ResumeBuilder() {
  

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
        <Link to='/ResumeDisplay'><ResumeDisplay /></Link>
        </Col>
    </Row>
        
        
    </>
  )

}

export default ResumeBuilder