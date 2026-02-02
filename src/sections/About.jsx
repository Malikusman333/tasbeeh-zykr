import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  const [animated, setAnimated] = useState(false); // one-time animation

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);

          setTimeout(() => {
            setShow(true);
          }, 400); 
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [animated]);

  return (
    <section className="c-space  section-spacing bg-green-600" id="about">
      <div className="flex flex-col items-center justify-center">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
          animate={
            show
              ? { opacity: 1, filter: "blur(0px)", y: 0 }
              : {}
          }
          transition={{ duration: 0.6 }}
          className=" bottom-50 sm:bottom-0 relative w-[300px] h-[600px] md:w-[350px] md:h-[700px] lg:w-[485px] lg:h-[950px]"
        >
          <div className="absolute inset-0 bg-white/50 backdrop-blur-md rounded-[40px] border-[5px] border-white/50 shadow-2xl overflow-hidden">
            <div className="absolute inset-[8px] bg-transparent rounded-[32px] overflow-hidden">

              <div
                className="absolute inset-0 w-full h-full -z-50 rounded-b-3xl"
                style={{
                  backgroundImage: "url(/assets/coco.png)",
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                }}
              />
              
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
