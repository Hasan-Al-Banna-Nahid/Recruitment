import { useEffect, useState } from "react";
import Header from "../Home/Header/Header";

const Candidates = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [data, setData] = useState([]);
  const [selectedModalId, setSelectedModalId] = useState(null);

  const openModal = (id) => {
    setSelectedModalId(id);
  };

  const closeModal = () => {
    setSelectedModalId(null);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    event.preventDefault();
    // const filteredData = searchQuery.data.filter((item) =>
    //   item.location.includes(searchQuery)
    // );
    const filteredData = data.filter(
      (item) =>
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.job.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setData(filteredData);
  };

  useEffect(() => {
    fetch("SearchCandidates.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div>
      <Header />
      <div>
        <form onChange={handleSearch} className="hero my-4 bg-base-200">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="form-control">
              <input
                type="text"
                placeholder="Search by Location or Category or Name"
                className="input input-bordered"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-[20px]">
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Category</th>
                <th>Location</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {data &&
                data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <th>{item.id}</th>
                      <td>
                        <div className="flex items-center space-x-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img src={item.photo} alt="" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="font-bold">{item.name}</div>
                      </td>
                      <td>
                        <div className="text-sm opacity-50 font-bold">
                          {item.job}
                        </div>
                      </td>
                      <td className="font-bold">
                        {item.location}
                        <br />
                      </td>

                      <th>
                        <button
                          onClick={() => {
                            openModal({ item, name: item.name });
                          }}
                          className="btn btn-ghost btn-xs"
                        >
                          details
                        </button>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
      <input
        type="checkbox"
        id={`my-modal-${selectedModalId}`}
        className="modal-toggle"
        checked={selectedModalId !== null}
      />
      {selectedModalId !== null && (
        <>
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor={`my-modal-${selectedModalId}`}
                className="btn btn-sm btn-circle absolute right-2 top-2"
                onClick={closeModal}
              >
                ✕
              </label>
              <form className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                      <div className="form-control">
                        <input
                          type="text"
                          placeholder="Add To Rank"
                          name="rank"
                          value={"Add To Rank"}
                          readOnly
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button className="btn btn-primary" type="submit">
                          Add to Ranked
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Candidates;
