import Link from "next/link";

function PostMetaTitle({ category, date, title, center }) {
  return (
    <>
      <div className="flex items-center space-x-4 text-white/60">
        <div className="uppercase">{category}</div>
        <span>&bull;</span>
        <div>{date}</div>
      </div>
      <h2 className={`mt-4 text-2xl ${center ? "text-center" : ""}`}>
        <Link href="/detail">
          <a>{title}</a>
        </Link>
      </h2>
    </>
  );
}

export default PostMetaTitle;
