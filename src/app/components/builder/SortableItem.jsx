
import { CSS } from "@dnd-kit/utilities";
import { componentsLibrary } from "@/lib/componentsLibrary";

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
    <div>
      <button
        onClick={() => onRemove(id)}
        className="absolute z-40  right-5 text-red-500 text-sm cursor-pointer"
      >
        ✕
      </button>
    
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="border rounded-lg p-2 shadow-sm bg-gray-50 relative"
    >
      <div className="">
        <Comp />
     </div>
      </div>
    </div>
  );
}