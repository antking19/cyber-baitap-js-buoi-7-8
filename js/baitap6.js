/**
 * Đầu vào
 *      1. Nhập mảng numberList
 *      2. Nhập vị trí 1 và vị trí 2
 *
 * Xử lý
 *      1. Tạo biến temp chứa vị trí 1
 *      2. Gán vị trí 2 cho vị trí 1
 *      3. Gán lại biến tạm cho vị trí 2
 *
 * Đầu ra
 *      In mảng numberList
 */

document.getElementById("btnDoiCho").onclick = function () {
    const txtViTri1 = document.getElementById("txtViTri1").value * 1;
    const txtViTri2 = document.getElementById("txtViTri2").value * 1;

    let temp = numberList[txtViTri1];
    numberList[txtViTri1] = numberList[txtViTri2];
    numberList[txtViTri2] = temp;

    document.getElementById(
        "showDoiCho"
    ).innerHTML = `👉Mảng sau khi đổi: ${numberList}`;
};
