import { useState } from "react";
import { FormBox, PostBox } from "./components";

const App = () => {
  const [posts, setPosts] = useState([]);

  return (
    <main className="h-screen flex bg-slate-300 text-center text-gray-700 overflow-hidden">
      <PostBox posts={posts} setPosts={setPosts} />
      <FormBox posts={posts} setPosts={setPosts} />
    </main>
  );
};

export default App;
