import { NextResponse } from "next/server";
import Layout from "@/models/layout.model";
import { auth } from "@/auth";


export async function GET() {
  const session = await auth();
  try {
 
    const userEmail = session?.user?.email;
    const layout = await Layout.findOne({ userEmail });
    return NextResponse.json(layout || { components: [] });
  } catch (err) {
    console.error("Load error:", err);
    return NextResponse.json({ error: "Failed to load" }, { status: 500 });
  }
}
