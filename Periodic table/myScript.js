function myFunction() {
    document.getElementById("demo").innerHTML= "Java test working";
}

var table = document.getElementById("perTable");
if (table != null) {
    for (var i = 0; i < table.rows.length; i++) {
        for (var j = 0; j < table.rows[i].cells.length; j++)
        table.rows[i].cells[j].onclick = function () {
            tableText(this), tableTalk(this);
        };
    }
}

function tableText(tableCell) {
    alert(tableCell.innerHTML);
}

function tableTalk(tableCell) {
    document.getElementById("demo2").innerHTML= tableCell.innerHTML; 
}

/* Multiple functions that each pull in data from element such as id, class, title, etc.???*/
/* TableTalk in above function is new, original function was only talbeText */