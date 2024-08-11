import { v4 as uuidv4 } from "uuid";
import { CREATE_POST_TIME, FETCH_POST_TIME, posts } from "../constants";

import { AuthUser, Post } from "../types";

export const postService = {
  createPost: ({
    author,
    content,
  }: {
    author: AuthUser;
    content: { emoji: string; text: string };
  }): Promise<Post> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newPost: Post = {
          id: uuidv4(),
          content,
          author,
          createdAt: new Date(),
          commentsCount: 0,
        };
        posts.push(newPost);
        resolve(newPost);
      }, CREATE_POST_TIME);
    });
  },

  fetchPosts: (): Promise<Post[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, FETCH_POST_TIME);
    });
  },

  updatePost: ({
    postId,
    content,
  }: {
    postId: string;
    content: { emoji: string; text: string };
  }): Promise<Post> => {
    return new Promise((resolve, reject) => {
      const postIndex = posts.findIndex((p) => p.id === postId);

      if (postIndex === -1) {
        return reject(new Error("Post not found."));
      }

      posts[postIndex] = {
        ...posts[postIndex],
        content,
        updatedAt: new Date(),
      };
      resolve(posts[postIndex]);
    });
  },

  deletePost: (postId: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const postIndex = posts.findIndex((p) => p.id === postId);

      if (postIndex === -1) {
        return reject(new Error("Post not found."));
      }

      posts.splice(postIndex, 1);
      resolve();
    });
  },
};
