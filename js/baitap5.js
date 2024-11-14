/**
 * Đầu vào
 *      1. Nhập mảng numberList
 *
 * Xử lý
 *      1. Tạo hàm lastEvenNumber
 *      2. Lặp từ vị trí length - 1; điều kiện i >= 0; i--
 *      3. Nếu giá trị nào trong mảng chia hết cho 2 là số chẵn và ngưng vòng lặp
 *
 * Đầu ra
 *      1. In giá trị chẵn cuối cùng
 */

function lastEvenNumber(numberList) {
    for (let i = numberList.length - 1; i >= 0; i--) {
        if (numberList[i] % 2 === 0) return numberList[i];
    }
    return 0;
}

document.getElementById("btnTimSoChanCuoiCung").onclick = function () {
    document.getElementById(
        "showTimSoChanCuoiCung"
    ).innerHTML = `👉Số chẵn cuối cùng: ${lastEvenNumber(numberList)}`;
};
