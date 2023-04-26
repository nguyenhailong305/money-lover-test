function findPairs(A, n) { // Khai báo hàm findPairs với tham số đầu vào là một mảng A và độ dài n của mảng A
    let count = 0; // Khởi tạo biến đếm số cặp số không trùng nhau là 0
    let pairs = []; // Khởi tạo mảng lưu trữ các cặp số không trùng nhau
    for (let i = 0; i < n; i++) { // Duyệt qua từng phần tử của mảng A
      for (let j = i + 1; j < n; j++) { // Duyệt qua từng phần tử của mảng A bắt đầu từ phần tử tiếp theo của phần tử hiện tại
        pairs.push(`${A[i]} & ${A[j]}`); // Thêm cặp số không trùng nhau vào mảng pairs
        count++; // Tăng biến đếm số cặp số không trùng nhau lên 1
      }
    }
    console.log(`Số cặp số không trùng nhau: ${count}`); // In ra số lượng cặp số không trùng nhau
    console.log(`Danh sách các cặp số:`); // In ra thông báo danh sách các cặp số
    console.log(pairs); // In ra danh sách các cặp số
  }
  
  // Ví dụ sử dụng:
  const A = [1, 2, 3, 4, 5, 6]; // Khởi tạo một mảng A gồm các phần tử 1, 2, 3, 4, 5, 6
  const n = A.length; // Lấy độ dài của mảng A
  findPairs(A, n); // Gọi hàm findPairs với tham số là mảng A và độ dài n của mảng A