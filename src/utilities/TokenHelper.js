import {SignJWT,jwtVerify} from "jose";


export async  function CreateToken (email,id) {
    try {

        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const payload = {email:email,id:id}


        let token =  new SignJWT(payload)
            .setProtectedHeader({alg:"HS256"})
            .setIssuedAt()
            .setIssuer(process.env.JWT_ISSUER)
            .setExpirationTime(process.env.JWT_EXPIRE)
            .sign(secret)
        console.log(token)

        return token;

    } catch (e) {
        console.log(e)
    }
}


export async function Decode (token) {
    try {
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);
        const decode = await jwtVerify(token,secret);
        return decode["payload"]

        
    }catch (e) {
        
    }
}