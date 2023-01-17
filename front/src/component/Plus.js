import React from 'react';
import Title from './reusable/Title';

function Plus(props) {
  return (
    <section id='plus' className='sectionSpace'>
      <Title type={props.sort}></Title>
      <div className="container pt-5">
        <div className="row flex-wrap text-center justify-content-around">
          <div className="dotCircle col-4">
              <h4>피부중심적</h4>
              <p className="descPhr text-muted mb-0">마데카소사이드로<br />수분감을 충전하여 속건조를 잡고<br />피부 장벽 강화와 회복을 돕습니다.</p>
          </div>
          <div className="dotCircle col-4">
              <h4>진정중심적</h4>
              <p className="descPhr text-muted mb-0">알란토인 추출물을 사용하여<br />더욱 향상된 피부 진정 기능으로<br />자극 없는 발림성을 가집니다.</p>
          </div>  
          <div className="dotCircle col-4">
            <h4>안전중심적</h4>
            <p className="descPhr text-muted mb-0">논코메도제닉 테스트와<br />피부자극 테스트를<br />
            모두 통과한 피부 저자극 제품으로<br />안심하고 바를 수 있습니다.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Plus;