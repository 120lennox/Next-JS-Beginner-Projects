
async function fetchRepos(user){
    const res = await fetch(`https://api.github.com/users/${user}/repos`)
    const json = await res.json()
    return json
}

const Repos = async({user}) =>{
    const repos = await fetchRepos(user)
    console.log(repos)

    return <div>
        <h1>{user}'s Repos</h1>
    </div>
}

export default Repos;