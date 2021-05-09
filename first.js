
// function myFunction() {
//     //document.getElementById("demo").innerHTML = "Paragraph changed.";
//     val = document.getElementById("age").value 
//     // value = document.getElementById("demo").innerText;
//     console.log(val)

// }

function Func(){
    var number;
    var list1;
    number = document.getElementById("nos").value;
    list1 = number.split(',');
    console.log(list1[0])
    if (list1[0]>list1[1] && list1[0]>list1[2]) {
        //console.log("value")
        document.getElementById("large").innerHTML = list1[0] +" "+ "is largest No";
    } else if (list1[1]>list1[0]  && list1[1]>list1[2]){
        document.getElementById("large").innerHTML = list1[1] + " " + "is largest No";
    }
    else{
        document.getElementById("large").innerHTML = list1[2] + " " + "is largest No";

    }
    
}

