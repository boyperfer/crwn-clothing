import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event =>  {
        event.preventDefault();
        this.setState({email:'', password:''})
    }   

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name] : value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span className='title'>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput  onChange={this.handleChange}
                                label='email'
                                name='email' 
                                type='email'
                                value={this.state.email}
                                required
                    />
                    <FormInput  onChange={this.handleChange}
                                label='password'
                                name='password' 
                                type='password'
                                value={this.state.password} 
                    />
                    <CustomButton type='submit'>
                        Sign In
                    </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn