import heroSVG from "./assets/hero.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            minus. Laboriosam molestiae molestias id ipsum ratione fugiat ab
            consequuntur magnam voluptates impedit error natus, enim minus
            perferendis vel magni praesentium.
          </p>
        </div>
        <div className="img-container">
          <img src={heroSVG} alt="hero image" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
