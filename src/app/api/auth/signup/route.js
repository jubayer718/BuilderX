import { StartServer } from "@/lib/mongodb/mongodb";
import userModel from "@/models/user.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export const POST = async (req) => {
  try {
    await StartServer();
    const { name, email, password } = await req.json();
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "User already exists" }, { status: 400 });
    }
    const hashedPassword = await bcrypt.hash(password, parseInt(process.env.becrypt_saltRounds));

    const user = await userModel.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "User created successfully", user }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
}