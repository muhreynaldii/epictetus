import InfoPost from "@components/InfoPost";

function CardPost({thumbnail, ...infoPost}){
    return(
        <article className="">
            <img className="w-full rounded mb-4" src={thumbnail} alt="" />
            <InfoPost
            {...infoPost}
            />
        </article>
    )
}

export default CardPost;