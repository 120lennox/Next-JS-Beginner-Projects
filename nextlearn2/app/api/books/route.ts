import books from './data.json'
import { NextResponse } from 'next/server'


export async function GET(req){
    return NextResponse.json(books)
}

export async function POST(req){
    const {title, link, image } = await req.json()

    const newBook = {
        id: books.length + 1,
        title,
        link,
        image
    }

    books.push(newBook)
    return NextResponse.json('new book added successfully')
}