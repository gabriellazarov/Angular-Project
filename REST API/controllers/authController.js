const router = require('express').Router();

const { isGuest, isUser } = require('../middlewares/guards');



router.get('/register', isGuest(), (req, res) => {
    res.render('register');
});

router.post('/register', isGuest(), async (req, res) => {

    if (req.body.gender == '1') {
        req.body.gender = 'female';
    } else {
        req.body.gender = 'male';
    }

    console.log(req.body)

    try {
        await req.auth.register(req.body.email.trim(), req.body.password.trim(), req.body.gender);

        if (req.body.password == '') {
            throw new Error('Password is required!');
        }

        if (req.body.password != req.body.rePass) {
            throw new Error('Passwords must match!');
        }
        res.redirect('/');

    } catch (err) {
        let errors;
        if (err.errors) {
            errors = Object.values(err.errors).map(a => a.properties.message);
        } else {
            errors = [err.message]
        }
        console.log(errors);

        const ctx = {
            errors,
            userData: {
                email: req.body.email, 
                isFemale: req.body.gender == 'female'
            }
        };
        res.render('register', ctx);
    }
});

router.get('/login', isGuest(), (req, res) => {
    res.render('login');
});

router.post('/login', isGuest(), async (req, res) => {
    try {
        await req.auth.login(req.body.email.trim(), req.body.password.trim());

        res.redirect('/');
    } catch (err) {
        console.log(err);


        let errors = [err.message];
        if (err.type == 'credential') {
            errors = ['Incorrect email or password'];
        }
        const ctx = {
            errors,
            userData: { email: req.body.email }
        };
        res.render('login', ctx);
    }
});

router.get('/logout', isUser(), (req, res) => {
    console.log('Logging out');
    req.auth.logout();
    res.redirect('/');
});

module.exports = router;