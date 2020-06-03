module.exports = (request, response, next) => {
    console.log(request.session.udata.isLoggedIn);
    if (!request.session.udata.isLoggedIn) {
        return response.redirect('/account/login');
    }
    next();
}