"use client";

import {
  DndContext,
  closestCenter,
  useDroppable,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { componentsLibrary } from "@/lib/componentsLibrary";
import { useState } from "react";

function SortableItem({ id, onRemove }) {
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

export default function Canvas({ components, setComponents }) {
  const { setNodeRef, isOver } = useDroppable({ id: "canvas" });

  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    if (active.id !== over.id) {
      const oldIndex = components.indexOf(active.id);
      const newIndex = components.indexOf(over.id);
      setComponents(arrayMove(components, oldIndex, newIndex));
    }
  };

  const handleRemove = (id) => {
    setComponents(components.filter((c) => c !== id));
  };

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 min-h-screen p-6 transition-all ${
        isOver ? "bg-blue-50" : "bg-white"
      }`}
    >
      <h2 className="text-lg font-semibold mb-4 text-gray-600">Live Preview</h2>

      {components.length === 0 && (
        <div className="text-center text-gray-400 italic">
          Drag components here
        </div>
      )}

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={components}
          strategy={verticalListSortingStrategy}
        >
          <div className="space-y-4">
            {components.map((id) => (
              <SortableItem key={id} id={id} onRemove={handleRemove} />
            ))}
          </div>
        </SortableContext>
      </DndContext>
    </div>
  );
}