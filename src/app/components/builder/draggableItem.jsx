
import { useDraggable } from "@dnd-kit/core";

export default function DraggableItem({ id, name }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id,
    data: { id, from: "sidebar" },
  });

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab select-none w-full bg-gray-500 hover:bg-gray-600 border p-2 rounded-lg shadow-sm"
    >
      {name}
    </div>
  );
}