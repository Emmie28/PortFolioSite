import { DeleteOutlined } from '@ant-design/icons';
import {useState} from 'react';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from 'draftjs-to-html';
import {Row, Col} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {addEducation, addEmployment} from '../../features/Resume/resumeSlice';
import { EditorState, convertToRaw } from 'draft-js';

var number = 0;
let curr = []

function VariableForm({name}) {
    const dispatch = useDispatch((state) => state.resume)
    const [toggle, setToggle] = useState(false)
    const {education} = useSelector((state) => state.resume);
    
  
    const onClick = () =>{
      setToggle(!toggle)
    }

    let editorState = EditorState.createEmpty();

    const [description, setDescription] = useState(editorState);

    
    const onEditorStateChange = (editorState) => {

      setDescription(editorState);

      setFormData((prevState) => ({
        ...prevState,
        'description': draftToHtml(convertToRaw(description.getCurrentContent()))
      }))

    }


    const [serviceList, setServiceList] = useState([{services: number}]);
    
    const handleAdd = (e) =>{
      number += 1;
      setServiceList([...serviceList, { services: number}])  
      
    };

    const removeService = (e) =>{
      const list = [...serviceList];
      
      let id = e.currentTarget.id
    
      delete list[id];
      let list2 = []
      list.map((item) => {
        if(item !== undefined )
          list2.push(item)
      })
      
      setServiceList(list2);
    }

    let namedComponent = '';

    if(name==='Education'){
      namedComponent = 'school'
    }
    else{
      namedComponent = 'companyName'
    }

    const [formData, setFormData] = useState({
      name: name,
    
      city: '',
      startDate: '',
      endDate: '',
      description:'',

    })

    const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        'id': e.target.id,
        
        [e.target.name]: e.target.value
    }))
 
    }
    
    const onSubmit = (e) => {
      
      e.preventDefault()
      curr.push(formData)
      let currObj = {...curr}

      if(name==='Employment'){
        dispatch(addEmployment(formData))
      } 
      else{
        dispatch(addEducation(currObj))
      }
      console.log(education)
         
    }


  return (
    <>
        <Row>
          <Col span={20}>
            <h2><b>{name}</b></h2>
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
      {
        toggle ? (
            <><form onSubmit={onSubmit}>
            
            { 
            serviceList.map((_,index) =>(
  
              <div style={{border: '1px solid black', borderRadius: 5, padding: 10}} id={number}>
      
              <div className="field">
                  <label className="label">{name}</label>
                  <div className="control">
                      <input 
                        name= {name}
                        id={index}
                        className="input" 
                        type="text" 
                        placeholder={name}
                        onChange={onChange}
                        />
                  </div> 
                  <br></br>

              <div style={{display: 'flex', gap: 10}}>

                  <label className="label">{namedComponent}</label>
                  <div className="control" style={{width: '40%'}}>
                      <input 
                        className="input" 
                        type="text" 
                        id={index}
                        placeholder={namedComponent} 
                        name={namedComponent}
                        onChange={onChange}/>
                  </div>

                  <label className="label">City</label>
                  <div id={index} className="control" style={{width: '40%'}}>
                      <input 
                        id={index}
                        className="input" 
                        type="text" 
                        placeholder="City" 
                        name='city'
                        onChange={onChange}/>
                  </div>
              </div><br></br>
              <div style={{display: 'flex', gap: 10}}>

                  <label className="label">Start Date</label>
                  <div id={index} className="control" style={{width: '40%'}}>
                      <input 
                        id={index}
                        className="input" 
                        type="date" 
                        placeholder="dd/mm/yyyy" 
                        name='startDate'
                        onChange={onChange}/>
                  </div>

                  <label className="label">End Date</label>
                  <div id={index} className="control" style={{width: '40%'}}>
                      <input 
                        id={index}
                        className="input" 
                        type="date" 
                        placeholder="dd/mm/yyyy" 
                        name='endDate'
                        onChange={onChange}/>
                  </div>
              </div><br></br>

              <div style={{border: '1px solid black', borderRadius: 5, padding: 10}}>
                <label className="label">Description</label>
              <Editor
                id={index}
                editorState = {description}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange} 
              />
              
              </div>
              <br></br>
              <div style={{display: 'flex', gap: 8}}>
                <button  style={{position: 'relative'}} className="button is-link is-light" id={index} onClick={handleAdd}>
                  <b>+ Education</b>
                </button>
                <button  style={{position: 'relative'}} className="button is-link is-light" type='submit'>
                  <b>Submit</b>
                </button>
                {serviceList.length > 1 && (<button id={index} style={{position: 'relative'}} className="button is-link is-light" onClick={removeService}>
                  <DeleteOutlined />
                </button>)}
              </div>
              </div>
          </div>
        
          ))}
                 
          </form> </>
        ) : (<></>)
      }<hr></hr>
      
    </>
  )
}

export default VariableForm;