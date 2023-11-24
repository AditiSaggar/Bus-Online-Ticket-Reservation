// validaion on the search bus

// Bus Booking searching

function searchBuses(){
    let dept=document.getElementById("departure").value;
    let dest=document.getElementById("destination").value;
    let date = document.getElementById("date").value;
    
    if (dept===""){
        document.getElementById("dept_val").innerHTML="Please select the field";
    }
    
    else{
        document.getElementById("dept_val").innerHTML="";
    }
    
    if (dest===""){
        document.getElementById("dest_val").innerHTML="Please select the field";
    
    }
    else{
        document.getElementById("dest_val").innerHTML="";
    }
    
    // if(dept===dest){
    //     document.getElementById("date_val").innerHTML="Don't select the same location";
    //     document.getElementById("dept_val").innerHTML="";
    //     document.getElementById("dest_val").innerHTML="";
    // }

    if(date== ""){
        document.getElementById('date').innerHTML="";
        return false
    }
    else{
        document.getElementById("date_val").innerHTML="";
    }

    let busData={
        deptarture:dept,
        destination:dest,
        date:date.value
    };localStorage.setItem(dept,JSON.stringify(busData))
}




