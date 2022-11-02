const baseUrl = "http://localhost:3000";

export const getPosts = async () => {
  const response = await fetch(`${baseUrl}/posts`, { method: "GET" });
  const data = await response.json();
  return data;
};

export const CreatePosts = async (data) => {
  await fetch(`${baseUrl}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
};

export const UpdatePost = async (id, data) => {
  await fetch(`${baseUrl}/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
};

export const DeletePost = async (id) => {
  await fetch(`${baseUrl}/posts/${id}`, {
    method: "DELETE",
  });
};
