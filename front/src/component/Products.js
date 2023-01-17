import Title from './reusable/Title';
import Btn from './reusable/Btn';
import ProdSwiper from './ProdSwiper';

const Products = (props) => {
  return (
    <section id='others' className='sectionSpace'>
      <Title type={props.sort}></Title>
      <ProdSwiper />
      <div className='d-flex justify-content-center align-itmes-center py-5'>
        <Btn type={props.sort}></Btn>
      </div>
    </section>
  )
}

export default Products;