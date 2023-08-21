import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Discover &  Share
            <br />
            <span className="orange_gradient text-center">AI-Powered Prompts</span>
        </h1>
        <p className="desc text-center">
            PromptSharer is a great place for you to share your favourite A.I prompts and discover interesting prompts posted by others.
        </p>

        < Feed />
    </section>
  )
}

export default Home