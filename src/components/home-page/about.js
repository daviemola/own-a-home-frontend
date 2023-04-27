import Image from "next/image";

function About() {
  return (
    <section className="px-6 md:px-12 xl:px-16 my-[123px] flex-col md:mt-[88px] md:flex text-white">
      <h1 className="mx-auto mt-6 max-w-[1024px] text-center text-[32px] font-extrabold leading-10 md:text-[48px] md:leading-[1.15] aos-init aos-animate">
        Founded by leading gaming and blockchain industry veterans
      </h1>
      <p className="text-light mx-auto mt-[32px] max-w-[717px] text-zinc-400 text-center text-lg md:text-[20px] md:leading-[1.5] aos-init aos-animate">
        Myria has been built by an all-star team of over 150 people, united with
        a common vision of revolutionizing gaming with blockchain technology.
      </p>
      <div className="opacity-70">
        <div className="grid gap-[34px] sm:hidden">
          {/* tyutyuuyiy iuyi yi u */}
        </div>
      </div>
    </section>
  );
}

export default About;
