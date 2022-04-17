import InfoPost from "@components/InfoPost";

function FeaturedPost() {
    return(
        <article>
            <div className="flex -mx-4 items-center flex-wrap">
                <div className="lg:w-8/12 md:w-7/12 px-4 w-full">
                    <img src="./featured-thumbnail.png" alt="" className="rounded-xl w-full"/>
                </div>
                <div className="lg:w-4/12 md:w-5/12 px-4 w-full">
                    <InfoPost
                    category = "UI DESIGN"
                    date="July 2, 2021"
                    title="Understanding color theory: the color wheel and finding complementary colors"
                    shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                    authorAvatar="./author-1.png"
                    authorName="Leslie Alexander"
                    authorJobs="UI Designer"
                    />
                </div>
            </div>
        </article>
    )
}

export default FeaturedPost;