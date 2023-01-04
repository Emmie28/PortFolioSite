import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {register, reset} from '../features/auth/authSlice';


function Register() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    })


    const {name, email, password, password2} = formData;
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {user, isLoading, isError, isSuccess, message} = useSelector(
        (state) => state.auth
    )

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])
    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    };

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2) {
            toast.error('Password Mismatch')
        } else if(password.length < 8 ) {
            toast.error('Password must contain 8 characters')
        }
         else {
            const userData = {
                name,
                email,
                password,
            }
            console.log(userData)
            dispatch(register(userData))
        }
    }

  return (
    <div>
        <section className='main'>
        <form onSubmit={onSubmit}>
        <div class="field">
        <div class="control has-icons-left has-icons-right">
            <input 
                class="input is-success" 
                type="text" 
                placeholder="name" 
                name='name'
                value={name}
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

        <div class="field">
            <p class="control has-icons-left">
                <input 
                    class="input" 
                    type="password" 
                    placeholder="Password"
                    name='password'
                    id='password'
                    value={password}
                    onChange={onChange}
                />
                <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                </span>
            </p>
        </div>

        <div class="field">
            <p class="control has-icons-left">
                <input 
                    class="input" 
                    type="password" 
                    placeholder="Confirm Password"
                    id='password2'
                    name='password2'
                    value={password2}
                    onChange={onChange}
                />
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
            </p>
        </div>

        <div class="field">
            <p class="control">
            <button class="button is-success" type='submit'>
                Register
            </button>
            </p>
        </div>
        </form>
        </section>
        
    </div>
  )
}

export default Register