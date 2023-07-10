import React from "react";
import { TypeAnimation } from "react-type-animation";
const Banner = () => {
  return (
    <div>
      <div className="flex gap-4 items-center justify-center">
        <div>
          <TypeAnimation
            sequence={[
              "Happy Job Hunting",
              1000,
              "Find Your Dream Job",
              1000,
              "Interview Under Best HR Manager",
              1000,
              "Just Work Hard",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              color: "#3742fa",
              fontSize: "2em",
              display: "inline-block",
            }}
            repeat={Infinity}
          />
          <div>
            <h2 className="text-5xl font-bold text-slate-950 my-4">
              Which field You Want you <br /> in the industry.
            </h2>
            <p className="font-bold my-6">
              Take the mystery out of selecting and developing leaders.
            </p>
            <div className="flex gap-6">
              <div>
                <button className="btn btn-outline btn-success">
                  Want More
                </button>
              </div>
              <div>
                <button className="btn btn-outline btn-info">Apply</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/Asset/87184-programmer.gif"
            alt=""
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
