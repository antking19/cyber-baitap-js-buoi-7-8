/**
 * Đầu vào
 *      1. Nhập mảng numberList
 *
 * Xử lý
 *      1. Tạo 2 vòng lặp
 *      2. Vòng lặp đầu tiên i đi từ 0 đến length - 1; i++
 *      3. Vòng lặp thứ hai j đi từ i + 1 đến length; j++
 *      4. So sánh nếu giá trị trong vòng lặp biến i lớn hơn giá trị trong vòng lặp biến j
 *      5. Tạo biến temp chứa giá trị biến i
 *      6. giá trị biến i chứa giá trị biến j
 *      7. biến temp gán lại giá trị biến j
 *
 * Đầu ra
 *      1. Xuất biên mảng numberList ra màn hình
 */

function numberListSort(numberList) {
    for (let i = 0; i < numberList.length - 1; i++) {
        for (let j = i + 1; j < numberList.length; j++) {
            if (numberList[i] > numberList[j]) {
                let temp = numberList[i];
                numberList[i] = numberList[j];
                numberList[j] = temp;
            }
        }
    }

    return numberList;
}

document.getElementById("btnSapXep").onclick = function () {
    console.log(numberListSort(numberList));
    document.getElementById(
        "showSapXep"
    ).innerHTML = `👉Mảng sau khi sắp xếp: ${numberListSort(numberList)}`;
};
