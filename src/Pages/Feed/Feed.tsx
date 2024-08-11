import React, { useMemo, useState } from "react";
import PostCard from "./PostCard";
import { posts as initialPosts } from "../../constants";
import CreatePostForm from "./CreatePost";
import { useAuth } from "../../contexts";
import { Stack } from "../../components";
import { postService } from "../../services";
import toast from "react-hot-toast";

const Feed: React.FC = () => {
  const { user } = useAuth();
  const [posts, setPosts] = useState(initialPosts);
  const [creatingPost, setCreatingPost] = useState(false);

  const handleCreatePost = async ({
    content,
  }: {
    content: { emoji: string; text: string };
  }) => {
    if (!user?.id) {
      toast.error("Please login before creating posts!");
      return;
    }
    setCreatingPost(true);
    try {
      const post = await postService.createPost({
        author: user,
        content: content,
      });
      toast.success("You have added a post successfully!");
      setCreatingPost(false);
      setPosts((prev) => [post, ...prev]);
    } catch (e) {
      const error = e as Error;
      setCreatingPost(false);
      toast.error(error.message || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen my-20 max-w-2xl mx-auto">
      <Stack className="gap-10">
        <Stack className="gap-3">
          <h1 className="text-3xl text-text-label font-semibold">
            Hello {user?.name}
          </h1>
          <p className="text-gray-500">
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </Stack>
        <CreatePostForm
          loading={creatingPost}
          onCreatePost={handleCreatePost}
        />
        {posts.map((post) => (
          <PostCard post={post} key={post.id} isAuthor={post.author.id === user?.id} />
        ))}
      </Stack>
    </div>
  );
};

export default Feed;
