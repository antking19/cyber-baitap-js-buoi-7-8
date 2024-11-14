/**
 * Đầu vào
 *      1. Nhập mảng numberList
 *
 * Xử lý
 *      1. tạo 2 mảng rổng negativeList và positiveList
 *      2. Lặp mảng numberList
 *      3. Kiểm tra từng giá trị trong mảng numberList nếu giá trị lớn hơn 0 thì đẩy vào mảng positiveList nếu nhỏ hơn 0 thì đẩy vào mảng negativeList
 *      4. Lấy độ dài giá trị của mảng negativeList và positiveList so sánh
 *      5. Nếu độ dài positive lớn ơn negative thì "Số dương > Số âm"
 *      6. Nếu độ dài negative lớn ơn positive thì "Số âm > Số dương"
 *      7. Nếu độ dài positive bằng negative thì "Số âm = Số dương"
 *
 * Đầu ra
 *      1. Xuất ra màn hình xem độ dài số âm hay độ dài số dương lớn hơn
 */

function compareNegativePositiveNumber(numberList) {
    let negativeList = [];
    let positiveList = [];

    for (let i = 0; i < numberList.length; i++) {
        if (numberList[i] > 0) positiveList.push(numberList[i]);
        if (numberList[i] < 0) negativeList.push(numberList[i]);
    }

    if (positiveList.length > negativeList.length) return "Số dương > Số âm";
    if (positiveList.length < negativeList.length) return "Số âm > Số dương";
    if (positiveList.length === negativeList.length) return "Số âm = Số dương";
}

document.getElementById("btnSoSanhSoAmVaDuong").onclick = function () {
    document.getElementById(
        "showSoSanhSoAmVaDuong"
    ).innerHTML = `👉 ${compareNegativePositiveNumber(numberList)}`;
};
