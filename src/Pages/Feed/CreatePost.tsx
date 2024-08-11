import EmojiPicker from "emoji-picker-react";
import React, { useCallback, useMemo, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Button, Stack } from "../../components";
import { SpinnerIcon } from "../../components/Icons";
import { MAX_POST_LENGTH, MIN_POST_LENGTH } from "../../constants";

interface CreatePostFormProps {
  loading?: boolean;
  onCreatePost: ({
    content,
  }: {
    content: { emoji: string; text: string };
  }) => void;
}

const default_emoji = "💬";

const CreatePostForm: React.FC<CreatePostFormProps> = ({
  loading,
  onCreatePost,
}) => {
  const [error, setError] = useState("");
  const [content, setContent] = useState("");
  const [emoji, setEmoji] = useState(default_emoji);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const emojiButtonRef = useRef<HTMLButtonElement>(null);

  const toggleEmojiPicker = useCallback(() => {
    setShowEmojiPicker((prev) => !prev);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const trimmedContent = content.trim();
    if (!trimmedContent) {
      setError("Post content cannot be empty.");
      return;
    }

    if (trimmedContent.length < MIN_POST_LENGTH) {
      setError("Post content must be at least 5 characters long.");
      return;
    }

    if (trimmedContent.length > MAX_POST_LENGTH) {
      setError("Post content must not exceed 280 characters.");
      return;
    }
    setEmoji(default_emoji);
    setContent("");
    onCreatePost({ content: { emoji, text: content } });
  };

  const emojiButtonWidth = useMemo(() => {
    return emojiButtonRef.current?.offsetWidth || 0;
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Stack className="bg-secondary border-[2px] border-borders-secondary relative p-6 rounded-lg gap-4">
        <h2 className="text-lg font-semibold text-text-label">Create post</h2>
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <button
              disabled={loading}
              ref={emojiButtonRef}
              onClick={toggleEmojiPicker}
              type="button"
              className="bg-secondary h-12 w-12 rounded-full flex items-center justify-center focus:outline-none"
            >
              <span className="text-gray-400">{emoji}</span>
            </button>
            {showEmojiPicker && (
              <div className="absolute top-full left-0 z-10 mt-1">
                <EmojiPicker
                  onEmojiClick={(emojiObject) => {
                    setEmoji(emojiObject.emoji);
                    setShowEmojiPicker(false);
                  }}
                />
              </div>
            )}
          </div>
          <textarea
            className={`w-full bg-tertiary py-2 rounded-md text-text-label focus:outline-none focus:ring-2 focus:ring-blue-500`}
            style={{ paddingLeft: `calc(${emojiButtonWidth}px + 1.5rem)` }}
            rows={2}
            value={content}
            disabled={loading}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What's on your mind?"
          />
        </div>
        <Stack className="gap-2">
          {Boolean(error.length) ? (
            <p className="text-sm text-red-500">{error}</p>
          ) : null}
          <div className="flex justify-end">
            <Button type="submit" disabled={loading} className="mt-2">
              Post {loading && <SpinnerIcon />}
            </Button>
          </div>
        </Stack>
      </Stack>
    </form>
  );
};

export default CreatePostForm;
