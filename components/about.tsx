const About = () => {
  return (
    <section className="py-16 px-10 sm:px-8 md:px-12 lg:px-24 dark:bg-white dark:text-black">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center dark:bg-white">
        {/* Columna de texto */}
        <div>
          <h2 className="font-bold text-black mt-10 mb-4 text-center text-4xl">
            About
          </h2>
          <p className="text-black mb-4 leading-relaxed text-justify">
            Fabian Garzon’s journey through diverse cultures and worlds has not
            only shaped his unique photography style but also fueled his
            entrepreneurial ventures in the digital ecosystem. With a visionary
            eye, he captures influential people, celebrities, and models, using
            innovative techniques with colors, space, and light to create images
            that are fresh, sophisticated, edgy, and original. Fabian’s work
            often defies convention, offering a surreal artistic lens that
            reimagines his subjects in unexpected and thought-provoking ways. “I
            approach every shoot as if it’s my last, giving my all and pushing
            past limits every time,” he says, reflecting his relentless drive
            for creative excellence. <br></br>
            <br></br> Born in Bogotá, Colombia, Fabian discovered photography at
            12 when his father gifted him a Zenith camera, sparking a lifelong
            passion. At 18, he moved to Miami, collaborating with talent and
            modeling agencies, before heading to Toronto, Canada’s fashion hub,
            where he earned a degree in digital photography. <br></br> <br></br>
            Today, Fabian is pushing the boundaries of creativity by venturing
            beyond photography. Immersed in post-production for his debut as a
            film director, he’s bringing his artistic vision to the world of
            cinema. Simultaneously, he’s thriving as an entrepreneur, having
            founded a successful social media and Web 3 marketing agency. His
            expertise in visual storytelling and emerging digital ecosystems
            empowers brands to connect with audiences through innovative,
            immersive strategies in the ever-evolving digital landscape.
          </p>
        </div>

        {/* Columna de imagen */}
        <div className="flex justify-center">
          <img
            src="/images-hero/portrait.jpg"
            alt="Fabián Garzón"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
