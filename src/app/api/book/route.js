export async function GET(){

  const books = [
   {id:1,title:"Book A",author:"Author A"},
   {id:2,title:"Book B",author:"Author B"}
  ]
 
  return Response.json(books)
 
 }