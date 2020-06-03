exports.loadIndex = (request, response, next) => {

    let userData;
    if(request.session.udata){
        userData = request.session.udata;
    }

    response.render('index', {
        userData: userData
    })
};