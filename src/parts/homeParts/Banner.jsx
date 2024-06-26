import "bootstrap/dist/css/bootstrap.min.css";
import banner from "/images/other/banner.png";
const Banner = () => {
  return (
    <div className=" flex justify-center   w-full">
      <div
        className="relative w-10/12 overflow-hidden flex justify-center
 group mb-4"
      >
        <img
          src={banner}
          alt=""
          className="transition-transform
    group-hover:scale-105 duration-200 "
        />
        <div
          className="absolute inset-0 flex 
    items-end"
        >
          <div className=" text-navBg flex-1">
            <p className="center sm:text-xs md:text-lg lg:text-5xl font-bold text-center m-0">
              Organic food is the best medicine for your body
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

{
  /* <div>
      <Container className="ban w-11/12 p-0 mb-4" style={{ height: "280px" }}>
        <figure className="position-relative ">
          <img src={banner} alt="Banner" className=" ban w-11/12 img-fluid" />
          <figcaption className="center text-3xl font-bold text-center">
            "Organic food is the best medicine for your body"
            <p className="cap text-sm font-normal">EST HABECO CETEROS</p>
          </figcaption>
        </figure>
      </Container>
    </div> */
}
