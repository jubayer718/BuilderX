"use client";

import { DndContext } from "@dnd-kit/core";
import Sidebar from "@/app/components/builder/Sidebar";
import Canvas from "@/app/components/builder/Canvas";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function BuilderPage() {
  const [components, setComponents] = useState([]);

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

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Canvas components={components} setComponents={setComponents} />
          <div className="p-4 border-t flex justify-end bg-gray-50">
            <button
              onClick={saveLayout}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700"
            >
              💾 Save Layout
            </button>
          </div>
        </div>
      </div>
    </DndContext>
  );
}