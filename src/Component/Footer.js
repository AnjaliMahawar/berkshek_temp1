import React from 'react';

export default function Footer() {
  return (  
    <footer className="brk-footer brk-footer-1 position-relative" data-brk-library="component__footer,twitter_init">
    <div className="brk-footer__wrapper brk-footer__wrapper_shadow">
      <div className="row no-gutters">
        <div className="col-xl-6 col-12">
          <div className="brk-map h-100" data-height={520} data-brk-library="component__map">
            <div className="brk-map__section">
              <div className="brk-map__canvas h-100" data-address="412 Throop Ave, Brooklyn, NY 11221, USA" data-zoom={13} data-type="roadmap" data-marker="img/gm-1.png" data-offset-lat="0.0047" data-style="silver" data-lat="40.6898297" data-lng="-73.94250620000003">
              </div>
            </div>
            <div className="brk-map__infoicon brk-map__infoicon_layout-one text-center">
              <span className="marker">
                <img src="img/gm-1.png" alt="alt" />
              </span>
              <h4 className="font__family-montserrat font__weight-bold font__size-21 line__height-22">Chicago, USA</h4>
              <div className="brk-map__infoicon--text">
                <ul className="font__size-15 line__height-21">
                  <li className="brk-dark-font-color">
                    <i className="fas fa-phone brk-base-font-color font__size-13" />
                    <a href="tel:8800123456789">8 800 123 456 789</a>
                  </li>
                  <li className="brk-dark-font-color">
                    <i className="far fa-clock brk-base-font-color font__size-13" />
                    <span>Mon - Sat 8:00 - 18:00<br />Sunday CLOSED</span>
                  </li>
                </ul>
              </div>
              <a href="#" className="btn border-radius-25 font__family-open-sans font__weight-bold btn-inside-out" data-brk-library="component__button">
                <span className="before">Get directions</span>
                <span className="text">Get directions</span>
                <span className="after">Get directions</span>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-12">
          <div className="brk-base-bg-gradient-40-no-opacity h-100">
            <div className="row no-gutters">
              <div className="col-12 col-md-7">
                <div className="all-light text-center text-sm-left pt-md-80 pb-md-90 pt-40 pb-35 pl-md-60 pl-15 pr-15 pr-md-30">
                  <a href="#" className="d-inline-block pt-1">
                    <img src="img/logo.svg" alt="alt" />
                  </a>
                  <hr className="horiz-line" style={{marginTop: 20, marginBottom: 47}} />
                  <p className="font__family-open-sans font__size-14 line__height-21 brk-white-font-color">Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                    eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra fequis, feugiat arutr, tellus.
                    Phasellus viverra nulla ut metus varius laoreet. </p>
                  <hr className="horiz-line" style={{marginBottom: 12}} />
                  <div className="d-flex flex-wrap brk-footer__info-grid flex-sm-row flex-column mb-50">
                    <p className="font__family-open-sans font__weight-bold font__size-14 mt-10">
                      <i className="brk-footer-icon text-middle fa fa-map-marker line__height-24" />Chicago
                    </p>
                    <p className="font__family-open-sans font__weight-bold font__size-14 mt-10">
                      <i className="brk-footer-icon text-middle fa fa-envelope line__height-24" />
                      <a href="mailto:i@nikadevs.com" className="show-inline-block">we@dev.com</a>
                    </p>
                    <p className="font__family-open-sans font__weight-bold font__size-14 mt-10">
                      <i className="brk-footer-icon text-middle fa fa-comments line__height-24" />Contact
                    </p>
                    <p className="font__family-open-sans font__weight-bold font__size-14 mt-10">
                      <i className="brk-footer-icon text-middle fa fa-phone line__height-24" />
                      <a href="#" className="show-inline-block">800 12 34 567</a>
                    </p>
                  </div>
                  <form action="#" name="subscribe" className="brk-subscribe-mail" data-brk-library="recaptcha">
                    <div className="brk-subscribe brk-subscribe-map">
                      <input name="EMAIL" type="email" placeholder="enter-your@mail.com" />
                      <button type="submit">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-12 col-md-5">
                <div className="pt-80 pt-xs-20 pb-50 pr-30">
                  <h6 className="brk-white-font-color text-center text-sm-left font__family-montserrat font__size-36 font__weight-bold line__height-36">
                    Our Twitter
                  </h6>
                  <hr className="horiz-line mb-40" style={{marginTop: 19}} />
                  <div className="brk-styled-twitter-3 pr-xs-15 pl-xs-15">
                    <a href="https://twitter.com/We_Nikadevs" className="twitter-timeline" data-tweet-limit={2} data-chrome="noheader,transparent,nofooter,noborders" data-theme="dark" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-60 brk-light-gradient-90deg-94 border-bottom-3 brk-border-color-light brk-shadow-light">
        <div className="container">
          <div className="brk-dashed-logo mb-20">
            <span className="brk-dashed-logo__line" />
            <a className="brk-dashed-logo__link ml-25 mr-25">
              <img src="img/logo.svg" height={31} width={170} alt="logo" />
            </a>
            <span className="brk-dashed-logo__line" />
          </div>
          <div className="brk-social-links brk-white-font-color brk-social-links_opacity d-flex justify-content-center mb-40 font__size-12" data-brk-library="component__social_links">
            <a href="#" className="brk-social-links__item">
              <i className="fab fa-twitter" />
            </a>
            <a href="#" className="brk-social-links__item">
              <i className="fab fa-instagram" />
            </a>
            <a href="#" className="brk-social-links__item">
              <i className="fab fa-google-plus-g" />
            </a>
            <a href="#" className="brk-social-links__item">
              <i className="fab fa-youtube" />
            </a>
            <a href="#" className="brk-social-links__item">
              <i className="fab fa-vimeo" />
            </a>
            <a href="#" className="brk-social-links__item">
              <i className="fab fa-vk" />
            </a>
          </div>
          <div className="brk-footer__rights pt-15 pb-20 text-center">
            <p className="font__family-open-sans font__size-14 font__weight-normal line__height-14">© 2018 Berserk All rights reserved</p>
          </div>
        </div>
      </div>
//   </div>
    
  </footer>
  );
}
