// Hàm kiểm tra xem một số có phải là số nguyên tố hay không
function isPrime(n) {
    if (n <= 1) { // Nếu n <= 1 thì không phải số nguyên tố
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) { // Vòng lặp kiểm tra từ 2 đến căn bậc hai của n
      if (n % i === 0) { // Nếu n chia hết cho một số trong khoảng kiểm tra thì không phải số nguyên tố
        return false;
      }
    }
    return true; // Nếu không thì là số nguyên tố
  }
  
  // Hàm sắp xếp dãy số arr từ nhỏ đến lớn bằng thuật toán Bubble Sort
  function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) { // Duyệt qua mảng n - 1 lần để sắp xếp dãy từ nhỏ đến lớn
      for (let j = 0; j < n - i - 1; j++) { // Duyệt qua từng cặp phần tử để so sánh và đổi chỗ nếu cần
        if (arr[j] > arr[j + 1]) { // Nếu phần tử arr[j] lớn hơn phần tử arr[j + 1] thì đổi chỗ
          const temp = arr[j]; 
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr; // Trả về dãy đã sắp xếp từ nhỏ đến lớn
  }
  
  const A = [3, 7, 2, 5, 8, 4, 11, 13, 17]; // Dãy số tự nhiên A
  const primeNumbers = A.filter((num) => isPrime(num)); // Lọc ra các số nguyên tố từ dãy A bằng phương thức filter() và gán vào mảng primeNumbers
  const sortedPrimeNumbers = bubbleSort(primeNumbers); // Sắp xếp các số nguyên tố trong mảng primeNumbers từ nhỏ đến lớn bằng hàm bubbleSort()
  console.log(sortedPrimeNumbers); // In ra màn hình dãy các số nguyên tố đã sắp xếp từ nhỏ đến lớn