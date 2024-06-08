import { useState } from "react";
import images from "../../assets/img/assets";
import playIcon from "../../assets/icons/play.svg";
import { Fade } from "react-awesome-reveal";

export default function Vedio() {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVedio = () => {
    setShowVideo(!showVideo);
  };

  return (
    <section
      className="relative md:mx-12 mb-16 md:mb-20 h-[28rem] md:h-[41rem] bg-center bg-no-repeat bg-cover flex items-center justify-center leading-tight"
      style={{ backgroundImage: `url(${images.cowSpaceImg})` }}
    >
      <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
        <div className="text-center">
          {/* vedio Icon  */}
          <div
            className="vedio-icon md:p-4 mx-auto rounded-full cursor-pointer"
            onClick={toggleVedio}
          >
            <img src={playIcon} className="w-5 md:w-8" alt="play icon" />
          </div>

          {/* video section */}
          <div
            className={`fixed inset-0 top-0 left-0 w-full opacity-100 h-full z-20 transition-all duration-500 ease-in-out transform ${
              showVideo ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-[#030303] opacity-80"
              onClick={toggleVedio}
            ></div>
            <div
              className={`w-full px-4 h-fit transition-all duration-500 ease-in-out md:w-[50%] md:h-[70%] shadow-lg vedio-area ${
                showVideo ? "visible" : "invisible"
              }`}
            >
              <iframe
                src="https://www.youtube.com/embed/9TkJnklM3KM?si=4aMuB_bLwX16HziX"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                className="w-full h-full"
              ></iframe>
            </div>
          </div>

          <p className="md:text-[20px] text-white my-7 md:my-12">COWORKERS</p>

          <p className="text-[24px] md:text-5xl font-[500] md:leading-[55px] text-white">
            Check this video presentation
            <br className="hidden md:block" /> to know more about our coworking
          </p>
        </div>
      </Fade>
    </section>
  );
}
