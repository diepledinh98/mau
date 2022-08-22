import "./Product.scss";

function Product() {
  return (
    <div className="product">
      <img
        className="product-img"
        src="https://viptoolaz.com/wp-content/uploads/2022/01/nhung-hinh-anh-anime-ngau-1.jpg"
        alt=""
      />
      <div className="product-name">
        Váy trễ vai hai màu trắng đen dáng suông d...
      </div>

      <div className="price">
        <div className="price-old">₫120.000</div>
        <div className="price-new">₫97.500</div>
      </div>

      <div className="favorite">
        <i class="fa-solid fa-heart heart"></i>
        <i class="fa-solid fa-star star"></i>
        <i class="fa-solid fa-star star"></i>
        <i class="fa-solid fa-star star"></i>
        <i class="fa-solid fa-star star"></i>
        <i class="fa-solid fa-star star"></i>

        <div className="selled">Đã bán 1,4k</div>
      </div>
      <div className="address">Hà Nội</div>
    </div>
  );
}

export default Product;
