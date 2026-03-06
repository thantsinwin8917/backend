// TODO: Students must implement CRUD for Book here, similar to Item.
// Example: GET (get book by id), PATCH (update), DELETE (remove)

// import necessary modules and setup as in Item

import { NextResponse } from "next/server"

let books = []

export async function GET(req,{params}){

 const book = books.find(b=>b.id == params.id)

 return NextResponse.json(book)

}

export async function PATCH(req,{params}){

 const body = await req.json()

 const book = books.find(b=>b.id == params.id)

 if(book){
  book.title = body.title ?? book.title
  book.author = body.author ?? book.author
 }

 return NextResponse.json(book)

}

export async function DELETE(req,{params}){

 const book = books.find(b=>b.id == params.id)

 if(book){
  book.status = "DELETED"
 }

 return NextResponse.json(book)

}