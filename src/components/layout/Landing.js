import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Landing extends Component {
  componentDidMount() {
    const { pageRoute } = this.props.navbar;
    // set all route key values to false, then flip gallery value
    if (pageRoute) {
      Object.keys(pageRoute).forEach(route => (pageRoute[route] = false));
      pageRoute.landing = !pageRoute.landing;
    }
    store.dispatch(switchPages(pageRoute));
  }
  render() {
    return (
      <Fragment>
        <div
          className="slider-container light rev_slider_wrapper"
          style={{ height: "810px" }}
        >
          <div
            id="revolutionSlider"
            className="slider rev_slider manual"
            data-version="5.4.8"
          >
            <ul>
              <li data-transition="notransition">
                <img
                  src="img/demos/wedding/slides/slide-wedding-1.jpg"
                  alt="img/demos/wedding/slides/slide-wedding-1.jpg"
                  data-bgposition="center center"
                  data-bgfit="cover"
                  data-bgrepeat="no-repeat"
                  data-bgparallax="off"
                  className="rev-slidebg"
                />

                <div
                  className="tp-caption main-label text-color-light rs-parallaxlevel-1"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="-45"
                  data-start="500"
                  style={{
                    zIndex: "5",
                    lineHeight: "76px",
                    fontSize: "76px",
                    padding: "5px 0px",
                    borderTop: "1px solid rgba(255, 255, 255, 0.4)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.4)"
                  }}
                  data-transform_in="y:[-300%];opacity:0;s:500;"
                >
                  <span
                    style={{
                      padding: "0px 4em",
                      borderTop: "1px solid rgba(255, 255, 255, 0.4)",
                      borderBottom: "1px solid rgba(255, 255, 255, 0.4)"
                    }}
                  />
                </div>

                <div
                  className="tp-caption main-label alternative-font text-color-light rs-parallaxlevel-1"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="-40"
                  data-start="800"
                  style={{
                    zIndex: "5",
                    fontSize: "135px",
                    lineHeight: "45px",
                    fontWeight: "normal"
                  }}
                  data-transform_in="y:[-300%];opacity:0;s:500;"
                >
                  jessica &amp; john
                </div>

                <div
                  className="tp-caption main-label text-color-light rs-parallaxlevel-2"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="60"
                  data-start="1200"
                  style={{
                    zIndex: "5",
                    fontSize: "22px",
                    lineHeight: "22px",
                    fontWeight: "600"
                  }}
                  data-transform_in="y:[-300%];opacity:0;s:500;"
                >
                  are getting married
                </div>

                <a
                  href="#the-wedding"
                  data-hash
                  data-hash-offset="50"
                  className="tp-caption main-label text-uppercase text-color-light bg-color-primary custom-borderRadius rs-parallaxlevel-2 text-decoration-none"
                  data-x="center"
                  data-hoffset="0"
                  data-y="center"
                  data-voffset="110"
                  data-start="1500"
                  style={{
                    zIndex: "5",
                    fontSize: "12px",
                    fontWeight: "normal",
                    padding: "15px 6px",
                    lineHeight: "1"
                  }}
                  data-transform_in="y:[-300%];opacity:0;s:500;"
                >
                  <span
                    style={{
                      border: "1px solid #fd6e6e",
                      padding: "5px 30px",
                      borderRadius: "30px"
                    }}
                  >
                    10TH JUNE 2019
                  </span>
                </a>

                <div
                  className="tp-caption tp-resizeme rs-parallaxlevel-8"
                  data-x="['left','left','left','left']"
                  data-hoffset="['680','680','680','680']"
                  data-y="['top','top','top','top']"
                  data-voffset="['632','632','632','632']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="opacity:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="opacity:0;s:1000;s:1000;"
                  data-start="0"
                  data-responsive_offset="on"
                  style={{ zIndex: "8" }}
                >
                  <div
                    className="rs-looped rs-pendulum"
                    data-easing="linearEaseNone"
                    data-startdeg="-20"
                    data-enddeg="360"
                    data-speed="35"
                    data-origin="50% 50%"
                  >
                    <img
                      src="img/demos/wedding/blurflake4.png"
                      alt=""
                      width="240"
                      height="240"
                      data-ww="['240px','240px','240px','240px']"
                      data-hh="['240px','240px','240px','240px']"
                      data-no-retina
                    />
                  </div>
                </div>

                <div
                  className="tp-caption tp-resizeme rs-parallaxlevel-7"
                  data-x="['left','left','left','left']"
                  data-hoffset="['948','948','948','948']"
                  data-y="['top','top','top','top']"
                  data-voffset="['487','487','487','487']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="opacity:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="opacity:0;s:1000;s:1000;"
                  data-start="0"
                  data-responsive_offset="on"
                  style={{ zIndex: "9" }}
                >
                  <div
                    className="rs-looped rs-wave"
                    data-speed="20"
                    data-angle="0"
                    data-radius="50px"
                    data-origin="50% 50%"
                  >
                    <img
                      src="img/demos/wedding/blurflake3.png"
                      alt=""
                      width="170"
                      height="170"
                      data-ww="['170px','170px','170px','170px']"
                      data-hh="['170px','170px','170px','170px']"
                      data-no-retina
                    />
                  </div>
                </div>

                <div
                  className="tp-caption tp-resizeme rs-parallaxlevel-4"
                  data-x="['left','left','left','left']"
                  data-hoffset="['719','719','719','719']"
                  data-y="['top','top','top','top']"
                  data-voffset="['200','200','200','200']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="opacity:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="opacity:0;s:1000;s:1000;"
                  data-start="0"
                  data-responsive_offset="on"
                  style={{ zIndex: "10" }}
                >
                  <div
                    className="rs-looped rs-rotate"
                    data-easing="Power2.easeInOut"
                    data-startdeg="-20"
                    data-enddeg="360"
                    data-speed="20"
                    data-origin="50% 50%"
                  >
                    <img
                      src="img/demos/wedding/blurflake2.png"
                      alt=""
                      width="50"
                      height="51"
                      data-ww="['50px','50px','50px','50px']"
                      data-hh="['51px','51px','51px','51px']"
                      data-no-retina
                    />
                  </div>
                </div>

                <div
                  className="tp-caption tp-resizeme rs-parallaxlevel-6"
                  data-x="['left','left','left','left']"
                  data-hoffset="['187','187','187','187']"
                  data-y="['top','top','top','top']"
                  data-voffset="['216','216','216','216']"
                  data-width="none"
                  data-height="none"
                  data-whitespace="nowrap"
                  data-transform_idle="o:1;"
                  data-transform_in="opacity:0;s:1000;e:Power2.easeInOut;"
                  data-transform_out="opacity:0;s:1000;s:1000;"
                  data-start="0"
                  data-responsive_offset="on"
                  style={{ zIndex: "11" }}
                >
                  <div
                    className="rs-looped rs-wave"
                    data-speed="4"
                    data-angle="0"
                    data-radius="10"
                    data-origin="50% 50%"
                  >
                    <img
                      src="img/demos/wedding/blurflake1.png"
                      alt=""
                      width="120"
                      height="120"
                      data-ww="['120px','120px','120px','120px']"
                      data-hh="['120px','120px','120px','120px']"
                      data-no-retina
                    />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="slider-border" />
        </div>
        <section className="bride-groom">
          <div className="container">
            <div className="row justify-content-around pt-1 mt-5 pb-5 mb-3">
              <div className="col-lg-4">
                <div
                  className="thumb-bride-groom text-center appear-animation"
                  data-appear-animation="fadeIn"
                  data-appear-animation-delay="0"
                >
                  <div className="bride-groom-bg">
                    <div className="bride-groom-photo">
                      <img src="img/demos/wedding/bride-groom/bride.jpg" alt="" />
                    </div>
                  </div>
                  <div className="bride-groom-infos">
                    <h2 className="fontWeight-normal m-0">Jessica</h2>
                    <span className="text-uppercase text-color-primary fontWeight-semibold">
                      The Bride
                    </span>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur pellentesque neque eget diam posuere porta.
                      Quisque ut nulla at nunc...
                    </p>
                  </div>
                  <ul className="social-icons mt-3">
                    <li className="social-icons-facebook">
                      <a
                        href="http://www.facebook.com/"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="social-icons-twitter">
                      <a
                        href="http://www.twitter.com/"
                        title="Twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="social-icons-instagram">
                      <a
                        href="http://www.instagram.com/"
                        title="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="thumb-bride-groom text-center appear-animation"
                  data-appear-animation="fadeIn"
                  data-appear-animation-delay="300"
                >
                  <div className="bride-groom-bg groom-background-style">
                    <div className="bride-groom-photo">
                      <img src="img/demos/wedding/bride-groom/groom.jpg" alt="" />
                    </div>
                  </div>
                  <div className="bride-groom-infos">
                    <h2 className="fontWeight-normal m-0">John</h2>
                    <span className="text-uppercase text-color-primary fontWeight-semibold">
                      The Groom
                    </span>
                    <p className="mt-4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur pellentesque neque eget diam posuere porta.
                      Quisque ut nulla at nunc...
                    </p>
                  </div>
                  <ul className="social-icons mt-3">
                    <li className="social-icons-facebook">
                      <a
                        href="http://www.facebook.com/"
                        title="Facebook"
                      >
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                    <li className="social-icons-twitter">
                      <a
                        href="http://www.twitter.com/"
                        title="Twitter"
                      >
                        <i className="fab fa-twitter" />
                      </a>
                    </li>
                    <li className="social-icons-instagram">
                      <a
                        href="http://www.instagram.com/"
                        title="Instagram"
                      >
                        <i className="fab fa-instagram" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="wedding-countdown parallax section section-text-light section-parallax section-center m-0"
          data-plugin-parallax
          data-plugin-options="{'speed': 1.5}"
          data-image-src="img/demos/wedding/countdown/countdown-parallax-bg.jpg"
        >
          <div className="container">
            <div className="row justify-content-center mt-5 mb-5 pt-1 pb-4">
              <div className="col-lg-8">
                <h2 className="alternative-font custom-fontSize-1 pb-4">
                  Counting down for the Special Day
                </h2>
                <div
                  className="countdown countdown-light custom-countdown-style-1 px-lg-5 pt-3"
                  data-plugin-countdown
                  data-plugin-options="{'date': '2020/06/10 12:00:00', 'textDay': 'DAY', 'textHour': 'HOURS', 'textMin': 'MINUTES', 'textSec': 'SECONDS'}"
                />
              </div>
            </div>
          </div>
        </section>
        <section
          className="the-wedding section section-overlay custom-overlay-1 m-0 pb-5"
          id="the-wedding"
        >
          <div className="container pb-1">
            <div className="row justify-content-center pt-5">
              <div className="col-lg-8">
                <h2 className="alternative-font custom-fontSize-1 text-color-primary text-center">
                  The Wedding
                </h2>
                <p className="text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur pellentesque neque eget diam posuere porta. Quisque
                  ut nulla at nunc lacinia. Proin adipisci.
                </p>
              </div>
            </div>
            <div className="row justify-content-around mt-1 mb-5 pb-3">
              <div className="col-md-8 col-lg-5 mt-5 pt-5">
                <div
                  className="wedding-schedule text-center appear-animation"
                  data-appear-animation="fadeInLeft"
                  data-appear-animation-delay="0"
                >
                  <div className="wedding-schedule-photo">
                    <img
                      src="img/demos/wedding/the-wedding/the-wedding-ceremony.jpg"
                      alt=""
                    />
                  </div>
                  <div className="wedding-schedule-background" />
                  <img
                    className="icon-heart-white-border"
                    src="img/demos/wedding/the-wedding/icon-heart-white-border.png"
                    alt=""
                  />
                  <div className="wedding-schedule-infos">
                    <h2 className="mt-3 mb-0">Main Ceremony</h2>
                    <span className="date text-uppercase text-color-primary fontWeight-semibold">
                      Saturday, 10th June 2019
                    </span>
                    <span className="hour text-2 text-uppercase text-color-tertiary fontWeight-bold mb-3">
                      8:00 PM - 9:00 PM
                    </span>
                    <span className="local text-3 text-uppercase fontWeight-bold mb-4">
                      Porto Church
                      <span>123 Porto Street, New York NY</span>
                    </span>
                  </div>
                  <a
                    className="btn btn-info popup-gmaps text-uppercase pl-4 pr-4 text-2"
                    href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                  >
                    View Map &amp; Direction
                  </a>
                </div>
              </div>
              <div className="col-md-8 col-lg-5 mt-5 pt-5">
                <div
                  className="wedding-schedule text-center appear-animation"
                  data-appear-animation="fadeInRight"
                  data-appear-animation-delay="0"
                >
                  <div className="wedding-schedule-photo">
                    <img
                      src="img/demos/wedding/the-wedding/the-wedding-party.jpg"
                      alt=""
                    />
                  </div>
                  <div className="wedding-schedule-background" />
                  <img
                    className="icon-heart-white-border"
                    src="img/demos/wedding/the-wedding/icon-heart-white-border.png"
                    alt=""
                  />
                  <div className="wedding-schedule-infos">
                    <h2 className="mt-3 mb-0">Wedding Party</h2>
                    <span className="date text-uppercase text-color-primary fontWeight-semibold">
                      Saturday, 10th June 2019
                    </span>
                    <span className="hour text-2 text-uppercase text-color-tertiary fontWeight-bold mb-3">
                      8:00 PM - 9:00 PM
                    </span>
                    <span className="local text-3 text-uppercase fontWeight-bold mb-4">
                      Porto Church
                      <span>123 Porto Street, New York NY</span>
                    </span>
                  </div>
                  <a
                    className="btn btn-info popup-gmaps text-uppercase pl-4 pr-4 text-2"
                    href="https://maps.google.com/maps?q=221B+Baker+Street,+London,+United+Kingdom&amp;hl=en&amp;t=v&amp;hnear=221B+Baker+St,+London+NW1+6XE,+United+Kingdom"
                  >
                    View Map &amp; Direction
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className="testimonials parallax section section-parallax section-center m-0"
          data-plugin-parallax
          data-plugin-options="{'speed': 1.5}"
          data-image-src="img/demos/wedding/testimonial/testimonial-parallax-bg.jpg"
        >
          <div className="container">
            <div className="row justify-content-center mt-2 pt-3 mb-2 pb-3">
              <div
                className="owl-carousel owl-theme nav-bottom rounded-nav m-0"
                data-plugin-options="{'items': 1, 'loop': false, 'dots': false, 'autoplay': true, 'autoplayTimeout': 10000}"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="testimonial testimonial-style-2 testimonial-with-quotes custom-wedding-quotes mb-0">
                      <blockquote>
                        <p className="fontWeight-light text-color-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur pellentesque neque eget diam posuere
                          porta. Quisque ut nulla at nunc lacinia. Proin
                          adipiscing porta tellus, ut feugiat nibh adipiscing
                          sit amet. In eu justo a felis faucibus ornare vel id
                          metus. Vestibulum ante ip.
                        </p>
                      </blockquote>
                      <div className="testimonial-author mt-3">
                        <p>
                          <strong className="fontWeight-light text-color-light text-7 pb-2">
                            John
                          </strong>
                          <span className="fontWeight-semibold text-uppercase text-color-light pt-2">
                            The Groom
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-lg-10">
                    <div className="testimonial testimonial-style-2 testimonial-with-quotes custom-wedding-quotes mb-0">
                      <blockquote>
                        <p className="fontWeight-light text-color-light">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Curabitur pellentesque neque eget diam posuere
                          porta. Quisque ut nulla at nunc lacinia. Proin
                          adipiscing porta tellus, ut feugiat nibh adipiscing
                          sit amet. In eu justo a felis faucibus ornare vel id
                          metus. Vestibulum.
                        </p>
                      </blockquote>
                      <div className="testimonial-author mt-3">
                        <p>
                          <strong className="fontWeight-light text-color-light text-7 pb-2">
                            John
                          </strong>
                          <span className="fontWeight-semibold text-uppercase text-color-light pt-2">
                            The Groom
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="our-history pt-5 pb-5 mb-4" id="photos">
          <div className="container">
            <div className="row justify-content-center mt-5">
              <div className="col-lg-8 text-center">
                <h2 className="alternative-font custom-fontSize-1 text-color-primary">
                  Our History in Photos
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur pellentesque neque eget diam posuere porta. Quisque
                  ut nulla at nunc lacinia. Proin adipisc.
                </p>
              </div>
            </div>
            <div
              id="historyLoadMoreWrapper"
              className="row pt-4 history-list"
              data-total-pages="2"
            >
              <div className="col-lg-6 mb-4">
                <div className="history-item">
                  <a
                    href="img/demos/wedding/history/history-1.jpg"
                    className="text-decoration-none"
                  >
                    <span className="thumb-info thumb-info-lighten">
                      <span className="thumb-info-wrapper m-0">
                        <img
                          src="img/demos/wedding/history/history-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span className="thumb-info-title text-uppercase fontWeight-bold">
                          Meeting Wedding Couple
                        </span>
                        <span className="thumb-info-likes text-color-light">
                          <i className="far fa-heart bg-color-primary p-1" />
                          1800
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-3">
                <div className="history-item">
                  <a
                    href="img/demos/wedding/history/history-2.jpg"
                    className="text-decoration-none"
                  >
                    <span className="thumb-info thumb-info-lighten">
                      <span className="thumb-info-wrapper m-0">
                        <img
                          src="img/demos/wedding/history/history-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span className="thumb-info-title text-uppercase fontWeight-bold">
                          Wedding Time
                        </span>
                        <span className="thumb-info-likes text-color-light">
                          <i className="far fa-heart bg-color-primary p-1" />
                          700
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3 mb-3">
                <div className="history-item">
                  <a
                    href="img/demos/wedding/history/history-3.jpg"
                    className="text-decoration-none"
                  >
                    <span className="thumb-info thumb-info-lighten">
                      <span className="thumb-info-wrapper m-0">
                        <img
                          src="img/demos/wedding/history/history-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span className="thumb-info-title text-uppercase fontWeight-bold">
                          Wedding Party
                        </span>
                        <span className="thumb-info-likes text-color-light">
                          <i className="far fa-heart bg-color-primary p-1" />
                          550
                        </span>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div
              id="historyLoadMoreBtnWrapper"
              className="row align-items-center"
              style={{ minHeight: "115px" }}
            >
              <div className="col text-center">
                <div
                  id="historyLoadMoreLoader"
                  className="history-load-more-loader load-more-loader"
                >
                  <div className="bounce-loader">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                  </div>
                </div>

                <button
                  id="historyLoadMore"
                  type="button"
                  className="btn btn-secondary btn-xs custom-borderRadius text-3 text-color-light text-uppercase outline-none p-3 pl-5 pr-5 m-auto mb-5 mt-5"
                >
                  View More
                </button>
              </div>
            </div>
          </div>
        </section>
        <section
          className="parallax section section-parallax section-center m-0"
          data-plugin-parallax
          data-plugin-options="{'speed': 1.5}"
          data-image-src="img/demos/wedding/guestbook/guestbook-parallax-bg.jpg"
          id="guestbook"
        >
          <div className="container">
            <div className="row text-center my-5">
              <div className="col">
                <h2 className="alternative-font custom-fontSize-1 text-color-light">
                  Guestbook
                </h2>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-6 mb-5 mb-lg-0">
                <form
                  id="guestbookSendMessage"
                  className="contact-form bg-color-light p-4 h-100"
                  action="php/contact-form.php"
                  method="POST"
                >
                  <input
                    type="hidden"
                    name="subject"
                    value="Guestbook Message Received"
                  />
                  <div className="form-content p-5 m-2 bottom-6 h-100 d-flex justify-content-center flex-column w-100">
                    <div className="form-row w-100">
                      <div className="form-group col-lg-12">
                        <input
                          className="form-control form-control-custom"
                          type="text"
                          name="name"
                          placeholder="Name*"
                          data-msg-required="This field is required."
                          id="name"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="form-row w-100">
                      <div className="form-group col-lg-12">
                        <textarea
                          className="form-control form-control-custom"
                          style={{ height: "78px" }}
                          name="message"
                          placeholder="Message*"
                          data-msg-required="This field is required."
                          id="message"
                          required=""
                        />
                      </div>
                    </div>

                    <div className="form-row w-100">
                      <div
                        className="contact-form-success alert alert-success d-none mt-4"
                        id="guestBookSuccess"
                      >
                        <strong>Success!</strong> Thanks for the message, your
                        message will be published soon.
                      </div>

                      <div
                        className="contact-form-error alert alert-danger d-none mt-4"
                        id="guestBookError"
                      >
                        <strong>Error!</strong> There was an error sending your
                        message.
                        <span
                          className="mail-error-message text-1 mt-2 d-block"
                          id="guestBookErrorMessage"
                        />
                      </div>
                    </div>
                    <div className="form-row w-100">
                      <input
                        type="submit"
                        className="btn btn-secondary btn-xs custom-borderRadius text-3 text-uppercase text-color-light outline-none p-3 pl-5 pr-5 m-auto mb-5 mt-5"
                        value="Send Message"
                      />
                    </div>
                    <div className="custom-inner-border" />
                  </div>
                </form>
              </div>
              <div className="col-lg-6">
                <div className="guestbook-messages bg-color-light p-5">
                  <div
                    className="owl-carousel owl-theme nav-bottom rounded-nav pt-4 pb-4"
                    data-plugin-options="{'items': 1, 'loop': false, 'dots': false, 'nav': true}"
                  >
                    <div>
                      <div className="testimonial testimonial-style-2 testimonial-with-quotes custom-wedding-quotes">
                        <blockquote>
                          <p className="fontWeight-normal custom-text-color-1 text-4">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Curabitur pellentesque neque eget diam posuere
                            porta. Quisque ut nulla curabitur pellentesque neque
                            eget.
                          </p>
                        </blockquote>
                        <div className="testimonial-author">
                          <p className="text-uppercase">
                            <strong className="custom-text-color-2">
                              John Doe
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="testimonial testimonial-style-2 testimonial-with-quotes custom-wedding-quotes">
                        <blockquote>
                          <p className="fontWeight-normal custom-text-color-1 text-4">
                            Lorem ipsum dolor sit amet curabitur pellentesque
                            neque eget diam posuere porta consectetur adipiscing
                            elit. Curabitur pellentesque neque eget diam posue.
                          </p>
                        </blockquote>
                        <div className="testimonial-author">
                          <p className="text-uppercase">
                            <strong className="custom-text-color-2">
                              John Doe
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="custom-inner-border" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="blog pt-5 pb-5" id="blog">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="alternative-font custom-fontSize-1 text-color-primary text-center mt-5 mb-3">
                  Our Blog
                </h2>
              </div>
            </div>
            <div
              id="blogLoadMoreWrapper"
              className="row blog-list sort-destination p-0"
              data-total-pages="2"
            >
              <div className="col-md-4 p-3 mb-4 isotope-item">
                <div className="blog-item">
                  <a
                    href="demo-wedding-blog-detail.html"
                    className="text-decoration-none"
                  >
                    <div className="thumb-info thumb-info-lighten mb-3">
                      <div className="thumb-info-wrapper m-0">
                        <img
                          src="img/demos/wedding/blog/blog-post-1.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blog-item-content">
                      <div className="category text-uppercase fontWeight-semibold">
                        Wedding Day
                      </div>
                      <h3 className="text-capitalize mb-3">
                        The Day is Coming
                      </h3>
                      <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc lacinia...
                      </p>
                      <div className="author text-color-secondary pt-1 pb-1">
                        By: Groom
                        <div className="likes custom-default-text-color float-right">
                          <i className="far fa-heart text-color-primary pr-1" />
                          85
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 p-3 mb-4 isotope-item">
                <div className="blog-item">
                  <a
                    href="demo-wedding-blog-detail.html"
                    className="text-decoration-none"
                  >
                    <div className="thumb-info thumb-info-lighten mb-3">
                      <div className="thumb-info-wrapper m-0">
                        <img
                          src="img/demos/wedding/blog/blog-post-2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blog-item-content">
                      <div className="category text-uppercase fontWeight-semibold">
                        Wedding Day
                      </div>
                      <h3 className="text-capitalize mb-3">
                        How we actually met
                      </h3>
                      <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc lacinia...
                      </p>
                      <div className="author text-color-secondary pt-1 pb-1">
                        By: Groom
                        <div className="likes custom-default-text-color float-right">
                          <i className="far fa-heart text-color-primary pr-1" />
                          15
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-md-4 p-3 mb-4 isotope-item">
                <div className="blog-item">
                  <a
                    href="demo-wedding-blog-detail.html"
                    className="text-decoration-none"
                  >
                    <div className="thumb-info thumb-info-lighten mb-3">
                      <div className="thumb-info-wrapper m-0">
                        <img
                          src="img/demos/wedding/blog/blog-post-3.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="blog-item-content">
                      <div className="category text-uppercase fontWeight-semibold">
                        Wedding Day
                      </div>
                      <h3 className="text-capitalize mb-3">Honeymoon plans</h3>
                      <p className="mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur pellentesque neque eget diam posuere porta.
                        Quisque ut nulla at nunc lacinia...
                      </p>
                      <div className="author text-color-secondary pt-1 pb-1">
                        By: Groom
                        <div className="likes custom-default-text-color float-right">
                          <i className="far fa-heart text-color-primary pr-1" />
                          85
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-lg-12 text-center">
                <div
                  id="blogLoadMoreLoader"
                  className="blog-load-more-loader load-more-loader"
                >
                  <div className="bounce-loader">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                  </div>
                </div>
                <a
                  href="/blogs"
                  className="btn btn-secondary btn-xs custom-borderRadius text-3 text-color-light text-uppercase outline-none p-3 pl-5 pr-5 m-auto mb-5 mt-5"
                >
                  View More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          className="rsvp section section-overlay custom-overlay-1 m-0 pb-5"
          id="rsvp"
        >
          <div className="container">
            <div className="row justify-content-center text-center mt-5">
              <div className="col-lg-8">
                <h2 className="alternative-font custom-fontSize-1 text-color-primary">
                  Sign your
                  <span className="default-font text-uppercase fontWeight-semibold text-1">
                    RSVP
                  </span>
                </h2>
                <p className="mb-1">Are you Attending?</p>
              </div>
            </div>
            <form
              id="rsvpForm"
              className="contact-form mb-5"
              action="php/contact-form.php"
              method="POST"
            >
              <div
                className="contact-form-success alert alert-success d-none mt-4"
                id="rsvpSuccess"
              >
                <strong>Success!</strong> Thanks for the RSVP confirmation.
              </div>

              <div
                className="contact-form-error alert alert-danger d-none mt-4"
                id="rsvpError"
              >
                <strong>Error!</strong> There was an error sending your RSVP
                confirmation.
                <span
                  className="mail-error-message text-1 mt-2 d-block"
                  id="rsvpErrorMessage"
                />
              </div>

              <input
                type="hidden"
                name="subject"
                value="RSVP Request Received"
              />
              <div className="container p-0">
                <div className="form-row">
                  <div className="form-group col-md-3 mt-3">
                    <div className="form-control-custom">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        placeholder="Your Name *"
                        data-msg-required="This field is required."
                        id="rsvpname"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-3 mt-3">
                    <div className="form-control-custom">
                      <input
                        type="text"
                        className="form-control"
                        name="guests"
                        placeholder="Number of guests *"
                        data-msg-required="This field is required."
                        id="rsvpnumberguests"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="form-group col-md-3 mt-3">
                    <div className="form-control-custom">
                      <select
                        className="form-control custom-default-text-color"
                        name="attending"
                        data-msg-required="This field is required."
                        id="attending"
                        required=""
                      >
                        <option value="">Attending to *</option>
                        <option value="Main Ceremony">Main Ceremony</option>
                        <option value="Wedding Party">Wedding Party</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group col-md-3 mt-3">
                    <input
                      type="submit"
                      value="I am attending"
                      className="btn btn-secondary custom-borderRadius p-3 btn-lg btn-block text-uppercase text-color-light text-2"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </section>
        <section className="pt-5 pb-5" id="gifts">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="alternative-font custom-fontSize-1 text-color-primary text-center mt-5">
                  Gift Registry
                </h2>
                <p className="text-center mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur pellentesque neque eget diam posuere porta. Quisque
                  ut nulla at nunc lacinia. Proin adipiscing.
                </p>
              </div>
            </div>
            <div className="mb-5">
              <div className="content-grid pl-3 pr-3">
                <div className="content-grid-row row">
                  <div className="content-grid-item col-sm-4 col-lg-2 text-center">
                    <img
                      src="img/demos/wedding/gift-registry/gift-registry-1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-grid-item col-sm-4 col-lg-2 text-center">
                    <img
                      src="img/demos/wedding/gift-registry/gift-registry-2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-grid-item col-sm-4 col-lg-2 text-center">
                    <img
                      src="img/demos/wedding/gift-registry/gift-registry-3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-grid-item col-sm-4 col-lg-2 text-center">
                    <img
                      src="img/demos/wedding/gift-registry/gift-registry-4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-grid-item col-sm-4 col-lg-2 text-center">
                    <img
                      src="img/demos/wedding/gift-registry/gift-registry-5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                  <div className="content-grid-item col-sm-4 col-lg-2 text-center">
                    <img
                      src="img/demos/wedding/gift-registry/gift-registry-6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="parallax section section-text-light section-parallax section-center m-0"
          data-plugin-parallax
          data-plugin-options="{'speed': 1.5}"
          data-image-src="img/demos/wedding/footer/footer-parallax-bg.jpg"
        >
          <div className="container pt-5 pb-5 mt-5 mb-5">
            <div className="row text-center pt-5 pb-5 mt-5 mb-5">
              <div className="col-lg-12 pt-5 pb-5 mt-5 mb-5">
                <h2 className="alternative-font custom-fontSize-2 text-color-light ls-0">
                  jessica &amp; john
                </h2>
                <span className="text-uppercase text-color-light bg-color-primary custom-borderRadius p-1 pl-3 pr-3">
                  10th June 2017
                </span>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

Landing.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Landing);
