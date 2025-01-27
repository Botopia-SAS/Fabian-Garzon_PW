const About = () => {
  return (
    <section className=" py-16 px-6 sm:px-16 lg:px-32 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Columna de texto */}
        <div>
          <h2 className=" font-bold text-black mt-20 mb-4 ml-20 mr-40">
            Fabián Garzón - Agencia de marketing digital y comunicaciones.
          </h2>
          <p className="text-black mb-4 leading-relaxed ml-20 mr-20 text-justify">
            Con más de 20 años de experiencia en fotografía, dirección y
            estrategia de marketing, Fabián Garzón lidera una agencia
            internacional que transforma marcas a través de contenido creativo y
            campañas digitales. Su enfoque combina arte y estrategia,
            posicionando empresas y personas como líderes en sus mercados. Ha
            trabajado con clientes en Bogotá, Miami y Canadá, llevando sus
            proyectos al siguiente nivel con resultados medibles y un enfoque en
            innovación.
          </p>
          <h2 className=" font-bold text-black mb-4 ml-20 mr-40 mt-10">
            Fabián Garzón - SMMA.
          </h2>
          <p className="text-black leading-relaxed mb-4 ml-20 mr-20 text-justify">
            With over 20 years of experience in photography, directing, and
            marketing strategy, Fabián Garzón leads an international agency that
            transforms brands through creative content and digital campaigns.
            His approach blends art and strategy, positioning businesses and
            individuals as market leaders. He has worked with clients in Bogotá,
            Miami, and Canada, elevating projects with measurable results and a
            focus on innovation.
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
