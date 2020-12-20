/* eslint-disable */

export default ({ app }, inject) => {
  inject('profile', { 
      name: "",
      pin: "",
      prefs: "",
      drome: "",
      post: "",
      favs: [],
   })
   inject('profileStatus', { 
    isLogged: false,
    })
  }