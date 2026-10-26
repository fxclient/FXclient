const passwordExpression = /^[A-Za-z0-9_-]{1,15}$/;

let customPassword = "";
function setCustomPassword(password) {
    password = password.trim();
    if (password !== "" && !passwordExpression.test(password)) {
        alert('Passwords can be up to 15 characters long and can only have letters, numbers, "-" and "_".');
        return false;
    }
    customPassword = password;
    return true;
}
const passwordReset = { setCustomPassword, getCustomPassword: () => customPassword };
export default passwordReset;
