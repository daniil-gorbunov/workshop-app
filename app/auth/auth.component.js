import tpl from './auth.component.html';

class AuthController {
  constructor(authService) {
    this.login = 'adm';
    this.password = 'pwd';
    this.authService = authService;
    this.showWarnMsg = false;
  }

  logIn() {
    this.authService.logIn(this.login, this.password)
      .then(() => {
        this.showWarnMsg = false;
      })
      .catch(() => {
        this.showWarnMsg = true;
      });
  }
}

AuthController.$inject = ['authService'];

const authComponent = {
  controller: AuthController,
  controllerAs: 'vm',
  template: tpl
};

export default authComponent;
