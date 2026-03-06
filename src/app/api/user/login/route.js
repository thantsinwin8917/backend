import jwt from "jsonwebtoken"

export async function POST(req){

 const body = await req.json()

 const {email,password} = body

 if(email === "admin@test.com" && password === "admin123"){
   const token = jwt.sign({email,role:"ADMIN"},"secret")
   return Response.json({token,role:"ADMIN"})
 }

 if(email === "user@test.com" && password === "user123"){
   const token = jwt.sign({email,role:"USER"},"secret")
   return Response.json({token,role:"USER"})
 }

 return Response.json({message:"Invalid login"},{status:401})

}