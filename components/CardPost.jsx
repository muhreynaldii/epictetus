import InfoPost from "@components/InfoPost";
import Link from "next/link";

function CardPost({thumbnail, ...infoPost}){
    return(
        <article className="">
            <Link href="/detail">
            <img className="w-full rounded mb-4 cursor-pointer" src={thumbnail} alt="" />
            </Link>
            <InfoPost
            {...infoPost}
            />
        </article>
    )
}

export default CardPost;