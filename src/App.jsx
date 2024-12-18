import { Hero, PopularProducts, SpecialOffer, CustomerReviews, SuperQuality, Services, Subscribe, Footer} from "./sections/";
import Nav from './components/Nav'; 

function App() {

  return (
      <div className='relative'>
       <Nav />
       <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
       </section>
       <section className='padding'>
        <PopularProducts />
       </section>
       <section className='padding'>
        <SuperQuality />
       </section>
       <section className='padding'>
        <Services />
       </section>
       <section className='padding'>
        <SpecialOffer />
       </section>
       <section className='bg-pale-blue padding'>
        <CustomerReviews />
       </section>
       <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe />
       </section>
       <section className='bg-black padding-x padding-t pb-8 padding'>
        <Footer />
       </section>
      </div>
  )
}

export default App;
