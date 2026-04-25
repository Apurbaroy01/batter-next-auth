import { headers } from "next/headers"
import { auth } from "../lib/auth"
import { redirect } from "next/navigation"


const DashbardPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        redirect("/auth/signin")
        return (
            <div>
                you are not logged in
            </div>
        )
    }
    console.log("session", session)
    return (
        <div>
            this is Dashbord page
        </div>
    )
}

export default DashbardPage
