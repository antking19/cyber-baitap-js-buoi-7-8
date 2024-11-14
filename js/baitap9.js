/**
 * Đầu vào
 *      1. Nhập mảng integerList
 *
 * Xử lý
 *      1. Tạo function countIntegerNumber và lặp mảng integerList
 *      2. Tạo biến đếm count = 0
 *      3. Kiểm tra từng giá trị trong mảng có phải là số nguyên hay không nếu là số nguyên thì tăng biến count thêm 1 giá đơn vị
 *
 * Đầu ra
 *      1. In ra có bao nhiêu số nguyên
 */

let integerList = [];

document.getElementById("btnThemSoNguyen").onclick = function () {
    const txtDemSoNguyen = document.getElementById("txtDemSoNguyen").value * 1;
    integerList.push(txtDemSoNguyen);
    document.getElementById(
        "showThemSoNguyen"
    ).innerHTML = `👉: ${integerList}`;
};

function countIntegerNumber(integerList) {
    let count = 0;
    for (let i = 0; i < integerList.length; i++) {
        if (Number.isInteger(integerList[i])) {
            count++;
        }
    }
    return count;
}

document.getElementById("btnDemSoNguyen").onclick = function () {
    document.getElementById(
        "showDemSoNguyen"
    ).innerHTML = `👉 Số nguyên: ${countIntegerNumber(integerList)}`;
};
