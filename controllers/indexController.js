module.exports = {
    index : (req,res) => {
        return res.render('index')
    },
    processForm : (req,res) => {

        const {name, email,age,color,remember} = req.body
        req.session.userData = {
            name,
            email,
            age,
            color
        }

        if(remember !== undefined){
            res.cookie('rememberUserColor',req.session.userData)
        }

        return res.redirect('/')
    },
    about : (req,res) => {
        return res.render('about')
    },
    logout :(req,res) => {
        req.session.destroy();
        res.cookie('rememberUserColor',null,{
            maxAge : -1
        })
        return res.redirect('/')
    }
}