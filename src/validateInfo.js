export default function validateInfo(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Username required"
    }
    if(!values.email.trim()) {
        errors.email = "Email required"
    } else if(!/^[A-Z0-9,_%+-]+@[A-Z0-9,-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }
    if(!values.password.trim()) {
        errors.password = "Password required"
    } else if(values.password.length < 6) {
        errors.password = "Password needs to be 6 characters or more"
    }
    if(!values.cPassword.trim()) {
        errors.cPassword = "Confirm Password required"
    }else if(values.cPassword !== values.password) {
        errors.cPassword = "Confirm Password does not match with the password"
    }
    return errors;
}