export async function POST(req){

  const body = await req.json()
 
  const {userId,targetDate} = body
 
  return Response.json({
   userId,
   targetDate,
   status:"INIT",
   createdAt:new Date()
  })
 
 }