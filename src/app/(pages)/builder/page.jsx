"use client";

import { DndContext, DragOverlay } from "@dnd-kit/core";
import Sidebar from "@/app/components/builder/Sidebar";
import Canvas from "@/app/components/builder/Canvas";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { componentsLibrary } from "@/lib/componentsLibrary";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function BuilderPage() {
  const [components, setComponents] = useState([]);
  const [activeDrag, setActiveDrag] = useState(null);
  const session = useSession();
  // console.log("Session status:", session);
  
  if (session.status === "unauthenticated") {
    redirect("/login")
  } 


  const handleDragStart = (event) => {
   const { active } = event;
   if (active?.data?.current?.from === "sidebar") {
     setActiveDrag(active.id);
   }
 };

 // Load user layout
 useEffect(() => {
   async function fetchLayout() {
     const res = await fetch("/api/builder/load");
     if (res.ok) {
       const data = await res.json();
       setComponents(data.components || []);
     }
   }
   fetchLayout();
 }, []);
  
  
  



  // Add new component from sidebar
  const handleDragEnd = (event) => {
    const { over, active } = event;
    if (over && over.id === "canvas" && active.data.current?.from === "sidebar") {
      setComponents([...components, active.id]);
    }
  };

  // Save to DB
  const saveLayout = async () => {
    await fetch("/api/builder/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ components }),
    });
    toast.success(" Layout saved successfully!");
  };

    const activeComponent = componentsLibrary.find((c) => c.id === activeDrag);

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex mt-16 ">
        <Sidebar />
        <div className="flex-1 overflow-y-auto flex flex-col">
          <Canvas components={components} setComponents={setComponents} />
          <div className="p-4 border-t  flex justify-end bg-gray-50">
            <button
              onClick={saveLayout}
              className="bg-gray-600 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700"
            >
              💾 Save Layout
            </button>
          </div>
        </div>
      </div>

       <DragOverlay>
        {activeComponent ? (
          <div className="pointer-events-none opacity-75 border border-dashed border-gray-400 bg-gray-100 p-4 rounded-lg shadow-lg">
            <activeComponent.component />
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}