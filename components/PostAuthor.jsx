import Image from "next/image";

function PostAuthor({ authorAvatar, authorName, authorJobs }) {
  return (
    <div className="mt-5 flex items-center">
      <div className="h-14 w-14 items-center object-cover">
        <Image
          src={authorAvatar}
          alt="author"
          layout="responsive"
          width={56}
          height={56}
          className="rounded-full"
        />
      </div>
      <div className="ml-4">
        <h3>{authorName}</h3>
        <div className="mt-1 text-sm text-white/60">{authorJobs}</div>
      </div>
    </div>
  );
}

export default PostAuthor;
