import { Fade } from "react-awesome-reveal";
import Carousel from "../Slider/Carousel";
import images from "../../assets/img/assets";

const REVIEWS = [
  {
    name: "Downey Sarah",
    position: "CEO Deercreative",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Dolor, ex quos. Alias a rem maiores, possimus dicta sit
                    distinctio quis iusto!`,
  },
  {
    name: "Robert Downey",
    position: "CEO Deercreative",
    review: `This can be achieved by applying search engine
                      optimization or popularly known as SEO. This is a
                      marketing strategy which increases the quality and
                      quantity of traffic flow to a particular website via
                      search engines.`,
  },
  {
    name: "Robert Downey",
    position: "CEO Deercreative",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Labore sequi laboriosam fugit suscipit aspernatur, minima
                    minus voluptatum, id ab atque similique ex earum. Magni.`,
  },
  {
    name: "Akash Downey",
    position: "CEO Deercreative",
    review: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Necessitatibus delectus facilis molestias, error vitae
                      praesentium quos eaque qui ea, tempore blanditiis sint
                      reprehenderit, quaerat. Commodi ab architecto sit suscipit
                      exercitationem!`,
  },
];

const REVIEW_IMAGE = [
  images.testo1,
  images.testo2,
  images.testo1,
  images.testo2,
];

export default function Testimonials() {
  return (
    <section className="coworking-testimonials-area md:pb-24 mx-4 md:mr-11">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12">
          {/* <!-- Testimonial Thumbnail --> */}
          <div className="col-span-1 md:col-span-6 lg:grid-cols-6 md:mx-8">
            <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
              <div className="testimonial-thumbnail pb-10 md:pb-0">
                <Carousel autoSlide={true} autoSlideInterval={4000}>
                  {REVIEW_IMAGE.map((slide, index) => (
                    <img key={index} src={slide} alt={`Slide ${index + 1}`} />
                  ))}
                </Carousel>
              </div>
            </Fade>
          </div>

          {/* <!-- Testimonial Slide --> */}
          <div className="col-span-1 md:col-span-6 lg:grid-cols-6 ">
            <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
              {/* <!-- Section Heading --> */}
              <div className="section-heading mb-8 md:mb-12">
                <h6 className="mb-2 md:mb-4 text-[18px] uppercase">
                  Testimonials
                </h6>
                <h2 className="font-bold md:text-[36px] text-[#1E3954]">
                  Our Guests Love Us
                </h2>
              </div>
              {/* <!-- Testimonial Slide --> */}
              <div className="testimonial-REVIEW_IMAGE overflow-auto pb-20">
                <Carousel autoSlide={true} autoSlideInterval={4000}>
                  {REVIEWS.map((slide, index) => (
                    <div
                      key={index}
                      className="single-testimonial-slide w-full flex-shrink-0"
                    >
                      <h5>{slide.review}</h5>
                      <div className="rating-title">
                        <h6>
                          {slide.name}{" "}
                          <span className="text-teal-500">
                            - {slide.position}
                          </span>
                        </h6>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
