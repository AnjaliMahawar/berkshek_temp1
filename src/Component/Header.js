import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="brk-header d-lg-flex flex-column brk-header_style-1 brk-header_color-dark" style={{display: 'none'}} data-logo-src="img/logo-dark-2.png" data-bg-mobile="img/brk-bg-mobile-menu.jpg" data-sticky-hide={0} data-brk-library="component__header">
    <div className="brk-header__top-bar brk-header_border-bottom order-lg-1 order-2 brk-bg-grad brk-header__top-bar_hide brk-header__top-bar_color-white" data-top={3} style={{height: 46}}>
      <div className="brk-header__title font__family-montserrat font__weight-bold">Contact Us</div>
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-6 align-self-lg-stretch text-left">
            <div className="brk-header__element brk-header__element_skin-1 brk-header__item">
              <a href="#" className="brk-header__element--wrap">
                <i className="far fa-envelope" />
                <span className="brk-header__element--label">admin@berserk.com</span>
              </a>
              </div>
             <div className="brk-header__element brk-header__element_skin-1 brk-header__item">
              <div className="brk-header__element--wrap">
                <i className="far fa-clock" />
                <span className="brk-header__element--label">Mn-Fr (9.00 am - 5.00 pm)</span>
              </div>
             </div>
              </div>
                <div className="col-lg-6 align-self-lg-stretch text-left text-lg-right">
            <div className="brk-header__element brk-header__element_skin-1 brk-header__item">
              <a href="shop-components-compare.html" className="brk-header__element--wrap">
                <i className="fas fa-exchange-alt" />
                <span className="brk-header__element--label">Compare List</span>
                <span className="brk-header__compare brk-header__compare_white">2</span>
              </a>
            </div>
            <div className="brk-header__element brk-header__element_skin-1 brk-header__item">
              <a href="checkout.html" className="brk-header__element--wrap">
                <i className="fas fa-chevron-circle-right" />
                <span className="brk-header__element--label">Checkout</span>
              </a>
            </div>
            <div className="brk-header__element brk-header__element_skin-1 brk-header__item">
              <a href="login.html" className="brk-header__element--wrap">
                <i className="fas fa-sign-in-alt" />
                <span className="brk-header__element--label">Login</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="brk-header__main-bar brk-header_border-bottom order-lg-2 order-1 bg-white" style={{height: 72}}>
      <div className="container-fluid">
        <div className="row no-gutters align-items-center">
          <div className="col-lg-auto align-self-lg-stretch d-none d-lg-block">
            <div className="brk-open-top-bar brk-header__item">
              <div className="brk-open-top-bar__circle" />
              <div className="brk-open-top-bar__circle" />
              <div className="brk-open-top-bar__circle" />
            </div>
          </div>
          <div className="col-lg align-self-lg-stretch">
            <nav className="brk-nav brk-header__item">
              <ul className="brk-nav__menu">
                <li className="brk-nav__children brk-nav__full-width">
                  <a href="/" data-brk-library="component__tabs">
                    <span>Home</span>
                  </a>
                  <div className="brk-nav__mega-menu brk-nav-drop-down">
                    <div className="bg-white">
                      <div className="brk-tabs brk-tabs-hovers" data-index={0}>
                        <ul className="brk-tabs-nav font__family-open-sans">
                          <li className="brk-tab font__weight-bold">
                            <i className="fa fa-tasks" />
                            Demos
                          </li>
                          <li className="brk-tab font__weight-bold">
                            <i className="fa fa-trophy" />
                            HomePages
                          </li>
                          <li className="brk-tab font__weight-bold">
                            <i className="fa fa-life-ring" />
                            Support &amp; Info
                          </li>
                        </ul>
                        <div className="brk-tabs-content">
                          <div className="brk-tab-item">
                            <div className="row no-gutters">
                              <div className="col-lg">
                                <div className="brk-nav__header font__family-montserrat">Check</div>
                                <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                                  <ul className="brk-header-list font__family-montserrat">
                                    <li>
                                      <a href="/demo_agency_animation.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-paper-plane" />
                                        </span>
                                        Agency Animation
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_agency_fluid.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-tint" />
                                        </span>
                                        Agency Fluid
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_agency_modern.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-gift" />
                                        </span>
                                        Agency Modern
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_agency_urban.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-university" />
                                        </span>
                                        Agency Urban
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_art.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-newspaper" />
                                        </span>
                                        Art
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_saas.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-camera-retro" />
                                        </span>
                                        SAAS
                                        <span className="brk-header-list__info bg-success font__family-montserrat">Ver. 1.5</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_winter_trip_agency.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-snowflake" />
                                        </span>
                                        Winter Trip Agency
                                        <span className="brk-header-list__info bg-success font__family-montserrat">Ver. 1.6</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg">
                                <div className="brk-nav__header font__family-montserrat">Out</div>
                                <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                                  <ul className="brk-header-list font__family-montserrat">
                                    <li>
                                      <a href="/demo_construction.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-home" />
                                        </span>
                                        Construction
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_creative_agency.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fab fa-angrycreative" />
                                        </span>
                                        Creative Agency
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_freelance_blog.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-user-friends" />
                                        </span>
                                        Freelance Blog
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_freelance_portfolio.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-portrait" />
                                        </span>
                                        Freelance Portfolio
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_logistic.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-truck" />
                                        </span>
                                        Logistic
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_website_agency.html">
                                        <span className="brk-header-list__icon">
                                          <i className="far fa-images" />
                                        </span>
                                        Website Agency
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_winter_trip_agency_cta.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-snowflake" />
                                        </span>
                                        Winter Event Anounce
                                        <span className="brk-header-list__info bg-success font__family-montserrat">Ver. 1.7</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg">
                                <div className="brk-nav__header font__family-montserrat">Our</div>
                                <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                                  <ul className="brk-header-list font__family-montserrat">
                                    <li>
                                      <a href="/demo_shop_clothes.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-tshirt" />
                                        </span>
                                        Shop Clothes
                                        <span className="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_shop_drone.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fab fa-phoenix-squadron" />
                                        </span>
                                        Shop Drone
                                        <span className="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_shop_electronics.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-bolt" />
                                        </span>
                                        Shop Electronics
                                        <span className="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_shop_modern.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-people-carry" />
                                        </span>
                                        Shop Modern
                                        <span className="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_shop_trendy.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-dollar-sign" />
                                        </span>
                                        Shop Trendy
                                        <span className="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_shop_video.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-video" />
                                        </span>
                                        Shop Video
                                        <span className="brk-header-list__info bg-warning font__family-montserrat">Shop</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg">
                                <div className="brk-nav__header font__family-montserrat">Demos</div>
                                <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                                  <ul className="brk-header-list font__family-montserrat">
                                    <li>
                                      <a href="/demo_magazine.html">
                                        <span className="brk-header-list__icon">
                                          <i className="far fa-window-restore" />
                                        </span>
                                        Magazine
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_photography.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-camera-retro" />
                                        </span>
                                        Photography
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_product_landing.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fab fa-product-hunt" />
                                        </span>
                                        Product Landing
                                        <span className="brk-header-list__info bg-success font__family-montserrat">New</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_product_sport.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-futbol" />
                                        </span>
                                        Sports Products
                                        <span className="brk-header-list__info bg-success font__family-montserrat">New</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_spa.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-dove" />
                                        </span>
                                        Spa &amp; Beauty
                                        <span className="brk-header-list__info bg-success font__family-montserrat">New</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_minimalistic_portfolio.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-camera-retro" />
                                        </span>
                                        Portfolio Minimalistic
                                        <span className="brk-header-list__info bg-success font__family-montserrat">Ver. 1.3</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/demo_travel_agency.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-plane" />
                                        </span>
                                        Travel Agency
                                        <span className="brk-header-list__info bg-success font__family-montserrat">Ver. 1.1</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="brk-tab-item">
                            <div className="row no-gutters">
                              <div className="col-lg d-none d-lg-block">
                                <div className="brk-nav__header font__family-montserrat">Preview</div>
                                <div className="brk-element-base brk-header_border-right text-center lazyload" data-bg="img/662x295.jpg" style={{height: 'calc(100% - 76px)'}}>
                                  <div className="brk-element-base__before" />
                                  <div className="brk-element-base__after lazyload" data-bg="img/shape-01.png" />
                                  <div className="brk-element-base__content center-absolute">
                                    <div className="mb-20">
                                      <img src="img/logo.svg" alt="alt" />
                                    </div>
                                    <div className="pb-10">
                                      <a href="#" className="btn btn-inside-out btn-md border-radius-25 font__family-open-sans font__weight-bold btn-inside-out-invert" data-brk-library="component__button">
                                        <span className="before">Purchase</span><span className="text">Click Me</span><span className="after">Purchase</span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg">
                                <div className="brk-nav__header font__family-montserrat">Our</div>
                                <div className="brk-header_border-right pt-lg-20 pb-lg-60 pb-20" style={{height: 'calc(100% - 76px)'}}>
                                  <ul className="brk-header-list font__family-montserrat">
                                    <li>
                                      <a href="home-page-1.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fa fa-male" aria-hidden="true" />
                                        </span>
                                        Home page 1
                                      </a>
                                    </li>
                                    <li>
                                      <a href="home-page-2.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fa fa-cube" aria-hidden="true" />
                                        </span>
                                        Home page 2
                                      </a>
                                    </li>
                                    <li>
                                      <a href="home-page-3.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fa fa-qrcode" aria-hidden="true" />
                                        </span>
                                        Home page 3
                                      </a>
                                    </li>
                                    <li>
                                      <a href="home-page-4.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fa fa-sign-language" aria-hidden="true" />
                                        </span>
                                        Home page 4
                                      </a>
                                    </li>
                                    <li>
                                      <a href="home-page-5.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fa fa-university" aria-hidden="true" />
                                        </span>
                                        Home page 5
                                      </a>
                                    </li>
                                    <li>
                                      <a href="home-page-6.html">
                                        <span className="brk-header-list__icon">
                                          <i className="fa fa-cube" aria-hidden="true" />
                                        </span>
                                        Home page 6
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg">
                                <div className="brk-nav__header font__family-montserrat">Home</div>
                                <div className="brk-header_border-right pt-lg-20 pb-lg-60 pb-20" style={{height: 'calc(100% - 76px)'}}>
                                  <ul className="brk-header-list font__family-montserrat">
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 7
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 8
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 9
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 10
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 11
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 12
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="col-lg">
                                <div className="brk-nav__header font__family-montserrat">Pages</div>
                                <div className="brk-header_border-right pt-lg-20 pb-lg-60 pb-20" style={{height: 'calc(100% - 76px)'}}>
                                  <ul className="brk-header-list font__family-montserrat">
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 13
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 14
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 15
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 16
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 17
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="/">
                                        <span className="brk-header-list__icon">
                                          <i className="fas fa-archive" />
                                        </span>
                                        Home page 18
                                        <span className="brk-header-list__info bg-info font__family-montserrat">SOON</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="brk-tab-item">
                            <div className="row">
                              <div className="col-lg-5">
                                <div className="mt-30 mb-30 pr-15 pr-lg-0 pl-15 pl-lg-15">
                                  <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/tiles-simple-1.jpg" alt="alt" />
                                </div>
                              </div>
                              <div className="col-lg-7">
                                <div className="pr-15 pr-lg-0 pl-15 pl-lg-15">
                                  <h2 className="font__family-montserrat text-uppercase font__size-24 mb-40 mt-30">How Glossier Hacked Social
                                    Media</h2>
                                  <p className="brk-dark-font-color text-left mb-20">On a Thursday afternoon in late spring, 32-year-old
                                    Glossier founder and CEO Emily Weiss rides the elevator
                                    to the penthouse level of her company's downtown Manhattan headquarters. She's a thoroughly millennial
                                    girlboss in jeans, sneakers and a royal blue sweatshirt with weiss embroidered in small white script.
                                    Her
                                    hair is pulled back in a ponytail, and for the founder of a beauty products company, she wears notably
                                    little makeup - just some mascara and possibly a swipe of Glossier Lip Gloss, a recent product release
                                    touted online as having a "fuzzy doe-foot applicator."</p>
                                  <p className="brk-dark-font-color text-left mb-20">A former teen model, Weiss is beautiful but not
                                    intimidating, either by nature or by design (probably a little
                                    of both). After all, her company’s popularity is directly related to her ability to cultivate a
                                    feeling
                                    of friendship with and among her customers. Just enough relatability is key.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="brk-nav__children brk-nav__drop-down-effect">
                  <a href="#">
                    <span>Blog</span>
                  </a>
                  <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                    <li className="dd-effect">
                      <a href="blog.html">Blog</a>
                    </li>
                    <li className="dd-effect">
                      <a href="blog-page.html">Blog post</a>
                    </li>
                  </ul>
                </li>
                <li className="brk-nav__children brk-nav__drop-down-effect">
                  <a href="#">
                    <span>Pages</span>
                  </a>
                  <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                    <li className="dd-effect brk-nav__children brk-nav__drop-down-effect">
                      <a href="#">Headers <i className="fas fa-angle-right" /></a>
                      <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                        <li className="dd-effect brk-nav__children brk-nav__drop-down-effect">
                          <a href="#">Headers Extra <i className="fas fa-angle-right" /></a>
                          <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                            <li className="dd-effect"><a href="header-8.html">Header 8</a></li>
                            <li className="dd-effect"><a href="header-9.html">Header 9</a></li>
                            <li className="dd-effect"><a href="header-10.html">Header 10</a></li>
                            <li className="dd-effect"><a href="header-11.html">Header 11</a></li>
                            <li className="dd-effect"><a href="header-12.html">Header 12</a></li>
                            <li className="dd-effect"><a href="header-13.html">Header 13</a></li>
                            <li className="dd-effect"><a href="header-14.html">Header 14</a></li>
                            <li className="dd-effect"><a href="header-vertical-1.html">Header Vertical 1</a></li>
                            <li className="dd-effect"><a href="header-vertical-2.html">Header Vertical 2</a></li>
                          </ul>
                        </li>
                        <li className="dd-effect"><a href="header-1.html">Header 1</a></li>
                        <li className="dd-effect"><a href="header-2.html">Header 2</a></li>
                        <li className="dd-effect"><a href="header-3.html">Header 3</a></li>
                        <li className="dd-effect"><a href="header-4.html">Header 4</a></li>
                        <li className="dd-effect"><a href="header-5.html">Header 5</a></li>
                        <li className="dd-effect"><a href="header-6.html">Header 6</a></li>
                        <li className="dd-effect"><a href="header-7.html">Header 7</a></li>
                        <li className="dd-effect"><a href="header-7-popup.html">Header 7 Popup</a></li>
                      </ul>
                    </li>
                    <li className="dd-effect brk-nav__children brk-nav__drop-down-effect">
                      <a href="#">Forum <i className="fas fa-angle-right" /></a>
                      <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                        <li className="dd-effect">
                          <a href="forum-main.html">Forum main page</a>
                        </li>
                        <li className="dd-effect">
                          <a href="forum-post.html">Forum post</a>
                        </li>
                        <li className="dd-effect">
                          <a href="forum-author.html">Forum author</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dd-effect brk-nav__children brk-nav__drop-down-effect">
                      <a href="#">Galleries <i className="fas fa-angle-right" /></a>
                      <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                        <li className="dd-effect">
                          <a href="gallery-2-cols.html">Gallery 2 Cols</a>
                        </li>
                        <li className="dd-effect">
                          <a href="gallery-3-cols-masonry.html">Gallery 3 Cols Masonry</a>
                        </li>
                        <li className="dd-effect">
                          <a href="gallery-4-cols.html">Gallery 4 Cols</a>
                        </li>
                        <li className="dd-effect">
                          <a href="gallery-4-cols-wide.html">Gallery 4 Cols Wide</a>
                        </li>
                        <li className="dd-effect">
                          <a href="gallery-6-cols.html">Gallery 6 Cols</a>
                        </li>
                        <li className="dd-effect">
                          <a href="gallery-cols.html">Gallery Cols</a>
                        </li>
                        <li className="dd-effect">
                          <a href="gallery-sliders.html">Gallery Sliders</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dd-effect brk-nav__children brk-nav__drop-down-effect">
                      <a href="#">Contact us <i className="fas fa-angle-right" /></a>
                      <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                        <li className="dd-effect">
                          <a href="contact-us.html">Contact us</a>
                        </li>
                        <li className="dd-effect">
                          <a href="contact-us-bussines.html">Contact us bussines</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dd-effect brk-nav__children brk-nav__drop-down-effect">
                      <a href="login.html">Errors <i className="fas fa-angle-right" /></a>
                      <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                        <li className="dd-effect">
                          <a href="404.html">Page not found - 404</a>
                        </li>
                        <li className="dd-effect">
                          <a href="403.html">Access denied - 403</a>
                        </li>
                      </ul>
                    </li>
                    <li className="dd-effect brk-nav__children brk-nav__drop-down-effect">
                      <a href="login.html">Login/Register <i className="fas fa-angle-right" /></a>
                      <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                        <li className="dd-effect">
                          <NavLink to="/Login">Login</NavLink>
                        </li>
                        <li className="dd-effect">
                          <NavLink to="/Register">Register</NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="dd-effect">
                      <a href="breadcrumbs.html">Breadcrubms</a>
                    </li>
                    <li className="dd-effect">
                      <a href="footer.html">Footers</a>
                    </li>
                    <li className="dd-effect">
                      <a href="company-services.html">Company Services</a>
                    </li>
                    <li className="dd-effect">
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li className="dd-effect">
                      <a href="team.html">Out Team</a>
                    </li>
                    <li className="dd-effect">
                      <a href="careers.html">Careers</a>
                    </li>
                    <li className="dd-effect">
                      <a href="faq.html">FAQ</a>
                    </li>
                    <li className="dd-effect">
                      <a href="coming-soon.html">Coming Soon</a>
                    </li>
                  </ul>
                </li>
                <li className="brk-nav__children brk-nav__drop-down-effect">
                  <a href="#">
                    <span>Portfolio</span>
                  </a>
                  <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                    <li className="dd-effect">
                      <a href="portfolio-categories.html">Portfolio categories</a>
                    </li>
                    <li className="dd-effect">
                      <a href="portfolio-galleries.html">Portfolio galleries</a>
                    </li>
                    <li className="dd-effect">
                      <a href="portfolio-grid.html">Portfolio grid</a>
                    </li>
                    <li className="dd-effect">
                      <a href="portfolio-isotope.html">Portfolio isotope</a>
                    </li>
                    <li className="dd-effect">
                      <a href="portfolio-list.html">Portfolio list</a>
                    </li>
                    <li className="dd-effect">
                      <a href="portfolio-masonry.html">Portfolio masonry</a>
                    </li>
                    <li className="dd-effect">
                      <a href="portfolio-page.html">Portfolio page</a>
                    </li>
                    <li className="dd-effect">
                      <a href="portfolio-rows.html">Portfolio rows</a>
                    </li>
                  </ul>
                </li>
                <li className="brk-nav__children brk-nav__drop-down-effect">
                  <a href="#">
                    <span>Shop</span>
                  </a>
                  <ul className="brk-nav__sub-menu brk-nav-drop-down font__family-montserrat">
                    <li className="dd-effect">
                      <a href="shop-components-flip.html">Shop flip</a>
                    </li>
                    <li className="dd-effect">
                      <a href="shop-components-grid.html">Shop grid</a>
                    </li>
                    <li className="dd-effect">
                      <a href="shop-components-grid-filter.html">Shop grid-filter</a>
                    </li>
                    <li className="dd-effect">
                      <a href="shop-components-honeycomb.html">Shop honeycomb</a>
                    </li>
                    <li className="dd-effect">
                      <a href="shop-components-item-sidebar.html">Shop item with sidebar</a>
                    </li>
                    <li className="dd-effect">
                      <a href="shop-components-list.html">Shop list</a>
                    </li>
                    <li className="dd-effect">
                      <a href="shop-components-masonry.html">Shop masonry</a>
                    </li>
                    <li className="dd-effect">
                      <a href="demo_product_landing.html">Shop single product item</a>
                    </li>
                    <li className="dd-effect">
                      <a href="shop-components-row.html">Shop row</a>
                    </li>
                    <li className="dd-effect">
                      <a href="shop-components-tiles.html">Shop tiles</a>
                    </li>
                    <li className="dd-effect">
                      <a href="cart.html">Shop cart</a>
                    </li>
                    <li className="dd-effect">
                      <a href="checkout.html">Shop checkout</a>
                    </li>
                    <li className="dd-effect">
                      <a href="shop-components-compare.html">Shop Compare</a>
                    </li>
                  </ul>
                </li>
                <li className="brk-nav__children brk-nav__full-width brk-nav__drop-down-effect">
                  <a href="#">
                    <span>Elements</span>
                  </a>
                  <div className="brk-nav__mega-menu brk-nav-drop-down">
                    <div className="bg-white">
                      <div className="row no-gutters">
                        <div className="col-xl-2 col-lg-4">
                          <div className="brk-nav__header font__family-montserrat">ELEMENTS</div>
                          <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                            <ul className="brk-header-list font__family-montserrat">
                              <li className="dd-effect">
                                <a href="accordions.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-id-card" aria-hidden="true" />
                                  </span>
                                  Accordions
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="alerts.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-university" aria-hidden="true" />
                                  </span>
                                  Alerts
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="app.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-cube" aria-hidden="true" />
                                  </span>
                                  App
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="backgrounds.html">
                                  <span className="brk-header-list__icon">
                                    <i className="far fa-gem" aria-hidden="true" />
                                  </span>
                                  Backgrounds
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="breadcrumbs.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-life-ring" aria-hidden="true" />
                                  </span>
                                  Breadcrumbs
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="buttons.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-male" aria-hidden="true" />
                                  </span>
                                  Buttons
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="CFA.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-sign-language" aria-hidden="true" />
                                  </span>
                                  CFA
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="content-sliders.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-qrcode" aria-hidden="true" />
                                  </span>
                                  Content sliders
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4">
                          <div className="brk-nav__header font__family-montserrat">ELEMENTS</div>
                          <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                            <ul className="brk-header-list font__family-montserrat">
                              <li className="dd-effect">
                                <a href="countdown.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-university" aria-hidden="true" />
                                  </span>
                                  Countdown
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="counter.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-cube" aria-hidden="true" />
                                  </span>
                                  Counter
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="counter-dark.html">
                                  <span className="brk-header-list__icon">
                                    <i className="far fa-gem" aria-hidden="true" />
                                  </span>
                                  Counter dark
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="delimiters.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-id-card" aria-hidden="true" />
                                  </span>
                                  Delimiters
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="dividers.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-life-ring" aria-hidden="true" />
                                  </span>
                                  Dividers
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="flip-boxes.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-male" aria-hidden="true" />
                                  </span>
                                  Flip boxes
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="form-controls.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-tasks" aria-hidden="true" />
                                  </span>
                                  Form controls
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="google-maps.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-map" aria-hidden="true" />
                                  </span>
                                  Google maps
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4">
                          <div className="brk-nav__header font__family-montserrat">ELEMENTS</div>
                          <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                            <ul className="brk-header-list font__family-montserrat">
                              <li className="dd-effect">
                                <a href="image-caption-parallax.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-sign-language" aria-hidden="true" />
                                  </span>
                                  Image caption
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="image-frames.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-qrcode" aria-hidden="true" />
                                  </span>
                                  Image frames
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="image-map.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-university" aria-hidden="true" />
                                  </span>
                                  Image map
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="icons.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fab fa-font-awesome-alt" />
                                  </span>
                                  Icons
                                  <span className="brk-header-list__info bg-success font__family-montserrat">New</span>
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="info-box.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-cube" aria-hidden="true" />
                                  </span>
                                  Info box
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="lists.html">
                                  <span className="brk-header-list__icon">
                                    <i className="far fa-gem" aria-hidden="true" />
                                  </span>
                                  Lists
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="logo.html">
                                  <span className="brk-header-list__icon">
                                    <i className="far fa-gem" aria-hidden="true" />
                                  </span>
                                  Logo
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="media-embeds.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-id-card" aria-hidden="true" />
                                  </span>
                                  Media embeds
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="pagination.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-life-ring" aria-hidden="true" />
                                  </span>
                                  Pagination
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4">
                          <div className="brk-nav__header font__family-montserrat">ELEMENTS</div>
                          <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                            <ul className="brk-header-list font__family-montserrat">
                              <li className="dd-effect">
                                <a href="parallax.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-tasks" aria-hidden="true" />
                                  </span>
                                  Parallax
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="parallax-video.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-sign-language" aria-hidden="true" />
                                  </span>
                                  Parallax video
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="pricing-tables.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-qrcode" aria-hidden="true" />
                                  </span>
                                  Pricing tables
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="progress-circles.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-university" aria-hidden="true" />
                                  </span>
                                  Progress circles
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="promo.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-id-card" aria-hidden="true" />
                                  </span>
                                  Promo
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="section-titles.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-cube" aria-hidden="true" />
                                  </span>
                                  Section titles
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="sequence.html">
                                  <span className="brk-header-list__icon">
                                    <i className="far fa-gem" aria-hidden="true" />
                                  </span>
                                  Sequence
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="services.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-id-card" aria-hidden="true" />
                                  </span>
                                  Services
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="shape-box.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-male" aria-hidden="true" />
                                  </span>
                                  Shape box
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4">
                          <div className="brk-nav__header font__family-montserrat">ELEMENTS</div>
                          <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                            <ul className="brk-header-list font__family-montserrat">
                              <li className="dd-effect">
                                <a href="sliders.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-male" aria-hidden="true" />
                                  </span>
                                  Sliders
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="social.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-id-card" aria-hidden="true" />
                                  </span>
                                  Social
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="steps.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-cube" aria-hidden="true" />
                                  </span>
                                  Steps
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="tabbed-contents.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-sign-language" aria-hidden="true" />
                                  </span>
                                  Tabbed contents
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="tables.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-qrcode" aria-hidden="true" />
                                  </span>
                                  Tables
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="tabs.html">
                                  <span className="brk-header-list__icon">
                                    <i className="far fa-gem" aria-hidden="true" />
                                  </span>
                                  Tabs
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="tags.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-tasks" aria-hidden="true" />
                                  </span>
                                  Tags
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="team.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-university" aria-hidden="true" />
                                  </span>
                                  Team
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="progress-bars.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-university" aria-hidden="true" />
                                  </span>
                                  Progress bars
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-2 col-lg-4">
                          <div className="brk-nav__header font__family-montserrat">ELEMENTS</div>
                          <div className="brk-header_border-right pt-lg-20 pb-lg-30 pb-10 brk-header_h-100">
                            <ul className="brk-header-list font__family-montserrat">
                              <li className="dd-effect">
                                <a href="team-member.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-tasks" aria-hidden="true" />
                                  </span>
                                  Team-member
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="testimonials.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-university" aria-hidden="true" />
                                  </span>
                                  Testimonials
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="tiles.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-male" aria-hidden="true" />
                                  </span>
                                  Tiles
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="timelines.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-life-ring" aria-hidden="true" />
                                  </span>
                                  Timelines
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="titles.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-id-card" aria-hidden="true" />
                                  </span>
                                  Titles
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="typing-rotator.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fab fa-adversal" aria-hidden="true" />
                                  </span>
                                  Typing rotator
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="svg-pattern.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fab fa-adversal" aria-hidden="true" />
                                  </span>
                                  Blocks transition
                                </a>
                              </li>
                              <li className="dd-effect">
                                <a href="panels.html">
                                  <span className="brk-header-list__icon">
                                    <i className="fa fa-male" aria-hidden="true" />
                                  </span>
                                  Panels
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-2 align-self-lg-center d-none d-lg-block">
            <div className="text-center">
              <a href="/" className="brk-header__logo brk-header__item @@modifier">
                <img className="brk-header__logo-1 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-dark.svg" alt="alt" />
                <img className="brk-header__logo-2 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-dark.svg" alt="alt" />
              </a>
            </div>
          </div>
          <div className="col-lg-5 align-self-lg-stretch text-lg-right">
            <div className="brk-header__title font__family-montserrat font__weight-bold">My Shop</div>
            <div className="brk-call-us brk-header__item">
              <a href="tel:88001234567" className="brk-call-us__number"><i className="fa fa-phone" aria-hidden="true" /> 8 800 12 34 567</a>
              <a href="tel:88001234567" className="brk-call-us__link"><i className="fa fa-phone" aria-hidden="true" /></a>
            </div>
            <div className="brk-lang brk-header__item">
              <span className="brk-lang__selected">US <i className="fa fa-caret-down" aria-hidden="true" /></span>
              <span className="brk-lang__open"><i className="fa fa-language" /> Language <span className="brk-lang__active-lang text-white brk-bg-primary">US</span></span>
              <ul className="brk-lang__option">
                <li><a href="#">UA</a></li>
                <li><a href="#">US</a></li>
                <li><a href="#">PL</a></li>
                <li><a href="#">ES</a></li>
              </ul>
            </div>
            <div className="brk-mini-cart brk-header__item">
              <a href="cart.html" className="brk-mini-cart__open d-flex">
                <i className="fa fa-shopping-basket" aria-hidden="true" />
                <span className="brk-mini-cart__label font__family-montserrat font__weight-medium text-uppercase letter-spacing-60 font__size-10 opacity-80">My cart</span>
                <span className="brk-mini-cart__title">Shopping Cart</span>
                <span className="brk-mini-cart__count">4</span>
              </a>
              <div className="brk-mini-cart__menu">
                <div className="brk-mini-cart__header">
                  <span className="font__family-montserrat font__weight-bold font__size-18">Your Cart</span>
                </div>
                <div className="brk-mini-cart__products">
                  <div className="brk-mini-cart__product">
                    <div className="brk-mini-cart__product--img">
                      <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt" />
                    </div>
                    <div className="brk-mini-cart__product--title-price">
                      <a href="#">
                        <h4 className="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
                      </a>
                      <span className="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
                      <span className="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
                    </div>
                    <div className="brk-quantity">
                      <span className="brk-quantity__arrows minus" />
                      <input className="brk-quantity__value" name="quantity" type="text" defaultValue={2} />
                      <span className="brk-quantity__arrows plus" />
                    </div>
                    <a href="#" className="brk-mini-cart__product--remove remove"><i className="fa fa-times-circle" aria-hidden="true" /></a>
                  </div>
                  <div className="brk-mini-cart__product">
                    <div className="brk-mini-cart__product--img">
                      <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt" />
                    </div>
                    <div className="brk-mini-cart__product--title-price">
                      <a href="#">
                        <h4 className="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
                      </a>
                      <span className="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
                      <span className="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
                    </div>
                    <div className="brk-quantity">
                      <span className="brk-quantity__arrows minus" />
                      <input className="brk-quantity__value" name="quantity" type="text" defaultValue={2} />
                      <span className="brk-quantity__arrows plus" />
                    </div>
                    <a href="#" className="brk-mini-cart__product--remove remove"><i className="fa fa-times-circle" aria-hidden="true" /></a>
                  </div>
                  <div className="brk-mini-cart__product">
                    <div className="brk-mini-cart__product--img">
                      <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt" />
                    </div>
                    <div className="brk-mini-cart__product--title-price">
                      <a href="#">
                        <h4 className="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
                      </a>
                      <span className="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
                      <span className="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
                    </div>
                    <div className="brk-quantity">
                      <span className="brk-quantity__arrows minus" />
                      <input className="brk-quantity__value" name="quantity" type="text" defaultValue={2} />
                      <span className="brk-quantity__arrows plus" />
                    </div>
                    <a href="#" className="brk-mini-cart__product--remove remove"><i className="fa fa-times-circle" aria-hidden="true" /></a>
                  </div>
                  <div className="brk-mini-cart__product">
                    <div className="brk-mini-cart__product--img">
                      <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/shop/shop-setout-2.png" alt="alt" />
                    </div>
                    <div className="brk-mini-cart__product--title-price">
                      <a href="#">
                        <h4 className="font__family-montserrat font__size-16 line__height-21 font__weight-semibold text-truncate">Some shop item</h4>
                      </a>
                      <span className="brk-mini-cart__product--old-price font__family-montserrat">$26.00</span>
                      <span className="brk-mini-cart__product--price font__family-montserrat">$16.00</span>
                    </div>
                    <div className="brk-quantity">
                      <span className="brk-quantity__arrows minus" />
                      <input className="brk-quantity__value" name="quantity" type="text" defaultValue={2} />
                      <span className="brk-quantity__arrows plus" />
                    </div>
                    <a href="#" className="brk-mini-cart__product--remove remove"><i className="fa fa-times-circle" aria-hidden="true" /></a>
                  </div>
                </div>
                <div className="brk-mini-cart__links">
                  <div className="brk-mini-cart__links--wrap">
                    <a className="brk-mini-cart__links--cart" href="cart.html"><i className="fa fa-shopping-basket" /> Cart</a>
                    <a className="brk-mini-cart__links--checkout" href="checkout.html">Proceed to checkout <i className="far fa-arrow-right" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="brk-social-links brk-header__item">
              <div className="brk-social-links__open">
                <i className="fa fa-share-alt" />
                <div className="brk-social-links__title">Share our website</div>
              </div>
              <div className="brk-social-links__block">
                <div className="brk-social-links__header">
                  <span className="font__family-montserrat font__weight-bold font__size-18">Share our website</span>
                </div>
                <div className="brk-social-links__content">
                  <a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a>
                  <a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a>
                  <a href="#"><i className="fab fa-google-plus" aria-hidden="true" /></a>
                  <a href="#"><i className="fab fa-youtube" aria-hidden="true" /></a>
                  <a href="#"><i className="fab fa-vimeo-square" aria-hidden="true" /></a>
                </div>
              </div>
            </div>
            <div className="brk-search brk-header__item">
              <div className="brk-search__open">
                <i className="fa fa-search" aria-hidden="true" />
                <div className="brk-search__title">Search website</div>
              </div>
              <div className="brk-search__block">
                <div className="brk-search__header">
                  <span className="font__family-montserrat font__weight-bold font__size-18">Search</span>
                </div>
                <form className="brk-search__form" role="search" method="get" action="#">
                  <input name="s" maxLength={50} type="search" defaultValue placeholder="Enter search text" />
                  <button type="submit"><i className="fas fa-search" /></button>
                </form>
                <span className="brk-search__close font__family-montserrat font__weight-medium">Close <i className="fas fa-times" /></span>
              </div>
            </div>
            <div className="brk-info-menu-open brk-info-menu-open_skin-1 brk-header__item">
              <span className="brk-lines">
                <span className="brk-center-line" />
              </span>
              <div className="brk-info-menu-open__title">Side Menu</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}
