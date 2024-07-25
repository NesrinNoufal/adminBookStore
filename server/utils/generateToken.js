import JWT from 'jsonwebtoken'

const generateTokenAndSetCookie =  (userId,res) => {

     const JWT_SECRET = "GHHYUIOLLL";
     const token = JWT.sign({userId},JWT_SECRET ,{
              expiresIn: "15d",
     });

     res.cookie('chat-user',token ,{
           maxAge : 15 * 24* 60 * 60 * 1000,
           secure: true,
           httpOnly : true,
           sameSite: "strict"     });

   
};
export default generateTokenAndSetCookie;