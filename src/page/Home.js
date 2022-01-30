import React from 'react';
import Footer from '../Component/Footer';
import Header from '../Component/Header';

export default function Home() {
  return (

    <>    
       <div className="brk-header-mobile">
    <div className="brk-header-mobile__open brk-header-mobile__open_white">
      <span />
    </div>
    <div className="brk-header-mobile__logo">
      <a href="#">
        <img className="brk-header-mobile__logo-1 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-2.png" alt="alt" />
        <img className="brk-header-mobile__logo-2 lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/logo-dark-2.png" alt="alt" />
      </a>
    </div>
  </div>
  <Header/>
  <div className="brk-info-menu">
    <div className="brk-info-menu__bar">
      <button className="brk-info-menu__close" />
      <h3 className="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">More info</h3>
      <div className="brk-categories mb-20" data-brk-library="component__widgets">
        <div className="brk-categories__list font__family-open-sans font__size-14 font__weight-normal">
          <a href="#" className="brk-categories__item">
            <span className="brk-categories__item-name">General</span>
            <span className="brk-categories__item-count">12</span>
          </a>
          <a href="#" className="brk-categories__item active">
            <span className="brk-categories__item-name">Mockups</span>
            <span className="brk-categories__item-count">14</span>
          </a>
          <a href="#" className="brk-categories__item">
            <span className="brk-categories__item-name">HTML &amp; CSS</span>
            <span className="brk-categories__item-count">18</span>
          </a>
          <a href="#" className="brk-categories__item">
            <span className="brk-categories__item-name">Logo</span>
            <span className="brk-categories__item-count">21</span>
          </a>
          <a href="#" className="brk-categories__item">
            <span className="brk-categories__item-name">Web Design</span>
            <span className="brk-categories__item-count">6</span>
          </a>
        </div>
      </div>
      <h3 className="brk-info-menu__header font__family-montserrat font__weight-bold font__size-21">Our instagram</h3>
      <div className="default-slider dots-base-skin dots-base-color slick-loading mt-15" data-slick="{&quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1, &quot;dots&quot;: true, &quot;autoplay&quot;: false, &quot;autoplaySpeed&quot;: 4000}" data-brk-library="slider__slick">
        <div>
          <div className="brk-header-slider">
            <div className="brk-header-slider__img">
              <img src="img/309x206_1.jpg" alt="alt" />
            </div>
            <div className="brk-header-slider__content">
              <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt" />
              <div className="brk-header-slider__content--title">
                <h4 className="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
                <span className="font__size-14">17 Hours ago</span>
              </div>
            </div>
            <p className="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra</p>
          </div>
        </div>
        <div>
          <div className="brk-header-slider">
            <div className="brk-header-slider__img">
              <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_2.jpg" alt="alt" />
            </div>
            <div className="brk-header-slider__content">
              <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt" />
              <div className="brk-header-slider__content--title">
                <h4 className="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
                <span className="font__size-14">17 Hours ago</span>
              </div>
            </div>
            <p className="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra</p>
          </div>
        </div>
        <div>
          <div className="brk-header-slider">
            <div className="brk-header-slider__img">
              <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/309x206_3.jpg" alt="alt" />
            </div>
            <div className="brk-header-slider__content">
              <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/head-icon.png" alt="alt" />
              <div className="brk-header-slider__content--title">
                <h4 className="font__family-montserrat font__weight-bold font__size-16">@berserk</h4>
                <span className="font__size-14">17 Hours ago</span>
              </div>
            </div>
            <p className="brk-header-slider__text font__size-14 line__height-21">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="top" />
  <div id="rev_slider_7_1_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="demo_creative_agency_full" data-source="gallery" style={{background: 'linear-gradient(50deg,rgba(15,90,224,1)0%,rgba(15,90,224,1)0%,rgba(116,0,186,1)100%,rgba(116,0,186,1)100%)', padding: 0}}>
    <div id="rev_slider_7_1" className="rev_slider fullscreenbanner" style={{display: 'none'}} data-version="5.4.8.1">
      <ul>
        <li data-index="rs-16" data-transition="slideright" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="img/demo_creative_agency_full/images/100x50_4549a-brk_slide-1.jpg" data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
          <img src="img/demo_creative_agency_full/images/4549a-brk_slide-1.jpg" alt data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
          <div className="tp-caption rev_group" id="slide-16-layer-27" data-x="['left','center','center','center']" data-hoffset="['100','0','5','2']" data-y="['top','top','top','top']" data-voffset="['360','503','605','462']" data-width="['430','430','430','291']" data-height="['240','240','240','164']" data-whitespace="nowrap" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7, minWidth: 430, maxWidth: 240, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption" id="slide-16-layer-3" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8}}><img src="img/demo_creative_agency_full/images/8b74d-brk_slide_element-2.png" alt data-ww="['168px','168px','168px','110px']" data-hh="['205','205','205','134']" data-no-retina /> </div>
            <div className="tp-caption" id="slide-16-layer-4" data-x="['left','left','left','left']" data-hoffset="['31','31','31','26']" data-y="['top','middle','middle','middle']" data-voffset="['86','31','31','20']" data-fontsize="['72','72','72','42']" data-lineheight="['64','64','64','40']" data-width="['388','388','388','252']" data-height="['129','129','129','81']" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 9, minWidth: 388, maxWidth: 129, whiteSpace: 'normal', fontSize: 72, lineHeight: 64, fontWeight: 700, color: '#272727', letterSpacing: 0, fontFamily: 'Montserrat'}}><span style={{color: '#e6e3e8'}}>No Skills</span>
              <div style={{paddingLeft: 35}}>Required</div>
            </div>
          </div>
          <div className="tp-caption rev_group" id="slide-16-layer-30" data-x="['right','right','right','right']" data-hoffset="['1009','830','830','830']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['130','90','90','90']" data-width={175} data-height={170} data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 11, minWidth: 175, maxWidth: 170, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption" id="slide-16-layer-23" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 12}}><img src="img/demo_creative_agency_full/images/18d65-brk_slide_icon-1.png" alt data-ww data-hh data-no-retina /> </div>
            <div className="tp-caption" id="slide-16-layer-15" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 13, whiteSpace: 'nowrap', fontSize: 24, lineHeight: 30, fontWeight: 300, color: '#272727', letterSpacing: 0, fontFamily: 'Montserrat', textTransform: 'uppercase'}}>Effective <div style={{fontWeight: 700}}>Promotion</div>
            </div>
          </div>
          <div className="tp-caption rev_group" id="slide-16-layer-36" data-x="['right','right','right','right']" data-hoffset="['742','593','594','594']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['130','90','90','90']" data-width={175} data-height={170} data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 14, minWidth: 175, maxWidth: 170, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption" id="slide-16-layer-37" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 15, whiteSpace: 'nowrap', fontSize: 24, lineHeight: 30, fontWeight: 300, color: '#272727', letterSpacing: 0, fontFamily: 'Montserrat', textTransform: 'uppercase'}}>Advanced <div style={{fontWeight: 700}}>Research</div>
            </div>
            <div className="tp-caption" id="slide-16-layer-24" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 16}}><img src="img/demo_creative_agency_full/images/0d0c8-brk_slide_icon-2.png" alt data-ww data-hh data-no-retina /> </div>
          </div>
          <div className="tp-caption rev_group" id="slide-16-layer-39" data-x="['right','right','right','right']" data-hoffset="['473','357','357','357']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['130','90','90','90']" data-width={175} data-height={170} data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 17, minWidth: 175, maxWidth: 170, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption" id="slide-16-layer-41" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 18, whiteSpace: 'nowrap', fontSize: 24, lineHeight: 30, fontWeight: 300, color: '#272727', letterSpacing: 0, fontFamily: 'Montserrat', textTransform: 'uppercase'}}>Effective <div style={{fontWeight: 700}}>Promotion</div>
            </div>
            <div className="tp-caption" id="slide-16-layer-25" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 19}}><img src="img/demo_creative_agency_full/images/31ba2-brk_slide_icon-3.png" alt data-ww data-hh data-no-retina /> </div>
          </div>
          <div className="tp-caption rev_group" id="slide-16-layer-43" data-x="['right','right','right','right']" data-hoffset="['184','98','98','98']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['130','90','90','90']" data-width={204} data-height={170} data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 20, minWidth: 204, maxWidth: 170, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption" id="slide-16-layer-46" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 21, whiteSpace: 'nowrap', fontSize: 24, lineHeight: 30, fontWeight: 300, color: '#272727', letterSpacing: 0, fontFamily: 'Montserrat', textTransform: 'uppercase'}}>Amazing <div style={{fontWeight: 700}}>Development</div>
            </div>
            <div className="tp-caption" id="slide-16-layer-26" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:[100%];s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 22}}><img src="img/demo_creative_agency_full/images/8d850-brk_slide_icon-4.png" alt data-ww data-hh data-no-retina /> </div>
          </div>
          <div className="tp-caption rev_group" id="slide-16-layer-48" data-x="['right','center','center','center']" data-hoffset="['165','0','1','0']" data-y="['top','top','top','top']" data-voffset="['132','106','109','60']" data-width="['630','629','480','320']" data-height="['390','374','373','394']" data-whitespace="nowrap" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 24, minWidth: 630, maxWidth: 390, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption tp-resizeme" id="slide-16-layer-10" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-fontsize="['180','160','120','90']" data-lineheight="['210','186','145','145']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.1,&quot;speed&quot;:1500,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 25, whiteSpace: 'nowrap', fontSize: 180, lineHeight: 210, fontWeight: 500, color: '#ffffff', letterSpacing: 0, fontFamily: 'Montserrat'}}>design </div>
            <div className="tp-caption tp-resizeme" id="slide-16-layer-11" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['203','194','139','132']" data-fontsize="['46','46','46','38']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:600,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 26, whiteSpace: 'nowrap', fontSize: 46, lineHeight: 46, fontWeight: 300, color: '#ffffff', letterSpacing: 0, fontFamily: 'Montserrat'}}>&amp; development </div>
            <div className="tp-caption tp-resizeme" id="slide-16-layer-12" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['300','280','203','203']" data-fontsize="['16','20','22','20']" data-lineheight="['26','26','30','30']" data-width="['626','626','457','320']" data-height="['79','79','none','none']" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.9;sY:0.9;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 27, minWidth: 626, maxWidth: 79, whiteSpace: 'normal', fontSize: 16, lineHeight: 26, fontWeight: 400, color: 'rgba(255,255,255,0.5)', letterSpacing: 0, fontFamily: 'Open Sans'}}>Berserk – is a multipurpose Bootstrap 4 HTML5 template, created by people with 10+ years’ experience in website development. It’s fully responsive, based on the module structure. </div>
          </div>
          <div className="tp-caption" id="slide-16-layer-7" data-x="['right','right','right','right']" data-hoffset="['-140','-140','-140','-140']" data-y="['top','top','top','top']" data-voffset="['73','73','73','73']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5}}><img src="img/demo_creative_agency_full/images/0bb69-brk_slide_element-3.png" alt data-ww="['220px','220px','220px','220px']" data-hh="['207px','207px','207px','207px']" data-no-retina /> </div>
          <div className="tp-caption" id="slide-16-layer-9" data-x="['right','right','right','right']" data-hoffset="['-54','-54','-54','-54']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['100','100','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6}}><img src="img/demo_creative_agency_full/images/835ab-brk_slide_element-4.png" alt data-ww="['119px','119px','119px','119px']" data-hh="['97px','97px','97px','97px']" data-no-retina /> </div>
          <div className="tp-caption tp-shape tp-shapewrapper" id="slide-16-layer-50" data-x="['right','right','right','right']" data-hoffset="['81','80','80','80']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['41','40','40','40']" data-width="['1205','1000','1000','1000']" data-height="['300','270','270','270']" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 10, backgroundColor: 'rgb(255,255,255)', boxShadow: '0 6px 30px rgba(0,0,0,.12)', margin: 30}}> </div>
          <div className="tp-caption" id="slide-16-layer-1" data-x="['left','left','left','left']" data-hoffset="['218','218','218','218']" data-y="['middle','middle','middle','middle']" data-voffset="['-11','-11','-11','-11']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 23}}><img src="img/demo_creative_agency_full/images/eb646-1122x1237_1.png" alt data-ww="['650px','650px','650px','650px']" data-hh="['717px','717px','717px','717px']" data-no-retina /> </div>
        </li>
        <li data-index="rs-17" data-transition="slideleft" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={1800} data-thumb="img/demo_creative_agency_full/images/100x50_32ebd-brk_slide-2.jpg" data-delay={5000} data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
          <img src="img/demo_creative_agency_full/images/32ebd-brk_slide-2.jpg" alt data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
          <div className="tp-caption rev_group" id="slide-17-layer-27" data-x="['left','left','center','center']" data-hoffset="['125','125','0','0']" data-y="['middle','middle','top','top']" data-voffset="['0','0','90','90']" data-width="['774','774','504','504']" data-height="['203','203','228','228']" data-whitespace="nowrap" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 15, minWidth: 774, maxWidth: 203, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption tp-resizeme" id="slide-17-layer-11" data-x="['left','left','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-fontsize="['86','86','72','72']" data-lineheight="['96','96','72','72']" data-width="['763','763','491','491']" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 16, minWidth: 763, maxWidth: 763, whiteSpace: 'normal', fontSize: 86, lineHeight: 96, fontWeight: 300, color: '#ffffff', letterSpacing: 0, fontFamily: 'Montserrat'}}><span style={{fontWeight: 700}}>easy start</span> for you &amp; your business! </div>
          </div>
          <div className="tp-caption rev_group" id="slide-17-layer-28" data-x="['left','left','center','center']" data-hoffset="['125','125','0','0']" data-y="['middle','middle','top','top']" data-voffset="['135','135','329','329']" data-width="['380','380','380','311']" data-height="['40','40','40','39']" data-whitespace="nowrap" data-type="group" data-basealign="slide" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 17, minWidth: 380, maxWidth: 40, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption" id="slide-17-layer-14" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['15','15','15','13']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 18, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 20, fontWeight: 400, color: 'rgba(255,255,255,0.3)', letterSpacing: 0, fontFamily: 'Open Sans'}}>Find now: </div>
            <div className="tp-caption" id="slide-17-layer-16" data-x="['left','left','left','left']" data-hoffset="['86','86','86','72']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['15','15','15','13']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 19, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 20, fontWeight: 400, color: 'rgba(255,255,255,0.3)', letterSpacing: 0, fontFamily: 'Open Sans'}}>#blog </div>
            <div className="tp-caption" id="slide-17-layer-17" data-x="['left','left','left','left']" data-hoffset="['147','147','147','121']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['15','15','15','13']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 20, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 20, fontWeight: 400, color: '#ffffff', letterSpacing: 0, fontFamily: 'Open Sans', textDecoration: 'line-through'}}> #business </div>
            <div className="tp-caption" id="slide-17-layer-18" data-x="['left','left','left','left']" data-hoffset="['240','240','240','198']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['15','15','15','13']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 21, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 20, fontWeight: 400, color: 'rgba(255,255,255,0.3)', letterSpacing: 0, fontFamily: 'Open Sans'}}>#portfolio </div>
            <div className="tp-caption" id="slide-17-layer-19" data-x="['left','left','left','left']" data-hoffset="['331','331','331','273']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['15','15','15','13']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 22, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 20, fontWeight: 400, color: 'rgba(255,255,255,0.3)', letterSpacing: 0, fontFamily: 'Open Sans'}}>#art </div>
          </div>
          <div className="tp-caption rev_group" id="slide-17-layer-29" data-x="['left','left','center','center']" data-hoffset="['125','125','0','0']" data-y="['middle','middle','top','top']" data-voffset="['295','295','384','384']" data-width={352} data-height={170} data-whitespace="nowrap" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 23, minWidth: 352, maxWidth: 170, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <a className="tp-caption rev-btn tp-resizeme" href="https://www.youtube.com/watch?v=cZM8OoYu4So&feature=youtu.be" target="_blank" id="slide-17-layer-20" data-x="['left','left','left','left']" data-hoffset="['40','40','40','40']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-actions data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0,0,0,1);bg:rgba(255,255,255,0.83);bc:rgba(255,255,255,0.67);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[22,22,22,22]" data-paddingright="[41,41,41,41]" data-paddingbottom="[22,22,22,22]" data-paddingleft="[104,104,104,104]" style={{zIndex: 24, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 24, fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: '', fontFamily: 'Montserrat', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(255,255,255,0.14)', borderStyle: 'solid', borderWidth: '2px 2px 2px 2px', borderRadius: '40px 40px 40px 40px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>Watch the video </a>
            <div className="tp-caption tp-resizeme" id="slide-17-layer-21" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 25}}><img src="img/demo_creative_agency_full/images/4c2d9-brk_button-1.png" alt data-ww data-hh data-no-retina /> </div>
          </div>
          <div className="tp-caption rev_group" id="slide-17-layer-30" data-x="['left','left','center','center']" data-hoffset="['464','464','0','0']" data-y="['middle','middle','top','top']" data-voffset="['297','297','557','557']" data-width={274} data-height={110} data-whitespace="nowrap" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 26, minWidth: 274, maxWidth: 110, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <a className="tp-caption rev-btn tp-resizeme" href="https://1.envato.market/Bd5V9" target="_blank" id="slide-17-layer-23" data-x="['left','left','left','left']" data-hoffset="['11','11','11','11']" data-y="['middle','middle','middle','middle']" data-voffset="['-2','-2','-2','-2']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="button" data-actions data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;300&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgba(0,0,0,1);bg:rgba(255,255,255,0.83);bc:rgba(255,255,255,0.67);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[22,22,22,22]" data-paddingright="[41,41,41,41]" data-paddingbottom="[22,22,22,22]" data-paddingleft="[104,104,104,104]" style={{zIndex: 27, whiteSpace: 'nowrap', fontSize: 15, lineHeight: 24, fontWeight: 400, color: 'rgba(255,255,255,1)', letterSpacing: '', fontFamily: 'Montserrat', textTransform: 'uppercase', backgroundColor: 'rgba(255,255,255,0)', borderColor: 'rgba(255,255,255,0.14)', borderStyle: 'solid', borderWidth: '2px 2px 2px 2px', borderRadius: '40px 40px 40px 40px', outline: 'none', boxShadow: 'none', boxSizing: 'border-box', MozBoxSizing: 'border-box', WebkitBoxSizing: 'border-box', cursor: 'pointer', textDecoration: 'none'}}>Buy it now </a>
            <div className="tp-caption tp-resizeme" id="slide-17-layer-24" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 28}}><img src="img/demo_creative_agency_full/images/4aad8-11.png" alt data-ww data-hh data-no-retina /> </div>
            <div className="tp-caption tp-resizeme" id="slide-17-layer-25" data-x="['left','left','left','left']" data-hoffset="['39','39','39','39']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 29, whiteSpace: 'nowrap', fontSize: 26, lineHeight: 26, fontWeight: 700, color: '#ffffff', letterSpacing: 0, fontFamily: 'Montserrat'}}>17 </div>
          </div>
          <div className="tp-caption tp-resizeme" id="slide-17-layer-1" data-x="['left','left','left','left']" data-hoffset="['-62','-62','-62','-62']" data-y="['top','top','top','top']" data-voffset="['73','73','73','73']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5}}><img src="img/demo_creative_agency_full/images/0bb69-brk_slide_element-3.png" alt data-ww data-hh data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-17-layer-3" data-x="['left','left','left','left']" data-hoffset="['-60','-60','-60','-60']" data-y="['top','top','top','top']" data-voffset="['788','788','788','788']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6}}><img src="img/demo_creative_agency_full/images/835ab-brk_slide_element-4.png" alt data-ww data-hh data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-17-layer-5" data-x="['right','right','right','right']" data-hoffset="['-322','-322','-322','-322']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7}}><img src="img/demo_creative_agency_full/images/bd38d-brk_slide_thumb-6.png" alt data-ww="['368px','368px','368px','368px']" data-hh="['182px','182px','182px','182px']" data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-17-layer-6" data-x="['right','right','right','right']" data-hoffset="['-322','-322','-322','-322']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['188','188','188','188']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8}}><img src="img/demo_creative_agency_full/images/c0ff5-brk_slide_thumb-5.png" alt data-ww="['368px','368px','368px','368px']" data-hh="['260px','260px','260px','260px']" data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-17-layer-7" data-x="['right','right','right','right']" data-hoffset="['-322','-322','-322','-322']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['449','449','449','449']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 9}}><img src="img/demo_creative_agency_full/images/d1b07-brk_slide_thumb-4.png" alt data-ww="['368px','368px','368px','368px']" data-hh="['264px','264px','264px','264px']" data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-17-layer-8" data-x="['right','right','right','right']" data-hoffset="['43','43','43','43']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['34','34','34','34']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 10}}><img src="img/demo_creative_agency_full/images/4d6c0-brk_slide_thumb-3.png" alt data-ww="['368px','368px','368px','368px']" data-hh="['264px','264px','264px','264px']" data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-17-layer-9" data-x="['right','right','right','right']" data-hoffset="['43','43','43','43']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['300','300','300','300']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 11}}><img src="img/demo_creative_agency_full/images/db3cf-brk_slide_thumb-2.png" alt data-ww="['368px','368px','368px','368px']" data-hh="['264px','264px','264px','264px']" data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-17-layer-10" data-x="['right','right','right','right']" data-hoffset="['43','44','44','44']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['564','565','565','565']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 12}}><img src="img/demo_creative_agency_full/images/451e1-brk_slide_thumb-1.png" alt data-ww="['368px','368px','368px','368px']" data-hh="['264px','264px','264px','264px']" data-no-retina /> </div>
        </li>
        <li data-index="rs-18" data-transition="slideleft" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed={1800} data-thumb="img/demo_creative_agency_full/images/100x50_3c6ad-brk_slide-3.jpg" data-rotate={0} data-saveperformance="off" data-title="Slide" data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
          <img src="img/demo_creative_agency_full/images/3c6ad-brk_slide-3.jpg" alt data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="off" className="rev-slidebg" data-no-retina />
          <div className="tp-caption rev_group" id="slide-18-layer-25" data-x="['left','center','center','center']" data-hoffset="['394','0','0','0']" data-y="['top','top','top','top']" data-voffset="['105','105','105','105']" data-width="['580','492','492','492']" data-height="['305','258','258','258']" data-whitespace="nowrap" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 12, minWidth: 580, maxWidth: 305, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-6" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 13}}><img src="img/demo_creative_agency_full/images/3b4b2-brk_slide_element-5.png" alt data-ww="['572auto','480px','480px','480px']" data-hh="['206','173px','173px','173px']" data-no-retina /> </div>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-7" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['222','174','174','174']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeIn&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 14, whiteSpace: 'nowrap', fontSize: 72, lineHeight: 78, fontWeight: 700, color: '#e6e3e8', letterSpacing: 0, fontFamily: 'Montserrat'}}>Shortcodes </div>
          </div>
          <div className="tp-caption rev_group" id="slide-18-layer-26" data-x="['left','center','center','center']" data-hoffset="['485','0','0','0']" data-y="['top','top','top','top']" data-voffset="['500','370','370','370']" data-width={542} data-height={208} data-whitespace="nowrap" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 15, minWidth: 542, maxWidth: 208, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-12" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 16, whiteSpace: 'nowrap', fontSize: 56, lineHeight: 64, fontWeight: 700, color: '#272727', letterSpacing: 0, fontFamily: 'Montserrat'}}>Responsive </div>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-13" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['66','66','66','66']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rZ:-35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 17, whiteSpace: 'nowrap', fontSize: 25, lineHeight: 30, fontWeight: 300, color: '#d0c9d5', letterSpacing: 0, fontFamily: 'Montserrat'}}>Multi-Purpose Theme </div>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-14" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['121','121','121','121']" data-width={530} data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 18, minWidth: 530, maxWidth: 530, whiteSpace: 'normal', fontSize: 16, lineHeight: 26, fontWeight: 400, color: '#9f9f9f', letterSpacing: 0, fontFamily: 'Open Sans'}}>We use lazy loading technique that delays loading of Images, CSS, JavaScript, and Fonts after the page is loaded. This speeds up the initial load of your webpage no matter how many elements it contains. </div>
          </div>
          <div className="tp-caption rev_group" id="slide-18-layer-27" data-x="['left','center','center','center']" data-hoffset="['1188','0','0','0']" data-y="['bottom','top','top','top']" data-voffset="['11','585','585','585']" data-width={500} data-height={110} data-whitespace="nowrap" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 19, minWidth: 500, maxWidth: 110, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-10" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:500,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:[100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;nothing&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 20, whiteSpace: 'nowrap', fontSize: 36, lineHeight: 38, fontWeight: 700, color: '#272727', letterSpacing: 0, fontFamily: 'Montserrat'}}>All Plugins Included </div>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-11" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['47','47','47','47']" data-width={491} data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:bottom;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 21, minWidth: 491, maxWidth: 491, whiteSpace: 'normal', fontSize: 16, lineHeight: 26, fontWeight: 400, color: '#9f9f9f', letterSpacing: 0, fontFamily: 'Open Sans', fontStyle: 'italic'}}>If you use Google Maps on your website, lazy loading is a great option as you pay for a map load only if user scrolls to it. </div>
          </div>
          <div className="tp-caption rev_group" id="slide-18-layer-28" data-x="['right','right','right','right']" data-hoffset="['170','170','170','170']" data-y="['top','top','top','top']" data-voffset="['492','492','492','492']" data-width={619} data-height={221} data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="group" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 22, minWidth: 619, maxWidth: 221, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 22, fontWeight: 400, color: '#ffffff', letterSpacing: 0}}>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-15" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="normal" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:50px;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;y:-50px;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 23}}><img src="img/demo_creative_agency_full/images/d2eb2-brk_slide_element-6.png" alt data-ww data-hh data-no-retina /> </div>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-16" data-x="['left','left','left','left']" data-hoffset="['107','107','107','107']" data-y="['top','top','top','top']" data-voffset="['67','67','67','67']" data-width="none" data-height="none" data-whitespace="normal" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:0;y:0;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 24, whiteSpace: 'normal', fontSize: 72, lineHeight: 74, fontWeight: 700, color: '#e6e3e8', letterSpacing: 0, fontFamily: 'Montserrat'}}>Plugins <div style={{color: '#272727', marginLeft: 52}}>Included</div>
            </div>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-20" data-x="['left','left','left','left']" data-hoffset="['430','430','430','430']" data-y="['top','top','top','top']" data-voffset="['-14','-14','-14','-14']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="image" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power2.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 25}}><img src="img/demo_creative_agency_full/images/4aad8-11.png" alt data-ww="['94auto','94auto','94auto','94auto']" data-hh="['99px','99px','99px','99px']" data-no-retina /> </div>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-19" data-x="['left','left','left','left']" data-hoffset="['363','363','363','363']" data-y="['top','top','top','top']" data-voffset="['23','23','23','23']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;y:[-100%];z:0;rZ:35deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power2.easeIn&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 26, whiteSpace: 'nowrap', fontSize: 16, lineHeight: 20, fontWeight: 700, color: '#81bb35', letterSpacing: 0, fontFamily: 'Montserrat'}}>Only for </div>
            <div className="tp-caption tp-resizeme" id="slide-18-layer-23" data-x="['left','left','left','left']" data-hoffset="['468','468','468','468']" data-y="['top','top','top','top']" data-voffset="['21','21','21','21']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 27, whiteSpace: 'nowrap', fontSize: 26, lineHeight: 26, fontWeight: 700, color: '#ffffff', letterSpacing: 0, fontFamily: 'Montserrat'}}>17 </div>
          </div>
          <div className="tp-caption tp-resizeme" id="slide-18-layer-1" data-x="['left','left','left','left']" data-hoffset="['-267','-267','-267','-267']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 5}}><img src="img/demo_creative_agency_full/images/bd38d-brk_slide_thumb-6.png" alt data-ww="['368px','368px','368px','368px']" data-hh="['182px','182px','182px','182px']" data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-18-layer-2" data-x="['left','left','left','left']" data-hoffset="['-267','-267','-267','-267']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['187','187','187','187']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 6}}><img src="img/demo_creative_agency_full/images/c0ff5-brk_slide_thumb-5.png" alt data-ww="['368px','368px','368px','368px']" data-hh="['264px','264px','264px','264px']" data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-18-layer-3" data-x="['left','left','left','left']" data-hoffset="['-267','-267','-267','-267']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['455','455','455','455']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 7}}><img src="img/demo_creative_agency_full/images/d1b07-brk_slide_thumb-4.png" alt data-ww="['368px','368px','368px','368px']" data-hh="['264px','264px','264px','264px']" data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-18-layer-4" data-x="['left','left','left','left']" data-hoffset="['349','349','349','349']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['19','19','19','19']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 8}}><img src="img/demo_creative_agency_full/images/ce36d-brk_slide_element-8.png" alt data-ww data-hh data-no-retina /> </div>
          <div className="tp-caption tp-resizeme" id="slide-18-layer-5" data-x="['left','left','left','left']" data-hoffset="['524','524','524','524']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['59','59','59','59']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="text" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;split&quot;:&quot;chars&quot;,&quot;splitdelay&quot;:0.05,&quot;speed&quot;:1000,&quot;split_direction&quot;:&quot;forward&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:[105%];z:0;rX:45deg;rY:0deg;rZ:90deg;sX:1;sY:1;skX:0;skY:0;&quot;,&quot;mask&quot;:&quot;x:0px;y:0px;s:inherit;e:inherit;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:[-100%];&quot;,&quot;mask&quot;:&quot;x:inherit;y:inherit;s:inherit;e:inherit;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 9, whiteSpace: 'nowrap', fontSize: 18, lineHeight: 20, fontWeight: 700, color: '#272727', letterSpacing: 0, fontFamily: 'Montserrat'}}>View Plugins list </div>
          <div className="tp-caption tp-resizeme" id="slide-18-layer-9" data-x="['left','left','left','left']" data-hoffset="['712','712','712','712']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['22','22','22','22']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;rX:0;rY:0;rZ:0;sX:0.8;sY:0.8;skX:0;skY:0;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;auto:auto;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 10}}><img src="img/demo_creative_agency_full/images/c9ecd-brk_slide_element-9.png" alt data-ww data-hh data-no-retina /> </div>
          <div className="tp-caption tp-resizeme rs-parallaxlevel-1" id="slide-18-layer-21" data-x="['right','right','right','right']" data-hoffset="['321','321','321','321']" data-y="['top','top','top','top']" data-voffset="['98','98','98','98']" data-width="none" data-height="none" data-whitespace="nowrap" data-visibility="['on','off','off','off']" data-type="image" data-basealign="slide" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:2000,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;x:right;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1500,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;x:left;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{zIndex: 11}}><img src="img/demo_creative_agency_full/images/e4c55-brk_slide_element-3.png" alt data-ww="['380px','380px','380px','380px']" data-hh="['475px','475px','475px','475px']" data-no-retina /> </div>
        </li>
      </ul>
      <div className="tp-bannertimer tp-bottom" style={{visibility: 'hidden !important'}} />
    </div>
  </div>
  <h1 className="sr-only">Creative Agency</h1>
  <section className="container position-relative brk-z-index-10 mt-100 mb-lg-0">
    <div className="icon__wrapper-main icon__wrapper-linear active__effect-main text-center" data-brk-library="component__sequence">
      <div className="row no-gutters">
        <div className="col-lg-4">
          <div className="icon__wrapper active__effect pt-30 pb-40 pl-30 pr-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <g>
                <defs>
                  <clipPath id="livicon_magic_fl">
                    <rect x={6} y={-6} width={60} height={60} />
                  </clipPath>
                </defs>
                <g clipPath="url(#livicon_magic_fl)">
                  <g>
                    <path fill="none" stroke="#F39C12" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M20.15,34.19L29.34,25c0,0,1.41,0,3.54,2.12S35,30.66,35,30.66l-9.19,9.19" />
                    <path fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M-1.06,66.72l-5.66-5.66l26.87-26.87c0,0,1.41,0,3.54,2.12s2.12,3.54,2.12,3.54L-1.06,66.72z" />
                  </g>
                </g>
              </g>
              <g>
                <defs>
                  <clipPath id="livicon_magic_s">
                    <rect x={6} y={-6} width={60} height={60} />
                  </clipPath>
                </defs>
                <g clipPath="url(#livicon_magic_s)">
                  <g>
                    <path fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M20.15,34.19L29.34,25c0,0,1.41,0,3.54,2.12S35,30.66,35,30.66l-9.19,9.19" />
                    <path fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M-1.06,66.72l-5.66-5.66l26.87-26.87c0,0,1.41,0,3.54,2.12s2.12,3.54,2.12,3.54L-1.06,66.72z" />
                  </g>
                </g>
              </g>
              <g>
                <path fill="none" stroke="#F9BF3B" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M16,22c0,0-0.4-1.2-1.6-2.4C13.2,18.4,12,18,12,18s1.2-0.4,2.4-1.6C15.6,15.2,16,14,16,14s0.4,1.2,1.6,2.4C18.8,17.6,20,18,20,18s-1.2,0.4-2.4,1.6C16.4,20.8,16,22,16,22z" />
                <path fill="none" stroke="#F9BF3B" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M30,9c0,0-0.1-0.3-0.4-0.6C29.3,8.1,29,8,29,8s0.3-0.1,0.6-0.4C29.9,7.3,30,7,30,7s0.1,0.3,0.4,0.6C30.7,7.9,31,8,31,8s-0.3,0.1-0.6,0.4C30.1,8.7,30,9,30,9z" />
                <path fill="none" stroke="#F9BF3B" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M44,22c0,0-0.6-1.8-2.4-3.6C39.8,16.6,38,16,38,16s1.8-0.6,3.6-2.4C43.4,11.8,44,10,44,10s0.6,1.8,2.4,3.6C48.2,15.4,50,16,50,16s-1.8,0.6-3.6,2.4C44.6,20.2,44,22,44,22z" />
                <path fill="none" stroke="#F9BF3B" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M52,31c0,0-0.1-0.3-0.4-0.6C51.3,30.1,51,30,51,30s0.3-0.1,0.6-0.4C51.9,29.3,52,29,52,29s0.1,0.3,0.4,0.6C52.7,29.9,53,30,53,30s-0.3,0.1-0.6,0.4C52.1,30.7,52,31,52,31z" />
                <path fill="none" stroke="#F9BF3B" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M42,48c0,0-0.4-1.2-1.6-2.4C39.2,44.4,38,44,38,44s1.2-0.4,2.4-1.6C41.6,41.2,42,40,42,40s0.4,1.2,1.6,2.4C44.8,43.6,46,44,46,44s-1.2,0.4-2.4,1.6C42.4,46.8,42,48,42,48z" />
              </g>
            </svg>
            <h4 className="font__family-montserrat font__size-28 font__weight-bold">
              HTML5 Video
            </h4>
            <p className="font__family-open-sans font__size-14 line__height-21 pl-10 pr-10">Aenean vulputate eleifend tellus. Aenean leo
              ligula, porttitor eu, consequat vitae.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="icon__wrapper active__effect active current pt-30 pb-40 pl-30 pr-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <path fill="none" stroke="#9CAAB9" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M42,31h1.43l0.35,2.94l2.65,1.1L49,33l2,2l-2.04,2.56l1.1,2.65L53,40.57v2.87l-2.94,0.35l-1.1,2.65L51,49l-2,2l-2.56-2.04l-2.65,1.1L43.43,53h-2.87l-0.35-2.94l-2.65-1.1L35,51l-2-2l2.04-2.56l-1.1-2.65L31,43.43v-2.87l2.94-0.35l1.1-2.65L33,35l2-2l2.56,2.04l2.65-1.1L40.57,31H42zM42,39c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3c1.66,0,3-1.34,3-3C45,40.34,43.66,39,42,39z" />
              <path fill="none" stroke="#95A5A6" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M23,7h1.04l1.01,4.31l2.02,0.54l3.03-3.23l1.81,1.04l-1.28,4.23l1.48,1.48l4.23-1.28l1.05,1.81l-3.22,3.03l0.54,2.02L39,21.96l0,2.08l-4.31,1.01l-0.54,2.02l3.22,3.03l-1.04,1.81l-4.23-1.28l-1.48,1.48l1.28,4.23l-1.81,1.05l-3.03-3.23l-2.02,0.54L24.04,39l-2.09,0l-1.01-4.31l-2.02-0.54l-3.02,3.23l-1.81-1.04l1.28-4.23l-1.48-1.48L9.66,31.9L8.62,30.1l3.23-3.03l-0.54-2.02L7,24.04l0-2.09l4.31-1.01l0.54-2.02L8.62,15.9l1.04-1.81l4.24,1.28l1.48-1.48L14.1,9.66l1.81-1.04l3.03,3.23l2.02-0.54L21.96,7H23zM23,17c-3.31,0-6,2.68-6,6c0,3.31,2.68,6,6,6c3.31,0,6-2.69,6-6C29,19.68,26.31,17,23,17z" />
            </svg>
            <h4 className="font__family-montserrat font__size-28 font__weight-bold">
              Parallax Support
            </h4>
            <p className="font__family-open-sans font__size-14 line__height-21 pl-10 pr-10">Aenean vulputate eleifend tellus. Aenean leo
              ligula, porttitor eu, consequat vitae.</p>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="icon__wrapper active__effect pt-30 pb-40 pl-30 pr-30">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60">
              <g>
                <path fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M52.97,28.91C52.99,29.27,53,29.63,53,30" />
                <path fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M51.55,21.96c0.26,0.7,0.48,1.4,0.67,2.11" />
                <path fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M46.84,14.33c0.78,0.83,1.49,1.73,2.14,2.67" />
                <path fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} d="M49.8,42.19C45.75,48.75,38.27,53,30,53C17.3,53,7,42.7,7,30C7,17.3,17.3,7,30,7c4.17,0,8.22,1.11,11.78,3.24" />
                <polyline fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} points="43,41 51,41 51,49" />
              </g>
              <g>
                <line fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} x1={30} y1={31} x2={41} y2={24} />
                <line fill="none" stroke="#34495E" strokeWidth={2} strokeLinecap="square" strokeMiterlimit={10} x1={30} y1={31} x2={18} y2={19} />
              </g>
              <g>
                <path fill="none" stroke="#34495E" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={10} d="M52.97,28.91C52.99,29.27,53,29.63,53,30" />
                <path fill="none" stroke="#34495E" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={10} d="M51.55,21.96c0.26,0.7,0.48,1.4,0.67,2.11" />
                <path fill="none" stroke="#34495E" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={10} d="M46.84,14.33c0.78,0.83,1.49,1.73,2.14,2.67" />
                <path fill="none" stroke="#34495E" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={10} d="M49.8,42.19C45.75,48.75,38.27,53,30,53C17.3,53,7,42.7,7,30C7,17.3,17.3,7,30,7c4.17,0,8.22,1.11,11.78,3.24" />
                <polyline fill="none" stroke="#34495E" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={10} points="43,41 51,41 51,49" />
              </g>
              <g>
                <line fill="none" stroke="#34495E" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={10} x1={30} y1={31} x2={41} y2={24} />
                <line fill="none" stroke="#34495E" strokeWidth={3} strokeLinecap="square" strokeMiterlimit={10} x1={30} y1={31} x2={18} y2={19} />
              </g>
            </svg>
            <h4 className="font__family-montserrat font__size-28 font__weight-bold">
              Truly Multi-Purpose
            </h4>
            <p className="font__family-open-sans font__size-14 line__height-21 pl-10 pr-10">Aenean vulputate eleifend tellus. Aenean leo
              ligula, porttitor eu, consequat vitae.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="brk-bg-right-center position-relative bg-contain bg-norepeat bg-position_right-center lazyload pt-lg-50" data-bg="img/demo_creative_agency/1121x822_1.png">
    <div className="container brk-z-index-20">
      <div className="row">
        <div className="col-12 col-xl-7 pt-xl-110 pt-50 pb-xl-190 pb-50">
          <div className="default-slider dots-base-skin base-skin-top-left dots-base-color slick-loading fa-req" data-slick="{&quot;slidesToShow&quot;: 1, &quot;slidesToScroll&quot;: 1, &quot;dots&quot;: true, &quot;autoplay&quot;: true, &quot;autoplaySpeed&quot;: 4000}" data-brk-library="slider__slick">
            <div className="pl-10 pr-10 pb-30 pt-lg-150 pt-80 mt-lg-20">
              <div className="text-center text-lg-left">
                <h2 className="font__family-montserrat font__weight-bold font__size-56 line__height-60 mt-10" data-brk-library="component__title">Engaging, purposeful <br />
                  <span className="highlight-massive font__family-playfair font__weight-bold">
                    and creative <span className="after wow zoomIn" />
                  </span>
                </h2>
              </div>
              <p className="brk-dark-font-color font__size-16 line__height-26 mt-45 mb-25 text-center text-lg-left">
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
              </p>
              <div className="text-center text-lg-left">
                <a href="#" className="btn btn-inside-out btn-lg border-radius-25 btn-shadow ml-0 pl-50 pr-50" data-brk-library="component__button">
                  <span className="before">read more</span><span className="text">Click Me</span><span className="after">read more</span>
                </a>
              </div>
            </div>
            <div className="pl-10 pr-10 pb-30 pt-lg-150 pt-80 mt-lg-20">
              <div className="text-center text-lg-left">
                <h2 className="font__family-montserrat font__weight-bold font__size-56 line__height-60 mt-10" data-brk-library="component__title">Mobile Friendly <br />
                  <span className="highlight-massive font__family-playfair font__weight-bold">
                    and fast <span className="after wow zoomIn" />
                  </span>
                </h2>
              </div>
              <p className="brk-dark-font-color font__size-16 line__height-26 mt-45 mb-25 text-center text-lg-left">
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
              </p>
              <div className="text-center text-lg-left">
                <a href="#" className="btn btn-inside-out btn-lg border-radius-25 btn-shadow ml-0 pl-50 pr-50" data-brk-library="component__button">
                  <span className="before">read more</span><span className="text">Click Me</span><span className="after">read more</span>
                </a>
              </div>
            </div>
            <div className="pl-10 pr-10 pb-30 pt-lg-150 pt-80 mt-lg-20">
              <div className="text-center text-lg-left">
                <h2 className="font__family-montserrat font__weight-bold font__size-56 line__height-60 mt-10" data-brk-library="component__title">Smartly Coded <br />
                  <span className="highlight-massive font__family-playfair font__weight-bold">
                    &amp; Maintained <span className="after wow zoomIn" />
                  </span>
                </h2>
              </div>
              <p className="brk-dark-font-color font__size-16 line__height-26 mt-45 mb-25 text-center text-lg-left">
                Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
                dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
              </p>
              <div className="text-center text-lg-left">
                <a href="#" className="btn btn-inside-out btn-lg border-radius-25 btn-shadow ml-0 pl-50 pr-50" data-brk-library="component__button">
                  <span className="before">read more</span><span className="text">Click Me</span><span className="after">read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-5 d-none d-xl-block position-relative">
          <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/1122x1237_1.png" alt="about" className="lazyload position-absolute" style={{top: 0, right: 15, width: 770, maxWidth: 'none'}} />
        </div>
      </div>
    </div>
  </section>
  <section className="pt-md-170 pb-md-70 pt-md-70 pb-20 brk-bg-light-gray position-relative" id="about">
    <span className="brk-svg-pattern-container brk-svg-pattern-container-17 brk-svg-pattern-container_top" data-brk-library="component__svg_pattern">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 180">
        <g id="path-id-17-1">
          <g>
            <polygon fill="#FFFFFF" points="0,0 1920,180 1920,0" />
          </g>
        </g>
      </svg>
    </span>
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="brk-img-double-wide" data-brk-library="component__image_frames">
            <div className="brk-img-double-wide__container">
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/548x635_1.png" alt="alt" className="lazyload" />
            </div>
            <div className="brk-img-double-wide__container">
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/370x550_1.jpg" alt="alt" className="lazyload" />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="pl-lg-35">
            <h3 className="font__family-montserrat font__size-56 font__weight-bold line__height-64 mb-sm-25 mt-sm-150 mt-35 mb-30 text-center text-lg-left">About Us</h3>
            <p className="brk-dark-font-color font__size-16 line__height-26 mb-lg-70 mb-40 text-center text-lg-left">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
              dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            </p>
            <div className="progress__wrapper progress__gradient" data-brk-library="component__progress_bar">
              <div className="progress">
                <div data-valuemax={100} data-valuemin={0} data-valuenow={100} className="progress__bar">
                  <span className="before" />
                </div>
                <span className="font__family-montserrat font__size-16 font__weight-bold progress__bar-counter hide">
                  100
                </span>
              </div>
              <h5 className="font__family-montserrat font__size-16 font__weight-bold progress__title">
                Hard Work
              </h5>
            </div>
            <div className="progress__wrapper progress__gradient" data-brk-library="component__progress_bar">
              <div className="progress">
                <div data-valuemax={100} data-valuemin={0} data-valuenow={80} className="progress__bar">
                  <span className="before" />
                </div>
                <span className="font__family-montserrat font__size-16 font__weight-bold progress__bar-counter hide">
                  80
                </span>
              </div>
              <h5 className="font__family-montserrat font__size-16 font__weight-bold progress__title">
                Projects Delivery
              </h5>
            </div>
            <div className="progress__wrapper progress__gradient mb-xs-25" data-brk-library="component__progress_bar">
              <div className="progress">
                <div data-valuemax={100} data-valuemin={0} data-valuenow={40} className="progress__bar">
                  <span className="before" />
                </div>
                <span className="font__family-montserrat font__size-16 font__weight-bold progress__bar-counter hide">
                  
                </span>
              </div>
              <h5 className="font__family-montserrat font__size-16 font__weight-bold progress__title">
                Customers Love
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="overflow-hid pb-40">
    <div className="pt-sm-70 pt-40 position-relative brk-bg-center-cover lazyload" data-bg="img/demo_creative_agency/1920x1080_1.jpg">
      <div className="brk-abs-bg-overlay brk-bg-gradient-40deg-92" />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-4">
            <h2 className="brk-white-font-color font__family-montserrat font__size-56 line__height-64 font__weight-bold text-center text-sm-left pb-sm-40 pb-15">Our Services</h2>
          </div>
          <div className="col-sm-1" />
          <div className="col-12 col-sm-7">
            <p className="brk-white-font-color opacity-50 font__size-16 line__height-26 mt-15 pb-lg-80 pb-40 pb-xs-40 text-center text-sm-left">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
              dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra.
            </p>
          </div>
        </div>
      </div>
      <div className="brk-services-simple pb-md-110 pb-60" data-brk-library="slider__swiper">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="info-box-icon-simple d-flex flex-column align-items-center pt-60 pb-50 pl-50 pr-50 position-relative" data-brk-library="component__info_box">
                <span className="brk-abs-overlay brk-base-bg-gradient-50deg" />
                <div className="info-box-icon-simple__icon-wrapper d-flex align-items-center justify-content-center mb-45">
                  <i className="far fa-file-alt" aria-hidden="true" />
                </div>
                <p className="font__family-montserrat info-box-icon-simple__title font__size-28 font__weight-bold line__height-30 mb-20 text-center">
                  Scalable on Devices
                </p>
                <p className="brk-dark-font-color font__size-16 info-box-icon-simple__about line__height-26 font__weight-normal mb-35 text-center">
                  Aenean vulputate eleifend tellus. Renean leo ligula, porttitor euequat vitae, eleifend ac, enim.
                </p>
                <a href="#" className="btn btn-inside-out btn-lg border-radius-30 btn-shadow ml-0 mr-0 mt-0 mb-0 pl-60 pr-60" data-brk-library="component__button">
                  <span className="before">read more</span><span className="text">Click Me</span><span className="after">read more</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="info-box-icon-simple d-flex flex-column align-items-center pt-60 pb-50 pl-50 pr-50 position-relative" data-brk-library="component__info_box">
                <span className="brk-abs-overlay brk-base-bg-gradient-50deg" />
                <div className="info-box-icon-simple__icon-wrapper d-flex align-items-center justify-content-center mb-45">
                  <i className="far fa-keyboard" aria-hidden="true" />
                </div>
                <p className="font__family-montserrat info-box-icon-simple__title font__size-28 font__weight-bold line__height-30 mb-20 text-center">
                  Truly Multi-Purpose
                </p>
                <p className="brk-dark-font-color font__size-16 info-box-icon-simple__about line__height-26 font__weight-normal mb-35 text-center">
                  Aenean vulputate eleifend tellus. Renean leo ligula, porttitor euequat vitae, eleifend ac, enim.
                </p>
                <a href="#" className="btn btn-inside-out btn-lg border-radius-30 btn-shadow ml-0 mr-0 mt-0 mb-0 pl-60 pr-60" data-brk-library="component__button">
                  <span className="before">read more</span><span className="text">Click Me</span><span className="after">read more</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="info-box-icon-simple d-flex flex-column align-items-center pt-60 pb-50 pl-50 pr-50 position-relative" data-brk-library="component__info_box">
                <span className="brk-abs-overlay brk-base-bg-gradient-50deg" />
                <div className="info-box-icon-simple__icon-wrapper d-flex align-items-center justify-content-center mb-45">
                  <i className="far fa-gem" aria-hidden="true" />
                </div>
                <p className="font__family-montserrat info-box-icon-simple__title font__size-28 font__weight-bold line__height-30 mb-20 text-center">
                  Flexible &amp; Customizable
                </p>
                <p className="brk-dark-font-color font__size-16 info-box-icon-simple__about line__height-26 font__weight-normal mb-35 text-center">
                  Aenean vulputate eleifend tellus. Renean leo ligula, porttitor euequat vitae, eleifend ac, enim.
                </p>
                <a href="#" className="btn btn-inside-out btn-lg border-radius-30 btn-shadow ml-0 mr-0 mt-0 mb-0 pl-60 pr-60" data-brk-library="component__button">
                  <span className="before">read more</span><span className="text">Click Me</span><span className="after">read more</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="info-box-icon-simple d-flex flex-column align-items-center pt-60 pb-50 pl-50 pr-50 position-relative" data-brk-library="component__info_box">
                <span className="brk-abs-overlay brk-base-bg-gradient-50deg" />
                <div className="info-box-icon-simple__icon-wrapper d-flex align-items-center justify-content-center mb-45">
                  <i className="fas fa-cog" aria-hidden="true" />
                </div>
                <p className="font__family-montserrat info-box-icon-simple__title font__size-28 font__weight-bold line__height-30 mb-20 text-center">
                  Free support &amp; updates
                </p>
                <p className="brk-dark-font-color font__size-16 info-box-icon-simple__about line__height-26 font__weight-normal mb-35 text-center">
                  Aenean vulputate eleifend tellus. Renean leo ligula, porttitor euequat vitae, eleifend ac, enim.
                </p>
                <a href="#" className="btn btn-inside-out btn-lg border-radius-30 btn-shadow ml-0 mr-0 mt-0 mb-0 pl-60 pr-60" data-brk-library="component__button">
                  <span className="before">read more</span><span className="text">Click Me</span><span className="after">read more</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="info-box-icon-simple d-flex flex-column align-items-center pt-60 pb-50 pl-50 pr-50 position-relative" data-brk-library="component__info_box">
                <span className="brk-abs-overlay brk-base-bg-gradient-50deg" />
                <div className="info-box-icon-simple__icon-wrapper d-flex align-items-center justify-content-center mb-45">
                  <i className="far fa-keyboard" aria-hidden="true" />
                </div>
                <p className="font__family-montserrat info-box-icon-simple__title font__size-28 font__weight-bold line__height-30 mb-20 text-center">
                  Truly Multi-Purpose
                </p>
                <p className="brk-dark-font-color font__size-16 info-box-icon-simple__about line__height-26 font__weight-normal mb-35 text-center">
                  Aenean vulputate eleifend tellus. Renean leo ligula, porttitor euequat vitae, eleifend ac, enim.
                </p>
                <a href="#" className="btn btn-inside-out btn-lg border-radius-30 btn-shadow ml-0 mr-0 mt-0 mb-0 pl-60 pr-60" data-brk-library="component__button">
                  <span className="before">read more</span><span className="text">Click Me</span><span className="after">read more</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="info-box-icon-simple d-flex flex-column align-items-center pt-60 pb-50 pl-50 pr-50 position-relative" data-brk-library="component__info_box">
                <span className="brk-abs-overlay brk-base-bg-gradient-50deg" />
                <div className="info-box-icon-simple__icon-wrapper d-flex align-items-center justify-content-center mb-45">
                  <i className="far fa-gem" aria-hidden="true" />
                </div>
                <p className="font__family-montserrat info-box-icon-simple__title font__size-28 font__weight-bold line__height-30 mb-20 text-center">
                  Flexible &amp; Customizable
                </p>
                <p className="brk-dark-font-color font__size-16 info-box-icon-simple__about line__height-26 font__weight-normal mb-35 text-center">
                  Aenean vulputate eleifend tellus. Renean leo ligula, porttitor euequat vitae, eleifend ac, enim.
                </p>
                <a href="#" className="btn btn-inside-out btn-lg border-radius-30 btn-shadow ml-0 mr-0 mt-0 mb-0 pl-60 pr-60" data-brk-library="component__button">
                  <span className="before">read more</span><span className="text">Click Me</span><span className="after">read more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="brk-services-simple__navigation">
          <div className="services-simple-button-prev"><i className="fas fa-angle-left" /></div>
          <div className="services-simple-pagination" />
          <div className="services-simple-button-next"><i className="fas fa-angle-right" /></div>
        </div>
      </div>
    </div>
  </section>
  <section className="brk-left-overflow-image">
    <div className="container-fluid">
      <div className="row justify-content-center no-gutters">
        <div className="col-xl-6 position-relative">
          <div className="brk-z-index-10 position-static position-xl-absolute image-map-creative_agency pt-xl-20 pt-60 pb-40">
            <div className="brk-image-map" data-brk-image-map="{&quot;id&quot;:2025,&quot;editor&quot;:{&quot;selected_shape&quot;:&quot;rect-4738&quot;,&quot;tool&quot;:&quot;poly&quot;,&quot;zoom&quot;:8},&quot;general&quot;:{&quot;name&quot;:&quot;brk-image-map-app-2&quot;,&quot;width&quot;:1596,&quot;height&quot;:1414,&quot;naturalWidth&quot;:1596,&quot;naturalHeight&quot;:1414,&quot;center_image_map&quot;:1},&quot;image&quot;:{&quot;url&quot;:&quot;img/brk-image-map-5-1.png&quot;},&quot;tooltips&quot;:{&quot;sticky_tooltips&quot;:1,&quot;tooltip_animation&quot;:&quot;grow&quot;},&quot;spots&quot;:[{&quot;id&quot;:&quot;rect-7736&quot;,&quot;title&quot;:&quot;rect-7736&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:16.739,&quot;y&quot;:21.379,&quot;width&quot;:30.079,&quot;height&quot;:39.398,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:50.854913726967865,&quot;y&quot;:0},{&quot;x&quot;:100,&quot;y&quot;:24.412725242680587},{&quot;x&quot;:49.48970932402295,&quot;y&quot;:100},{&quot;x&quot;:0,&quot;y&quot;:75.44037717096171}]},{&quot;id&quot;:&quot;rect-8358&quot;,&quot;title&quot;:&quot;rect-7737&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:29.931,&quot;y&quot;:48.03,&quot;width&quot;:30.028,&quot;height&quot;:39.224,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:50.77144498446338,&quot;y&quot;:0},{&quot;x&quot;:100,&quot;y&quot;:24.5210215457661},{&quot;x&quot;:49.573763379422076,&quot;y&quot;:100},{&quot;x&quot;:0,&quot;y&quot;:75.62716652512617}]},{&quot;id&quot;:&quot;rect-4170&quot;,&quot;title&quot;:&quot;rect-7738&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:41.633,&quot;y&quot;:1.412,&quot;width&quot;:15.668,&quot;height&quot;:15.628,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;position&quot;:&quot;bottom&quot;,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:0.8727733978674437,&quot;y&quot;:1.8471852921554122},{&quot;x&quot;:2.401026175872763,&quot;y&quot;:0.5235779021890471},{&quot;x&quot;:4.577427483787329,&quot;y&quot;:0},{&quot;x&quot;:6.879035357757206,&quot;y&quot;:0.9054155224118445},{&quot;x&quot;:47.04293478826334,&quot;y&quot;:22.929945523923497},{&quot;x&quot;:51.27273176699539,&quot;y&quot;:14.373435460124231},{&quot;x&quot;:52.786368909662244,&quot;y&quot;:10.00564944269796},{&quot;x&quot;:57.104932091200276,&quot;y&quot;:11.55851687179889},{&quot;x&quot;:58.65414546579031,&quot;y&quot;:9.339107694537141},{&quot;x&quot;:59.89314790111951,&quot;y&quot;:8.35067721367934},{&quot;x&quot;:61.223470003704236,&quot;y&quot;:7.899360268958051},{&quot;x&quot;:61.59718644745049,&quot;y&quot;:9.171389738041652},{&quot;x&quot;:61.503760632436475,&quot;y&quot;:11.364583997242297},{&quot;x&quot;:60.977021384084274,&quot;y&quot;:13.922029652735779},{&quot;x&quot;:64.84778394007596,&quot;y&quot;:17.074174467080944},{&quot;x&quot;:61.50658958132718,&quot;y&quot;:22.256329400392755},{&quot;x&quot;:57.98354527875368,&quot;y&quot;:29.56779399196945},{&quot;x&quot;:98.17446176695822,&quot;y&quot;:54.81416305725566},{&quot;x&quot;:99.60393359563562,&quot;y&quot;:56.714504904485686},{&quot;x&quot;:100,&quot;y&quot;:58.7137278709419},{&quot;x&quot;:99.64368047747357,&quot;y&quot;:60.98648504629253},{&quot;x&quot;:98.46091005360553,&quot;y&quot;:62.74011974953305},{&quot;x&quot;:96.6487811447235,&quot;y&quot;:63.698044516993704},{&quot;x&quot;:94.3968359454279,&quot;y&quot;:64.06968103002534},{&quot;x&quot;:51.19915970311102,&quot;y&quot;:55.067425727397264},{&quot;x&quot;:48.91660782337288,&quot;y&quot;:55.1851509849248},{&quot;x&quot;:46.85191411247151,&quot;y&quot;:55.68492078193681},{&quot;x&quot;:45.128530626728555,&quot;y&quot;:56.78554420636671},{&quot;x&quot;:43.45012943951688,&quot;y&quot;:58.29073758391073},{&quot;x&quot;:28.104523217124434,&quot;y&quot;:83.57394132853959},{&quot;x&quot;:37.091101224536715,&quot;y&quot;:92.60677567918977},{&quot;x&quot;:37.87049062644151,&quot;y&quot;:95.18299512477051},{&quot;x&quot;:37.17439132828505,&quot;y&quot;:97.33157706456628},{&quot;x&quot;:36.16652865182013,&quot;y&quot;:98.9896464691364},{&quot;x&quot;:34.215348553109855,&quot;y&quot;:100},{&quot;x&quot;:24.91262358740608,&quot;y&quot;:98.7721280597119},{&quot;x&quot;:23.46167335960269,&quot;y&quot;:97.01518372813835},{&quot;x&quot;:23.44660747373296,&quot;y&quot;:92.04003651458855},{&quot;x&quot;:19.957170825443715,&quot;y&quot;:96.57616641149382},{&quot;x&quot;:21.39650479060814,&quot;y&quot;:90.70606310096363},{&quot;x&quot;:17.71643930974979,&quot;y&quot;:94.06411459550989},{&quot;x&quot;:16.10377283050708,&quot;y&quot;:94.10625287357564},{&quot;x&quot;:9.021319050196038,&quot;y&quot;:85.27938954545786},{&quot;x&quot;:8.809614513379783,&quot;y&quot;:83.31831945758113},{&quot;x&quot;:9.274803910927986,&quot;y&quot;:81.11063871610618},{&quot;x&quot;:10.788851218419172,&quot;y&quot;:79.30556305376157},{&quot;x&quot;:12.997306650121418,&quot;y&quot;:78.56793076115589},{&quot;x&quot;:24.58640148339415,&quot;y&quot;:81.42094683076147},{&quot;x&quot;:34.729856037485106,&quot;y&quot;:52.67147365900274},{&quot;x&quot;:34.807949908133146,&quot;y&quot;:50.17220346409908},{&quot;x&quot;:34.433408430272955,&quot;y&quot;:47.96412444666384},{&quot;x&quot;:33.714836175210685,&quot;y&quot;:45.526704203669475},{&quot;x&quot;:32.19265418080161,&quot;y&quot;:43.57181870364323},{&quot;x&quot;:1.618807728774492,&quot;y&quot;:9.125589666299266},{&quot;x&quot;:0.3327562682962219,&quot;y&quot;:6.573572548585202},{&quot;x&quot;:0,&quot;y&quot;:4.0887887955441435}]},{&quot;id&quot;:&quot;rect-9828&quot;,&quot;title&quot;:&quot;rect-7739&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:75.975,&quot;y&quot;:13.876,&quot;width&quot;:3.332,&quot;height&quot;:3.695,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:37.77601112599038,&quot;y&quot;:0},{&quot;x&quot;:57.747715722776064,&quot;y&quot;:5.523864637841851},{&quot;x&quot;:77.4215892594326,&quot;y&quot;:21.983708739730602},{&quot;x&quot;:92.29517835535972,&quot;y&quot;:46.891266195256215},{&quot;x&quot;:100,&quot;y&quot;:68.26777114635053},{&quot;x&quot;:93.96293096666246,&quot;y&quot;:86.24751827520284},{&quot;x&quot;:83.03244528007603,&quot;y&quot;:95.06067226357831},{&quot;x&quot;:69.65919031776149,&quot;y&quot;:100},{&quot;x&quot;:49.287998340712896,&quot;y&quot;:96.92390969939592},{&quot;x&quot;:30.214314401776804,&quot;y&quot;:87.19165155395378},{&quot;x&quot;:15.814638675100928,&quot;y&quot;:76.88870775874656},{&quot;x&quot;:4.489264600880868,&quot;y&quot;:61.371109908871844},{&quot;x&quot;:0,&quot;y&quot;:40.782490356485354},{&quot;x&quot;:5.4075605680955245,&quot;y&quot;:22.76180451465419},{&quot;x&quot;:17.20832216342487,&quot;y&quot;:7.095444923508822}]},{&quot;id&quot;:&quot;rect-3347&quot;,&quot;title&quot;:&quot;rect-7740&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:61.625,&quot;y&quot;:11.516,&quot;width&quot;:15.512,&quot;height&quot;:15.486,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:100,&quot;y&quot;:51.58490524303526},{&quot;x&quot;:76.19161793461757,&quot;y&quot;:100},{&quot;x&quot;:0,&quot;y&quot;:54.62267367369675},{&quot;x&quot;:26.78609436752502,&quot;y&quot;:0}]},{&quot;id&quot;:&quot;rect-4254&quot;,&quot;title&quot;:&quot;rect-7741&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:58.75,&quot;y&quot;:22.002,&quot;width&quot;:6.067,&quot;height&quot;:6.361,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:100,&quot;y&quot;:39.51350163228871},{&quot;x&quot;:81.57270461078787,&quot;y&quot;:85.06411076539611},{&quot;x&quot;:69.61653313455282,&quot;y&quot;:99.35887786516797},{&quot;x&quot;:61.544253800396746,&quot;y&quot;:100},{&quot;x&quot;:0,&quot;y&quot;:64.21718275019485},{&quot;x&quot;:34.647011954203755,&quot;y&quot;:0}]},{&quot;id&quot;:&quot;rect-6525&quot;,&quot;title&quot;:&quot;rect-7742&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:55.85,&quot;y&quot;:27.941,&quot;width&quot;:5.631,&quot;height&quot;:6.465,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:100,&quot;y&quot;:35.28820597556567},{&quot;x&quot;:91.43073393931469,&quot;y&quot;:51.15074022603464},{&quot;x&quot;:73.98401482687004,&quot;y&quot;:75.40257532433377},{&quot;x&quot;:62.025554229144106,&quot;y&quot;:100},{&quot;x&quot;:53.09743323188763,&quot;y&quot;:89.64916189663256},{&quot;x&quot;:0,&quot;y&quot;:61.17132089405871},{&quot;x&quot;:34.82567311148246,&quot;y&quot;:0}]},{&quot;id&quot;:&quot;rect-4274&quot;,&quot;title&quot;:&quot;rect-7743&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:64.769,&quot;y&quot;:25.856,&quot;width&quot;:7.402,&quot;height&quot;:7.056,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:100,&quot;y&quot;:52.245430591990086},{&quot;x&quot;:77.84164523630022,&quot;y&quot;:100},{&quot;x&quot;:0,&quot;y&quot;:51.93977707849927},{&quot;x&quot;:24.06197693493862,&quot;y&quot;:0}]},{&quot;id&quot;:&quot;rect-9553&quot;,&quot;title&quot;:&quot;rect-7744&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:61.24,&quot;y&quot;:31.78,&quot;width&quot;:8.519,&quot;height&quot;:7.983,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:100,&quot;y&quot;:52.34169434623895},{&quot;x&quot;:78.3288771778307,&quot;y&quot;:100},{&quot;x&quot;:0,&quot;y&quot;:47.17370357047527},{&quot;x&quot;:20.30847924915763,&quot;y&quot;:0},{&quot;x&quot;:59.908984563082,&quot;y&quot;:23.171719802664363}]},{&quot;id&quot;:&quot;rect-4738&quot;,&quot;title&quot;:&quot;rect-7745&quot;,&quot;type&quot;:&quot;poly&quot;,&quot;x&quot;:56.223,&quot;y&quot;:35.372,&quot;width&quot;:8.201,&quot;height&quot;:6.227,&quot;default_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0,&quot;stroke_opacity&quot;:0},&quot;mouseover_style&quot;:{&quot;fill&quot;:&quot;#2774ff&quot;,&quot;fill_opacity&quot;:0.5917293003627232,&quot;stroke_opacity&quot;:0},&quot;tooltip_style&quot;:{&quot;border_radius&quot;:0,&quot;background_color&quot;:&quot;#ffffff&quot;,&quot;background_opacity&quot;:1,&quot;auto_width&quot;:1},&quot;tooltip_content&quot;:{&quot;plain_text&quot;:&quot;<div style=\&quot;text-align: center\&quot;>\n\t<div style=\&quot;font-weight: 700;color: #272727;font-size: 18px;line-height: 24px;padding-bottom: 10px;\&quot;>\n\t\tTooltip title\n\t</div>\n\t<div style=\&quot;font-size: 14px;line-height: 20px;color: #9f9f9f;\&quot;>\n\t\tAenean vulputate eleifend tellus.<br>Aenean leo ligula, porttitor.\n\t</div>\n</div>&quot;,&quot;squares_settings&quot;:{&quot;containers&quot;:[{&quot;id&quot;:&quot;sq-container-403761&quot;,&quot;settings&quot;:{&quot;elements&quot;:[{&quot;settings&quot;:{&quot;name&quot;:&quot;Paragraph&quot;,&quot;iconClass&quot;:&quot;fa fa-paragraph&quot;}}]}}]}},&quot;points&quot;:[{&quot;x&quot;:87.30148344554574,&quot;y&quot;:52.457262815904535},{&quot;x&quot;:92.00476897939785,&quot;y&quot;:59.30405893069962},{&quot;x&quot;:95.89826676940906,&quot;y&quot;:70.06443495755896},{&quot;x&quot;:99.61529102538347,&quot;y&quot;:76.38245917398501},{&quot;x&quot;:100,&quot;y&quot;:82.88639475919075},{&quot;x&quot;:97.7101996094477,&quot;y&quot;:90.38377673122939},{&quot;x&quot;:94.14565353177272,&quot;y&quot;:96.29548149032652},{&quot;x&quot;:89.22072535776786,&quot;y&quot;:100},{&quot;x&quot;:82.31127293005822,&quot;y&quot;:98.8942592848406},{&quot;x&quot;:5.428204234998655,&quot;y&quot;:36.51471925075552},{&quot;x&quot;:1.1889637198103906,&quot;y&quot;:27.73758167889286},{&quot;x&quot;:0,&quot;y&quot;:19.30207918422468},{&quot;x&quot;:0.10256621287384803,&quot;y&quot;:10.821123520783274},{&quot;x&quot;:2.419806589866757,&quot;y&quot;:4.780705869721582},{&quot;x&quot;:6.854837794348533,&quot;y&quot;:0},{&quot;x&quot;:16.449238966005748,&quot;y&quot;:2.9937710084001945},{&quot;x&quot;:51.12789764237152,&quot;y&quot;:24.134130922402043}]}]}" data-brk-library="component__image_map" />
          </div>
        </div>
        <div className="col-xl-6">
          <div className="d-flex flex-column pb-md-200 pb-sm-140 pb-20 pl-xl-30 image-map-desc-creative_agency">
            <div className="text-center text-xl-left">
              <h2 className="font__family-montserrat font__weight-bold font__size-56 line__height-60 mt-10" data-brk-library="component__title">Premium, awesome<br />&amp;
                <span className="highlight-massive font__family-playfair font__weight-bold">
                  dynamic <span className="after wow zoomIn" />
                </span>
              </h2>
            </div>
            <p className="brk-dark-font-color font__size-16 line__height-26 mt-40 pr-xl-15 mb-20 mb-xl-70 text-center text-lg-left">
              Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero.
            </p>
            <div className="dash-one-slider swiper-container" data-brk-library="component__testimonials,slider__swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="brk-testimonials-dash-one">
                    <div className="brk-testimonials-dash-one__info">
                      <div className="brk-testimonials-dash-one__img">
                        <img src="img/demo_creative_agency/116x116_1.jpg" alt="alt" />
                      </div>
                      <div className="brk-rating" data-brk-library="component__elements">
                        <div className="brk-rating__layer brk-dark-font-color">
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                        </div>
                        <div className="brk-rating__imposition brk-base-font-color" style={{width: '80%'}}>
                          <div className="visible">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                      <h4 className="font__family-montserrat font__weight-bold">Mark Donavant</h4>
                      <span className="brk-testimonials-dash-one__position font__family-open-sans">SEO Digity</span>
                    </div>
                    <div className="brk-testimonials-dash-one__description font__family-open-sans text-center text-lg-left">For many small business owners and entrepreneurs, popular apps like Uber and Snapchat are sources of inspiration. It's easy to see the appeal of mobile apps: they can provide a direct connection between businesses.
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="brk-testimonials-dash-one">
                    <div className="brk-testimonials-dash-one__info">
                      <div className="brk-testimonials-dash-one__img">
                        <img src="img/demo_creative_agency/116x116_2.jpg" alt="alt" />
                      </div>
                      <div className="brk-rating" data-brk-library="component__elements">
                        <div className="brk-rating__layer brk-dark-font-color">
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                          <i className="fal fa-star" />
                        </div>
                        <div className="brk-rating__imposition brk-base-font-color" style={{width: '80%'}}>
                          <div className="visible">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                      <h4 className="font__family-montserrat font__weight-bold">Lora Mi</h4>
                      <span className="brk-testimonials-dash-one__position font__family-open-sans">Web Design</span>
                    </div>
                    <div className="brk-testimonials-dash-one__description font__family-open-sans text-center text-lg-left">From the war room to the battlefield, the world was continually blowing up around Diana Prince. Yet Diana, aka Wonder Woman, never lost focus on why she left the safety of Themyscira.
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-modern-arrow">
                <div className="button-prev"><i className="fa fa-angle-left" /></div>
                <div className="button-next"><i className="fa fa-angle-right" /></div>
              </div>
              <button className="brk-testimonials-dash-one__btn btn btn-lg border-radius-30 font__family-open-sans font__weight-bold btn-inside-out pl-45 pr-45">
                <span className="before">All Reviews</span>
                <span className="text">All Reviews</span>
                <span className="after">All Reviews</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="prices" className="pt-sm-190 pt-60 pb-lg-100 pb-40 brk-bg-light-gray position-relative">
    <span className="brk-svg-pattern-container brk-svg-pattern-container-18 brk-svg-pattern-container_top" data-brk-library="component__svg_pattern">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 180">
        <g id="path-id-18-1">
          <g>
            <polygon fill="#FFFFFF" points="0 0,1930 0,0 180,0 0" />
          </g>
        </g>
      </svg>
    </span>
    <div className="container position-relative brk-z-index-10">
      <h2 className="text-center font__family-montserrat font__size-56 font__weight-bold line__height-60 mb-20">Pricing Table</h2>
      <p className="text-center brk-dark-font-color font__size-16 line__height-26 pb-lg-120 pb-50">
        Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat <br /> vitae, eleifend ac, enim. Aliquam lorem ante,
        dapibus in
      </p>
    </div>
    <div className="brk-pricing-light">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-12 col-lg-4">
            <div className="brk-pricing-light__item mb-40" data-brk-library="component__pricing_table,component__button">
              <div className="brk-pricing-light__header">
                <h2 className="brk-pricing-light__price font__family-montserrat font__size-48 font__weight-bold line__height-50">
                  Free
                </h2>
                <h3 className="brk-pricing-light__period font__size-16 line__height-16 font__weight-semibold opacity-70">
                  Only first time
                </h3>
                <a href="#" className="btn btn-inside-out btn-lg border-radius-30 brk-white-font-color font__family-open-sans font__weight-bold pl-70 pr-70" data-brk-library="component__button">
                  <span className="before">select</span><span className="text">Click Me</span><span className="after">select</span>
                </a>
              </div>
              <div className="brk-pricing-light__body pl-40 pr-40 pt-70 pb-50">
                <ul className="brk-pricing-light__list w-100 font__size-16 line__height-18">
                  <li className="brk-pricing-light__list-item active mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Aenean vulputate</span>
                  </li>
                  <li className="brk-pricing-light__list-item active mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Eleifend tellus renean leo</span>
                  </li>
                  <li className="brk-pricing-light__list-item active mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Ligula porttitor euequat</span>
                  </li>
                  <li className="brk-pricing-light__list-item mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Vitae, eleifend ac, enim</span>
                  </li>
                  <li className="brk-pricing-light__list-item mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Leo eget bibendum sodales</span>
                  </li>
                  <li className="brk-pricing-light__list-item mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Augue velit cursus nunc</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="brk-pricing-light__item mb-40" data-brk-library="component__pricing_table,component__button">
              <div className="brk-pricing-light__header">
                <h2 className="mb-1 brk-pricing-light__old-price font__family-montserrat font__size-16 font__weight-semibold line__height-16">
                  <s>1560$</s>
                </h2>
                <h2 className="brk-pricing-light__price font__family-montserrat font__size-48 font__weight-bold line__height-50">
                  1460$
                </h2>
                <h3 className="brk-pricing-light__period font__size-16 line__height-16 font__weight-semibold opacity-70">
                  Per/Month
                </h3>
                <a href="#" className="btn btn-inside-out btn-lg border-radius-30 brk-white-font-color font__family-open-sans font__weight-bold pl-70 pr-70" data-brk-library="component__button">
                  <span className="before">select</span><span className="text">Click Me</span><span className="after">select</span>
                </a>
              </div>
              <div className="brk-pricing-light__body pl-40 pr-40 pt-70 pb-50">
                <ul className="brk-pricing-light__list w-100 font__size-16 line__height-18">
                  <li className="brk-pricing-light__list-item active mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Aenean vulputate</span>
                  </li>
                  <li className="brk-pricing-light__list-item active mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Eleifend tellus renean leo</span>
                  </li>
                  <li className="brk-pricing-light__list-item active mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Ligula porttitor euequat</span>
                  </li>
                  <li className="brk-pricing-light__list-item mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Vitae, eleifend ac, enim</span>
                  </li>
                  <li className="brk-pricing-light__list-item mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Leo eget bibendum sodales</span>
                  </li>
                  <li className="brk-pricing-light__list-item mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Augue velit cursus nunc</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="brk-pricing-light__item mb-40" data-brk-library="component__pricing_table,component__button">
              <div className="brk-pricing-light__header">
                <h2 className="mb-1 brk-pricing-light__old-price font__family-montserrat font__size-16 font__weight-semibold line__height-16">
                  <s>2560$</s>
                </h2>
                <h2 className="brk-pricing-light__price font__family-montserrat font__size-48 font__weight-bold line__height-50">
                  2400$
                </h2>
                <h3 className="brk-pricing-light__period font__size-16 line__height-16 font__weight-semibold opacity-70">
                  Per/Month
                </h3>
                <a href="#" className="btn btn-inside-out btn-lg border-radius-30 brk-white-font-color font__family-open-sans font__weight-bold pl-70 pr-70" data-brk-library="component__button">
                  <span className="before">select</span><span className="text">Click Me</span><span className="after">select</span>
                </a>
              </div>
              <div className="brk-pricing-light__body pl-40 pr-40 pt-70 pb-50">
                <ul className="brk-pricing-light__list w-100 font__size-16 line__height-18">
                  <li className="brk-pricing-light__list-item active mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Aenean vulputate</span>
                  </li>
                  <li className="brk-pricing-light__list-item active mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Eleifend tellus renean leo</span>
                  </li>
                  <li className="brk-pricing-light__list-item active mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Ligula porttitor euequat</span>
                  </li>
                  <li className="brk-pricing-light__list-item mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Vitae, eleifend ac, enim</span>
                  </li>
                  <li className="brk-pricing-light__list-item mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Leo eget bibendum sodales</span>
                  </li>
                  <li className="brk-pricing-light__list-item mb-10">
                    <div className="brk-pricing-light__list-indicator">
                      <i className="fas fa-check-circle" />
                      <i className="fas fa-minus" />
                    </div>
                    <span>Augue velit cursus nunc</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="position-relative z-index-2">
    <div className="brk-light-gradient-0deg-100 brk-border-btn pb-110" data-brk-library="component__portfolio_masonry">
      <div className="d-flex pl-15 pr-15">
        <ul className="brk-filters brk-filters_style-2 font__size-14 font__weight-semibold line__height-16 text-uppercase mx-auto d-inline-flex brk-base-font-color pl-35 pr-35 mt-70 mt-lg-0 mb-20 mb-lg-60">
          <li className="brk-filters__item active" data-filter="*">
            <span>All</span>
          </li>
          <li className="brk-filters__item" data-filter=".logotypes">
            <span>Logotypes</span>
          </li>
          <li className="brk-filters__item" data-filter=".magazines">
            <span>magazines</span>
          </li>
          <li className="brk-filters__item" data-filter=".albums">
            <span>Photo albums</span>
          </li>
          <li className="brk-filters__item" data-filter=".design">
            <span>Graphic Design</span>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="brk-grid row">
          <div className="brk-grid__sizer" />
          <div className="col-xl-3 col-lg-4 col-md-6 brk-grid__item brk-grid__item_height-370 magazines design" data-brk-hover3d="{&quot;imgWrapper&quot;: &quot;.post-filmstrip&quot;, &quot;caption&quot;: &quot;.post-filmstrip__content&quot;}">
            <div className="post-filmstrip text-center brk-base-box-shadow lazyload" data-bg="img/demo_creative_agency/400x400_1.jpg" data-brk-library="component__content_slider,fancybox,anime">
              <div className="post-filmstrip__overlay brk-base-bg-gradient-50deg" />
              <div className="post-filmstrip__content text-center">
                <h3 className="font__family-montserrat font__weight-semibold font__size-21 line__height-24">
                  7 Signs
                </h3>
                <div className="post-filmstrip__excerpt font__family-open-sans font__size-16 line__height-26">
                  The web is both an interactive and virtually unlimited medium, meaning
                </div>
                <div className="links">
                  <a href="#" className="links__permalink bg-white-20">
                    <i className="fas fa-link" />
                  </a>
                  <a href="img/demo_creative_agency/400x400_1.jpg" className="links__view fancybox">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-6 brk-grid__item brk-grid__item_height-370 logotypes magazines" data-brk-hover3d="{&quot;imgWrapper&quot;: &quot;.post-filmstrip&quot;, &quot;caption&quot;: &quot;.post-filmstrip__content&quot;}">
            <div className="post-filmstrip text-center brk-base-box-shadow lazyload" data-bg="img/demo_creative_agency/800x800_1.jpg" data-brk-library="component__content_slider,fancybox,anime">
              <div className="post-filmstrip__overlay brk-base-bg-gradient-50deg" />
              <div className="post-filmstrip__content text-center">
                <h3 className="font__family-montserrat font__weight-semibold font__size-21 line__height-24">
                  Smartly Coded &amp; Maintained.
                </h3>
                <div className="post-filmstrip__excerpt font__family-open-sans font__size-16 line__height-26">
                  The web is both an interactive and virtually unlimited medium, meaning that your own little corner of it has great potential.
                </div>
                <div className="links">
                  <a href="#" className="links__permalink bg-white-20">
                    <i className="fas fa-link" />
                  </a>
                  <a href="img/demo_creative_agency/800x800_1.jpg" className="links__view fancybox">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 brk-grid__item brk-grid__item_height-370 albums design" data-brk-hover3d="{&quot;imgWrapper&quot;: &quot;.post-filmstrip&quot;, &quot;caption&quot;: &quot;.post-filmstrip__content&quot;}">
            <div className="post-filmstrip text-center brk-base-box-shadow lazyload" data-bg="img/demo_creative_agency/400x800_1.jpg" data-brk-library="component__content_slider,fancybox,anime">
              <div className="post-filmstrip__overlay brk-base-bg-gradient-50deg" />
              <div className="post-filmstrip__content text-center">
                <h3 className="font__family-montserrat font__weight-semibold font__size-21 line__height-24">
                  Scalable
                </h3>
                <div className="post-filmstrip__excerpt font__family-open-sans font__size-16 line__height-26">
                  The web is both an interactive and virtually unlimited medium, meaning
                </div>
                <div className="links">
                  <a href="#" className="links__permalink bg-white-20">
                    <i className="fas fa-link" />
                  </a>
                  <a href="img/demo_creative_agency/400x800_1.jpg" className="links__view fancybox">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-6 brk-grid__item brk-grid__item_height-370 logotypes magazines" data-brk-hover3d="{&quot;imgWrapper&quot;: &quot;.post-filmstrip&quot;, &quot;caption&quot;: &quot;.post-filmstrip__content&quot;}">
            <div className="post-filmstrip text-center brk-base-box-shadow lazyload" data-bg="img/demo_creative_agency/800x400_1.jpg" data-brk-library="component__content_slider,fancybox,anime">
              <div className="post-filmstrip__overlay brk-base-bg-gradient-50deg" />
              <div className="post-filmstrip__content text-center">
                <h3 className="font__family-montserrat font__weight-semibold font__size-21 line__height-24">
                  Smartly Coded &amp; Maintained.
                </h3>
                <div className="post-filmstrip__excerpt font__family-open-sans font__size-16 line__height-26">
                  The web is both an interactive and virtually unlimited medium, meaning that your own little corner of it has great potential.
                </div>
                <div className="links">
                  <a href="#" className="links__permalink bg-white-20">
                    <i className="fas fa-link" />
                  </a>
                  <a href="img/demo_creative_agency/800x400_1.jpg" className="links__view fancybox">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 brk-grid__item brk-grid__item_height-370 albums design" data-brk-hover3d="{&quot;imgWrapper&quot;: &quot;.post-filmstrip&quot;, &quot;caption&quot;: &quot;.post-filmstrip__content&quot;}">
            <div className="post-filmstrip text-center brk-base-box-shadow lazyload" data-bg="img/home-page/isotope-3.jpg" data-brk-library="component__content_slider,fancybox,anime">
              <div className="post-filmstrip__overlay brk-base-bg-gradient-50deg" />
              <div className="post-filmstrip__content text-center">
                <h3 className="font__family-montserrat font__weight-semibold font__size-21 line__height-24">
                  Scalable
                </h3>
                <div className="post-filmstrip__excerpt font__family-open-sans font__size-16 line__height-26">
                  The web is both an interactive and virtually unlimited medium, meaning.
                </div>
                <div className="links">
                  <a href="#" className="links__permalink bg-white-20">
                    <i className="fas fa-link" />
                  </a>
                  <a href="img/home-page/isotope-3.jpg" className="links__view fancybox">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 brk-grid__item brk-grid__item_height-370 magazines design" data-brk-hover3d="{&quot;imgWrapper&quot;: &quot;.post-filmstrip&quot;, &quot;caption&quot;: &quot;.post-filmstrip__content&quot;}">
            <div className="post-filmstrip text-center brk-base-box-shadow lazyload" data-bg="img/home-page/isotope-1.jpg" data-brk-library="component__content_slider,fancybox,anime">
              <div className="post-filmstrip__overlay brk-base-bg-gradient-50deg" />
              <div className="post-filmstrip__content text-center">
                <h3 className="font__family-montserrat font__weight-semibold font__size-21 line__height-24">
                  7 Signs
                </h3>
                <div className="post-filmstrip__excerpt font__family-open-sans font__size-16 line__height-26">
                  The web is both an interactive and virtually unlimited medium, meaning
                </div>
                <div className="links">
                  <a href="#" className="links__permalink bg-white-20">
                    <i className="fas fa-link" />
                  </a>
                  <a href="img/home-page/isotope-1.jpg" className="links__view fancybox">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 brk-grid__item brk-grid__item_height-370 albums design">
            <div className="brk-hosted-video" data-brk-library="component__media_embeds,fancybox">
              <div className="brk-abs-bg-overlay d-none">
              </div>
              <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/home-page/isotope-3.jpg" alt="alt" className="brk-hosted-video__img lazyload" />
              <div className="brk-hosted-video__body">
                <a className="icon__btn icon__btn_reverse icon__btn-circled icon__btn-lg fancybox brk-hosted-video__btn" href="http://dev.nikadevs.com/berserk-data/Placeholder_Video.mp4" data-brk-library="component__button">
                  <span className="before" />
                  <i className="fa fa-play" aria-hidden="true" />
                  <span className="after" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-3 col-lg-4 col-md-6 brk-grid__item brk-grid__item_height-370 magazines design" data-brk-hover3d="{&quot;imgWrapper&quot;: &quot;.post-filmstrip&quot;, &quot;caption&quot;: &quot;.post-filmstrip__content&quot;}">
            <div className="post-filmstrip text-center brk-base-box-shadow lazyload" data-bg="img/home-page/isotope-1.jpg" data-brk-library="component__content_slider,fancybox,anime">
              <div className="post-filmstrip__overlay brk-base-bg-gradient-50deg" />
              <div className="post-filmstrip__content text-center">
                <h3 className="font__family-montserrat font__weight-semibold font__size-21 line__height-24">
                  7 Signs
                </h3>
                <div className="post-filmstrip__excerpt font__family-open-sans font__size-16 line__height-26">
                  The web is both an interactive and virtually unlimited medium, meaning
                </div>
                <div className="links">
                  <a href="#" className="links__permalink bg-white-20">
                    <i className="fas fa-link" />
                  </a>
                  <a href="img/home-page/isotope-1.jpg" className="links__view fancybox">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-8 col-md-6 brk-grid__item brk-grid__item_height-370 logotypes magazines" data-brk-hover3d="{&quot;imgWrapper&quot;: &quot;.post-filmstrip&quot;, &quot;caption&quot;: &quot;.post-filmstrip__content&quot;}">
            <div className="post-filmstrip text-center brk-base-box-shadow lazyload" data-bg="img/home-page/isotope-2.jpg" data-brk-library="component__content_slider,fancybox,anime">
              <div className="post-filmstrip__overlay brk-base-bg-gradient-50deg" />
              <div className="post-filmstrip__content text-center">
                <h3 className="font__family-montserrat font__weight-semibold font__size-21 line__height-24">
                  Smartly Coded &amp; Maintained.
                </h3>
                <div className="post-filmstrip__excerpt font__family-open-sans font__size-16 line__height-26">
                  The web is both an interactive and virtually unlimited medium, meaning that your own little corner of it has great potential.
                </div>
                <div className="links">
                  <a href="#" className="links__permalink bg-white-20">
                    <i className="fas fa-link" />
                  </a>
                  <a href="img/home-page/isotope-2.jpg" className="links__view fancybox">
                    <i className="fas fa-search" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <button className="btn btn-inside-out btn-lg btn-inside-out-invert btn-dark-shadow-small font__weight-bold pr-65 pl-65 ml-auto mr-auto mt-0 mb-0 border-radius-30 brk-load-button" data-brk-library="component__button">
            <span className="before">load more</span><span className="text">Click Me</span><span className="after">load more</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section className="position-relative z-index-1" style={{marginTop: '-5px'}}>
    <div className="filmstrip-slider slider--scroll timeline timeline--mosaic lazyload bg-cover" data-bg="img/demo_creative_agency/1920x842_1.jpg" data-brk-library="component__timelines_css">
      <span className="full__size-absolute brk-base-bg-gradient-50deg-a" />
      <div className="filmstrip-slider-container swiper-container" data-brk-library="slider__swiper,component__content_slider">
        <div className="swiper-wrapper">
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_1.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    1993
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  Foundation of the company
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_2.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    2003
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  First participation at the exhibition
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_3.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    2007
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  Promoting products and services
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_4.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    2018
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  Mobile Application Launched
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_2.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    2011
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  Foundation of the company
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_1.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    2021
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  Foundation of the company
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_3.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    2021
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  Foundation of the company
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_2.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    2021
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  Foundation of the company
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_4.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    2021
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  Foundation of the company
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
          <div className="post-filmstrip swiper-slide">
            <div className="timeline__item">
              <a href="#" className="timeline__link bg-cover">
                <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/390x390_3.jpg" alt="alt" />
              </a>
              <div className="timeline__content text-left">
                <div className="timeline__date">
                  <div className="timeline__date-year font__family-open-sans font__weight-semibold font__size-18 line__height-24">
                    2021
                  </div>
                </div>
                <h2 className="timeline__title font__family-montserrat font__weight-bold font__size-28 line__height-32 letter-spacing--1">
                  Foundation of the company
                </h2>
                <p className="font__family-open-sans font__weight-light font__size-16 letter-spacing-20 line__height-26">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttconitor eu, consequat vitae, eleifend ac, enim.
                  Aliquam loreliquam ante, dapibus in, viverra quis, feugiat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="brk-scrollbar">
        <div className="brk-scrollbar-track" />
      </div>
    </div>
  </section>
  <section className="pt-xl-80 pt-lg-60 pt-50 pb-90 pb-lg-120">
    <div className="container">
      <div className="row">
        <div className="col-12 col-xl-5 col-lg-6">
          <div className="text-center">
            <img className="lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="img/demo_creative_agency/470x614_1.jpg" alt="alt" />
          </div>
        </div>
        <div className="col-12 col-xl-7 col-lg-6">
          <h2 className="font__family-montserrat font__size-36 font__weight-bold line__height-40 mb-10 mt-lg-80 mt-30 text-center text-lg-left">Our Book with Guidelines</h2>
          <div className="d-flex align-items-center justify-content-center justify-content-lg-start mb-30">
            <p className="brk-dark-font-color font__family-montserrat font__size-16 mr-20"><s>$26.00</s></p>
            <p className="brk-base-font-color font__family-montserrat font__size-24 font__weight-bold">$24.00</p>
          </div>
          <p className="brk-dark-font-color font__size-16 line__height-26 mb-20 text-center text-lg-left">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
            dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Curabitur ullamcorper ultricies
            nisi.</p>
          <div>
            <h2 className="opacity-10 font__size-120 text-center font__family-montserrat font__weight-bold text-uppercase">Hot Deal</h2>
          </div>
          <div className="countdown__wrapper countdown__large mb-25 position-relative bg-white shadow" style={{marginTop: '-45px'}}>
            <div className="countdown pt-30 pb-30 pl-20 pr-20" data-format="
<div class='countdown__section'>
  <div class='font__family-montserrat font__weight-bold font__size-36-i line__height-60 countdown__amount'>%D</div>
  <span class='font__family-montserrat font__size-16 line__height-18 font__weight-bold countdown__period'>Days</span>
</div>
<div class='countdown__section'>
  <div class='font__family-montserrat font__weight-bold font__size-36-i line__height-60 countdown__amount'>%H</div>
  <span class='font__family-montserrat font__size-16 line__height-18 font__weight-bold countdown__period'>Hours</span>
</div>
<div class='countdown__section'>
  <div class='font__family-montserrat font__weight-bold font__size-36-i line__height-60 countdown__amount'>%M</div>
  <span class='font__family-montserrat font__size-16 line__height-18 font__weight-bold countdown__period'>Mins</span>
</div>
<div class='countdown__section'>
  <div class='font__family-montserrat font__weight-bold font__size-36-i line__height-60 countdown__amount'>%S</div>
  <span class='font__family-montserrat font__size-16 line__height-18 font__weight-bold countdown__period'>Secs</span>
</div>
    " data-type="until" data-time data-brk-library="component__countdown">
            </div>
          </div>
          <div className="text-center text-lg-left mb-30 mb-lg-0">
            <a href="#" className="btn btn-inside-out btn-lg btn-icon btn-dark-shadow border-radius-25 btn-min-width-200" data-brk-library="component__button">
              <i className="fas fa-shopping-basket icon-inside" aria-hidden="true" />
              <span className="before">add to cart</span><span className="text">buy it now</span><span className="after">add to cart</span>
            </a>
            <a href="#" className="btn btn-inside-out btn-lg btn-icon border-radius-25 btn-min-width-200 btn-inside-out-invert" data-brk-library="component__button">
              <i className="fas fa-star icon-inside" aria-hidden="true" />
              <span className="before">Wishlist</span><span className="text">add it</span><span className="after">Wishlist</span>
            </a>
            <a href="#" className="btn btn-inside-out btn-lg btn-icon border-radius-25 btn-min-width-200 btn-inside-out-invert" data-brk-library="component__button">
              <i className="fas fa-share-alt icon-inside" aria-hidden="true" />
              <span className="before">share</span><span className="text">share it</span><span className="after">share</span>
            </a>
          </div>
        </div>
        <div className="col-12">
          <div className="default-slider slick-loading default-slider_mode arrows-classic-dark-circle brk-base-box-shadow fa-req" data-slick="{&quot;slidesToShow&quot;: 4, &quot;slidesToScroll&quot;: 1, &quot;arrows&quot;: true, &quot;responsive&quot;: [
{&quot;breakpoint&quot;: 992, &quot;settings&quot;: {&quot;slidesToShow&quot;: 3}},
{&quot;breakpoint&quot;: 768, &quot;settings&quot;: {&quot;slidesToShow&quot;: 2}},
{&quot;breakpoint&quot;: 480, &quot;settings&quot;: {&quot;slidesToShow&quot;: 1}}
]}" data-brk-library="slider__slick">
            <div className="pl-15 pr-15">
              <div className="shop-setout text-center" data-brk-library="component__content_slider">
                <div className="shop-setout__img lazyload" data-bg="img/260x322_1.jpg">
                  <a href="#" className="add-cart"><i className="fas fa-shopping-basket" /></a>
                  <a href="#" className="add-wishlist"><i className="fas fa-star" /></a>
                </div>
                <a className="shop-setout__link" href="#">
                  <h3 className="font__family-montserrat font__weight-semibold font__size-16">
                    Premium Quality</h3>
                </a>
                <div className="brk-base-font-color font__family-montserrat font__size-15 font__weight-semibold"><span className="old-price font__size-15 font__weight-normal">$10.57</span>$8.61
                </div>
              </div>
            </div>
            <div className="pl-15 pr-15">
              <div className="shop-setout text-center" data-brk-library="component__content_slider">
                <div className="shop-setout__img lazyload" data-bg="img/260x322_2.jpg">
                  <a href="#" className="add-cart"><i className="fas fa-shopping-basket" /></a>
                  <a href="#" className="add-wishlist"><i className="fas fa-star" /></a>
                </div>
                <a href="#" className="shop-setout__link">
                  <h3 className="font__family-montserrat font__weight-semibold font__size-16">
                    Amazing Design</h3>
                </a>
                <div className="brk-base-font-color font__family-montserrat font__size-15 font__weight-semibold"><span className="old-price font__size-15 font__weight-normal">$10.57</span>$8.61
                </div>
              </div>
            </div>
            <div className="pl-15 pr-15">
              <div className="shop-setout text-center" data-brk-library="component__content_slider">
                <div className="shop-setout__img lazyload" data-bg="img/260x322_3.jpg">
                  <a href="#" className="add-cart"><i className="fas fa-shopping-basket" /></a>
                  <a href="#" className="add-wishlist"><i className="fas fa-star" /></a>
                </div>
                <a href="#" className="shop-setout__link">
                  <h3 className="font__family-montserrat font__weight-semibold font__size-16">
                    Mobile Friendly</h3>
                </a>
                <div className="brk-base-font-color font__family-montserrat font__size-15 font__weight-semibold"><span className="old-price font__size-15 font__weight-normal">$10.57</span>$8.61
                </div>
              </div>
            </div>
            <div className="pl-15 pr-15">
              <div className="shop-setout text-center" data-brk-library="component__content_slider">
                <div className="shop-setout__img lazyload" data-bg="img/260x322_4.jpg">
                  <a href="#" className="add-cart"><i className="fas fa-shopping-basket" /></a>
                  <a href="#" className="add-wishlist"><i className="fas fa-star" /></a>
                </div>
                <a href="#" className="shop-setout__link">
                  <h3 className="font__family-montserrat font__weight-semibold font__size-16">
                    SEO Optimized</h3>
                </a>
                <div className="brk-base-font-color font__family-montserrat font__size-15 font__weight-semibold"><span className="old-price font__size-15 font__weight-normal">$10.57</span>$8.61
                </div>
              </div>
            </div>
            <div className="pl-15 pr-15">
              <div className="shop-setout text-center" data-brk-library="component__content_slider">
                <div className="shop-setout__img lazyload" data-bg="img/260x322_3.jpg">
                  <a href="#" className="add-cart"><i className="fas fa-shopping-basket" /></a>
                  <a href="#" className="add-wishlist"><i className="fas fa-star" /></a>
                </div>
                <a href="#" className="shop-setout__link">
                  <h3 className="font__family-montserrat font__weight-semibold font__size-16">
                    Mobile Friendly</h3>
                </a>
                <div className="brk-base-font-color font__family-montserrat font__size-15 font__weight-semibold"><span className="old-price font__size-15 font__weight-normal">$10.57</span>$8.61
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer/>
     
     </>
  );
}
