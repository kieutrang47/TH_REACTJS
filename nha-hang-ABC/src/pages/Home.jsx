function Home() {
  return (
    <div className="position-relative">
      <img
        src="https://png.pngtree.com/thumb_back/fh260/back_our/20190619/ourmid/pngtree-food-overlooking-the-background-banner-image_138613.jpg"
        alt="Restaurant"
        className="w-100"
        style={{ height: '100vh', objectFit: 'cover' }}
      />
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex align-items-center justify-content-center">
        <div className="text-center text-white p-4">
          <h1 className="display-4 fw-bold animate__animated animate__fadeIn">
            KT Restaurant
          </h1>
          <p className="lead mt-3">
            Nơi hội tụ tinh hoa ẩm thực - Trải nghiệm không gian sang trọng cùng vô vàn món ăn ngon
          </p>
          <a href="/menu" className="btn btn-warning btn-lg mt-4">
            Xem thực đơn
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;