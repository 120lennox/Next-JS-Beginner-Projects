
async function fetchGitHubUsers(){
    const res = await fetch("https://api.github.com/search/users?q=greg")
    const json = await res.json()
    return json.items
}

const GitUserPage = async()=>{
    const users = await fetchGitHubUsers()
    console.log(users)
    return <div>
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
                </th>
                <th>Name</th>
                <th>URL</th>
                <th>Repos</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {/* row 1 */}
                { users.map((user)=>(
                    <tr key={user.id}>
                        <td>
                            <div className="flex items-center space-x-3 ">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.avatar_url} alt="" />
                                    </div>
                                </div>
                            </div>
                        </td>
                    </tr>
                )) }
            {/* row 2 */}
            </tbody>
        </table>
        </div>
    </div>
}

export default GitUserPage