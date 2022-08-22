import "./ModalCart.scss";
function ModalCart() {
  return (
    <div className="header-cart-list ">
      {/* <img
        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png"
        alt=""
        className="header-cart-no-cart-img"
      />
      <p>Chưa Có Sản Phẩm</p> */}

      <div className="header-cart-title">Sản phẩm Mới Thêm</div>
      <div className="header-cart-product">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png"
          alt=""
          className="header-cart-product-img"
        />
        <div className="header-cart-name">chuột máy tính có dây</div>
        <div className="header-cart-price">₫99.000</div>
      </div>
      <div className="header-cart-product">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png"
          alt=""
          className="header-cart-product-img"
        />
        <div className="header-cart-name">chuột máy tính có dây</div>
        <div className="header-cart-price">₫99.000</div>
      </div>
      <div className="header-cart-product">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/9bdd8040b334d31946f49e36beaf32db.png"
          alt=""
          className="header-cart-product-img"
        />
        <div className="header-cart-name">chuột máy tính có dây</div>
        <div className="header-cart-price">₫99.000</div>
      </div>
      <div className="header-cart-view">
        <div className="header-cart-view-btn">Xem Giỏ Hàng</div>
      </div>
    </div>
  );
}

export default ModalCart;
