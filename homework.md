- Create a repository
- Initialize the repository
- node_modules, package.json, package-lock.json
- Install express
- Create a server
- Listen to port 7777
- Write request handlers for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies
- What is the use of "-g" while npm install
- Difference between caret and tilde (^ vs ~)

Ep. 02

- Play with routes and route extensions ex. /hello, /, hello/2, /xyz
- Order of the routes matter a lot
- Install postman app and make a workspace/collection > test API call
- Write logic to handle GET, POST, PATCH, DELETE API calls and test them on postman
- Explore routing and use of ?, +, (), * in the routes
- Use of regex in routes /a/, /.*fly$/
- Reading the query params in the routes
- Reading the dynamic routes

Ep.05
- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- Multiple way to write the route - Works same way
    - app.use("/route",rH1,[rH2,rh3],rH4,rH5)
    - app.use("/route",rH1,[rH2],rh3,rH4,rH5)
    - app.use("/route",rH1,[rH2,rh3,rH4,rH5])
- Middleware
- How express Js basically handles requests behind the scenes
- Difference between app.use() and app.all()
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error handling using app.use("/",(err,req,res,next)={})

Ep.06
- Install mongoose library
- Connect your application to the Database "connection-url"/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a userSchema & user model
- Create Post /signup API to add data to database
- Push some documents using API calls from postman
- Error Handling using try, catch

Ep.07
- JS object vs JSON 
- Add the express.json middleware to your app
- Make your signup API dynamic to receive data from the end user
- User.findOne with duplicate email ids, which object returned
- API - Get user by email
- API - Feed API - GET /feed - get all the users from the database
- API - Get user by ID
- Create a delete user API
- Difference between PATCH and PUT
- API - Update a user
- Explore the Mongoose Documentation for model methods
- What are options in a Model.findOneAndUpate method, explore more about it
- API - Update the user with email ID

Ep. 08
- Explore schematype options from the documentation
- add required, unique, lowercase, min, minLength, trim
- Add default
- Create a custom validate function for gender
- Improve the DB schema - PUT all appropiate validations on each field in schema
- Add timestamps to the userSchema
- Add API level validation on Patch request & Signup post api
- DATA Sanitizing - Add API validation for each field
- Install validator
- Explore validator library function and use validator func for password, email, photoURL
- NEVER TRUST on req.body

Ep.09
- Install bcrypt
- Create password hash using bcrypt.hash & save the user is encrypted password
- Create login API
- Compare passwords and throw errprs if email or password is invalid

Ep.10
- Install cookie-parser
- Just send a dummy cookie to user
- Create GET /profile API and check if you get the cookie back
- In login API, after email and password validation, create a JWT token and send it to user back in response
- Read the cookies inside your profile API  and find the loggged in user
- userAuth Middleware
- Add the userAuth middle ware in profile API and a new sendConnectionRequest API
- Set the expiry of JWT token and cookies to 7 days
- Create userSchema method to getJWT() 
- Create UserSchema method to comparepassword(passwordInputByUser)

Ep.11

- Explore tinder APIs
- Create a list all API you can think of in Dev Tinder
- Group multiple routes under repective routers



