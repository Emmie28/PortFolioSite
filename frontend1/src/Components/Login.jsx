import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {login, reset} from '../features/auth/authSlice';


function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message} = useSelector(
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
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email,
            password,
        }
        

        dispatch(login(userData))
    }

    

  return (
    <div>
        <form>

    
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input 
                className="input" 
                type="email" 
                placeholder="Email" 
                name='email'
                onChange={onChange}
                value={email}
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
                className="input" 
                type="password" 
                placeholder="Password"
                name='password'
                onChange={onChange}
                value={password}
            />
            <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
            <p class="control">
            <button class="button is-success" type='submit' onClick={onSubmit}>
                Login
            </button>
            </p>
        </div>
        </form>
    </div>
  )
}

export default Login