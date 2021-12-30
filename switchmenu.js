var a=require("readline-sync")
var day=a.questionInt("which day menu you want,you enter 1 to 7 number here 🥪")
var menu=a.question("enter a time , lunch, breakfast, diner")
switch(day){
    case 1:
        console.log("monday");
        switch (menu){
            case "breakfast":
                console.log("pasta🥬");
                break;
            case "lunch":
                console.log("dal rice")
                break;
            case "diner":
                console.log("paneer roti🥘🥘")
                break;
        }
    break;
    case 2:
        console.log("tuesday");
        switch(menu){
            case "breakfast":
                console.log("poha")
                break;
            case "lunch":
                console.log("masla rice")
                break;
            case "diner":
                console.log("roti subji")
                break;

        }
    break;
    case 3:
        console.log("wednesday");
        switch(menu){
            case "breakfast":
                console.log("dhokla")
                break;
            case "lunch":
                console.log("rajma chawal🥘🥘🥘")
                break;
            case "diner":
                console.log("aaalu roti")
                break;

        }
    break;
    case 4:
        console.log("thursday");
        switch(menu){
            case "breakfast":
                console.log("sandwich🥪🥪🥪")
                break;
            case "lunch":
                console.log("aalu chawal")
                break;
            case "diner":
                console.log(" roti")
                break;
    
        }
    break;
    case 5:
        console.log("friday");
        switch(menu){
            case "breakfast":
                console.log("aalu paratha")
                break;
            case "lunch":
                console.log("chole chawal🥘🥘🥘")
                break;
            case "diner":
                console.log("bhature  chole")
                break;
    
        }
    break;
    case 6:
        console.log("saturday");
        switch(menu){
            case "breakfast":
                console.log("paratha")
                break;
            case "lunch":
                console.log("chole roti")
                break;
            case "diner":
                console.log("paneer roti 🍲🍲")
                break;
    
        }
    break;
    case 7:
        console.log("sunday");
        switch(menu){
            case "breakfast":
                console.log("aalu paratha")
                break;
            case "lunch":
                console.log("chole chawal🍲🍲🍲")
                break;
            case "diner":
                console.log("bhature  chole🍲🍲🍲")
                break;
    
        }

}
