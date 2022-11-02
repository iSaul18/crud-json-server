export const Post = ({ id, title, description, onClickEdit, onClickDelete }) => {
  return (
    <div id="post-card" className="bg-white rounded-md overflow-hidden shadow-lg mt-5">
      <h3 className="bg-gray-700 text-white p-5 text-xl">{title}</h3>
      <div className="h-full p-5">
        <div className="pb-8">{description}</div>
        <div className="mt-auto flex justify-between text-white">
          <button
            id="button-editar"
            className="bg-pink-500 hover:bg-pink-700 transition-colors px-3 py-1 rounded-md"
            onClick={() => onClickEdit(id)}
          >
            Editar
          </button>
          <button
            onClick={() => onClickDelete(id)}
            id="button-eliminar"
            className="bg-red-500 hover:bg-red-700 transition-colors px-3 py-1 rounded-md"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
