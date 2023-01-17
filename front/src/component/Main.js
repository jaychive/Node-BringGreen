import React from 'react';
import Btn from './reusable/Btn';

function Main(props) {
  return (
    <section id="main" className="sectionSpace">
      <div className="mainImg">
        <div className="mainContent h-100">
          <div className="logoImgBox mx-auto pb-5">
            <img src="/img/seo/logo-black.png" className="img-fluid w-100" alt="logo" />
          </div>
          <p className='py-3'>Tea Tree Soothing Lotion Bar PLUS+</p>
          <strong className='pb-3'>Release Event</strong>
          <p className='pb-5'>11.11(Fri)-11.20(Sun)</p>
          <Btn className="justify-content-center align-items-center" type={props.sort}></Btn>
        </div>
      </div>
    </section>
  );
}

export default Main;