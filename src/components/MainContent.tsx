import firstvideo from "./background_video.mp4";
import tvimg from "./tv.png";
import mobileimg from "./mobile.jpg";
import kidschannel from "./kids_channel.png";
import multipledevices from "./streamdevices.png";
import secondvideo from "./video2.mp4";

function MainContent() {
  return (
    <>
      <div className="text-light container-md">
        <div className="text-center d-lg-flex justify-content-center mainsection align-items-center">
          <div className="text-lg-start text-center col-lg-6 py-5 my-3 my-lg-0 py-lg-0">
            <h1 className="md:w-100">Enjoy on your TV</h1>
            <h5 className="md:w-100 my-5">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players, and more
            </h5>
          </div>
          <div className="col-lg-6 py-2 py-md-0">
            <div className="position-relative my-5 my-md-0">
              <video src={firstvideo} autoPlay autoFocus loop muted></video>
              <img
                src={tvimg}
                alt=""
                className="position-absolute translate-middle start-50 bottom-0 top-50 end-0"
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-5 border-grey" />
      <div className="text-light container-md">
        <div className="text-center d-lg-flex justify-content-center mainsection align-items-center">
          <div className="col-lg-6 my-5 my-md-0">
            <div className="text-center">
              {/* <video src={firstvideo} autoPlay autoFocus loop muted></video> */}
              <img src={mobileimg} alt="" className="" />
            </div>
          </div>
          <div className="text-lg-start text-center col-lg-6 my-5 py-5 my-md-0 py-md-0">
            <h1 className="md:w-100">Download Your Shows to Watch Offline</h1>
            <h5 className="md:w-100">
              Save your favourites easily and always have something to watch.
            </h5>
          </div>
        </div>
      </div>
      <hr className="border border-5 border-grey" />
      <div className="text-light container-md py-5 py-md-0">
        <div className="text-center d-lg-flex justify-content-center mainsection align-items-center">
          <div className="text-lg-start text-center col-lg-6  py-5 my-3 my-lg-0 py-lg-0">
            <h1 className="md:w-100">Watch everywhere</h1>
            <h5 className="md:w-100 my-5">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </h5>
          </div>
          <div className="col-lg-6 py-md-0">
            <div className="position-relative my-md-0">
              <video
                src={secondvideo}
                autoPlay
                autoFocus
                loop
                muted
                className="video_height"
              ></video>
              <img
                src={multipledevices}
                alt=""
                className="position-absolute translate-middle start-50 bottom-0 top-50 end-0 mt-5 pt-5 "
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="border border-5 border-grey" />
      <div className="text-light container-md">
        <div className="text-center d-lg-flex justify-content-center mainsection align-items-center">
          <div className="col-lg-6 my-5 my-md-0">
            <div className="text-center">
              {/* <video src={firstvideo} autoPlay autoFocus loop muted></video> */}
              <img src={kidschannel} alt="" className="" />
            </div>
          </div>
          <div className="text-lg-start text-center col-lg-6 my-5 py-5 my-md-0 py-md-0">
            <h1 className="md:w-100">Create profiles for kids</h1>
            <h5 className="md:w-100">
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </h5>
          </div>
        </div>
      </div>
      <hr className="border border-5 border-grey" />
    </>
  );
}

export default MainContent;
