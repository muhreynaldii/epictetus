function PostAuthor({ authorAvatar, authorName, authorJobs }) {
  return (
    <div className="mt-5 flex items-center">
      <img
        className="h-14 w-14 items-center rounded-full object-cover"
        src={authorAvatar}
        alt="author"
      />
      <div className="ml-4">
        <h3>{authorName}</h3>
        <div className="mt-1 text-sm text-white/60">{authorJobs}</div>
      </div>
    </div>
  );
}

export default PostAuthor;
