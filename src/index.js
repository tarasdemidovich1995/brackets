module.exports = function check(str, bracketsConfig) {
    bracketsConfig = bracketsConfig.map(elem => elem.map(elem => isNaN(elem) ? '\\' + elem : elem).join(''));
    for (let i = 0; i < bracketsConfig.length;) {
        const regexp = new RegExp(bracketsConfig[i], 'g');
        const regexpTest = new RegExp(bracketsConfig[i]);
        if (regexpTest.test(str)) {
            str = str.replace(regexp, '');
            i = 0;
        } else {
            i++;
        }
    }
    return str.length == 0;
}

