var n=0;
function Sorting(n)
{
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("tableF");
    switching = true;
    dir = "asc";
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("td")[n];
        y = rows[i + 1].getElementsByTagName("td")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

  const  Search = () => 
  {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("SearchBar");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableF");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
}


const debounce = function (fn, d) {
  let timer;
  return function () {
  let context = this, args = arguments;
  clearTimeout(timer);
  timer = setTimeout(() => {
          fn.apply(context, args);
      }, d)
  }
}

const Search1 = debounce(Search, 1000);
function Bwrd(){
    var box= document.getElementById("box_F")
    var wid=box.clientWidth+5;
    // console.log(wid)
           document.getElementById("recommendedCart").scrollBy(-wid,0)
    }

 function Fwrd(){
    var box= document.getElementById("box_F")
    var wid=box.clientWidth+5;
    // console.log(wid)
        document.getElementById("recommendedCart").scrollBy(wid,0);
    }  
    function dis(){
    
      document.getElementById("navBar").style.display="initial";
      document.getElementById("cross").style.display="initial";
      document.getElementById("menuu").style.display="none";
      document.getElementById("boxx").style.display="initial";
      document.getElementById("topBar").style.opacity = "0.2";
    
      document.getElementById("mainBar").style.opacity = "0.4";
    }
    function dis2(){
    
      document.getElementById("navBar").style.display="none";
      document.getElementById("cross").style.display="none";
      document.getElementById("menuu").style.display="initial";
      document.getElementById("boxx").style.display="none";
      document.getElementById("topBar").style.opacity = "1";
    
      document.getElementById("mainBar").style.opacity = "1";
    }