
function saveadress() {
    localStorage.setItem("startAdresse", document.getElementById("startStr").value + "\n" + document.getElementById("startPlz").value + document.getElementById("startOrt").value + "\n" + document.getElementById("startLand").value);
    localStorage.setItem("zielAdresse", document.getElementById("zielStr").value + "\n" + document.getElementById("zielPlz").value+" " + document.getElementById("zielOrt").value + "\n" + document.getElementById("zielLand").value);
    document.location.href = "moebel.html";
}
function loadsmaller() {
    if (document.getElementById("carname").title == "k") {
        alert("Kleinere Fahrzeuge sind nicht verf�gbar.");
    } else
        if (document.getElementById("carname").title == "g") {
        document.getElementById("carname").title = "m";
        document.getElementById("carname").innerText = "mittlerer LKW";
        document.getElementById("carimg").src = "mLKW.jpg";
        } else
            if (document.getElementById("carname").title == "m") {
        document.getElementById("carname").title = "k";
        document.getElementById("carname").innerText = "kleiner LKW";
        document.getElementById("carimg").src = "kLKW.jpg";
    }    
}

    function loadbigger() {
        if (document.getElementById("carname").title == "k") {
            document.getElementById("carname").title = "m";
            document.getElementById("carname").innerText = "mittlerer LKW";
            document.getElementById("carimg").src = "mLKW.jpg";
        } else
            if (document.getElementById("carname").title == "m") {
            document.getElementById("carname").title = "g";
            document.getElementById("carname").innerText = "grosser LKW";
            document.getElementById("carimg").src = "gLKW.jpg";

        }else
            if (document.getElementById("carname").title == "g") {
                alert("Gr�ssere Fahrzeuge sind nicht verf�gbar.");
            }
    }
    function savemoebel() {
        localStorage.setItem("stuhl","Stuhl"+"\n"+"klein: "+document.getElementById("stuhlk").value + "\n" +
                                    "mittel: " + document.getElementById("stuhlm").value + "\n" +
                                    "gross: " + document.getElementById("stuhlg").value + "\n");

        localStorage.setItem("tisch", "Tisch"+"\n"+"klein: " + document.getElementById("tischk").value + "\n" +
                                    "mittel: " + document.getElementById("tischm").value + "\n" +
                                    "gross: " + document.getElementById("tischg").value + "\n");
        localStorage.setItem("schrank", "Schrank" + "\n" + "klein: " + document.getElementById("schrankk").value + "\n" +
                                    "mittel: " + document.getElementById("schrankm").value + "\n" +
                                    "gross: " + document.getElementById("schrankg").value + "\n");

        localStorage.setItem("bett", "Bett" + "\n" + "klein: " + document.getElementById("bettk").value + "\n" +
                                    "mittel: " + document.getElementById("bettm").value + "\n" +
                                    "gross: " + document.getElementById("bettg").value + "\n");
        document.location.href = "fahrzeug.html";
    }
    function savecar() {
        localStorage.setItem("carimg",document.getElementById("carimg").src);  
        document.location.href = "helfer.html";
    }
    function savehelfer() {
        localStorage.setItem("helfer", "Allgemeine Helfer: " + document.getElementById("aH").value + "\n" +
                                    "Klempner: " + document.getElementById("klempner").value + "\n" +
                                    "Elektriker: " + document.getElementById("elektriker").value + "\n" +
                                    "Tischler: " + document.getElementById("tischler").value);
        document.location.href = "tools.html";
    }
    function savetool() {
        localStorage.setItem("essen", "Cola: " + document.getElementById("cola").value + "\n" +
                                    "Fanta: " + document.getElementById("fanta ").value + "\n" +
                                    "Bier: " + document.getElementById("bier").value + "\n\n" +
                                    "Salzstangen: " + document.getElementById("salzS").value + "\n" +
                                    "HotDogs: " + document.getElementById("hotD").value + "\n" +
                                    "Mettbr�tchen: " + document.getElementById("broetchen").value);
        localStorage.setItem("werk", "Werkzeug: Standard Werkzeug Box"+ "\n" +
                                    "Weitere W�nsche: " + document.getElementById("extratool").value);
        document.location.href = "summary.html";
    }
    function summaryCalc() {
        document.getElementById("startsummary").value = "";
        document.getElementById("zielsummary").value = "";
        document.getElementById("imgcarsummary").value = "";
        document.getElementById("helfersummary").value = "";
        document.getElementById("essensummary").value = "";
        document.getElementById("boxsummary").value = "";
        document.getElementById("moebelsummary").value = "";


        document.getElementById("startsummary").value = localStorage.getItem("startAdresse");
        document.getElementById("zielsummary").value = localStorage.getItem("zielAdresse");
        document.getElementById("imgcarsummary").src = localStorage.getItem("carimg");
        document.getElementById("helfersummary").value = localStorage.getItem("helfer");
        document.getElementById("essensummary").value = localStorage.getItem("essen");
        document.getElementById("boxsummary").value = localStorage.getItem("werk");
        document.getElementById("moebelsummary").value = localStorage.getItem("stuhl") + "\n" +
                                                                               localStorage.getItem("schrank")+"\n"+
                                                                               localStorage.getItem("tisch")+"\n"+
                                                                               localStorage.getItem("bett");

    }

