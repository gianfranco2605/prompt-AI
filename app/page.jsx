import Feed from "@components/Feed";

const Home = () => {
  return (
    <div>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
        Scopri & Condividi
          <br className="max-md:hidden" /> {/*max-md:hidden*/}
          <span className="orange_gradient text-center">
          Prompt alimentati dall'intelligenza artificiale
          </span>
        </h1>
        <p className="desc text-center">PromptNavas è uno strumento di suggerimento AI open source per il mondo moderno, per scoprire, creare e condividere suggerimenti creativi</p>
        
        <Feed />
      </section>
    </div>
  )
}

export default Home