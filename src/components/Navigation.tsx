import netflixsvg from "./netflix.svg";
function Navigationbar() {
  return (
    <>
      <div className="container-md">
        <div className="d-flex justify-content-between">
          <img src={netflixsvg} height={"auto"} width={"130px"}></img>
          <div className="d-flex align-items-center gap-3">
            <select className="form-selector text-center bg-dark">
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
            <button
              type="button"
              className="btn btn-danger btn-sm btn-center w-100"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="pt-5 my-5 text-light text-center">
          <h1>Unlimited movies, TV shows and more</h1>
          <h5 className="my-4">Watch anywhere, Cancel anytime</h5>
          <h5>
            Ready to Watch? Enter your email to create or restart your
            membership
          </h5>
          <div className="my-5 pb-5 d-flex gap-5 justify-content-center">
            <input
              type="text"
              className="form-control bg-dark w-50"
              name="Email"
              id="email"
              placeholder="Email Address"
            />

            <button
              type="button"
              name=""
              id=""
              className="btn btn-danger py-2 w-5"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <hr className="border border-alert border-5" />
    </>
  );
}

export default Navigationbar;
