import Validator from 'validator'
import isEmpty from 'is-empty'

export const validationRegisterInputs = (data) => {
    let errors = {}

    data.name = !isEmpty(data.name) ? data.name : ''
    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is required"
    }

    if(Validator.isEmpty(data.email)) {
        errors.email = "Email field is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    if(Validator.isEmpty(data.password)) {
        error.password = "Password is required"
    }

    return { errors, isValid: isEmpty(errors) }
}

export const validationLoginInputs = (data) => {
    let errors = {}

    data.email = !isEmpty(data.email) ? data.email : ''
    data.password = !isEmpty(data.password) ? data.password : ''

    if(Validator.isEmpty(data.email)) {
        errors.email = "Email is required"
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid"
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = "Password is required"
    }

    return { errors, isValid: isEmpty(errors) }
}