/* **********
* install jsonwebtoken
* jwt.sign(payload, secret, {expiresIn : })
* token client 
 */

// ------------------------------------------------
/* 
* how to store token in the client side 
* 1. memory --> ok type
* 2. local storage --> (xss)
* 3. cookies : http only
* */

/* -------------------------------------
* 1. set cookies with http only for development secure : false,
*
* 2. cors
* app.use(cors({
    origin: [
        "http://localhost:5173",
    ],
    credentials: true;
}));
*-------------------------------------Client side 
* 3. slient side axios settings 
* 4. in axios set withcredentials : true
*
 */


/* 
* 1. to send cookies from the client make sure you added withcredentials true for the api call using axios 
* 2. use cookie parser as middleware
***** */