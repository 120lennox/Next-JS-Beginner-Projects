
async function getBooks(){
    const res = await fetch("http://localhost:3000/api/books", {
        next: {
            revalidate: 60
        }
    })
    const json = await res.json()
    return json
}

async function bookView(){
    const books = await getBooks()
    return <div>
        <h1>Books here</h1>
        <div>
            {books.map((book)=>(
                <div key={book.id}>
                    <div className="card w-96 bg-base-100 shadow-xl">

                    </div>
                </div>
            ))}
        </div>
    </div>
}

export default bookView;