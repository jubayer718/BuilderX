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
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";




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
    console.log("Removed component with id:", id);
    setComponents(components.filter((c) => c !== id));
  };

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 min-h-screen p-6 transition-all  ${
        isOver ? "bg-blue-200" : "bg-white"
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
          <div className="space-y-4 ">
            {components.map((id, idx) => (
              <SortableItem key={idx} id={id} onRemove={handleRemove} />
            ))}
          </div>

         
        </SortableContext>
      </DndContext>
    </div>
  );
}