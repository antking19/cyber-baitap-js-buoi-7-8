/**
 * Đầu vào
 *      1. Nhập mảng numberList
 *
 * Xử lý
 *      1. Tạo biến đếm count = 0;
 *      2. Lặp mảng numberList
 *      3. Kiểm tra từng giá trị trong mảng numberList nếu lớn hơn 0 thì cộng biến đếm count lên 1 *      đơn vị
 *
 * Đầu ra
 *      4. Xuất biên count ra màn hình
 */

document.getElementById("btnDemSoDuong").onclick = function () {
    let count = 0;
    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] > 0) count++;
    }
    document.getElementById(
        "showDemSoDuong"
    ).innerHTML = `👉 Số dương: ${count}`;
};
