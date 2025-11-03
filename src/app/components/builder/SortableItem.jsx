
import { CSS } from "@dnd-kit/utilities";
import { componentsLibrary } from "@/lib/componentsLibrary";
import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
export default function SortableItem({ id, onRemove }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const Comp = componentsLibrary.find((c) => c.id === id)?.component;
  if (!Comp) return null;

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border rounded-lg p-2 shadow-sm bg-gray-50 relative"
    >
      <button
        onClick={() => onRemove(id)}
        className="absolute top-2 right-2 text-red-500 text-sm"
      >
        ✕
      </button>
      <Comp />
    </div>
  );
}