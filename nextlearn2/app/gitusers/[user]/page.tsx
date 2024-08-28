import Repos from "@/app/components/Repos"

export default function UserReposPage({params:{user}}){
    return <div>
        <Repos user={user} />
    </div>
}