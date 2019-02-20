import Api from '@/services/APi'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}

// AuthenticationService.register({
//     email:"test",
//     password:1234
// })
