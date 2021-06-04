function checkfruit()
{
    let fruit = document.getElementById('fruit').value;
    
    switch (fruit) {
        
        case "Ổi":
            document.getElementById('result').innerHTML = "20000";
            break;
        case "Dưa Hấu":
            document.getElementById('result').innerHTML = "20000";
            break;
        case "Táo":
            document.getElementById('result').innerHTML = "30000";
            break;
        case "Xoài":
            document.getElementById('result').innerHTML = "30000";
            break;
        case "Cam":
            document.getElementById('result').innerHTML = "40000";
            break;
        case "Chôm Chôm":
            document.getElementById('result').innerHTML = "40000";
            break;
        case "Măng Cụt":
            document.getElementById('result').innerHTML = "50000";
            break;

    }
}