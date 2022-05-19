if (localStorage.getItem('arrU') != null) {
    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    arrU = JSON.parse(localStorage.getItem('arrU'));
}
else {
    localStorage.setItem("arrU", JSON.stringify([]));
    localStorage.setItem("currentUser", JSON.stringify([]));
}

$("document").ready(function () {
    // localStorage.setItem("arrU", JSON.stringify([]));
    // localStorage.setItem("currentUser", JSON.stringify([]));

    currentUser = JSON.parse(localStorage.getItem('currentUser'));
    arrU = JSON.parse(localStorage.getItem('arrU'));

    console.log(arrU);


    //[name], [roundsplayed], [current streak], [highest streak] [word, attempt], 


    $(".toHowTo").click(function () {
        location.href = 'howto.html';
    });

    $(".toStats").click(function () {
        if (currentUser == undefined) {
            alert("Belum masukkan nama !");
        }
        else location.href = 'statistics.html';
    });

    $(".toOptions").click(function () {
        if (currentUser == undefined) {
            alert("Belum masukkan nama !");
        }
        else location.href = 'statistics.html';
    });
    
    $("#playbutton").click(function () {

        
        
        if ($("#insertusername").val() != "") {
            let usernameDitemukan = false;
            let inputNama;
            inputNama = $("#insertusername").val();

            for (let i = 0; i < arrU.length; i++) {
                if (inputNama == arrU[i][0]) {
                    console.log("Nama ditemukan");
                    usernameDitemukan = true;
                    currentUser = arrU[i];
                    $("#gameMenuName").text(currentUser[i][0]);
                }
            }

            if (usernameDitemukan == false) {
                arrU.push([[inputNama],[0],[0],[0],[]]);
                currentUser = arrU[arrU.length - 1];
                $("#gameMenuName").text(currentUser[0][0]);
            }

            console.log(arrU);
            console.log(typeof arrU);
        }
   
        localStorage.setItem("arrU", JSON.stringify(arrU));
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
    });

    

})