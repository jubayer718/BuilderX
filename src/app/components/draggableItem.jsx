
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
      className="cursor-grab select-none w-full bg-white hover:bg-blue-100 border p-2 rounded-lg shadow-sm"
    >
      {name}
    </div>
  );
}