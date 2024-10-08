import { NextResponse } from "next/server";
import books from '../data.json'

export async function GET(req){
    const {searchParams} = new URL(req.url)
    const query = searchParams.get('query')

    const filteredResults = books.filter((book)=>{
        return book.title.toLowerCase().includes(query.toLowerCase())
    })

    //console.log(filteredResults)
    return NextResponse.json(filteredResults)
}
