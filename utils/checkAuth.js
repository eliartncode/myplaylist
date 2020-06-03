module.exports = (request, response, next) => {
    const isLoggedIn = false;
    if (!isLoggedIn) {
        return response.redirect('/account/login');
    }
    next();
}