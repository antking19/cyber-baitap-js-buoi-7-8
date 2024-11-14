let numberList = [];
document.getElementById("btnThemSo").onclick = function () {
    const txtThemSo = document.getElementById("txtThemSo").value * 1;
    numberList.push(txtThemSo);

    document.getElementById("themSo").innerHTML = `👉: ${numberList}`;
};
