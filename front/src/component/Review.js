import React from 'react';
import Title from './reusable/Title';

function Review(props) {
  return (
    <section id="review" className='sectionSpace'>
    <Title type={props.sort}></Title>
    <p className='text-center'>만족하지 못했던 분들에게 다시 한 번 다가가고자 티트리 시카 수딩 크림의 리뉴얼 제품을 출시하게 되었습니다.</p>
    <div className='reviewBox pt-5 d-flex justify-content-center'>
      <img src="/img/compImg/review1.jpg" className='img-fluid' alt="poor-review" />
    </div>
    </section>
  );
}

export default Review;