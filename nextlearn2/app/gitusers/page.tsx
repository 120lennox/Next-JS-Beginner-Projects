import Link from "next/link"
async function fetchGitHubUsers(){
    const res = await fetch("https://api.github.com/search/users?q=greg")
    const json = await res.json()
    return json.items
}

const GitUserPage = async()=>{
    const users = await fetchGitHubUsers()
    console.log(users)
    return <div className="">
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>Name</th>
                <th>URL</th>
                <th>Repos</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
                {/* column 1 */}
                { users.map((user)=>(
                    <tr key={user.id}>
                        <td>
                            <div className="flex items-center space-x-3 ">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.avatar_url} alt="" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">
                                        {user.login}
                                    </div>
                                    <div className="text-sm opacity-50">
                                        {user.id}
                                    </div>
                                </div>
                            </div>
                        </td>
                    {/* column 2 */}
                        <td>
                            <Link href={user.html_url} className="btn btn-link"> View on Github</Link>
                        </td>
                        <th>
                            <Link href={`/gitusers/${user.login}`} className="btn btn-link">Go to Repos</Link>
                        </th>
                    </tr>
                )) }
            {/* row 2 */}
            </tbody>
        </table>
        </div>
    </div>
}

export default GitUserPage