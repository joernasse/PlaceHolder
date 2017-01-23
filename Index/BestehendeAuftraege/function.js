


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

    
    