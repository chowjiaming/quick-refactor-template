import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Blogs extends Component {
  componentDidMount() {
    const { pageRoute } = this.props.navbar;
    // set all route key values to false, then flip gallery value
    if (pageRoute) {
      Object.keys(pageRoute).forEach(route => (pageRoute[route] = false));
      pageRoute.blogs = !pageRoute.blogs;
    }
    store.dispatch(switchPages(pageRoute));
  }

  render() {
    return (
      <Fragment>
        <section className="blog mb-5 pb-5" id="blog">
          <div className="container">
            <div className="row mt-3 pt-3">
              <div className="col">
                <h2 className="alternative-font custom-font-size-1 text-color-primary text-center mb-3">
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
                    href="/blog"
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
                      <div className="category text-uppercase font-weight-semibold">
                        Wedding Day
                      </div>
                      <h3 className="text-capitalize mb-3">How we actually met</h3>
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
                    href="/blog"
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
                      <div className="category text-uppercase font-weight-semibold">
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
              <div className="col-md-4 p-3 mb-4 isotope-item">
                <div className="blog-item">
                  <a
                    href="/blog"
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
                      <div className="category text-uppercase font-weight-semibold">
                        Wedding Day
                      </div>
                      <h3 className="text-capitalize mb-3">How we actually met</h3>
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
                    href="/blog"
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
                      <div className="category text-uppercase font-weight-semibold">
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
              <div className="col-md-4 p-3 mb-4 isotope-item">
                <div className="blog-item">
                  <a
                    href="/blog"
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
                      <div className="category text-uppercase font-weight-semibold">
                        Wedding Day
                      </div>
                      <h3 className="text-capitalize mb-3">How we actually met</h3>
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
                    href="/blog"
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
                      <div className="category text-uppercase font-weight-semibold">
                        Wedding Day
                      </div>
                      <h3 className="text-capitalize mb-3">The Day is Coming</h3>
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
            <div
              id="blogLoadMoreBtnWrapper"
              className="row align-items-center"
              style={{ minHeight: "115px" }}
            >
              <div className="col text-center">
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
                <button
                  id="blogLoadMore"
                  type="button"
                  className="btn btn-secondary btn-xs custom-border-radius text-3 text-color-light text-uppercase outline-none p-3 pl-5 pr-5 mx-auto"
                >
                  View More
                </button>
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
                <h2 className="alternative-font custom-font-size-2 text-color-light ls-0">
                  jessica &amp; john
                </h2>
                <span className="text-uppercase text-color-light bg-color-primary custom-border-radius p-1 pl-3 pr-3">
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

Blogs.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Blogs);
