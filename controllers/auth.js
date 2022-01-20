const loginPost = (req, res, next) => { }

const registerPost = (req, res, next) => { }

const home = (req, res, next) => {
    res.send('<h1>Home</h1><p>Please <a href="/register">register</a></p>');
}

const login = (req, res, next) => {

    const form = '<h1>Login Page</h1><form method="POST" action="/login">\
    Enter Username:<br><input type="text" name="username">\
    <br>Enter Password:<br><input type="password" name="password">\
    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);
}

const register = (req, res, next) => {

    const form = '<h1>Register Page</h1><form method="post" action="register">\
                    Enter Username:<br><input type="text" name="username">\
                    <br>Enter Password:<br><input type="password" name="password">\
                    <br><br><input type="submit" value="Submit"></form>';

    res.send(form);
}

const protected = (req, res, next) => {
    if (req.isAuthenticated()) {
        res.send('<h1>You are authenticated</h1><p><a href="/logout">Logout and reload</a></p>');
    } else {
        res.send('<h1>You are not authenticated</h1><p><a href="/login">Login</a></p>');
    }
}

const logout = (req, res, next) => {
    req.logout();
    res.redirect('/protected-route');
}

const success = (req, res, next) => {
    res.send('<p>You successfully logged in. --> <a href="/protected-route">Go to protected route</a></p>');
}

const failure = (req, res, next) => {
    res.send('You entered the wrong password.');
}

module.exports = {
    loginPost,
    registerPost,
    home,
    login,
    register,
    protected,
    logout,
    success,
    failure
}