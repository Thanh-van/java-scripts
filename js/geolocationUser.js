// Định nghĩa một hằng số x và gán nó bằng phần tử HTML có id là "demo"
const x = document.getElementById("demo");

// Định nghĩa một hàm getLocation
function getLocation() {
  // Kiểm tra xem trình duyệt có hỗ trợ Geolocation API không
  if (navigator.geolocation) {
    // Nếu có, gọi hàm getCurrentPosition để biết vị trí của người sử dụng
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    // Nếu không, hiển thị thông báo lỗi trong phần tử có id là "demo"
    x.innerHTML = "Định vị địa lý không được hỗ trợ bởi trình duyệt này.";
  }
}
// Định nghĩa một hàm showPosition sau khi được người sử dụng đồng ý 
function showPosition(position) {
  // Hiển thị thông tin vị trí (latitude và longitude) trong phần tử có id là "demo" sử dụng dữ liệu của position
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}
getLocation()