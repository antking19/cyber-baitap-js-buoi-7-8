/**
 * Đầu vào
 *      1. Nhập mảng numberList
 *
 * Xử lý
 *      1. Tạo hàm findSmallestPositiveNumber
 *      2. Tạo một mảng rổng tên là newNumberList
 *      3. Tạo một cờ hiệu gán giá trị false
 *      4. Kiểm tra độ dài mảng numberList nếu bằng 0 thì hiển thị "không có số dương trong mảng"
 *      5. Lặp mảng numberList
 *      6. kiểm tra nếu giá trị trong mảng nhỏ hơn 0 thì đặt cờ hiệu là false
 *      7. Kiểm tra nếu giá trị trong mảng lớn hơn 0 thì đặt cờ hiệu là true và thêm giá trị lớn hơn 0 vào mảng mới (newNumberList)
 *      8. Tạo biến nhỏ nhất min mặc định chứa số nhỏ nhất
 *      9. Lặp mảng newNumberList rồi so sánh biến min với từng giá trị trong mảng
 *      10.Nếu min lớn hơn giá trị nào trong mảng thì gán min bằng giá trị đó
 *      11. Kiểm tra flag, nếu flag bằng true thì xuất giá trị dương nhỏ nhất nếu flag bằng false thì không có số dương trong mảng
 *
 * Đầu ra
 *      1. Xuất ra màn hình
 */

function findSmallestPositiveNumber(numberList) {
    let newNumberList = [];
    let flag = false;

    if (numberList.length === 0) {
        return "👉Không có số dương trong mảng";
    }

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] < 0) {
            flag = false;
        }
        if (numberList[i] > 0) {
            newNumberList.push(numberList[i]);
            flag = true;
        }
    }

    let min = newNumberList[0];
    for (let i = 0; i < newNumberList.length; i++) {
        if (min > newNumberList[i]) {
            min = newNumberList[i];
        }
    }
    return flag
        ? `👉Số dương nhỏ nhất: ${min}`
        : "👉Không có số dương trong mảng";
}

document.getElementById("btnTimSoDuongNhoNhat").onclick = function () {
    document.getElementById("showTimSoDuongNhoNhat").innerHTML =
        findSmallestPositiveNumber(numberList);
};
