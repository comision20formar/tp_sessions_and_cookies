module.exports = (req,res,next) => {
    if(req.cookies.rememberUserColor){
        req.session.userData = req.cookies.rememberUserColor
    }
    next()
}