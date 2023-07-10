import React, { useEffect, useState } from "react";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("Jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl font-bold">Recent Jobs</h2>
      <div className="grid grid-cols-2 gap-6 my-8">
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-[18px] font-bold">
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th className="text-[18px] font-bold"></th>
                  <th className="text-[18px] font-bold">Name</th>
                  <th className="text-[18px] font-bold">Salary</th>
                  <th className="text-[18px] font-bold">Office Time </th>
                  <th className="text-[18px] font-bold">Location</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {jobs.map((job) => {
                  return (
                    <tr key={job.salary}>
                      <th className="text-[16px]">
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td className="text-[16px]">
                        <div className="flex items-center space-x-3">
                          <button className="btn btn-outline btn-primary">
                            Apply
                          </button>
                        </div>
                      </td>
                      <td className="text-[16px]">
                        {job.jobName}
                        <br />
                        <span className="badge badge-ghost badge-sm">
                          {job.employmentType}
                        </span>
                      </td>
                      <td className="text-[16px]">{job.salary}</td>
                      <td className="text-[16px]">{job.availability}</td>
                      <td className="text-[16px]">{job.location}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="w-full ">
            <button className="btn w-full my-6 btn-secondary">More</button>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold">Featured Jobs</h2>
          <div className="grid grid-cols-2 gap-6">
            {jobs.slice(0, 3).map((job) => {
              return (
                <div
                  key={job.salary}
                  className="card w-96 bg-base-100 shadow-xl"
                >
                  <figure className="px-10 pt-10">
                    <img
                      src="/Asset/tech.jpg"
                      alt="Shoes"
                      className="rounded-xl"
                    />
                  </figure>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title">{job.jobName}</h2>
                    <p className="font-bold text-slate-900">
                      Salary : {job.salary}
                    </p>
                    <p className="font-bold text-red-700">
                      Office Time :{job.availability}
                    </p>
                    <p className="font-bold text-cyan-500">
                      Location : {job.location}
                    </p>
                    <div className="card-actions w-full">
                      <button className="btn btn-primary w-full">Apply</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="btn w-full my-6 btn-success">More</button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
