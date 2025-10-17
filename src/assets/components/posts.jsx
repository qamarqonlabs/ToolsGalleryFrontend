import Post from "./post.jsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
function Posts({ data }) {
  console.log("from posts:  ", data);
  const [opened, setOpened] = useState(null);
  let openedPost = data.find((i) => opened == i.id);
  let otherPosts = data.filter((i) => opened !== i.id);
  if (data == []) {
    return;
  }
  return (
    <motion.div layout className={`grid grid-cols-1 lg:grid-cols-2 gap-4 p-4`}>
      {opened && (
        <motion.div layout className="sticky top-2. max-h-fit self-start">
          <Post
            key={openedPost.id}
            data={openedPost}
            highlighted={false}
            small={false}
            setOpened={setOpened}
            opened={true}
          />
        </motion.div>
      )}
      <motion.div
        layout
        className={`${opened ? "gap-4 grid grid-cols-1 [grid-auto-flow:dense]" : "col-span-2 grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4"}`}
      >
        <AnimatePresence>
          {otherPosts.map((i) => (
            <Post
              key={i.id}
              data={i}
              highlighted={opened == i.id ? true : false}
              small={opened == null ? false : true}
              setOpened={setOpened}
              opened={false}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default Posts;
