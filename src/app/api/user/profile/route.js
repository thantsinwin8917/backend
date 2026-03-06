import jwt from "jsonwebtoken"

export async function GET(req){

 const authHeader = req.headers.get("authorization")

 if(!authHeader){
   return Response.json({message:"No token"})
 }

 const token = authHeader.split(" ")[1]

 const decoded = jwt.verify(token,"secret")

 return Response.json({
   email: decoded.email,
   role: decoded.role
 })

}