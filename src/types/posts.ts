import { AuthUser } from "./users";

export type Post = {
  id: string;
  author: AuthUser;
  content: {
    emoji: string;
    text: string;
  };
  createdAt: Date;
  updatedAt?: Date;
  commentsCount: number;
};
