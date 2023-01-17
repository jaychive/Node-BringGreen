import React from 'react';
import Title from './reusable/Title';

function New(props) {
  return (
    <section id='new' className='sectionSpace'>
      <Title type={props.sort}></Title>
      <div className="container">
        <div className="row text-center justify-content-center align-items-center">
          <div className="col-4 d-flex flex-column align-items-between">
            <div className="col-6 w-100 pb-3">
              <h4>피부에 힘을 더하다</h4>
              <p className="descPhr text-muted mb-0">세라마이드 성분으로 수분 충전과 피부 장벽 강화 및 회복을,
                <br />알란토인으로 피부 진정 효과를</p>
            </div>
            <div className="col-6 w-100 pt-3">
              <h4>케어에 손쉬움을 더하다</h4>
              <p className="descPhr text-muted mb-0">틴케이스로 부피를 많이 차지하지 않아
                <br />휴대가 용이하고 정리도 간편히</p>
            </div>
          </div>
          <div className="col-4">
            <div>
              <img className="img-fluid rounded-pill" src="/img/compImg/new2.jpg" alt="New Product" />
            </div>
          </div>
          <div className="col-4">
            <h4>지구에 힘을 더하다</h4>
            <p className="descPhr text-muted mb-0">로션바, 틴케이스로<br />플라스틱 사용을 줄이고,<br />재활용은 손쉽게</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default New;