import { FaBimobject, FaDailymotion, FaStar, FaTumblr } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { FaAdn } from "react-icons/fa";

const Testimonial = () => {
  return (
    <div>
      <div className="flex gap-6 justify-center items-center">
        <div>
          <h2 className="text-5xl my-6 font-bold text-purple-700">
            Jobs by Industry
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div>
                <FaAdn className="text-4xl" />
                <div>
                  <h1>Accounting</h1>
                </div>
              </div>
            </div>

            <div>
              <div>
                <FaDailymotion className="text-4xl" />
                <div>
                  <h1>Marketing</h1>
                </div>
              </div>
            </div>

            <div>
              <div>
                <FaTumblr className="text-4xl" />
                <div>
                  <h1>Technology</h1>
                </div>
              </div>
            </div>

            <div>
              <div>
                <FaBimobject className="text-4xl" />
                <div>
                  <h1>Banking</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <TypeAnimation
            sequence={[
              "Happy Client",
              1000,
              "Testimonial",
              1000,
              "What Our Client Say",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              color: "#8e44ad",
              fontSize: "2em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
          <div className="flex justify-between items-center">
            <div>
              <img
                width={100}
                height={100}
                src="/Asset/bohemian-man-with-his-arms-crossed.jpg"
                alt=""
              />
            </div>
            <div>
              <div className="flex gap-2">
                <div>
                  <FaStar className="text-yellow-600 text-2xl" />
                </div>
                <div>
                  <FaStar className="text-yellow-600 text-2xl" />
                </div>
                <div>
                  <FaStar className="text-yellow-600 text-2xl" />
                </div>
                <div>
                  <FaStar className="text-yellow-600 text-2xl" />
                </div>
                <div>
                  <FaStar className="text-yellow-600 text-2xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-4">
            <h2 className="text-4xl font-bold text-slate-900">
              What Client's are <br />
              say about us
            </h2>
            <div>
              <h2 className="text-blue-600 font-bold text-[20px]">
                {" "}
                Name : Jane Doe
              </h2>
              <p className="text-blue-600 font-bold text-[20px]">
                Company : XYZ Enterprises
              </p>
              <p className="text-[20px] font-bold text-slate-900">
                I've had the pleasure of working with this company for <br />
                several projects, and they have consistently exceeded my <br />
                expectations. Their expertise and creativity have been <br />
                invaluable in achieving our business goals. I appreciate their{" "}
                <br />
                prompt communication and commitment to delivering high-quality
                work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
