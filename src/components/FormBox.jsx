import { useState } from "react";
import { CreatePosts } from "../api/apiFetch";

export const FormBox = ({ posts, setPosts }) => {
  const [inputValues, setInputValues] = useState({
    title: "",
    description: "",
  });

  const [error, setError] = useState(false);
  const [agregado, setAgregado] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (Object.values(inputValues).every((value) => value.trim() !== "")) {
      const createID = String(Date.now()).slice(-3) + Date.now().toString(16).slice(0);
      setPosts([...posts, { id: createID, title: inputValues.title, description: inputValues.description }]);

      await CreatePosts({ id: createID, title: inputValues.title, description: inputValues.description });
      setInputValues({ title: "", description: "" });

      setAgregado(true);

      setTimeout(() => {
        setAgregado(false);
      }, 2000);
      return;
    }

    setError(true);

    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  const onInputChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-[30%] overflow-hidden">
      <h2 className="mt-3 p-1 font-black underline max-w-xs mx-auto rounded-md text-2xl">Formulario</h2>
      <div>
        <form
          autoComplete={"off"}
          onSubmit={onSubmit}
          className="bg-white rounded-sm shadow-lg flex flex-col w-[70%] mx-auto gap-5 p-10 mt-20"
        >
          <label>
            Titulo:
            <input
              onChange={onInputChange}
              value={inputValues.title}
              name="title"
              className="ml-14 outline-none border-b border-gray-900 placeholder:pl-2"
              type="text"
              placeholder="Ejm: Hoy fue genial"
            />
          </label>

          <label>
            Descripción:
            <input
              onChange={onInputChange}
              value={inputValues.description}
              name="description"
              className="ml-5 outline-none border-b border-gray-900 placeholder:pl-2"
              type="text"
              placeholder="Ejm: Anoté 4 Goles"
            />
          </label>

          <button className="bg-gray-700 hover:bg-gray-800 transition-colors text-white px-3 py-2 mt-5 rounded-md">
            Agregar
          </button>
        </form>

        {agregado && (
          <p className="bg-green-500 text-white py-2 rounded-md font-bold max-w-xs mx-auto mt-5">
            AGREGADO EXITOSAMENTE ✅
          </p>
        )}

        {error && (
          <p className="bg-red-600 text-white py-2 rounded-md font-bold max-w-xs mx-auto mt-5">
            LOS INPUTS NO PUEDEN IR VACIOS ‼
          </p>
        )}
      </div>
    </div>
  );
};
