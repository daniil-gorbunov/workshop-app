const authService = function ($q) {
  return {
    isLoggedIn: false,

    logIn: function (login, password) {
      return $q((resolve, reject) => {
        if (login === 'adm' && password === 'pwd') {
          this.isLoggedIn = true;
          resolve();
        }
        reject();
      })
    },

    logOut: function () {
      return new Promise(function (resolve, reject) {
        this.isLoggedIn = false;
        resolve();
      });
    }
  }
};

// class AuthService {
//   constructor($q){
//     this.$q = $q;
//   }
//   logIn = function (login, password) {
//     return this.$q((resolve, reject) => {
//       if (login === 'adm' && password === 'pwd') {
//         this.isLoggedIn = true;
//         resolve();
//       }
//       reject();
//     })
//   };
//
//   logOut = function () {
//     return new Promise(function (resolve, reject) {
//       this.isLoggedIn = false;
//       resolve();
//     });
//   };
//   isLoggedIn = false
//
// }

authService.$inject(['$q']);

export default authService;