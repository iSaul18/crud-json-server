import { useState } from "react";
import { UpdatePost } from "../api/apiFetch";

export const FormEdit = ({ onEdit, setOnEdit, getDataPosts }) => {
  const { id } = onEdit;

  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState(false);

  const onInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const actualizar = async (e) => {
    e.preventDefault();

    if (!Object.values(inputValues).every((value) => value.trim() !== "")) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    await UpdatePost(id, inputValues);
    await getDataPosts();
    await setOnEdit({ active: false, id: 0 });
  };

  const cancelarEdit = (e) => {
    e.preventDefault();

    setOnEdit({ active: false, id: 0 });
  };

  return (
    <>
      {/* Fondo */}
      <div className="absolute w-screen h-screen bg-black opacity-70 overflow-hidden"></div>
      {/* Form */}
      <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
        <form autoComplete={"off"} className="bg-white w-[500px] h-[300px] rounded-sm shadow-lg flex flex-col">
          <h2 className="bg-gray-700 text-white p-5 text-xl w-full mb-10">EDITOR DE POSTS</h2>
          <label className="text-xl mb-4">
            Titulo:
            <input
              onChange={onInputChange}
              name="title"
              value={inputValues.title}
              className="text-xl ml-14 outline-none border-b border-gray-900 placeholder:pl-2"
              type="text"
              placeholder="Ejm: Hoy fue genial"
            />
          </label>

          <label className="text-xl">
            Descripción:
            <input
              onChange={onInputChange}
              value={inputValues.description}
              name="description"
              className="text-xl ml-5 outline-none border-b border-gray-900 placeholder:pl-2"
              type="text"
              placeholder="Ejm: Anoté 4 Goles"
            />
          </label>

          <div className="flex justify-between px-8 mt-10">
            <button
              onClick={actualizar}
              className="bg-gray-700 hover:bg-gray-800 transition-colors text-white px-3 py-2 mt-5 rounded-md"
            >
              Editar
            </button>
            <button
              onClick={cancelarEdit}
              className="bg-red-500 hover:bg-red-800 transition-colors text-white px-3 py-2 mt-5 rounded-md"
            >
              Cancelar
            </button>
          </div>
          {error && (
            <p className="bg-red-600 text-white py-2 rounded-md font-bold max-w-sm px-5 mx-auto mt-8">
              LOS INPUTS NO PUEDEN IR VACIOS ‼
            </p>
          )}
        </form>
      </div>
    </>
  );
};
