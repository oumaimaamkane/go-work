import { Fade } from 'react-awesome-reveal';
import images from '../../assets/img/assets';
import { default as ContactComponent } from "../../components/Shared/Contact";

export default function Contact() {
  return (
    <>
      {/* Breadcrumb Area Start */}
      <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
        <section
          className="px-4 md:px-12 leading-tight bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${images.banner1})` }}
        >
          <div className="container h-[250px] md:h-[400px] flex justify-center items-center pt-20 md:pt-36">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="breadcrumb-content text-center">
                    <Fade delay={1e2} cascade triggerOnce damping={1e-1}>
                      <h2 className="text-white uppercase font-semibold mb-1 md:mb-3 text-[24px] md:text-4xl">
                        Contact Us
                      </h2>
                      <ul className="flex justify-center items-center text-white font-[500]">
                        <li>
                          <a href="/" className="hover:text-black">
                            Home
                          </a>
                        </li>
                        <span className="mx-2">&gt;</span>
                        <li>Contact</li>
                      </ul>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fade>

      {/* Contact Area Start */}
      <section className="pt-14 md:pt-24">
        <ContactComponent />
      </section>
    </>
  );
}
