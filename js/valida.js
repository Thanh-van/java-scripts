
const emailRegex  = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function kiemTra() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;
    checkColusion(email, pass)
}
function kiemTra1() {
    var email = document.getElementById('email-1').value;
    var pass = document.getElementById('pass-1').value;
    checkColusion(email, pass)
} 
function checkColusion(email, pass){
    if(email == "" || pass == ""){
        alert("Cần nhập email hoặc mật khẩu !");
    } else if(!emailRegex.test(email)){
        alert("Email chưa đúng định dạng !");
    } else{
        alert("Đăng nhập thành công !");
    }
}