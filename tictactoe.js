
   // Global variables;
    var j = 0;
    var playername = [];
    var marker = [];
    var divid;
    var pname;
    var mark;   
    var start;
    var divtableid;
var tableid;
    //tableid.style.display = 'none';
    //divid.style.display = 'none';
    //start.style.display = 'none';
   var playerid;

    function toggledisplay() {
       
        debugger;
  divid = document.getElementById("toggle")
   pname = document.getElementById("name")
    mark = document.getElementById("mark")
         pname.value = "";
        mark.value = "";
        divid.style.display = "block"

    }
    function getdata() {
        debugger;
   
  playerid = document.getElementById("Player");
       var value = mark.value;
        if (marker.length == 0) {
            playername[0]=pname.value;
            marker[0]=mark.value;
            divid.style.display = 'none';
            playerid.innerText = "Player2"
        }

        else {
            for (var i = 0; i < marker.length; i++) {

                if (marker[i] == value) {
                    debuggerdebugger
                    divid.style.display = "visible";
                    pname.value = "";
                    mark.value = "";
                    alert("same marker used")

                }
                else {
                    start = document.getElementById("startgame");
                    playername[1]=pname.value;
                    marker[1]=mark.value;
                    document.getElementById("playerinformation").style.display = 'none';
                    divid.style.display = "none"
                    start.style.display = 'block'
                    break;
                }

            }
        }
    }

    function startgame() {
 divtableid = document.getElementById("table");
        divtableid.style.display = 'block';
    }


    function getrow(e) {

       tableid = document.getElementById('example')
        e.className = "unselect";
        var tdid = document.getElementById(e.id)
        tableid.removeEventListener("click", getrow)
        var columnindex = e.cellIndex;
        var rowindex = e.parentElement.rowIndex;
        if (j % 2 != 0) {
            e.innerText = marker[1];
            j++;
        }
        else {
            e.innerText = marker[0];
            j++;
        }


        if (j >= 3) {
            
            var value = findwinner();
            var spanid = document.getElementById('result')
            if (value == 0)
            { return }
            else {
                switch (value) {
                    case 1: spanid.innerText = playername[0] + "wins";
                        hide()
                        break;
                    case 2: spanid.innerText = playername[1] + "wins";
                        hide()
                        break;
                    case 3: spanid.innerText = "Match Drawn";
                        hide()
                        break;
                    default: "End";
                        hide()
                        break;

                }
            }
            
            return;
            
        }
        
    }
    function hide()
    {

        tableid.style.display = 'none';
        start.style.display = 'none';
    }

    function findwinner() {
        debugger;
     
 
        if (((tableid.rows[0].cells[0].innerText == tableid.rows[0].cells[1].innerText) && (tableid.rows[0].cells[1].innerText == tableid.rows[0].cells[2].innerText) && (tableid.rows[0].cells[0].innerText == marker[0])) || ((tableid.rows[1].cells[0].innerText == tableid.rows[1].cells[1].innerText) && (tableid.rows[1].cells[1].innerText == tableid.rows[1].cells[2].innerText) && (tableid.rows[1].cells[0].innerText == marker[0]))) {
            debugger;
            return 1;
        }
        else if (((tableid.rows[2].cells[0].innerText == tableid.rows[2].cells[1].innerText) && (tableid.rows[2].cells[1].innerText == tableid.rows[2].cells[2].innerText) && (tableid.rows[2].cells[0].innerText == marker[0])) || ((tableid.rows[0].cells[0].innerText == tableid.rows[1].cells[1].innerText) && (tableid.rows[1].cells[1].innerText == tableid.rows[2].cells[2].innerText) && (tableid.rows[0].cells[0].innerText == marker[0]))) {
            debugger;
            return 1;
        }
        else if (((tableid.rows[0].cells[0].innerText == tableid.rows[1].cells[0].innerText) && (tableid.rows[1].cells[0].innerText == tableid.rows[2].cells[0].innerText) && (tableid.rows[0].cells[0].innerText == marker[0])) || ((tableid.rows[0].cells[1].innerText == tableid.rows[1].cells[1].innerText) && (tableid.rows[1].cells[1].innerText == tableid.rows[2].cells[1].innerText) && (tableid.rows[0].cells[1].innerText == marker[0]))) {
            debugger;
            return 1;
        }
        else if (((tableid.rows[0].cells[2].innerText == tableid.rows[1].cells[2].innerText) && (tableid.rows[1].cells[2].innerText == tableid.rows[2].cells[2].innerText) && (tableid.rows[0].cells[2].innerText == marker[0])) || ((tableid.rows[0].cells[2].innerText == tableid.rows[1].cells[1].innerText) && (tableid.rows[1].cells[1].innerText == tableid.rows[2].cells[0].innerText) && (tableid.rows[0].cells[2].innerText == marker[0]))) {
            debugger;
            return 1;
        }
       else if (((tableid.rows[0].cells[0].innerText == tableid.rows[0].cells[1].innerText) && (tableid.rows[0].cells[1].innerText == tableid.rows[0].cells[2].innerText) && (tableid.rows[0].cells[0].innerText == marker[1])) || ((tableid.rows[1].cells[0].innerText == tableid.rows[1].cells[1].innerText) && (tableid.rows[1].cells[1].innerText == tableid.rows[1].cells[2].innerText) && (tableid.rows[1].cells[0].innerText == marker[1]))) {
            debugger;
            return 2;
        }
        else if (((tableid.rows[2].cells[0].innerText == tableid.rows[2].cells[1].innerText) && (tableid.rows[2].cells[1].innerText == tableid.rows[2].cells[2].innerText) && (tableid.rows[2].cells[0].innerText == marker[1])) || ((tableid.rows[0].cells[0].innerText == tableid.rows[1].cells[1].innerText) && (tableid.rows[1].cells[1].innerText == tableid.rows[2].cells[2].innerText) && (tableid.rows[0].cells[0].innerText == marker[1]))) {
            debugger;
            return 2;
        }
        else if (((tableid.rows[0].cells[0].innerText == tableid.rows[1].cells[0].innerText) && (tableid.rows[1].cells[0].innerText == tableid.rows[2].cells[0].innerText) && (tableid.rows[0].cells[0].innerText == marker[1])) || ((tableid.rows[0].cells[1].innerText == tableid.rows[1].cells[1].innerText) && (tableid.rows[1].cells[1].innerText == tableid.rows[2].cells[1].innerText) && (tableid.rows[0].cells[1].innerText == marker[1]))) {
            debugger;
            return 2;
        }
        else if (((tableid.rows[0].cells[2].innerText == tableid.rows[1].cells[2].innerText) && (tableid.rows[1].cells[2].innerText == tableid.rows[2].cells[2].innerText) && (tableid.rows[0].cells[2].innerText == marker[1])) || ((tableid.rows[0].cells[2].innerText == tableid.rows[1].cells[1].innerText) && (tableid.rows[1].cells[1].innerText == tableid.rows[2].cells[0].innerText) && (tableid.rows[0].cells[2].innerText == marker[1]))) {
            debugger;
            return 2;
        }
        else if (((tableid.rows[0].cells[0].innerText != "") && (tableid.rows[0].cells[1].innerText != "") && (tableid.rows[0].cells[2].innerText != "") && (tableid.rows[1].cells[0].innerText != "") && (tableid.rows[1].cells[1].innerText != "")) && (tableid.rows[1].cells[2].innerText != "") && (tableid.rows[2].cells[0].innerText != "") && (tableid.rows[2].cells[1].innerText != "") && (tableid.rows[2].cells[2].innerText != "")) {
            debugger;
            return 3;
        }
        else
            debugger;
            return 0;
      
    }
