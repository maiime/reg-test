const regs = require('./core/reg.i18n');
const Reg = regs.reg;

class Tester {
	constructor (str, language) {
        if (typeof str !== 'string' && typeof str !== 'number') {
            throw new Error('argument[0] must be String or Number.');
        }
        this.str = str + '';
        this.language = language || 'zh-cn';
    }
    is (type) {
        let _this = this;
        if (!Reg.hasOwnProperty(_this.language)) {
            this.language = 'zh-cn'
            console.error('Sorry, there is no language supports.');
        }
        if (Reg[_this.language].hasOwnProperty(type)) {
            return Reg[_this.language][type].test(_this.str);
        } else if (type === 'email') {
            return regs.emailReg.test(_this.str); 
        } else if (type === 'url') {
            return regs.urlReg.test(_this.str);
        } else if (type === 'ipv4'){
            return regs.ipv4Reg.test(_this.str);
        } else {
            return false;
        }
    }
}

module.exports = function (str, language) {
    return new Tester(str, language);
};