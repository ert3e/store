import React, { Component } from 'react';
import FormField from '../untils/Form/formfield';
import { update, generateData, isFormValid } from '../untils/Form/formActions';

import { connect } from 'react-redux';
import { loginUser } from '../../actions/user_actions';
class Register extends Component {
    state = {
        formError: false,
        formSucces: '',
        formdata:{
            name:{
                element: 'input',
                value: '',
                config:{
                    name: 'name_input',
                    type: 'text',
                    placeholder: 'Enter your name'
                },
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            lastname:{
                element: 'input',
                value: '',
                config:{
                    name: 'lastname_input',
                    type: 'text',
                    placeholder: 'Enter your lastname'
                },
                validation:{
                    required: true,
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            email:{
                element: 'input',
                value: '',
                config:{
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'Enter your email'
                },
                validation:{
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            password:{
                element: 'input',
                value: '',
                config:{
                    name: 'password_input',
                    type: 'password',
                    placeholder: 'Enter your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            },
            confirmPassword:{
                element: 'input',
                value: '',
                config:{
                    name: 'confirm_password_input',
                    type: 'password',
                    placeholder: 'Confirm your password'
                },
                validation:{
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage:''
            }
        }
    }
    render() {
        return (
            <div>
              Register  
            </div>
        );
    }
}

export default Register;