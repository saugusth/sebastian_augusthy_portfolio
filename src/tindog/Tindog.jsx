import "./css/styles.css"
import iPhone6 from './images/iphone6.png';
import dog from './images/dog-img.jpg';
import lady from "./images/lady-img.jpg";
import techcrunch from "./images/techcrunch.png";
import tnw from './images/tnw.png';
import bizinsider from './images/bizinsider.png';
import mashable from './images/mashable.png';

const HREF = {
  footer: '#footer',
  pricing: '#pricing',
  cta: '#cta',
  testimonialcarousel: "#testimonial-carousel",

}

export const Tindog = function() {
      return (
        <div>
          <meta charSet="utf-8" />
          {/* Font Awsome */}
          <section className="colored-section" id="title">
            <div className="container-fluid">
              {/* Nav Bar */}
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href>tindog</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href={HREF.footer.toString()}>Contact</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={HREF.pricing.toString()}>Pricing</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href={HREF.cta.toString()}>Download</a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Title */}
              <div className="row">
                <div className="col-lg-6">
                  <h1 className="big-heading">Meet new and interesting dogs nearby.</h1>
                  <button type="button" className="btn btn-dark btn-lg download-button"><i className="fab fa-apple" /> Download</button>
                  <button type="button" className="btn btn-outline-light btn-lg download-button"><i className="fab fa-google-play" /> Download</button>
                </div>
                {/* image */}
                <div className="col-lg-6">
                  <img className="title-image" src={iPhone6} alt="iphone-mockup" />
                </div>
              </div>
            </div>
          </section>
          {/* Features */}
          <section className="white-section" id="features">
            <div className="container-fluid">
              <div className="row">
                <div className="feture-box col-lg-4">
                  <i className=" icon fas fa-check-circle fa-4x" />
                  <h3 className="feature-title">Easy to use.</h3>
                  <p>So easy to use, even your dog could do it.</p>
                </div>
                <div className="feture-box col-lg-4">
                  <i className="icon fas fa-bullseye fa-4x" />
                  <h3 className="feature-title">Elite Clientele</h3>
                  <p>We have all the dogs, the greatest dogs.</p>
                </div>
                <div className="feture-box col-lg-4">
                  <i className="icon fas fa-heart fa-4x" />
                  <h3 className="feature-title">Guaranteed to work.</h3>
                  <p>Find the love of your dog's life or your money back.</p>
                </div>
              </div>
            </div>
          </section>
          {/* Testimonials */}
          <section className="colored-section" id="testimonials">
            <div id="testimonial-carousel" className="carousel slide" data-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active container-fluid">
                  <h2 className="testimonial-text">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h2>
                  <img className="testimonial-image" src={dog} alt="dog-profile" />
                  <em>Pebbles, New York</em>
                </div>
                <div className="carousel-item container-fluid">
                  <h2 className="testimonial-text">
                    My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think.</h2>
                  <img className="testimonial-image" src={lady} alt="lady-profile" />
                  <em>Beverly, Illinois</em>
                </div>
              </div>
              <a className="carousel-control-prev" href={HREF.testimonialcarousel.toString()} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
              </a>
              <a className="carousel-control-next" href={HREF.testimonialcarousel.toString()} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
              </a>
            </div>
          </section>
          {/* Press */}
          <section className="colored-section" id="press">
            <img className="press-logo" src={techcrunch} alt="tc-logo" />
            <img className="press-logo" src={tnw} alt="tnw-logo" />
            <img className="press-logo" src={bizinsider} alt="biz-insider-logo" />
            <img className="press-logo" src={mashable} alt="mashable-logo" />
          </section>
          {/* Pricing */}
          <section className="white-section" id="pricing">
            <h2 className="section-heading">A Plan for Every Dog's Needs</h2>
            <p>Simple and affordable price plans for your and your dog.</p>
            <div className="row">
              <div className="pricing-colum col-lg-4 col-md-6">
                <div clss="card">
                  <div className="card-header">
                    <h3>Chihuahua</h3>
                  </div>
                  <div className="card-body ">
                    <h2 className="price-text">Free</h2>
                    <p>5 Matches Per Day</p>
                    <p>10 Messages Per Day</p>
                    <p>Unlimited App Usage</p>
                    <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign Up</button>
                  </div>
                </div>
              </div>
              <div className="pricing-colum col-lg-4 col-md-6">
                <div clss="card">
                  <div className="card-header">
                    <h3>Labrador</h3>
                  </div>
                  <div className="card-body">
                    <h2 className="price-text">$49 / mo</h2>
                    <p>Unlimited Matches</p>
                    <p>Unlimited Messages</p>
                    <p>Unlimited App Usage</p>
                    <button type="button" className="btn btn-lg btn-block btn-dark">Sign Up</button>
                  </div>
                </div>
              </div>
              <div className="pricing-colum col-lg-4">
                <div clss="card">
                  <div className="card-header">
                    <h3>Mastiff</h3>
                  </div>
                  <div className="card-body">
                    <h2 className="price-text">$99 / mo</h2>
                    <p>Pirority Listing</p>
                    <p>Unlimited Matches</p>
                    <p>Unlimited Messages</p>
                    <p>Unlimited App Usage</p>
                    <button type="button" className="btn btn-lg btn-block btn-dark">Sign Up</button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Call to Action */}
          <section className="colored-section" id="cta">
            <div className="container-fluid">
              <h3 className="big-heading">Find the True Love of Your Dog's Life Today.</h3>
              <button type="button" className="btn btn-dark btn-lg download-button"><i className="fab fa-apple" /> Download</button>
              <button type="button" className="btn btn-outline-light btn-lg download-button"><i className="fab fa-google-play" /> Download</button>
            </div>
          </section>
          {/* Footer */}
          <footer className="white-section" id="footer">
            <div className="container-fluid">
              <i className="social-icon fab fa-facebook-f" />
              <i className="social-icon fab fa-twitter" />
              <i className="social-icon fab fa-instagram" />
              <i className="social-icon fas fa-envelope" />
              <p>© Copyright 2018 TinDog</p>
            </div>
          </footer>
        </div>
      );
    }