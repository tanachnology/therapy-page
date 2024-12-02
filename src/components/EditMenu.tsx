import React from 'react';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

interface EditMenuProps {
  onCreate?: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
  buttons: string[]; // Nueva prop para indicar qué botones mostrar
}

const EditMenu: React.FC<EditMenuProps> = ({ onCreate, onEdit, onDelete, buttons }) => {
  return (
    <div className="flex space-x-2 p-2 rounded shadow-md">
      {buttons.includes('create') && (
        <button
          onClick={onCreate}
          className="relative group flex items-center justify-center p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <FaPlus />
          <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded p-1">
            Crear
          </span>
        </button>
      )}
      {buttons.includes('edit') && (
        <button
          onClick={onEdit}
          className="relative group flex items-center justify-center p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <FaEdit />
          <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded p-1">
            Editar
          </span>
        </button>
      )}
      {buttons.includes('delete') && (
        <button
          onClick={onDelete}
          className="relative group flex items-center justify-center p-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          <FaTrash />
          <span className="absolute bottom-full mb-2 hidden group-hover:block bg-black text-white text-xs rounded p-1">
            Eliminar
          </span>
        </button>
      )}
    </div>
  );
};

export default EditMenu;