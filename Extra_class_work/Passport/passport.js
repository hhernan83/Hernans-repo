const express=require('express')

const app= express()

const bodyParser= require('body-parser')

const mongoose= require('mongoose')

// connection
mongoose.connect('mongodb://localhost/passport_Demo',
{useNewUrlParser: true,useUnifiedTopology: true})
app.use(bodyParser.urlencoded({extended: true}));

const passport= require('passport')

const LocalStrategy=require('passport-local')

const passportLocalmongoose=require('passport-local-mongoose')

const User= require('./models/user')

const PORT= process.env.PORT ||3000 

app.use(require('express-session')({
    secret: "Blah blah blah",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const isLoggedIn =(req,res,next)=>{
    if(req.isAuthenticated()){
        return next()
    }else{
        res.redirect('/login')
    }
}


// Methods
app.get('/',(req,res)=>{
    res.render('home.ejs')
})

app.get('/newsfeed', isLoggedIn,(req,res)=>{
    res.render('newsfeed.ejs')
})

app.get('/signup',(req,res)=>{
    res.render('signup.ejs')
})


app.post('/signup',(req,res)=>{
    let newUser= new User({username: req.body.username})
     
    User.register(newUser, req.body.password, (err,user)=>{
        if(err){
            console.log('Error: ', err)
            res.render('signup.ejs')
        }else{
            passport.authenticate('Local')(req,res,()=>{
                res.redirect('/newsfeed')
            })
        }
    })
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})

app.post('/login',(req,res)=>{
    passport.authenticate('Local',
    {
        successRedirect: '/newsfeed',
        failureRedirect: '/login'
    })
})

app.get('/logout',(req,res)=>{
    res.logout()
    res.redirect('/')
})


app.listen(PORT,()=>{
    console.log('App listening on port: ', PORT)
})