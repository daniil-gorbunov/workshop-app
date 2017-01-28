import tpl from './warn_msg.component.html';

class WarnMsgController {
    constructor() {
        this.message = 'Error!';
    }
}

const warnMsgComponent = {
    controller: WarnMsgController,
    controllerAs: 'vm',
    template: tpl
};

export default warnMsgComponent;
