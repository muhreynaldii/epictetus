
function FeaturedPost() {
    return(
        <article>
            <div className="flex -mx-4 items-center">
                <div className="w-8/12 px-4">
                    <img src="./featured-thumbnail.png" alt="" srcset="" className="rounded-xl w-full"/>
                </div>
                <div className="w-4/12 px-4">
                    <div className="flex items-center text-white/60 space-x-4">
                        <div className="uppercase">
                            ui design
                        </div>
                        <span>&bull;</span>
                        <div>
                            16 April 2022
                        </div>
                    </div>
                    <h2 className="text-2xl mt-4">Understanding color theory: the color wheel and finding complementary colors</h2>
                    <p className="text-white/60 mt-6 w-8/12">Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. </p>
                    <div className="flex items-center">
                        <img className="w-14 h-14 rounded-full mt-6 object-cover" src="./author.png" alt="author" />
                        <div className="ml-4">
                            <h3>Leslie Alexander</h3>
                            <div className="text-white/60">
                                UI Designer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default FeaturedPost;