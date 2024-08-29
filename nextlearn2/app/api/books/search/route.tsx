import { NextResponse } from "next/server";
import books from '../data.json'

export async function GET(req){
    const {searchParams} = new URL(req.url)
    console.log(searchParams)
    return NextResponse.json(books)
}