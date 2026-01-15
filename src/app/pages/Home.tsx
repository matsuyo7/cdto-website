import Slideshow from "../components/Slideshow";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <div className="text-black">
      {/* Slideshow component */}
      <div className="w-full h-[700px]">
        <Slideshow />
      </div>
      <div className="max-w-[800px] my-12 w-full mx-auto text-center flex flex-col gap-12 px-4">
        {/* Mission statement */}
        <h1 className="text-4xl">
          We at the CDTO are a non-profit organization that educates our
          Cambodian culture through traditional arts of dance and music Talk
          about how the dance troup came to be? Say the mings cofounded
        </h1>

        {/* Social Media */}
        <SocialMedia />
      </div>
    </div>
  );
};
export default Home;
