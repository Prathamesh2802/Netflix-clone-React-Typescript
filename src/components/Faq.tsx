function Faq() {
  return (
    <>
      <div className="container-md">
        <h1 className="text-center mt-5 mb-2 text-light">
          Frequently Asked Questions
        </h1>
        <div
          className="accordion accordion-flush my-5"
          id="accordionFlushExample"
        >
          <div className="accordion-item bg-dark border border-0">
            <h1 className="accordion-header">
              <button
                className="accordion-button collapsed h1 fs-3 bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                What is Netflix?
              </button>
            </h1>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body text-light fs-3 h1">
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more –
                on thousands of internet-connected devices. You can watch as
                much as you want, whenever you want, without a single ad – all
                for one low monthly price. There's always something new to
                discover, and new TV shows and movies are added every week!
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark border border-0">
            <h1 className="accordion-header">
              <button
                className="accordion-button collapsed fs-3 h1 bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                How much does Netflix Cost?
              </button>
            </h1>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-3 text-light h1">
                Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
                streaming device, all for one fixed monthly fee. Plans range
                from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark border border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fs-3 h1 bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Where can I Watch?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-3 text-light h1">
                Watch anywhere, anytime. Sign in with your Netflix account to
                watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles. You can also download
                your favourite shows with the iOS, Android, or Windows 10 app.
                Use downloads to watch while you're on the go and without an
                internet connection. Take Netflix with you anywhere.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark border border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fs-3 h1 bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                How do I Cancel?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-3 text-light h1">
                Netflix is flexible. There are no annoying contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account anytime.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark border border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fs-3 h1 bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Where can I Watch on Netflix?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-3 text-light h1">
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix originals,
                and more. Watch as much as you want, anytime you want.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-dark border border-0">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed fs-3 h1 bg-dark text-light"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Is Netflix Good for Kids?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body fs-3 text-light h1">
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and films in their own space. Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don’t want kids to see.
              </div>
            </div>
          </div>
        </div>
        <p className="text-center h4 text-light">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="d-flex justify-content-center gap-2 my-4 py-4">
          <input type="text" className="w-25 bg-dark text-light form-control" />
          <button className="btn btn-danger text-light fs-4">
            Get Started
          </button>
        </div>
      </div>
      <hr className="border border-5 border-grey mt-4" />
    </>
  );
}

export default Faq;
