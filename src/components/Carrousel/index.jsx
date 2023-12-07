import Carousel from "react-bootstrap/Carousel";

const PeluCarrousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          src="https://irp-cdn.multiscreensite.com/315bf8fc/MOBILE/jpg/1365790-peluqueria-marcela-y-miguel-banner-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Conoce nuestro Salon</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100 h-100"
          src="https://hurcal.com/wp-content/uploads/2018/01/slider-revolution-.jpg"
          alt="First slide"
        />

        <Carousel.Caption>
          <h3>Vive la expreciencia de Salon Bella</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default PeluCarrousel;
