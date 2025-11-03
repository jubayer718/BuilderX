"use client";

import { componentsLibrary } from "@/lib/componentsLibrary";
import DraggableItem from "../draggableItem";



export default function Sidebar() {
  return (
    <aside className="w-1/4 bg-gray-100 p-4 border-r h-screen overflow-y-auto">
      <h2 className="text-lg font-semibold mb-4">Component Library</h2>
      <div className="space-y-2">
        {componentsLibrary.map((item) => (
          <DraggableItem key={item.id} id={item.id} name={item.name} />
        ))}
      </div>
    </aside>
  );
}