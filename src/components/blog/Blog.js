import React, { Component, Fragment } from "react";
import { switchPages } from "redux/navbar/actions";
import store from "redux/store";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Blog extends Component {
  componentDidMount() {
    const { pageRoute } = this.props.navbar;
    // set all route key values to false, then flip gallery value
    if (pageRoute) {
      Object.keys(pageRoute).forEach(route => (pageRoute[route] = false));
      pageRoute.blog = !pageRoute.blog;
    }
    store.dispatch(switchPages(pageRoute));
  }

  render() {
    return (
      <Fragment>
        <section className="blog mb-5 pb-5" id="blog">
          <div className="container">
            <div className="row mt-3 pt-5">
              <div className="col">
                <h2 className="alternative-font custom-font-size-1 text-color-primary text-center mb-3">
                  Our Blog
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <a className="mt-3 mb-3" href="/blogs">
                  <i className="fas fa-long-arrow-alt-left pl-1" /> Back to Blog
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="blog-posts single-post mt-4">
                  <article className="post post-large blog-single-post m-0">
                    <div className="post-content">
                      <h1 className="mb-3">The Day is Coming</h1>

                      <div className="post-meta">
                        <span>
                          <i className="far fa-user" /> By{" "}
                          <a href="/blog">Groom</a>
                        </span>
                        <span>
                          <i className="far fa-folder" />
                          <a href="/blog">The Wedding</a>
                        </span>
                        <span>
                          <i className="far fa-comments" />
                          <a href="/blog">12 Comments</a>
                        </span>
                      </div>

                      <img
                        src="img/demos/wedding/blog/blog-post-1.jpg"
                        className="img-fluid float-left mb-3 mb-1 mr-4"
                        alt=""
                        style={{ width: "360px" }}
                      />

                      <p className="lead">
                        Lorem ipsum dolor sit amet, gravida nibh vel velit
                        auctor aliquet. Aenean sollicitudin, lorem quis bibendum
                        auctor, nisi elit consequat ipsum, nec sagittis sem nibh
                        id elit. Duis sed odio sit amet nibh vulputate cursus a
                        sit amet mauris. Morbi accumsan ipsum velit. Nam nec
                        tellus a odio tincidunt auctor a ornare odio. Sed non
                        mauris vitae erat consequat.
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur lectus lacus, rutrum sit amet placerat et,
                        bibendum nec mauris. Duis molestie, purus eget placerat
                        viverra, nisi odio gravida sapien, congue tincidunt nisl
                        ante nec tellus. Vestibulum ante ipsum primis in
                        faucibus orci luctus et ultrices posuere cubilia Curae;
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce sagittis, massa fringilla consequat blandit,
                        mauris ligula porta nisi, non tristique enim sapien vel
                        nisl. Suspendisse vestibulum lobortis dapibus.
                        Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia Curae; Praesent nec tempus
                        nibh. Donec mollis commodo metus et fringilla. Etiam
                        venenatis, diam id adipiscing convallis, nisi eros
                        lobortis tellus, feugiat adipiscing ante ante sit amet
                        dolor. Vestibulum vehicula scelerisque facilisis. Sed
                        faucibus placerat bibendum. Maecenas sollicitudin
                        commodo justo, quis hendrerit leo consequat ac. Proin
                        sit amet risus sapien, eget interdum dui. Proin justo
                        sapien, varius sit amet hendrerit id, egestas quis
                        mauris.
                      </p>

                      <div className="pt-2 pb-1">
                        {/* eslint-disable-next-line */}
                        <div className="addthis_toolbox addthis_default_style">
                          {/* eslint-disable-next-line */}
                          <a className="addthis_button_facebook_like" />
                          {/* eslint-disable-next-line */}
                          <a className="addthis_button_tweet" />
                          {/* eslint-disable-next-line */}
                          <a className="addthis_button_pinterest_pinit" />
                          {/* eslint-disable-next-line */}
                          <a className="addthis_counter addthis_pill_style" />
                        </div>
                        <script
                          type="text/javascript"
                          src="//s7.addthis.com/js/300/addthis_widget.js#pubid=xa-50faf75173aadc53"
                        />
                      </div>

                      <div className="post-block post-comments clearfix">
                        <h4 className="mt-5 mb-3">Comments</h4>

                        <ul className="comments">
                          <li>
                            <div className="comment">
                              <div className="img-thumbnail d-none d-sm-block">
                                <img
                                  className="avatar"
                                  alt=""
                                  src="img/team/team-19.jpg"
                                />
                              </div>
                              <div className="comment-block">
                                <div className="comment-arrow" />
                                <span className="comment-by">
                                  <strong>John Doe</strong>
                                  <span className="float-right">
                                    <span>
                                      <a href="/blog">
                                        <i className="fas fa-reply" /> Reply
                                      </a>
                                      >
                                    </span>
                                    >
                                  </span>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit. Nam viverra euismod odio,
                                  gravida pellentesque urna varius vitae,
                                  gravida pellentesque urna varius vitae. Lorem
                                  ipsum dolor sit amet, consectetur adipiscing
                                  elit. Nam viverra euismod odio, gravida
                                  pellentesque urna varius vitae. Sed dui lorem,
                                  adipiscing in adipiscing et, interdum nec
                                  metus. Mauris ultricies, justo eu convallis
                                  placerat, felis enim ornare nisi, vitae mattis
                                  nulla ante id dui.
                                </p>
                                <span className="date float-right">
                                  November 12, 2018 at 1:38 pm
                                </span>
                              </div>
                            </div>

                            <ul className="comments reply">
                              <li>
                                <div className="comment">
                                  <div className="img-thumbnail d-none d-sm-block">
                                    <img
                                      className="avatar"
                                      alt=""
                                      src="img/team/team-17.jpg"
                                    />
                                  </div>
                                  <div className="comment-block">
                                    <div className="comment-arrow" />
                                    <span className="comment-by">
                                      <strong>John Doe</strong>
                                      <span className="float-right">
                                        <span>
                                          <a href="/blog">
                                            <i className="fas fa-reply" />
                                            Reply
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Nam viverra euismod odio,
                                      gravida pellentesque urna varius vitae,
                                      gravida pellentesque urna varius vitae.
                                    </p>
                                    <span className="date float-right">
                                      November 12, 2018 at 1:38 pm
                                    </span>
                                  </div>
                                </div>
                              </li>
                              <li>
                                <div className="comment">
                                  <div className="img-thumbnail d-none d-sm-block">
                                    <img
                                      className="avatar"
                                      alt=""
                                      src="img/team/team-15.jpg"
                                    />
                                  </div>
                                  <div className="comment-block">
                                    <div className="comment-arrow" />
                                    <span className="comment-by">
                                      <strong>John Doe</strong>
                                      <span className="float-right">
                                        <span>
                                          <a href="/blog">
                                            <i className="fas fa-reply" />
                                            Reply
                                          </a>
                                        </span>
                                      </span>
                                    </span>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit. Nam viverra euismod odio,
                                      gravida pellentesque urna varius vitae,
                                      gravida pellentesque urna varius vitae.
                                    </p>
                                    <span className="date float-right">
                                      November 12, 2018 at 1:38 pm
                                    </span>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <div className="comment">
                              <div className="img-thumbnail d-none d-sm-block">
                                <img
                                  className="avatar"
                                  alt=""
                                  src="img/team/team-12.jpg"
                                />
                              </div>
                              <div className="comment-block">
                                <div className="comment-arrow" />
                                <span className="comment-by">
                                  <strong>John Doe</strong>
                                  <span className="float-right">
                                    <span>
                                      <a href="/blog">
                                        <i className="fas fa-reply" /> Reply
                                      </a>
                                    </span>
                                  </span>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
                                <span className="date float-right">
                                  November 12, 2018 at 1:38 pm
                                </span>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment">
                              <div className="img-thumbnail d-none d-sm-block">
                                <img
                                  className="avatar"
                                  alt=""
                                  src="img/team/team-12.jpg"
                                />
                              </div>
                              <div className="comment-block">
                                <div className="comment-arrow" />
                                <span className="comment-by">
                                  <strong>John Doe</strong>
                                  <span className="float-right">
                                    <span>
                                      <a href="/blog">
                                        <i className="fas fa-reply" /> Reply
                                      </a>
                                    </span>
                                  </span>
                                </span>
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit.
                                </p>
                                <span className="date float-right">
                                  November 12, 2018 at 1:38 pm
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="post-block post-leave-comment mb-4">
                        <h4 className="mt-5 mb-3">Leave a Comment</h4>

                        <form action="" method="post">
                          <div className="form-row">
                            <div className="form-group col-lg-6">
                              <label>Your name *</label>
                              <input
                                type="text"
                                value=""
                                maxLength="100"
                                className="form-control"
                                name="name"
                                id="name"
                              />
                            </div>
                            <div className="form-group col-lg-6">
                              <label>Your email address *</label>
                              <input
                                type="email"
                                value=""
                                maxLength="100"
                                className="form-control"
                                name="email"
                                id="email"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col">
                              <label>Comment *</label>
                              <textarea
                                maxLength="5000"
                                rows="10"
                                className="form-control"
                                name="comment"
                                id="comment"
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col">
                              <input
                                type="submit"
                                value="Post Comment"
                                className="btn btn-secondary btn-xs custom-border-radius text-3 text-color-light text-uppercase outline-none p-3 pl-5 pr-5 m-auto mb-5 mt-5"
                                data-loading-text="Loading..."
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <a className="mt-3 mb-3" href="/blogs">
                  <i className="fas fa-long-arrow-alt-left pl-1" /> Back to Blog
                </a>
                >
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

Blog.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Blog);
