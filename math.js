document.getElementById("calculate").addEventListener("click", calculateMath)

function calculateMath(){
    const first_num = document.getElementById('first_num').value;
    const second_num = document.getElementById('second_num').value;

    let radios = document.getElementsByName('math');
    let selected;
    for (let radio of radios) 
    {
        if (radio.checked) {
            selected = radio.value;
            break;
        }
    }
    if (first_num == null || isNaN(Number(first_num)) || first_num.trim() == '')
    {
        document.getElementById('alert').textContent = "Số thứ nhất không phải là số!"; 
        return;
    }

    if (second_num == null || isNaN(Number(second_num)) || second_num.trim() == '')
    {
        document.getElementById('alert').textContent = "Số thứ hai không phải là số!";
        return;
    }

    if (!selected)
    {
        document.getElementById('alert').textContent = "Bạn chưa chọn phép toán!"; 
        return;
    }

    if (selected == "plus")
    {
        document.getElementById('result').value = Number(first_num) + Number(second_num);
    }

    else if (selected == "minus")
    {
        document.getElementById('result').value = Number(first_num) - Number(second_num);
    }

    else if (selected == "multiply")
    {
        document.getElementById('result').value = Number(first_num) * Number(second_num);
    }

    else if (selected == "divide")
    {
        document.getElementById('result').value = Number(first_num) / Number(second_num);
    }

    document.getElementById('alert').textContent = "";
}