function Footer() {
  return (
    <>
      <div className="container-md my-5 anchor-font">
        <p className="text-md-start text-center">
          Questions? Call <u>000-800-919-1694</u>
        </p>
        <div className="d-md-flex justify-content-md-between anchor-font text-md-start text-center">
          <div className="text-light d-flex flex-column gap-2 ">
            <a href="">FAQ</a>
            <a href="">Media Center</a>
            <a href="">Ways to Watch</a>
            <a href="">Cookie Preferance</a>
            <a href="">Speed Test</a>
          </div>
          <div className="d-flex flex-column gap-2">
            <a href="">Help Center</a>
            <a href="">Investor Relations</a>
            <a href="">Terms of Use</a>
            <a href="">Corporate Information</a>
            <a href="">Legal Notices</a>
          </div>
          <div className="d-flex flex-column gap-2">
            <a href="">Account</a>
            <a href="">Jobs</a>
            <a href="">Privacy</a>
            <a href="">Contact Us</a>
            <a href="">Only on Netflix</a>
          </div>
        </div>
        <select className="my-5 form-selector bg-dark d-block mx-auto mx-md-0">
          <option value="">English</option>
          <option value="">Hindi</option>
        </select>
        <p>Netflix India</p>
      </div>
    </>
  );
}

export default Footer;
