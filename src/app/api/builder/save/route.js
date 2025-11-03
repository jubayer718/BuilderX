import { NextResponse } from "next/server";
import Layout from "@/models/layout.model";
import { auth } from "@/auth";


export async function POST(req) {
  const session = await auth();
  try {
  
    const { components } = await req.json();
    const userEmail = session?.user?.email;

    let layout = await Layout.findOne({ userEmail });
    if (!layout) layout = new Layout({ userEmail, components });
    else layout.components = components;

    await layout.save();
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Save error:", err);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}
