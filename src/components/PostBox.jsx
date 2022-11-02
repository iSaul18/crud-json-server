import { useEffect, useState } from "react";
import { getPosts, DeletePost } from "../api/apiFetch";

import { Alerta, Post, FormEdit } from "./index";

export const PostBox = ({ posts, setPosts }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [onEdit, setOnEdit] = useState({
    active: false,
    id: 0,
  });

  const [onDelete, setOnDelete] = useState(false);

  const getDataPosts = async () => {
    try {
      const data = await getPosts();
      setPosts([...data]);
    } catch (error) {
      setError("error al cargar los datos");
    } finally {
      setIsLoading(false);
    }
  };

  const onClickEdit = (postId) => {
    setOnEdit({
      active: true,
      id: postId,
    });
  };

  const onClickDelete = async (postId) => {
    await DeletePost(postId);
    await getDataPosts();
  };

  useEffect(() => {
    getDataPosts();
  }, []);

  return (
    <div id="post-box" className="w-[70%] border-r-4 border-gray-700 overflow-y-scroll">
      {onEdit.active && <FormEdit setOnEdit={setOnEdit} onEdit={onEdit} getDataPosts={getDataPosts} />}
      <h2 className="mt-3 p-1 font-black underline max-w-xs mx-auto rounded-md text-2xl">Posteos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3 md:gap-10 m-10  xl:m-14">
        {/* Carga */}
        <Alerta condition={isLoading} asunt={"Cargando..."} />

        {/* Error */}
        <Alerta condition={error} asunt={"Hubo un error al cargar los datos 🙁"} />

        {/* Exito */}
        {posts.map((post) => (
          <Post
            id={post.id}
            title={post.title}
            description={post.description}
            onClickEdit={onClickEdit}
            onClickDelete={onClickDelete}
          />
        ))}
      </div>
    </div>
  );
};
