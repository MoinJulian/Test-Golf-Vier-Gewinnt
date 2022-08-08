let feld1;
let feld2;
let feld3;
let feld4;
let feld5;
let feld6;
let feld7;
let feld8;
let feld9;
let feld10;
let feld11;
let feld12;
let feld13;
let feld14;
let feld15;
let feld16;
let feld17;
let feld18;
let feld19;
let feld20;
let feld21;
let feld22;
let feld23;
let feld24;
let feld25;
let feld26;
let feld27;
let feld28;
let feld29;
let feld30;
let feld31;
let feld32;
let feld33;
let feld34;
let feld35;
let feld36;
let feld37;
let feld38;
let feld39;
let feld40;
let feld41;
let feld42;
let feld43;
let feld44;
let feld45;
let feld46;
let feld47;
let feld48;
let feld49;
let feld50;
let feld51;
let feld52;
let feld53;
let feld54;
let feld55;
let feld56;
let team0 = "darkgoldenrod"; //blaues Team
let team1 = "darkred"; //rotes Team
let teams = 0;
let checked1 = false; let checked2 = false; let checked3 = false; let checked4 = false; let checked5 = false;
let checked6 = false; let checked7 = false; let checked8 = false; let checked9 = false; let checked10 = false;
let checked11 = false; let checked12 = false; let checked13 = false; let checked14 = false; let checked15 = false;
let checked16 = false; let checked17 = false; let checked18 = false; let checked19 = false; let checked20 = false;
let checked21 = false; let checked22 = false; let checked23 = false; let checked24 = false; let checked25 = false;
let checked26 = false; let checked27 = false; let checked28 = false; let checked29 = false; let checked30 = false;
let checked31 = false; let checked32 = false; let checked33 = false; let checked34 = false; let checked35 = false;
let checked36 = false; let checked37 = false; let checked38 = false; let checked39 = false; let checked40 = false;
let checked41 = false; let checked42 = false; let checked43 = false; let checked44 = false; let checked45 = false;
let checked46 = false; let checked47 = false; let checked48 = false; let checked49 = false; let checked50 = false;
let checked51 = false; let checked52 = false; let checked53 = false; let checked54 = false; let checked55 = false;
let checked56 = false;

function FieldAlreadyChecked(field) {
    if(field == 1) {
        if(checked1 == true) {
            changeTeam();
        }else if(checked1 == false) {
            Field(field);
        }
    }
}

function Field(field) { //field = Nummer des Feldes

    currentPlayer();
    if(teams == 0) {
        if(field == 1) {
            document.getElementById("1").style.backgroundColor = team0;
            feld1 = team0;
            checked1 = true;      
        }else if(field == 2) {
            document.getElementById("2").style.backgroundColor = team0;
            feld2 = team0;
            checked2 = true;
        }else if(field == 3) {
            document.getElementById("3").style.backgroundColor = team0;
            feld3 = team0
            checked3 = true;
        }else if(field == 4) {
            document.getElementById("4").style.backgroundColor = team0;
            feld4 = team0;    
            checked4 = true;  
        }else if(field == 5) {
            document.getElementById("5").style.backgroundColor = team0;
            feld5 = team0;
            checked5 = true;
        }else if(field == 6) {
            document.getElementById("6").style.backgroundColor = team0;
            feld6 = team0
            checked6 = true;
        }else if(field == 7) {
            document.getElementById("7").style.backgroundColor = team0;
            feld7 = team0
            checked7 = true;
        }else if(field == 8) {
            document.getElementById("8").style.backgroundColor = team0;
            feld8 = team0;  
            checked8 = true;    
        }else if(field == 9) {
            document.getElementById("9").style.backgroundColor = team0;
            feld9 = team0;
            checked9 = true;
        }else if(field == 10) {
            document.getElementById("10").style.backgroundColor = team0;
            feld10 = team0
            checked10 = true;
        }else if(field == 11) {
            document.getElementById("11").style.backgroundColor = team0;
            feld11 = team0; 
            checked11 = true;     
        }else if(field == 12) {
            document.getElementById("12").style.backgroundColor = team0;
            feld12 = team0;
            checked12 = true;
        }else if(field == 13) {
            document.getElementById("13").style.backgroundColor = team0;
            feld13 = team0
            checked13 = true;
        }else if(field == 14) {
            document.getElementById("14").style.backgroundColor = team0;
            feld14 = team0; 
            checked14 = true;     
        }else if(field == 15) {
            document.getElementById("15").style.backgroundColor = team0;
            feld15 = team0;
            checked15 = true;
        }else if(field == 16) {
            document.getElementById("16").style.backgroundColor = team0;
            feld16 = team0;
            checked16 = true;
        }else if(field == 17) {
            document.getElementById("17").style.backgroundColor = team0;
            feld17 = team0;
            checked17 = true;      
        }else if(field == 18) {
            document.getElementById("18").style.backgroundColor = team0;
            feld18 = team0;
            checked18 = true;
        }else if(field == 19) {
            document.getElementById("19").style.backgroundColor = team0;
            feld19 = team0;
            checked19 = true;
        }else if(field == 20) {
            document.getElementById("20").style.backgroundColor = team0;
            feld20 = team0; 
            checked20 = true;     
        }else if(field == 21) {
            document.getElementById("21").style.backgroundColor = team0;
            feld21 = team0;
            checked21 = true;
        }else if(field == 22) {
            document.getElementById("22").style.backgroundColor = team0;
            feld22 = team0;
            checked22 = true;
        }else if(field == 23) {
            document.getElementById("23").style.backgroundColor = team0;
            feld23 = team0; 
            checked23 = true;     
        }else if(field == 24) {
            document.getElementById("24").style.backgroundColor = team0;
            feld24 = team0;
            checked24 = true;
        }else if(field == 25) {
            document.getElementById("25").style.backgroundColor = team0;
            feld25 = team0;
            checked25 = true;
        }else if(field == 26) {
            document.getElementById("26").style.backgroundColor = team0;
            feld26 = team0; 
            checked26 = true;     
        }else if(field == 27) {
            document.getElementById("27").style.backgroundColor = team0;
            feld27 = team0;
            checked27 = true;
        }else if(field == 28) {
            document.getElementById("28").style.backgroundColor = team0;
            feld28 = team0
            checked28 = true;
        }else if(field == 29) {
            document.getElementById("29").style.backgroundColor = team0;
            feld29 = team0;
            checked29 = true;      
        }else if(field == 30) {
            document.getElementById("30").style.backgroundColor = team0;
            feld30 = team0;
            checked30 = true;
        }else if(field == 31) {
            document.getElementById("31").style.backgroundColor = team0;
            feld31 = team0;
            checked31 = true;
        }else if(field == 32) {
            document.getElementById("32").style.backgroundColor = team0;
            feld32 = team0;
            checked32 = true;      
        }else if(field == 33) {
            document.getElementById("33").style.backgroundColor = team0;
            feld33 = team0;
            checked33 = true;
        }else if(field == 34) {
            document.getElementById("34").style.backgroundColor = team0;
            feld34 = team0;
            checked34 = true;
        }else if(field == 35) {
            document.getElementById("35").style.backgroundColor = team0;
            feld35 = team0; 
            checked35 = true;     
        }else if(field == 36) {
            document.getElementById("36").style.backgroundColor = team0;
            feld36 = team0;
            checked36 = true;
        }else if(field == 37) {
            document.getElementById("37").style.backgroundColor = team0;
            feld37 = team0;
            checked37 = true;
        }else if(field == 38) {
            document.getElementById("38").style.backgroundColor = team0;
            feld38 = team0; 
            checked38 = true;     
        }else if(field == 39) {
            document.getElementById("39").style.backgroundColor = team0;
            feld39 = team0;
            checked39 = true;
        }else if(field == 40) {
            document.getElementById("40").style.backgroundColor = team0;
            feld40 = team0;
            checked40 = true;
        }else if(field == 41) {
            document.getElementById("41").style.backgroundColor = team0;
            feld41 = team0; 
            checked41 = true;     
        }else if(field == 42) {
            document.getElementById("42").style.backgroundColor = team0;
            feld42 = team0;
            checked9 = true;
        }else if(field == 43) {
            document.getElementById("43").style.backgroundColor = team0;
            feld43 = team0;
            checked43 = true;
        }else if(field == 44) {
            document.getElementById("44").style.backgroundColor = team0;
            feld44 = team0; 
            checked44 = true;     
        }else if(field == 45) {
            document.getElementById("45").style.backgroundColor = team0;
            feld45 = team0;
            checked45 = true;
        }else if(field == 46) {
            document.getElementById("46").style.backgroundColor = team0;
            feld46 = team0;
            checked46 = true;
        }else if(field == 47) {
            document.getElementById("47").style.backgroundColor = team0;
            feld47 = team0; 
            checked47 = true;     
        }else if(field == 48) {
            document.getElementById("48").style.backgroundColor = team0;
            feld48 = team0;
            checked48 = true;
        }else if(field == 49) {
            document.getElementById("49").style.backgroundColor = team0;
            feld49 = team0;
            checked49 = true;
        }else if(field == 50) {
            document.getElementById("50").style.backgroundColor = team0;
            feld50 = team0; 
            checked50 = true;     
        }else if(field == 51) {
            document.getElementById("51").style.backgroundColor = team0;
            feld51 = team0;
            checked51 = true;
        }else if(field == 52) {
            document.getElementById("52").style.backgroundColor = team0;
            feld52 = team0;
            checked52 = true;
        }else if(field == 53) {
            document.getElementById("53").style.backgroundColor = team0;
            feld53 = team0;
            checked53 = true;
        }else if(field == 54) {
            document.getElementById("54").style.backgroundColor = team0;
            feld54 = team0;
            checked54 = true;
        }else if(field == 55) {
            document.getElementById("55").style.backgroundColor = team0;
            feld55 = team0;
            checked55 = true;
        }else if(field == 56) {
            document.getElementById("56").style.backgroundColor = team0;
            feld56 = team0;
            checked56 = true;
        }
    } else if(teams == 1){
        if(field == 1) {
            document.getElementById("1").style.backgroundColor = team1;
            feld1 = team1;    
            checked1 = true;
        }else if(field == 2) {
            document.getElementById("2").style.backgroundColor = team1;
            feld2 = team1;
            checked2 = true;
        }else if(field == 3) {
            document.getElementById("3").style.backgroundColor = team1;
            feld3 = team1;
            checked3 = true;
        }else if(field == 4) {
            document.getElementById("4").style.backgroundColor = team1;
            feld4 = team1;
            checked4 = true;      
        }else if(field == 5) {
            document.getElementById("5").style.backgroundColor = team1;
            feld5 = team1;
            checked5 = true;
        }else if(field == 6) {
            document.getElementById("6").style.backgroundColor = team1;
            feld6 = team1;
            checked6 = true;
        }else if(field == 7) {
            document.getElementById("7").style.backgroundColor = team1;
            feld7 = team1;
            checked7 = true;
        }else if(field == 8) {
            document.getElementById("8").style.backgroundColor = team1;
            feld8 = team1;  
            checked8 = true;    
        }else if(field == 9) {
            document.getElementById("9").style.backgroundColor = team1;
            feld9 = team1;
            checked9 = true;
        }else if(field == 10) {
            document.getElementById("10").style.backgroundColor = team1;
            feld10 = team1;
            checked10 = true;
        }else if(field == 11) {
            document.getElementById("11").style.backgroundColor = team1;
            feld11 = team1; 
            checked11 = true;     
        }else if(field == 12) {
            document.getElementById("12").style.backgroundColor = team1;
            feld12 = team1;
            checked12 = true;
        }else if(field == 13) {
            document.getElementById("13").style.backgroundColor = team1;
            feld13 = team1;
            checked13 = true;
        }else if(field == 14) {
            document.getElementById("14").style.backgroundColor = team1;
            feld14 = team1; 
            checked14 = true;     
        }else if(field == 15) {
            document.getElementById("15").style.backgroundColor = team1;
            feld15 = team1;
            checked15 = true;
        }else if(field == 16) {
            document.getElementById("16").style.backgroundColor = team1;
            feld16 = team1;
            checked16 = true;
        }else if(field == 17) {
            document.getElementById("17").style.backgroundColor = team1;
            feld17 = team1; 
            checked17 = true;     
        }else if(field == 18) {
            document.getElementById("18").style.backgroundColor = team1;
            feld18 = team1;
            checked18 = true;
        }else if(field == 19) {
            document.getElementById("19").style.backgroundColor = team1;
            feld19 = team1;
            checked19 = true;
        }else if(field == 20) {
            document.getElementById("20").style.backgroundColor = team1;
            feld20 = team1; 
            checked20 = true;     
        }else if(field == 21) {
            document.getElementById("21").style.backgroundColor = team1;
            feld21 = team1;
            checked21 = true;
        }else if(field == 22) {
            document.getElementById("22").style.backgroundColor = team1;
            feld22 = team1;
            checked22 = true;
        }else if(field == 23) {
            document.getElementById("23").style.backgroundColor = team1;
            feld23 = team1; 
            checked23 = true;     
        }else if(field == 24) {
            document.getElementById("24").style.backgroundColor = team1;
            feld24 = team1;
            checked24 = true;
        }else if(field == 25) {
            document.getElementById("25").style.backgroundColor = team1;
            feld25 = team1;
            checked25 = true;
        }else if(field == 26) {
            document.getElementById("26").style.backgroundColor = team1;
            feld26 = team1; 
            checked26 = true;     
        }else if(field == 27) {
            document.getElementById("27").style.backgroundColor = team1;
            feld27 = team1;
            checked27 = true;
        }else if(field == 28) {
            document.getElementById("28").style.backgroundColor = team1;
            feld28 = team1;
            checked28 = true;
        }else if(field == 29) {
            document.getElementById("29").style.backgroundColor = team1;
            feld29 = team1; 
            checked29 = true;     
        }else if(field == 30) {
            document.getElementById("30").style.backgroundColor = team1;
            feld30 = team1;
            checked30 = true;
        }else if(field == 31) {
            document.getElementById("31").style.backgroundColor = team1;
            feld31 = team1;
            checked31 = true;
        }else if(field == 32) {
            document.getElementById("32").style.backgroundColor = team1;
            feld32 = team1; 
            checked32 = true;     
        }else if(field == 33) {
            document.getElementById("33").style.backgroundColor = team1;
            feld33 = team1;
            checked33 = true;
        }else if(field == 34) {
            document.getElementById("34").style.backgroundColor = team1;
            feld34 = team1;
            checked34 = true;
        }else if(field == 35) {
            document.getElementById("35").style.backgroundColor = team1;
            feld35 = team1; 
            checked35 = true;     
        }else if(field == 36) {
            document.getElementById("36").style.backgroundColor = team1;
            feld36 = team1;
            checked36 = true;
        }else if(field == 37) {
            document.getElementById("37").style.backgroundColor = team1;
            feld37 = team1;
            checked37 = true;
        }else if(field == 38) {
            document.getElementById("38").style.backgroundColor = team1;
            feld38 = team1; 
            checked38 = true;     
        }else if(field == 39) {
            document.getElementById("39").style.backgroundColor = team1;
            feld39 = team1;
            checked39 = true;
        }else if(field == 40) {
            document.getElementById("40").style.backgroundColor = team1;
            feld40 = team1;
            checked40 = true;
        }else if(field == 41) {
            document.getElementById("41").style.backgroundColor = team1;
            feld41 = team1; 
            checked41 = true;     
        }else if(field == 42) {
            document.getElementById("42").style.backgroundColor = team1;
            feld42 = team1;
            checked42 = true;
        }else if(field == 43) {
            document.getElementById("43").style.backgroundColor = team1;
            feld43 = team1;
            checked43 = true;
        }else if(field == 44) {
            document.getElementById("44").style.backgroundColor = team1;
            feld44 = team1; 
            checked44 = true;     
        }else if(field == 45) {
            document.getElementById("45").style.backgroundColor = team1;
            feld45 = team1;
            checked45 = true;
        }else if(field == 46) {
            document.getElementById("46").style.backgroundColor = team1;
            feld46 = team1;
            checked46 = true;
        }else if(field == 47) {
            document.getElementById("47").style.backgroundColor = team1;
            feld47 = team1; 
            checked47 = true;     
        }else if(field == 48) {
            document.getElementById("48").style.backgroundColor = team1;
            feld48 = team1;
            checked48 = true;
        }else if(field == 49) {
            document.getElementById("49").style.backgroundColor = team1;
            feld49 = team1;
            checked49 = true;
        }else if(field == 50) {
            document.getElementById("50").style.backgroundColor = team1;
            feld50 = team1; 
            checked50 = true;     
        }else if(field == 51) {
            document.getElementById("51").style.backgroundColor = team1;
            feld51 = team1;
            checked51 = true;
        }else if(field == 52) {
            document.getElementById("52").style.backgroundColor = team1;
            feld52 = team1;
            checked52 = true;
        }else if(field == 53) {
            document.getElementById("53").style.backgroundColor = team1;
            feld53 = team1;
            checked53 = true;
        }else if(field == 54) {
            document.getElementById("54").style.backgroundColor = team1;
            feld54 = team1;
            checked54 = true;
        }else if(field == 55) {
            document.getElementById("55").style.backgroundColor = team1;
            feld55 = team1;
            checked55 = true;
        }else if(field == 56) {
            document.getElementById("56").style.backgroundColor = team1;
            feld56 = team1;
            checked56 = true;
        }
    }
    TestWinBlue();
    TestWinRed();
    changeTeam();
}

function TestWinBlue() {
    if (
        // 1. Reihe
        feld1 == team0 && feld2 == team0 && feld3 == team0 && feld4 == team0 ||
        feld2 == team0 && feld3 == team0 && feld4 == team0 && feld5 == team0 ||
        feld3 == team0 && feld4 == team0 && feld5 == team0 && feld6 == team0 ||
        feld4 == team0 && feld5 == team0 && feld6 == team0 && feld7 == team0 ||
        // 2. Reihe
        feld8 == team0 && feld9 == team0 && feld10 == team0 && feld11 == team0 ||
        feld9 == team0 && feld10 == team0 && feld11 == team0 && feld12 == team0 ||
        feld10 == team0 && feld11 == team0 && feld12 == team0 && feld13 == team0 ||
        feld11 == team0 && feld12 == team0 && feld13 == team0 && feld14 == team0 ||
        //3. Reihe
        feld15 == team0 && feld16 == team0 && feld17 == team0 && feld18 == team0 ||
        feld16 == team0 && feld17 == team0 && feld18 == team0 && feld19 == team0 ||
        feld17 == team0 && feld18 == team0 && feld19 == team0 && feld20 == team0 ||
        feld18 == team0 && feld19 == team0 && feld20 == team0 && feld21 == team0 ||
        //4.Reihe
        feld22 == team0 && feld23 == team0 && feld24 == team0 && feld25 == team0 ||
        feld23 == team0 && feld24 == team0 && feld25 == team0 && feld26 == team0 ||
        feld24 == team0 && feld25 == team0 && feld26 == team0 && feld27 == team0 ||
        feld25 == team0 && feld26 == team0 && feld27 == team0 && feld28 == team0 ||
        //5. Reihe
        feld29 == team0 && feld30 == team0 && feld31 == team0 && feld32 == team0 ||
        feld30 == team0 && feld31 == team0 && feld32 == team0 && feld33 == team0 ||
        feld31 == team0 && feld32 == team0 && feld33 == team0 && feld34 == team0 ||
        feld32 == team0 && feld33 == team0 && feld34 == team0 && feld35 == team0 ||
        //6. Reihe
        feld36 == team0 && feld37 == team0 && feld38 == team0 && feld39 == team0 ||
        feld37 == team0 && feld38 == team0 && feld39 == team0 && feld40 == team0 ||
        feld38 == team0 && feld39 == team0 && feld40 == team0 && feld41 == team0 ||
        feld39 == team0 && feld40 == team0 && feld41 == team0 && feld42 == team0 ||
        // 7. Reihe
        feld43 == team0 && feld44 == team0 && feld45 == team0 && feld46 == team0 ||
        feld44 == team0 && feld45 == team0 && feld46 == team0 && feld47 == team0 ||
        feld45 == team0 && feld46 == team0 && feld47 == team0 && feld48 == team0 ||
        feld46 == team0 && feld47 == team0 && feld48 == team0 && feld49 == team0 ||
        //8. Reihe
        feld50 == team0 && feld51 == team0 && feld52 == team0 && feld53 == team0 ||
        feld51 == team0 && feld52 == team0 && feld53 == team0 && feld54 == team0 ||
        feld52 == team0 && feld53 == team0 && feld54 == team0 && feld55 == team0 ||
        feld53 == team0 && feld54 == team0 && feld55 == team0 && feld56 == team0 ||
        //1. Spalte
        feld1 == team0 && feld8 == team0 && feld15 == team0 && feld22 == team0 ||
        feld8 == team0 && feld15 == team0 && feld22 == team0 && feld29 == team0 ||
        feld15 == team0 && feld22 == team0 && feld29 == team0 && feld36 == team0 ||
        feld22 == team0 && feld29 == team0 && feld36 == team0 && feld43 == team0 ||
        feld29 == team0 && feld36 == team0 && feld43 == team0 && feld50 == team0 ||
        //2. Spalte
        feld2 == team0 && feld9 == team0 && feld16 == team0 && feld23 == team0 ||
        feld9 == team0 && feld16 == team0 && feld23 == team0 && feld30 == team0 ||
        feld16 == team0 && feld23 == team0 && feld30 == team0 && feld37 == team0 ||
        feld23 == team0 && feld30 == team0 && feld37 == team0 && feld44 == team0 ||
        feld30 == team0 && feld37 == team0 && feld44 == team0 && feld51 == team0 ||
        //3. Spalte
        feld3 == team0 && feld10 == team0 && feld17 == team0 && feld24 == team0 ||
        feld10 == team0 && feld17 == team0 && feld24 == team0 && feld31 == team0 ||
        feld17 == team0 && feld24 == team0 && feld31 == team0 && feld38 == team0 ||
        feld24 == team0 && feld31 == team0 && feld38 == team0 && feld45 == team0 ||
        feld31 == team0 && feld38 == team0 && feld45 == team0 && feld52 == team0 ||
        //4. Spalte
        feld4 == team0 && feld11 == team0 && feld18 == team0 && feld25 == team0 ||
        feld11 == team0 && feld18 == team0 && feld25 == team0 && feld32 == team0 ||
        feld18 == team0 && feld25 == team0 && feld32 == team0 && feld39 == team0 ||
        feld25 == team0 && feld32 == team0 && feld39 == team0 && feld46 == team0 ||
        feld32 == team0 && feld39 == team0 && feld46 == team0 && feld53 == team0 ||
        //5. Spalte
        feld5 == team0 && feld12 == team0 && feld19 == team0 && feld26 == team0 ||
        feld12 == team0 && feld19 == team0 && feld26 == team0 && feld33 == team0 ||
        feld19 == team0 && feld26 == team0 && feld33 == team0 && feld40 == team0 ||
        feld26 == team0 && feld33 == team0 && feld40 == team0 && feld47 == team0 ||
        feld33 == team0 && feld40 == team0 && feld47 == team0 && feld54 == team0 ||
        //6. Spalte
        feld6 == team0 && feld13 == team0 && feld20 == team0 && feld27 == team0 ||
        feld13 == team0 && feld20 == team0 && feld27 == team0 && feld34 == team0 ||
        feld20 == team0 && feld27 == team0 && feld34 == team0 && feld41 == team0 ||
        feld27 == team0 && feld34 == team0 && feld41 == team0 && feld48 == team0 ||
        feld34 == team0 && feld41 == team0 && feld48 == team0 && feld55 == team0 ||
        //7. Spalte
        feld7 == team0 && feld14 == team0 && feld21 == team0 && feld28 == team0 ||
        feld14 == team0 && feld21 == team0 && feld28 == team0 && feld35 == team0 ||
        feld21 == team0 && feld28 == team0 && feld35 == team0 && feld42 == team0 ||
        feld28 == team0 && feld35 == team0 && feld42 == team0 && feld49 == team0 ||
        feld35 == team0 && feld42 == team0 && feld49 == team0 && feld56 == team0 
        ) {
        writeInfo("Das Dunkelgoldene Team hat das Spiel gewonnen. <br> Herzlichen Glückwunsch!");
        changeTeam();
        currentPlayer();
        setTimeout(function() {
            hideInfo();
            setNull();
        },2000)
    }
}

function TestWinRed() {
    if (
        // 1. Reihe
        feld1 == team1 && feld2 == team1 && feld3 == team1 && feld4 == team1 ||
        feld2 == team1 && feld3 == team1 && feld4 == team1 && feld5 == team1 ||
        feld3 == team1 && feld4 == team1 && feld5 == team1 && feld6 == team1 ||
        feld4 == team1 && feld5 == team1 && feld6 == team1 && feld7 == team1 ||
        // 2. Reihe
        feld8 == team1 && feld9 == team1 && feld10 == team1 && feld11 == team1 ||
        feld9 == team1 && feld10 == team1 && feld11 == team1 && feld12 == team1 ||
        feld10 == team1 && feld11 == team1 && feld12 == team1 && feld13 == team1 ||
        feld11 == team1 && feld12 == team1 && feld13 == team1 && feld14 == team1 ||
        //3. Reihe
        feld15 == team1 && feld16 == team1 && feld17 == team1 && feld18 == team1 ||
        feld16 == team1 && feld17 == team1 && feld18 == team1 && feld19 == team1 ||
        feld17 == team1 && feld18 == team1 && feld19 == team1 && feld20 == team1 ||
        feld18 == team1 && feld19 == team1 && feld20 == team1 && feld21 == team1 ||
        //4.Reihe
        feld22 == team1 && feld23 == team1 && feld24 == team1 && feld25 == team1 ||
        feld23 == team1 && feld24 == team1 && feld25 == team1 && feld26 == team1 ||
        feld24 == team1 && feld25 == team1 && feld26 == team1 && feld27 == team1 ||
        feld25 == team1 && feld26 == team1 && feld27 == team1 && feld28 == team1 ||
        //5. Reihe
        feld29 == team1 && feld30 == team1 && feld31 == team1 && feld32 == team1 ||
        feld30 == team1 && feld31 == team1 && feld32 == team1 && feld33 == team1 ||
        feld31 == team1 && feld32 == team1 && feld33 == team1 && feld34 == team1 ||
        feld32 == team1 && feld33 == team1 && feld34 == team1 && feld35 == team1 ||
        //6. Reihe
        feld36 == team1 && feld37 == team1 && feld38 == team1 && feld39 == team1 ||
        feld37 == team1 && feld38 == team1 && feld39 == team1 && feld40 == team1 ||
        feld38 == team1 && feld39 == team1 && feld40 == team1 && feld41 == team1 ||
        feld39 == team1 && feld40 == team1 && feld41 == team1 && feld42 == team1 ||
        // 7. Reihe
        feld43 == team1 && feld44 == team1 && feld45 == team1 && feld46 == team1 ||
        feld44 == team1 && feld45 == team1 && feld46 == team1 && feld47 == team1 ||
        feld45 == team1 && feld46 == team1 && feld47 == team1 && feld48 == team1 ||
        feld46 == team1 && feld47 == team1 && feld48 == team1 && feld49 == team1 ||
        //8. Reihe
        feld50 == team1 && feld51 == team1 && feld52 == team1 && feld53 == team1 ||
        feld51 == team1 && feld52 == team1 && feld53 == team1 && feld54 == team1 ||
        feld52 == team1 && feld53 == team1 && feld54 == team1 && feld55 == team1 ||
        feld53 == team1 && feld54 == team1 && feld55 == team1 && feld56 == team1 ||
        //1. Spalte
        feld1 == team1 && feld8 == team1 && feld15 == team1 && feld22 == team1 ||
        feld8 == team1 && feld15 == team1 && feld22 == team1 && feld29 == team1 ||
        feld15 == team1 && feld22 == team1 && feld29 == team1 && feld36 == team1 ||
        feld22 == team1 && feld29 == team1 && feld36 == team1 && feld43 == team1 ||
        feld29 == team1 && feld36 == team1 && feld43 == team1 && feld50 == team1 ||
        //2. Spalte
        feld2 == team1 && feld9 == team1 && feld16 == team1 && feld23 == team1 ||
        feld9 == team1 && feld16 == team1 && feld23 == team1 && feld30 == team1 ||
        feld16 == team1 && feld23 == team1 && feld30 == team1 && feld37 == team1 ||
        feld23 == team1 && feld30 == team1 && feld37 == team1 && feld44 == team1 ||
        feld30 == team1 && feld37 == team1 && feld44 == team1 && feld51 == team1 ||
        //3. Spalte
        feld3 == team1 && feld10 == team1 && feld17 == team1 && feld24 == team1 ||
        feld10 == team1 && feld17 == team1 && feld24 == team1 && feld31 == team1 ||
        feld17 == team1 && feld24 == team1 && feld31 == team1 && feld38 == team1 ||
        feld24 == team1 && feld31 == team1 && feld38 == team1 && feld45 == team1 ||
        feld31 == team1 && feld38 == team1 && feld45 == team1 && feld52 == team1 ||
        //4. Spalte
        feld4 == team1 && feld11 == team1 && feld18 == team1 && feld25 == team1 ||
        feld11 == team1 && feld18 == team1 && feld25 == team1 && feld32 == team1 ||
        feld18 == team1 && feld25 == team1 && feld32 == team1 && feld39 == team1 ||
        feld25 == team1 && feld32 == team1 && feld39 == team1 && feld46 == team1 ||
        feld32 == team1 && feld39 == team1 && feld46 == team1 && feld53 == team1 ||
        //5. Spalte
        feld5 == team1 && feld12 == team1 && feld19 == team1 && feld26 == team1 ||
        feld12 == team1 && feld19 == team1 && feld26 == team1 && feld33 == team1 ||
        feld19 == team1 && feld26 == team1 && feld33 == team1 && feld40 == team1 ||
        feld26 == team1 && feld33 == team1 && feld40 == team1 && feld47 == team1 ||
        feld33 == team1 && feld40 == team1 && feld47 == team1 && feld54 == team1 ||
        //6. Spalte
        feld6 == team1 && feld13 == team1 && feld20 == team1 && feld27 == team1 ||
        feld13 == team1 && feld20 == team1 && feld27 == team1 && feld34 == team1 ||
        feld20 == team1 && feld27 == team1 && feld34 == team1 && feld41 == team1 ||
        feld27 == team1 && feld34 == team1 && feld41 == team1 && feld48 == team1 ||
        feld34 == team1 && feld41 == team1 && feld48 == team1 && feld55 == team1 ||
        //7. Spalte
        feld7 == team1 && feld14 == team1 && feld21 == team1 && feld28 == team1 ||
        feld14 == team1 && feld21 == team1 && feld28 == team1 && feld35 == team1 ||
        feld21 == team1 && feld28 == team1 && feld35 == team1 && feld42 == team1 ||
        feld28 == team1 && feld35 == team1 && feld42 == team1 && feld49 == team1 ||
        feld35 == team1 && feld42 == team1 && feld49 == team1 && feld56 == team1 
    ) {
        writeInfo("Das Dunkelrote Team hat das Spiel gewonnen. <br> Herzlichen Glückwunsch!");
        setTimeout(function() {
            hideInfo();
            setNull();
        },2000)
    }
}

function changeTeam() {
    if (teams == 0) {
        teams = 1;
    } else if (teams == 1) {
        teams = 0;
    }
}

const infoElement = document.getElementById("info");

function hideInfo() {
    infoElement.style.display = "none";
}

function writeInfo(txt) {
    infoElement.style.display = "block";
    infoElement.innerHTML = txt;
}

function currentPlayer() {
    if(teams == 1) {
        document.getElementById("currentPlayer").style.backgroundColor = team0;
        document.getElementById("currentPlayer").innerHTML = "Team: Das Dunkelgoldene Team ist dran!";
    }else if(teams == 0) {
        document.getElementById("currentPlayer").style.backgroundColor = team1;
        document.getElementById("currentPlayer").innerHTML = "Team: Das Dunkelrote Team ist am Zug!";
    }else {
        console.log("Bitte Kontaktieren sie unseren Developer um im das Problem mit zu teilen! E-Mail: moinjulian.dev@outlook.com");
    }
}

function setNull() {
    feld1 = null;feld2 = null;feld3 = null;feld4 = null;feld5 = null;feld6 = null;feld7 = null;
    feld8 = null;feld9 = null;feld10 = null;feld11 = null;feld12 = null;feld13 = null;feld14 = null;
    feld15 = null;feld16 = null;feld17 = null;feld18 = null;feld19 = null;feld20 = null;feld21 = null;
    feld22 = null;feld23 = null;feld24 = null;feld25 = null;feld26 = null;feld27 = null;feld28 = null;
    feld29 = null;feld30 = null;feld31 = null;feld32 = null;feld33 = null;feld34 = null;feld35 = null;
    feld36 = null;feld37 = null;feld38 = null;feld39 = null;feld40 = null;feld41 = null;feld42 = null;
    feld43 = null;feld44 = null;feld45 = null;feld46 = null;feld47 = null;feld48 = null;feld49 = null;
    feld50 = null;feld51 = null;feld52 = null;feld53 = null;feld54 = null;feld55 = null;feld56 = null;
    document.getElementById("1").style.backgroundColor = "transparent";
    document.getElementById("2").style.backgroundColor = "transparent";
    document.getElementById("3").style.backgroundColor = "transparent";
    document.getElementById("4").style.backgroundColor = "transparent";
    document.getElementById("5").style.backgroundColor = "transparent";
    document.getElementById("6").style.backgroundColor = "transparent";
    document.getElementById("7").style.backgroundColor = "transparent";
    document.getElementById("8").style.backgroundColor = "transparent";
    document.getElementById("9").style.backgroundColor = "transparent";
    document.getElementById("10").style.backgroundColor = "transparent";
    document.getElementById("11").style.backgroundColor = "transparent";
    document.getElementById("12").style.backgroundColor = "transparent";
    document.getElementById("13").style.backgroundColor = "transparent";
    document.getElementById("14").style.backgroundColor = "transparent";
    document.getElementById("15").style.backgroundColor = "transparent";
    document.getElementById("16").style.backgroundColor = "transparent";
    document.getElementById("17").style.backgroundColor = "transparent";
    document.getElementById("18").style.backgroundColor = "transparent";
    document.getElementById("19").style.backgroundColor = "transparent";
    document.getElementById("20").style.backgroundColor = "transparent";
    document.getElementById("21").style.backgroundColor = "transparent";
    document.getElementById("22").style.backgroundColor = "transparent";
    document.getElementById("23").style.backgroundColor = "transparent";
    document.getElementById("24").style.backgroundColor = "transparent";
    document.getElementById("25").style.backgroundColor = "transparent";
    document.getElementById("26").style.backgroundColor = "transparent";
    document.getElementById("27").style.backgroundColor = "transparent";
    document.getElementById("28").style.backgroundColor = "transparent";
    document.getElementById("29").style.backgroundColor = "transparent";
    document.getElementById("30").style.backgroundColor = "transparent";
    document.getElementById("31").style.backgroundColor = "transparent";
    document.getElementById("32").style.backgroundColor = "transparent";
    document.getElementById("33").style.backgroundColor = "transparent";
    document.getElementById("34").style.backgroundColor = "transparent";
    document.getElementById("35").style.backgroundColor = "transparent";
    document.getElementById("36").style.backgroundColor = "transparent";
    document.getElementById("37").style.backgroundColor = "transparent";
    document.getElementById("38").style.backgroundColor = "transparent";
    document.getElementById("39").style.backgroundColor = "transparent";
    document.getElementById("40").style.backgroundColor = "transparent";
    document.getElementById("41").style.backgroundColor = "transparent";
    document.getElementById("42").style.backgroundColor = "transparent";
    document.getElementById("43").style.backgroundColor = "transparent";
    document.getElementById("44").style.backgroundColor = "transparent";
    document.getElementById("45").style.backgroundColor = "transparent";
    document.getElementById("46").style.backgroundColor = "transparent";
    document.getElementById("47").style.backgroundColor = "transparent";
    document.getElementById("48").style.backgroundColor = "transparent";
    document.getElementById("49").style.backgroundColor = "transparent";
    document.getElementById("50").style.backgroundColor = "transparent";
    document.getElementById("51").style.backgroundColor = "transparent";
    document.getElementById("52").style.backgroundColor = "transparent";
    document.getElementById("53").style.backgroundColor = "transparent";
    document.getElementById("54").style.backgroundColor = "transparent";
    document.getElementById("55").style.backgroundColor = "transparent";
    document.getElementById("56").style.backgroundColor = "transparent";
}
