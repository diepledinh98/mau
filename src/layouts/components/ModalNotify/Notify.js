import "./Notify.scss";
const Notify = () => {
  return (
    <div className="notice position-absolute">
      <div className="content-notice">
        <img
          src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/99e561e3944805a023e87a81d4869600.png"
          alt=""
          className="notice-not-img"
        />
        <p className="py-2 ">Đăng nhập để xem thông báo</p>
      </div>
      <div className="notify-end ">
        <div className="notify-res">Đăng Ký</div>
        <div className="notify-res">Đăng Nhập</div>
      </div>
    </div>
  );
};

export default Notify;
