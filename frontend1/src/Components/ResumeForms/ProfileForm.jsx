import {useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Row, Col} from 'antd';
import {useSelector, useDispatch} from 'react-redux';
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { addProfileDesc } from '../../features/Resume/resumeSlice';

function ProfileForm() {

  const dispatch = useDispatch((state) => state.resume);

  
  let editorState = EditorState.createEmpty();
  const [formData, setFormData] = useState('')
 
    const [description, setDescription] = useState(editorState);
    
    const onEditorStateChange = (editorState) => {
      setDescription(editorState);
      setFormData((prevState) => ({
        ...prevState,
        'description': draftToHtml(convertToRaw(description.getCurrentContent()))
    }))
    }

    const onSubmit = () =>{
      dispatch(addProfileDesc(formData))
      
    }


    const [toggle, setToggle] = useState(false)
    const onClick = () => {
        setToggle(!toggle)
    }
  return (
    

    <>
        <Row>
            <Col span={20}>
                <h2><b>Profile</b></h2>
            </Col>
            <Col span={4}>
            <button onClick={onClick} className="button is-link is-light">
            {toggle ? (
            <><b>^</b></>
            ) : (<>
              <b>v</b>
            </>) }
          
        </button>
            </Col>
        </Row>
        
        
      <br></br>
      {toggle ? (<>
        <Row>
            <Col span={16}>
            <div style={{border: '1px solid black', borderRadius: 5, padding: 10}}>
            <label className="label">Description</label>
              <Editor
                editorState = {description}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"  
                onEditorStateChange={onEditorStateChange} 
              />
            </div>
            </Col>
            <Col span={4}></Col>
            <button onClick={onSubmit} className="button is-link is-light">Submit</button>
        </Row>
        
      </>) : (<></>)}
      
    </>
  )
}

export default ProfileForm