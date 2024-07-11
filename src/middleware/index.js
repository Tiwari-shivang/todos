const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    try{
        const auth = req.headers['authorization'];
        if(!auth){
            res.status(403).send({message: 'Forbidden'})
        }
        const token = auth.split(' ')[1];
        if (!token){
            res.status(401).send({message: 'Unaurthorized'});
        }
        jwt.verify(token, 'MY_SECREAT_KEY', (err, decoded) => {
            if(err){
                res.status(401).send({message: 'Not verified'});
            }
            req.user = decoded;
            next();
        })
    }
    catch(e){
        console.log(e);
    }
}
module.exports = verifyToken;