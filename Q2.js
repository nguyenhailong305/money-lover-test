function fibonacci(n) {
  // Khai báo hàm fibonacci với tham số đầu vào là n
  if (n <= 1) {
    // Nếu n = 0 hoặc n = 1 thì trả về giá trị n
    return n;
  }
  let prev = 0; // Khởi tạo giá trị số Fibonacci thứ nhất là 0
  let curr = 1; // Khởi tạo giá trị số Fibonacci thứ hai là 1
  for (let i = 2; i <= n; i++) {
    // Duyệt từ i = 2 đến i = n
    const next = prev + curr; // Tính giá trị số Fibonacci tiếp theo bằng cách cộng giá trị của hai số liền trước
    prev = curr; // Cập nhật giá trị số Fibonacci liền trước bằng giá trị của số Fibonacci hiện tại
    curr = next; // Cập nhật giá trị số Fibonacci hiện tại bằng giá trị của số Fibonacci tiếp theo
  }
  return curr; // Trả về giá trị của số Fibonacci thứ n
}

console.log(fibonacci(7)); // In ra màn hình giá trị của số Fibonacci thứ 7
