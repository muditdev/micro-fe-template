import React, { useState } from 'react'
import './login.css';
function Login({ onSuccess }: any) {
    const [state, setState] = useState<{ username: string; password: string }>({
        username: '',
        password: ''
    })
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!state.username || !state.password) {
            alert('Enter valid username and password!');
            return;
        }
        onSuccess(state);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="input_field">
                    Username:
                    <input type="text" name="username" onChange={handleChange} />
                </div>
                <div className="input_field">
                    Password:
                    <input type="password" name="password" onChange={handleChange} />
                </div>
                <button type="submit">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Login
