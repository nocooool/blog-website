import { ConnectDB } from "@/lib/config/db"
import EmailModel from "@/lib/models/EmailModel"
import { NextResponse } from "next/server"

const LoadDB = async () => {
    await ConnectDB()
}
LoadDB()

//API endpoint to store the email in databse
export async function POST(request:any) {
    const formData = await request.formData()
    const emailData = {
        email:`${formData.get('email')}`,
    }
    await EmailModel.create(emailData)
    return NextResponse.json({success:true, msg:"Email Subscribed"})
}

//API endpoint to display all emails
export async function GET(request:any) {
    const email = await EmailModel.find({})
    return NextResponse.json({email})
}

//API endpoint to delete the emails
export async function DELETE(request:any) {
    const id = await request.nextUrl.searchParams.get("id")
    await EmailModel.findByIdAndDelete(id)
    return NextResponse.json({success:true, msg:"Email Deleted!"})
}