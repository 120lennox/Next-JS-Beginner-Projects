
async function fetchRepos(user:any){
    const res = await fetch(`https://api.github.com/users/${user}/repos`, {
        next:{
            revalidate: 60 //revalidate every 1 minute
        }
    })
    const json = await res.json()
    return json
}

const Repos = async({user:any}) =>{
    const repos = await fetchRepos(user)
    console.log(repos)

    return <div>
        <div className="mt-5 ml-5">
            <h1 className="text-gray-300 text-lg">{user}'s Repos</h1>
            {/* table */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Repo Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((repo)=>(
                            <tr>
                                <td>{repo.name}</td>
                                <td>{repo.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    </div>
}

export default Repos;