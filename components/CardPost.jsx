import InfoPost from "@components/InfoPost";
import Link from "next/link";

function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article className="">
      <Link href="/detail">
        <img
          className="mb-4 w-full cursor-pointer rounded"
          src={thumbnail}
          alt=""
        />
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}

export default CardPost;
