/**
 * Đầu vào
 *      1. Nhập mảng numberList
 *
 * Xử lý
 *      1. Tạo biến nhỏ nhất min mặc định chứa số nhỏ nhất
 *      2. Lặp mảng numberList rồi so sánh biến min với từng giá trị trong mảng
 *      3. Nếu min lớn hơn giá trị nào trong mảng thì gán min bằng giá trị đó
 *
 * Đầu ra
 *      1. Xuất biên min ra màn hình
 */

document.getElementById("btnTimSoNhoNhat").onclick = function () {
    let min = numberList[0];

    for (let i = 1; i < numberList.length; i++) {
        if (min > numberList[i]) min = numberList[i];
    }

    document.getElementById(
        "showTimSoNhoNhat"
    ).innerHTML = `👉Số nhỏ nhất: ${min}`;
};
