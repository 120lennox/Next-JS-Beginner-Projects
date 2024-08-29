import { NextResponse } from "next/server";
import books from '../data.json'

export async function GET(req:any){
    const {searchParams} = new URL(req.URL)
    console.log(searchParams)
    return NextResponse.json(books)
}