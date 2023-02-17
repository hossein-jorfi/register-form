const validate = data => {

     const errors = {}

     if (!data.name.trim()) {
          errors.name = 'Name required'
     } else if (data.name.length < 3) {
          errors.name = 'Name is to short'
     } else {
          delete errors.name
     }

     if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(data.email)) {
          errors.email = 'Email invalid'
     } else {
          delete errors.email
     }

     if (!data.password) {
          errors.password = 'Password required'
     } else if (data.password.length < 6) {
          errors.password = 'Password is to short'
     } else {
          delete errors.password
     }

     if (data.confirmPassword !== data.password) {
          errors.confirmPassword = 'Passwords not match'
     } else if (!data.confirmPassword) {
          errors.confirmPassword = 'Confirm password required'
     } else {
          delete errors.confirmPassword
     }

     if (data.check) {
          delete errors.check
     } else {
          errors.check = 'privacy policy'
     }

     return errors

}

export { validate }