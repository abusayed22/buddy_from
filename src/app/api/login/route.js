import {NextResponse} from "next/server";
import {CreateToken} from "@/utilities/TokenHelper";
import {PrismaClient} from '@prisma/client'



export async function POST (req,res) {
    try {
        const reqData = await req.json();
        const prisma = new PrismaClient();
        const result = await prisma.users.findUnique({
            where: reqData
        })


        if(result.length === null) {
            return NextResponse.json({status:'fail',error: 'user not exit!'})
        } else {
            

            const token = await CreateToken(result["email"],result["id"])
            const expirationTime = new Date(Date.now() +24*60*60*1000);
            const cokiesString = `token=${token}; expires=${expirationTime.toUTCString()};path=/`;

            return NextResponse.json({status:"Login Successfully",data: token},{status:200,headers:{'set-cookie':cokiesString}})

        }

    } catch (e) {
        return NextResponse.json({status:"fail",error:"Login not successfully!"})
    }
}