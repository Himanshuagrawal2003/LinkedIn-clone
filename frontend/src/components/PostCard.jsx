import { FaRegThumbsUp, FaRegCommentDots, FaRegPaperPlane } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";

export default function PostCard({ post }) {
  const defaultAvatar = "https://cdn-icons-png.flaticon.com/512/149/149071.png";

  return (
    <div className="bg-white p-4 mb-4 rounded-lg border border-gray-200 w-full">
      {/* --- Header --- */}
      <div className="flex items-start gap-3">
        <img
          src={post.authorAvatar || defaultAvatar}
          alt="author"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900">
            {post.authorName || "Guest User"}
          </h4>
          <p className="text-sm text-gray-600">
            {post.authorHeadline || "Software Engineer | Developer"}
          </p>
          <p className="text-xs text-gray-500">
            {new Date(post.createdAt).toLocaleString()}
          </p>
        </div>
      </div>

      {/* --- Post Content --- */}
      <div className="mt-3">
        <p className="text-gray-800 text-sm sm:text-base leading-relaxed break-words whitespace-pre-wrap">
          {post.text || "This is a sample post."}
        </p>

        {post.image && (
          <img
            src={post.image}
            alt="Post"
            className="mt-3 rounded-lg w-full object-cover border"
          />
        )}
      </div>

      {/* --- Reaction Stats --- */}
      <div className="flex justify-between text-gray-500 text-sm mt-3 border-b border-gray-200 pb-2">
        <div className="flex items-center gap-1">
          <FaRegThumbsUp className="text-[#0A66C2]" />
          <span>{post.likes || 0}</span>
        </div>
        <span>{post.comments ? `${post.comments} comments` : "0 comments"}</span>
      </div>

      {/* --- Simple Action Buttons --- */}
      <div className="flex justify-between text-gray-600 text-sm mt-2 font-medium">
        <button className="flex items-center gap-2 hover:text-[#0A66C2] transition">
          <FaRegThumbsUp /> Like
        </button>
        <button className="flex items-center gap-2 hover:text-[#0A66C2] transition">
          <FaRegCommentDots /> Comment
        </button>
        <button className="flex items-center gap-2 hover:text-[#0A66C2] transition">
          <BiRepost /> Repost
        </button>
      </div>
    </div>
  );
}
