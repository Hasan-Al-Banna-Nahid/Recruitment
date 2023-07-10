import React from "react";

const Featured = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-8 p-4">
        <div>
          <h2 className="text-5xl">
            Welcome to an{" "}
            <span className="text-purple-700">
              Award Winning <br />
            </span>
            Recruitment Agency
          </h2>
          <div className="flex gap-4 my-6">
            <div>
              <p className="font-bold border-r-4 border-purple-700">
                Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz
                sapiente twee stumptown ex. Duis Carles pickled, cornhole
                Thundercats McSweeney’s minim PBR vegan Tumblr irony. Kogi eu
                Thundercats, sed scenester before they sold out et aesthetic.
              </p>
            </div>
            <div>
              <p className="font-bold border-r-4 border-purple-950">
                Bushwick Schlitz. Est Shoreditch small batch, dolor Schlitz
                sapiente twee stumptown ex. Duis Carles pickled, cornhole
                Thundercats McSweeney’s minim PBR vegan Tumblr irony. Kogi eu
                Thundercats, sed scenester before they sold out et aesthetic.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src="/Asset/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer.jpg"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <div className="card-actions">
                    <button className="btn btn-primary w-full">
                      Create Your Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="card w-96 bg-base-200 shadow-xl">
                <figure className="px-10 pt-10">
                  <img
                    src="/Asset/businessWomen.jpg"
                    alt="Shoes"
                    className="rounded-xl"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      Upload Your Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
