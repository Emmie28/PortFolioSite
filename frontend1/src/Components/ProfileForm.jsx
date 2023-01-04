import { useState, useEffect } from 'react'
import { useDispatch, useSelector} from 'react-redux'

import { toast } from 'react-toastify'
import {createProfile, getProfile, reset} from '../features/profile/profileSlice' 

function ProfileForm() {
    const dispatch = useDispatch()
    dispatch(getProfile())
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        phone: '',
        profession: '',
        
    })

    const {firstname, lastname, email, address, phone, profession} = formData;
    const {profile} = useSelector((state) => state.profile)

    let checkProfile = false
    if(profile.length > 0){
        checkProfile = true
        
    }
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = e => {
        e.preventDefault()
        const profileData = {
            firstname,
            lastname,
            email,
            phone,
            address,
            profession,
        }
        
        dispatch(createProfile(profileData))
               
    }
    
  return (
    <>{
        checkProfile ? (<>
                <div>{Object.entries(profile).map(([key,value]) =>{
           return  <p>{value.firstname} {value.lastname} {value.email}</p>
        })}</div>
        </>) : (<>
            <section className='main'>
        <form onSubmit={onSubmit}>
        <div class="field">
        <div class="control has-icons-left has-icons-right">
            <input 
                class="input is-success" 
                type="text" 
                placeholder="firstname" 
                name='firstname'
                value={firstname}
                onChange={onChange}
                />
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </div>

        <div class="control has-icons-left has-icons-right">
            <input 
                class="input is-success" 
                type="text" 
                placeholder="lastname" 
                name='lastname'
                value={lastname}
                onChange={onChange}
                />
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </div>
            
        </div>
        
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input 
                class="input" 
                type="email" 
                name="email"
                placeholder="Email" 
                id="email"
                value={email}
                onChange={onChange}
                />
            <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
            </span>

            <span class="icon is-small is-right">
                <i class="fas fa-check"></i>
            </span>
        </p>
        </div>

        <div class="control has-icons-left has-icons-right">
            <input 
                class="input is-success" 
                type="text" 
                placeholder="address" 
                name='address'
                value={address}
                onChange={onChange}
                />
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </div>

        <div class="control has-icons-left has-icons-right">
            <input 
                class="input is-success" 
                type="text" 
                placeholder="profession" 
                name='profession'
                value={profession}
                onChange={onChange}
                />
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </div>

        <div class="control has-icons-left has-icons-right">
            <input 
                class="input is-success" 
                type="phone" 
                placeholder="phone" 
                name='phone'
                value={phone}
                onChange={onChange}
                />
            <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </div>

        <div class="field">
            <p class="control">
            <button class="button is-success" type='submit'>
                Submit
            </button>
            </p>
            
            
        </div>
        </form>
       
        </section>
        
        </>)
    }
             
    </>
  )
}

export default ProfileForm