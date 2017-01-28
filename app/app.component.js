class AppController {
  constructor() {
    this.message = 'Hello Photogramm!';
  }
}

const appComponent = {
  controller: AppController,
  template: `
    <a href="auth">Auth</a>
    <a href="list">List</a>
  `
};

export default appComponent;
