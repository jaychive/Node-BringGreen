import React from 'react';
import EventTitle from './reusable/EventTitle';

function EventOne(props) {
  return (
    <section id='event1' className='sectionSpace'>
      <div className='pb-5'>
        <EventTitle type={props.sort}></EventTitle>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6 text-end">
            {/* 멘트 고치기 */}
            <strong>브링그린 제품을 사용했던 고객들을 대상으로 진행되는 이벤트 입니다.</strong>
            <p>
              올리브영 오프라인 매장에서
              티트리 시카 수딩 로션바 PLUS+를 구매 후
              브링그린 제품을 과거 사용하셨거나 사용하고 계신 것을 인증해주신 분들에 한해
              브링그린 90% 프레시 마스크 5종팩을 증정합니다.
            </p>
            <span className='d-block'>인증 가능한 항목: 브링그린 화장품 통, 구매 영수증(모바일 영수증), 올리브영 온라인몰 구매 내역</span>
          </div>
          <div className="col-5">
            <img src="/img/compImg/oliveyoung.jpg" className='img-fluid' alt="oliveyoung" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventOne;