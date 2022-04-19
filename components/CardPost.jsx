import InfoPost from "@components/InfoPost";
import Link from "next/link";
import Image from "next/image";

function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article className="">
      <Link href="/detail" passHref={true}>
        <div className="mb-4 w-full cursor-pointer">
          <Image
            src={thumbnail}
            alt="thumbnail picture"
            layout="responsive"
            width={312}
            height={195}
            className="rounded"
          />
        </div>
      </Link>
      <InfoPost {...infoPost} />
    </article>
  );
}

export default CardPost;
