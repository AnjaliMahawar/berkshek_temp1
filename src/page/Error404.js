import React from 'react';

export default function Error404() {
  return (
    <main className="main-container">
  <section className="brk-backgrounds brk-base-bg-gradient-19 full-screen d-flex flex-column align-items-center justify-content-center" data-brk-library="component__backgrounds_css,assets_fss">
    <div id="fss" className="brk-backgrounds__canvas" />
    <div className="brk-backgrounds__content">
      <div className="container">
        <div className="maxw-770 pt-80 pb-80">
          <h2 className="font__family-montserrat font__weight-bold text-white brk-error-page-title">404</h2>
          <hr className="brk-dashed-border-transparent mt-25 mb-50" />
          <h3 className="font__family-montserrat font__size-48 line__height-52 text-white text-center mb-10">
            <span className="font__weight-bold">Oops! </span>
            <span className="font__weight-light">That page can’t be found.</span>
          </h3>
          <h4 className="font__family-montserrat font__size-21 line__height-24 font__weight-normal text-white opacity-60 text-center mb-50">It
            looks like nothing was found at this location. Maybe try a search?</h4>
          <form action="#" className="brk-form-transparent brk-form-btn-inside">
            <input type="search" name="search" id="search-input" placeholder="Search a layout ..." className="w-100" />
            <button type="submit" className="btn-white">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</main>

  );
}
