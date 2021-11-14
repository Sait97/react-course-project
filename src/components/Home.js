

const Home = () => {
    return (
<section id="intro" className="clearfix">
    <div className="container">

      <div className="intro-img">
        <img src="img/intro-img.svg" alt="" className="img-fluid"/>
      </div>

      <div className="intro-info">
        <h2>We provide<br/><span>solutions</span><br/>for your business!</h2>
        <div>
          <a href="#about" className="btn-get-started scrollto">Get Started</a>
          <a href="#services" className="btn-services scrollto">Our Services</a>
        </div>
      </div>

    </div>
  </section>
    )
}

export default Home;