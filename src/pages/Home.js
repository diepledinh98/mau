import "./Home.scss";
function Home() {
  return (
    <div className="wrapper-body">
      <div className="grid">
        <div className="wrapper-container">
          <div className="grid__column-2">
            <div className="category">
              <div className="category-title">
                <i class="fa-solid fa-filter cate-icon"></i>
                BỘ LỌC TÌM KIẾM
              </div>
              <div className="cate-list">
                <div className="cate-list-title">Theo Danh Mục</div>

                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  Đầm/Váy (557k+)
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  Chân Váy (398k+)
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  Đồ bầu (325k+)
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  Đồ Ngủ (557k+)
                </label>
                <br></br>

                <div className="cate-add ">
                  Thêm
                  <i class="fa-solid fa-chevron-down add-icon"></i>
                </div>
                <div className="line"></div>
              </div>

              <div className="cate-list">
                <div className="cate-list-title">Nơi Bán</div>

                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  Hà Nội
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  TP. Hồ Chí Minh
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  Thái Nguyên
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  Vĩnh Phúc
                </label>
                <br></br>

                <div className="cate-add">
                  Thêm
                  <i class="fa-solid fa-chevron-down add-icon"></i>
                </div>
                <div className="line"></div>
              </div>

              <div className="cate-list">
                <div className="cate-list-title">Đơn vị vận chuyển</div>

                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  Hỏa Tốc
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  Nhanh
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  Tiết kiệm
                </label>
                <br></br>

                <div className="cate-add">
                  Thêm
                  <i class="fa-solid fa-chevron-down add-icon"></i>
                </div>
                <div className="line"></div>
              </div>

              <div className="cate-list">
                <div className="cate-list-title">Thương Hiệu</div>

                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  SANJOLI
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  Alice
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  {" "}
                  AMYRA
                </label>
                <br></br>
                <input type="checkbox" className="cate-item" />
                <label for="vehicle1" className="cate-label">
                  DALLA
                </label>
                <br></br>

                <div className="cate-add">
                  Thêm
                  <i class="fa-solid fa-chevron-down add-icon"></i>
                </div>
                <div className="line"></div>
              </div>

              <div className="cate-btn-remove">XÓA TẤT CẢ</div>
            </div>
          </div>
          <div className="grid__column-10">
            <div className="container-product">
              <div className="selection">
                <div className="pro-select">
                  <div className="pro-title">Sắp xếp theo</div>
                  <div className="pro-relate">Liên Quan</div>
                  <div className="pro-new">Mới Nhất</div>
                  <div className="pro-new">Bán Chạy</div>
                  <div className="pro-price position-relative">
                    Giá
                    <i class="fa-solid fa-angle-down"></i>
                    <div className="select-price position-absolute">
                      <div className="price-growth">Giá: Thấp đến Cao</div>
                      <div className="price-low">Giá: Cao đến Thấp</div>
                    </div>
                  </div>
                </div>

                <div className="pro-navigate">
                  <div className="naviagte-num">
                    <span style={{ color: "#F53E2D" }}>1</span>
                    /100
                  </div>
                  <div className="navigate-arrow-left">
                    <i class="fa-solid fa-angle-left"></i>
                  </div>
                  <div className="navigate-arrow-right">
                    <i class="fa-solid fa-angle-right"></i>
                  </div>
                </div>
              </div>
              <div className="product-list grid__row ">
                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>

                <div className="grid__product-column-2">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
