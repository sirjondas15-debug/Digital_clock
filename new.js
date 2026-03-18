function time(){
    var apm="AM";
    if (hh>12){
        hh-=12;
        apm="PM"
    }
    var dt = new Date();
    
    //hours
    var hh=dt.getHours();
    if (hh>12){
        hh-=12;
    }
    if (hh<10){
        document.getElementById('H2').innerText=hh;
    }else{
        var H2nd=hh%10;
        var H1st=hh-H2nd;
        H1st=H1st/10;
        document.getElementById('H1').innerText=H1st;
        document.getElementById('H2').innerText=H2nd;
    }
    
    //Minutes
    var mm=dt.getMinutes();
    if (mm<10){
        document.getElementById('M2').innerText=mm;
    }else{
        var M2nd=mm%10;
        var M1st=mm-M2nd;
        M1st=M1st/10;
        document.getElementById('M1').innerText=M1st;
        document.getElementById('M2').innerText=M2nd;
    }
    
    //Seconds
    var ss=dt.getSeconds();
    if (ss<10){
        document.getElementById('S2').innerText=ss;
    }else{
        var S2nd=ss%10;
        var S1st=ss-S2nd;
        S1st=S1st/10;
        document.getElementById('S1').innerText=S1st;
        document.getElementById('S2').innerText=S2nd;
    }
    
    setTimeout("time();",1000);
}

//switch
function swich(){
    time();
    var sw=document.getElementById('sid');
    if(sw.src.match("off")){
        sw.src="on.jpg";
        document.getElementById('click').play();
        document.getElementById('sid').style.boxShadow="0px 0px 25px cyan";
        document.body.style.backgroundImage="url(/storage/emulated/0/Pictures/Screenshot/Screenshot_20260310-091253.jpg)";
        document.getElementById('clock').style.display="flex";
    }else{
        sw.src="off.jpg";
        document.getElementById('click').play();
        document.getElementById('sid').style.boxShadow="0px 0px 25px red";
        document.body.style.backgroundImage="url(lightoff.png)";
        document.getElementById('clock').style.display="none";
    }
}