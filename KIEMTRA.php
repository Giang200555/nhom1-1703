<?php
// Kiểm tra xem dữ liệu đã được gửi đi chưa
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Nhận dữ liệu từ biểu mẫu
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $date = $_POST['date'];

    // Xử lý dữ liệu (ở đây, chúng ta chỉ in ra để kiểm tra)
    echo "Tên khách hàng: " . $name . "<br>";
    echo "Số điện thoại: " . $phone . "<br>";
    echo "Ngày đặt hàng: " . $date . "<br>";
}
?>
