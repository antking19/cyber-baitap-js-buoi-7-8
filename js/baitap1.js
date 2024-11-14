/**
 * Đầu vào
 *      1. Nhập mảng numberList
 *
 * Xử lý
 *      1. Tạo biến sum = 0
 *      2. Lặp mảng numberList
 *      3. Cộng tích lũy sum và từng giá trị trong mảng numberList
 *
 * Đầu ra
 *      1. Xuất sum ra màn hình
 */

document.getElementById("btnTinhTong").onclick = function () {
    let sum = 0;
    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    document.getElementById(
        "showTongSoDuong"
    ).innerHTML = `👉Tổng số dương: ${sum}`;
};