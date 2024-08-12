import React from "react";
import { Inline, Stack } from "../../components";
import { MenuIcon } from "../../components/Icons";
import { Post } from "../../types";
import { formatRelativeTime } from "../../utils";

interface PostProps {
  post: Post;
  isAuthor?: boolean
}

const PostCard: React.FC<PostProps> = ({ post, isAuthor }) => {
  return (
    <Stack className="bg-secondary border-[2px] border-borderLow relative p-6 rounded-lg gap-4 transition-colors duration-200">
      <Inline className="justify-between items-center">
        <Inline className="items-center gap-4">
        <img
          src={`https://robohash.org/${post.author.id}`}
          alt={post.author.name}
          width="40px"
        />
        <Stack className="gap-1">
          <h3 className="text-textLabel ">{post.author.name} {isAuthor ? "(You)" : ''}</h3>
          <p className="text-sm text-textLow">{formatRelativeTime(post?.updatedAt || post.createdAt)}</p>
        </Stack>
        </Inline>
        {isAuthor && <MenuIcon cursor='pointer' />}
      </Inline>
      <Inline className="p-4 bg-tertiary gap-4 rounded-lg">
        <div>
          <div className="bg-secondary h-12 w-12 rounded-full flex items-center justify-center">
            <span>{post.content.emoji}</span>
          </div>
        </div>
        <p className="text-textLow mb-4">
          {post.content.text}
        </p>
      </Inline>
      <div className="flex justify-between items-center"></div>
    </Stack>
  );
};

export default PostCard;
