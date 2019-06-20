import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import classnames from "classnames";

class Navbar extends Component {
  render() {
    // const { pageRoute } = this.props.navbar;
    return (
      <header
        id="header"
        className="header-narrow"
        data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 84, 'stickySetTop': '-84px'}"
      >
        <div className="header-body">
          <div className="header-container container py-0 py-lg-4">
            <div className="header-row">
              <div className="header-column justify-content-start justify-content-lg-center">
                <div className="header-row">
                  <div className="header-logo">
                    <a href="/">
                      <span className="header-logo-text pl-2 pl-sm-0">
                        jessica &amp; john
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column justify-content-end">
                <div className="header-row">
                  <div className="header-nav justify-content-center">
                    <div className="header-nav-main custom-header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 bg-color-light">
                      <nav className="collapse">
                        <ul className="nav nav-pills" id="mainNav">
                          <li className="dropdown-full-color dropdown-quaternary">
                            <a
                              className="nav-link active"
                              href="#header"
                              data-hash
                              data-hash-offset="50"
                              data-collapse-nav
                            >
                              Home
                            </a>
                          </li>
                          <li className="dropdown-full-color dropdown-quaternary">
                            <a
                              className="nav-link"
                              href="#the-wedding"
                              data-hash
                              data-hash-offset="50"
                              data-collapse-nav
                            >
                              The Wedding
                            </a>
                          </li>
                          <li className="dropdown-full-color dropdown-quaternary">
                            <a
                              className="nav-link"
                              href="#photos"
                              data-hash
                              data-hash-offset="50"
                              data-collapse-nav
                            >
                              Photos
                            </a>
                          </li>
                          <li className="dropdown-full-color dropdown-quaternary">
                            <a
                              className="nav-link"
                              href="#guestbook"
                              data-hash
                              data-hash-offset="50"
                              data-collapse-nav
                            >
                              Guestbook
                            </a>
                          </li>
                          <li className="dropdown-full-color dropdown-quaternary">
                            <a
                              className="nav-link"
                              href="#blog"
                              data-hash
                              data-hash-offset="50"
                              data-collapse-nav
                            >
                              Blog
                            </a>
                          </li>
                          <li className="dropdown-full-color dropdown-quaternary">
                            <a
                              className="nav-link"
                              href="#rsvp"
                              data-hash
                              data-hash-offset="50"
                              data-collapse-nav
                            >
                              Rsvp
                            </a>
                          </li>
                          <li className="dropdown-full-color dropdown-quaternary">
                            <a
                              className="nav-link"
                              href="#gifts"
                              data-hash
                              data-hash-offset="50"
                              data-collapse-nav
                            >
                              Gifts
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    <button
                      className="btn header-btn-collapse-nav"
                      data-toggle="collapse"
                      data-target=".header-nav-main nav"
                    >
                      <i className="fas fa-bars" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

Navbar.propTypes = {
  navbar: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  navbar: state.navbar
});

export default connect(
  mapStateToProps,
  {}
)(Navbar);
