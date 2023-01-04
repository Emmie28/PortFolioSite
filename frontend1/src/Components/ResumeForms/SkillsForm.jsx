import { DeleteOutlined } from '@ant-design/icons';
import {useState} from 'react'
import { Col, Row, Slider, Tag } from 'antd';
import { useDispatch, useSelector} from 'react-redux';
import { addEducation, addHobbies, addLanguages, addSkills } from '../../features/Resume/resumeSlice';
import { useEffect } from 'react';

let num = 0;
function SkillsForm({name}) {
  
  const dispatch = useDispatch((state) => state.resume)
  const {skills} = useSelector((state) => state.resume)
  var {languages} = useSelector((state) => state.resume)
  var {hobbies} = useSelector((state) => state.resume)
 
  const [formData, setFormData] = useState({
    name: name,
  })

  const [tags, setTags] = useState({})
  const [skill, setSkill] = useState('')

    const [serviceList, setServiceList] = useState([{services: ''}]);
    
    const handleAdd = () =>{
      setServiceList([...serviceList, { services: ""}])
    };



    const removeService = (index) =>{
      const list = [...serviceList];
      list.splice(index, 1);
      setServiceList(list);
    }

    const [inputValue, setInputValue] = useState(0);

    const onChange = (newValue) => {
      setInputValue(newValue);
      setFormData((prevState) => ({
        ...prevState,
        ['level' + num]: inputValue
    }))
    };
    
    const onChangeSkill = (e) =>{
      setFormData((prevState) => ({
        ...prevState,
        [name + num]: e.target.value
    }))
    setSkill(e.target.value)
      
    }

    const handleAd = () => {

      setFormData((prevState) => ({
        ...prevState,
        [name + num]: skill
    }))
    setTags(formData)
      num += 1
    }


    const  onSubmit = () =>{ 
      if(name === 'Skills')
        dispatch(addSkills(tags))
      else if(name==='Languages')
        dispatch(addLanguages(tags))
      else
        dispatch(addHobbies(tags))
  
    }

    const [toggle, setToggle] = useState(false)

    const onClick = () => {
        setToggle(!toggle)
    }

    //Remove skill
    const handleRemove = ({value}) => {
      var newSkills = tags
      
       const asArray = Object.entries(newSkills) 

       //Get the id of the object.
       const id = asArray.filter(([k,v]) => v === value)[0][0].slice(-1)
       
       const filtered = asArray.filter(([k,v]) => v !== value)
       const filtered1 = filtered.filter(([k,v]) => k !== ('level' + id))
       const justString = Object.fromEntries(filtered1) // convert back to an object
      setTags(justString)
      setFormData(justString)
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
      {toggle ? (<>
      {serviceList.map((_, index) => (
        <div className="field">
          
        <label className="label">{name}</label>
        <div className="control">

          <input 
            className="input" 
            name={name} 
            type="text" 
            placeholder={name} 
            onChange={onChangeSkill}
          />

        </div>
        {name !== 'Hobbies' && (
        <>
            <div class="slidecontainer">
            <p>Level</p>
            <Slider
              
              min={0}
              max={100}
              onChange={onChange}
              value={typeof inputValue === 'number' ? inputValue : 0}
        />
            </div>
            <div>
              
              {tags !== undefined && (
               
                Object.entries(tags).map(([key, value]) => {
                  
                  if(key.includes(name))
                    return (<><Tag closable onClose={() => handleRemove({value})}>{value}</Tag></>)
                  })
                ) }
            </div>
               
        </>
        )}
             {serviceList.length > 1 && (<button className="button is-link is-light" onClick={removeService} ><DeleteOutlined /></button>)}
            
        </div>
      ))}
      <div>
             { name === 'Hobbies' &&(<>
              {tags !== undefined && (
               
                Object.entries(tags).map(([key, value]) => {
                  
                  if(key.includes(name))
                    return (<><Tag closable onClose={() => handleRemove({value})}>{value}</Tag></>)
                  })
                ) }
              </>)}
            </div>
      <div style={{display: 'flex', gap: 8}}>
        
        <button 
            className="button is-link is-light" 
            onClick={handleAd}
            style={{position: 'relative'}}>
                Add {name}
        </button>
                  
        <button 
            className="button is-link is-light" 
            style={{position: 'relative'}} onClick={onSubmit}>
                Done
        </button>

      </div>
        
      </>) : (<></>)}
      <hr></hr>  
       
    </>
  )
}

export default SkillsForm