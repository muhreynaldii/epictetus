function PostAuthor({authorAvatar,authorName,authorJobs}) {
    return(
        <div className="flex items-center mt-5">
        <img className="w-14 h-14 rounded-full object-cover items-center" src={authorAvatar} alt="author" />
        <div className="ml-4">
            <h3>{authorName}</h3>
            <div className="text-white/60 text-sm mt-1">
                {authorJobs}
            </div>
        </div>
    </div>
    )
}

export default PostAuthor;