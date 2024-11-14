/**
 * Đầu vào
 *      1. Nhập mảng numberList
 *
 * Xử lý
 *      1. Tạo hàm kiểm tra số nguyên tố
 *      2. Kiểm tra nếu số nhỏ hơn bằng 1 thì false
 *      3. Kiểm tra nếu số nhỏ hơn bằng 3 thì true
 *      4. lặp i đi từ ba đến số n
 *      5. Kiểm tra nếu số chia hết cho 2 hoặc chia hết cho 3 thì là false
 *      6. Kiểm tra nếu số chia hết cho i thì false
 *      7. Còn lại là true
 *      8. Tạo hàm findNumberListInPrime
 *      9. Lặp mảng numberList
 *      10. Kiểm tra từng giá trị trong mảng, tìm ra giá trị đầu tiên là số nguyên tố thì ngư thoát hàm
 *
 * Đầu ra
 *      1. In ra số nguyên tố đầu tiên
 */

function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;

    for (let i = 3; i < n; i++) {
        if (n % 2 === 0 || n % 3 === 0) return false;
        if (n % i === 0) return false;
    }

    return true;
}

function findNumberListInPrime(numberList) {
    for (let i = 0; i < numberList.length; i++) {
        if (isPrime(numberList[i])) return numberList[i];
    }
}

document.getElementById("btnTimSoNguyenToDauTien").onclick = function () {
    document.getElementById(
        "showTimSoNguyenToDauTien"
    ).innerHTML = `👉 Số nguyên tố đầu tiên là: ${findNumberListInPrime(
        numberList
    )}`;
};
