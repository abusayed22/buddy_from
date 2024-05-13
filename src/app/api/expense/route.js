import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";


// get Expense TODO:
export async function GET (req,res) {
    try {
        // headers items
    const headerList = headers();
    const userId = parseInt(headerList.get("id"));
    const userEmail = headerList.get("email");

    const prisma = new PrismaClient ();

    const result = await prisma.expenses.findMany({
        where:{
            user_id:userId,
        },
        include: {
            tourGroup: true
        }
    })
    return NextResponse.json({status: "success",data: result})
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({status:'fail',error})
    }
}

// create expense
export async function POST(req, res) {
  try {
    // headers items
    const headerList = headers();
    const userId = parseInt(headerList.get("id"));
    const userEmail = headerList.get("email");

    const prisma = new PrismaClient();
    let reqData = await req.json();
    reqData["user_id"] = userId;

    const result = await prisma.expenses.create({
      data: reqData,
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: "fail", error });
  }
}


// expense edit update
export async function PUT(req, res) {
  try {
    

    let reqData = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.expenses.update({
        where: {
            id: reqData["expense_id"],
        },
        data: {
            amount: reqData["amount"],
            category: reqData["category"],
            note: reqData["note"],
            user_id: userId,
            tour_id:reqData["tour_id"]
        }
    })

    return NextResponse.json({status:'success',data: result})

  } catch (error) {
    // console.log(error)
    return NextResponse.json({status:'fail',error})
  }
}

// expense Delete
export async function DELETE(req, res) {
  try {
    // headers items
    const headerList = headers();
    const userId = parseInt(headerList.get("id"));
    const userEmail = headerList.get("email");

    let reqData = await req.json();
    const prisma = new PrismaClient();

    const result = await prisma.expenses.delete({
        where: {
            id: reqData["expense_id"],
        },
    })

    return NextResponse.json({status:'success',data: result})

  } catch (error) {
    // console.log(error)
    return NextResponse.json({status:'fail',error})
  }
}
