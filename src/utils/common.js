
export const sliderSettings = {
    // Thiết lập số lượng slider (hoặc slide) sẽ hiển thị cùng lúc, mặc định là 1
    slidesPerView: 1,

    // Xác định khoảng cách giữa mỗi slider, ở đây là 50 pixel.
    spaceBetween: 50,
    
    // Hiện thị slider dựa theo trên kích thước màn hình
    breakpoints: {
      480: {
        slidesPerView: 1,
      },    
      600: {
        slidesPerView: 2
      },
      750: {
        slidesPerView: 3
      },
      1100: {
        slidesPerView: 4,
      },
    },
  
};
