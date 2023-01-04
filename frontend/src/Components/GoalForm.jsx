import { useState } from 'react'
import { useDispatch, useSelector} from 'react-redux'
import {createGoal} from '../features/goals/goalSlice'
import { getProfile } from '../features/profile/profileSlice' 


function GoalForm() {
    const dispatch = useDispatch()
    const onSubmit = e =>{
        e.preventDefault()

        dispatch(createGoal({text}))
        setText('')
    }


    const [text, setText] = useState('')

  return (
    <>
        <form onSubmit={onSubmit}>
            <div className="field">
                <div class="control">
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Goals"
                        name='text'
                        id='text'
                        value={text} 
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <div className="control">
                <button 
                    className="button is-link is-light"
                    type='submit'
                    >Add Goal</button>
            </div>
        </form>
    </>
  )
}

export default GoalForm