import img from "../../../assets/auth-bg.png";

const BgImg = () => {
  return (
    <figure className="relative w-full h-[50vh] sm:min-h-screen overflow-hidden">
      <img
        src={img}
        alt="Background decorative"
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
    </figure>
  );
};

export default BgImg;
