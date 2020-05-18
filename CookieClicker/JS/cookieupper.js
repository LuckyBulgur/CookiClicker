var plusmaker = 1;

function add(){
    cookiecount = cookiecount + plusmaker;
    document.getElementById('count').textContent = "Cookies: " + cookiecount;
    document.title = cookiecount + " Cookies";
}

function pluseins(){
    if(cookiecount >= 50)
    {                                       
        cookiecount = cookiecount - 50;
        plusmaker = plusmaker + 1;
        document.title = cookiecount + " Cookies";
        document.getElementById('count').textContent = "Cookies: " + cookiecount;
        document.getElementById('plusplus').textContent = plusmaker + " Cookies pro Click";
    }
    else
    {
        document.getElementById('notgenug').textContent = "Nicht genügend Cookies";
        setTimeout(() => { document.getElementById('notgenug').textContent = ""; }, 1000);
    }
}

function upgraden(){
    if (cookiecount >= 100){
        var clicker = 1;
        clicker = setTimeout(upgraden, 1000)
        cookiecount = cookiecount + clicker;
        anzeigen();
    }
    else
    {
        document.getElementById('notgenug').textContent = "Nicht genügend Cookies";
        setTimeout(() => { document.getElementById('notgenug').textContent = ""; }, 1000);
    }
}

function anzeigen(){
    document.title = cookiecount + " Cookies";
    document.getElementById('count').textContent = "Cookies: " + cookiecount;
}setTimeout(anzeigen, 0);