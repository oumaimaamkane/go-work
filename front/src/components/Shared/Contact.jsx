import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LinkButton from "../Buttons/LinkButton";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  return (
    <section className="px-4 md:px-12 mb-14 md:mb-24">
      {/* Header */}
      <div className="w-full flex flex-wrap">
        <div className="w-full md:w-1/3 flex md:px-3">
          <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
            <span className="p-4 h-fit rounded-[50%] bg-[#EEF8F7] leading-5">
              <FontAwesomeIcon
                icon={faLocationDot}
                className=" size-4 text-[#030303]"
              />
            </span>

            <div className="ml-4 md:ml-6">
              <h3 className="text-base md:text-lg font-semibold text-[#1E3954]">
                Address
              </h3>
              <p className="text-sm md:text-base text-gray-500 md:leading-7  mt-1 mb-14 md:mb-28">
                MASH Detroit bulding, 14711 Mack Ave., Detroit, MI 48214
              </p>
            </div>
          </Fade>
        </div>

        <div className="w-full md:w-1/3 flex md:px-3">
          <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
            <span className="p-4 h-fit rounded-[50%] bg-[#EEF8F7] leading-5">
              <FontAwesomeIcon
                icon={faPhone}
                className=" size-4 text-[#030303]"
              />
            </span>

            <div className="ml-4 md:ml-6">
              <h3 className="text-base md:text-lg font-semibold text-[#1E3954]">
                Phone
              </h3>
              <p className="text-sm md:text-base text-gray-500 md:leading-7  mt-1 mb-14 md:mb-28">
                123 - 456 7890 / 123 - 456 7891
              </p>
            </div>
          </Fade>
        </div>

        <div className="w-full md:w-1/3 flex md:px-3">
          <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
            <span className="p-4 h-fit rounded-[50%] bg-[#EEF8F7] leading-5">
              <FontAwesomeIcon
                icon={faEnvelope}
                className=" size-4 text-[#030303]"
              />
            </span>

            <div className="ml-4 md:ml-6">
              <h3 className="text-base md:text-lg font-semibold text-[#1E3954]">
                Email
              </h3>
              <p className="text-sm md:text-base text-gray-500 md:leading-7  mt-1 mb-14 md:mb-28">
                contact@company.com
              </p>
            </div>
          </Fade>
        </div>
      </div>

      {/* Contact form */}
      <div className="container">
        <div className="flex gap-y-10 flex-wrap">
          <div className="w-full md:w-1/2 md:pr-8">
            <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
              <h2 className="text-[24px] md:text-4xl font-bold mb-8 text-[#1E3954]">
                Get in Touch
              </h2>

              <form>
                <div className="">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full text-sm md:text-base p-4 border border-[#EBEBEB] rounded-lg mb-4"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full text-sm md:text-base p-4 border border-[#EBEBEB] rounded-lg mb-4"
                  />
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="6"
                    placeholder="Your Message"
                    className="w-full text-sm md:text-base p-4 border border-[#EBEBEB] rounded-lg mb-4"
                  ></textarea>
                </div>
                <LinkButton
                  className="h-fit text-white md:py-4 md:px-8 rounded-full
                    duration-500"
                >
                  Submit Now
                </LinkButton>
              </form>
            </Fade>
          </div>

          {/* Afriposte Maps */}
          <div className="w-full md:w-1/2 md:pl-4">
            <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6883.9770291709465!2d-9.507027072769159!3d30.379684032223235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzDCsDIyJzQ4LjkiTiA5wrAzMCcxNi44Ilc!5e0!3m2!1sfr!2sma!4v1716639938880!5m2!1sfr!2sma"
                allowfullscreen=""
                loading="lazy"
                className="w-full h-[500px] border-none"
              ></iframe>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
}
