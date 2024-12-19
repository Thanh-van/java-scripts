
//Đặt ngày chúng ta đang đếm ngược
var countDownDate = new Date("Apr 30, 2024 00:00:00").getTime();

// Cập nhật đếm ngược cứ sau 1 giây
var x = setInterval(function() {

  // Nhận ngày và giờ hôm nay
  var now = new Date().getTime();

  // Tìm khoảng cách từ bây giờ đến ngày đếm ngược
  var distance = countDownDate - now;

  // Tính toán thời gian theo ngày, giờ, phút và giây
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị kết quả trong phần tử có id="demo"
  document.getElementById("countdown-clock").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

 

  // Nếu đếm ngược xong, hãy viết vài dòng
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown-clock").innerHTML = "EXPIRED";
  }
}, 1000);
