import { Fragment } from "react";
import PostMetaTitle from "@components/PostMetaTitle";
import PostAuthor from "@components/PostAuthor";
function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJobs,
}) {
  return (
    <Fragment>
      <PostMetaTitle category={category} date={date} title={title} />
      <p className="mt-5 w-8/12 text-white/60">{shortDescription} </p>
      <PostAuthor
        authorAvatar={authorAvatar}
        authorName={authorName}
        authorJobs={authorJobs}
      />
    </Fragment>
  );
}

export default InfoPost;
