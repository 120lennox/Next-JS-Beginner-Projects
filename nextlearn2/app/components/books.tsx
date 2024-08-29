import Link from "next/link"


async function getBooks(){
    const res = await fetch("http://localhost:3000/api/books", {
        next: {
            revalidate: 60
        }
    })
    const json = await res.json()
    return json
}

const Books = async()=>{
    const books = await getBooks()
    return <div>
        <h1>Books here</h1>
        <div className="flex justify-between items-center">
            {books.map((book)=>(
                <div key={book.id}>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure>
                            <img src={book.image} width="200" height="150" alt="" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {book.id}
                            </h2>
                            <p>
                                {book.title}
                            </p>
                            <div className="card-actions justify-end">
                                <Link href={book.link} className="btn btn-primary"> See in Amazon </Link>
                                <button className="btn btn-error">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default Books;