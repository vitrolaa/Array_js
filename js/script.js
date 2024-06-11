var Arr = [];

function addItem(){
    if(localStorage.meuArr){
        Arr = JSON.parse(localStorage.getItem('meuArr'));
    }
    let novoItem = document.getElementById("v").value;
    Arr.push(novoItem);
    document.getElementById("v").value = " ";
    localStorage.menuArr = JSON.stringify(Arr);
    }

    function showItems(){
        let resultDiv = document.getElementById('d');
        resultDiv.innerHTML = " ";
        if(localStorage.meuArr){
            Arr = JSON.parse(localStorage.getItem('meuArr'));
        }
        for(var i in Arr){
            let p = document.createElement("p");
            p.innerHTML = Arr[i];
            resultDiv.append(p);
        }
    }

    function clearItems(){
        Arr = [];
        localStorage.menuArr = JSON.stringify(Arr);
    }