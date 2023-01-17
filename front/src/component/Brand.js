import React from 'react';
import Btn from './reusable/Btn';

function Brand(props) {
  return (
    <section className='brandWhole'>
      <div className='sectionSpace h-100'>
        <div className='youtubeDiv position-relative'>
          <iframe className='position-absolute w-100 h-100' width="560" height="315" src="https://www.youtube.com/embed/IwbVhqWaAFM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      <div id='brand' className='sectionSpace position-relative'>
        <div className='brandImg position-absolute'>
          <div className='brandContent d-flex flex-column justify-content-center align-items-center'>
            <h2 className="text-white pt-5 mt-4 mb-0">
              We BRING your GREEN
              <br />  
              자연주의 브랜드
            </h2>
            <div className='brandBox d-flex flex-column justify-content-center align-items-center'>
              <div className="logoImgBox pb-4">
                <img src="/img/seo/logo-white.png" className="img-fluid w-100" alt="logo" />
              </div>
              <p className="text-white mb-5 text-wrap text-center"> 수분에 진심! 매일매일 피부에 자연을 골라담다.
                <br />수분이 부족한 피부에 대한 솔루션을 제공하는 수분 기능성 자연주의 브랜드 브링그린입니다.</p>
              <Btn className="" type={props.sort}></Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brand;