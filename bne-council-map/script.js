const wardResults = [ {ward: "BrackenRidge", winner: "LNP"},
                {ward: "Calamvale", winner: "LNP"},
                {ward: "Central", winner: "LNP"},
                {ward: "Chandler", winner: "LNP"},
                {ward: "Coorparoo", winner: "LNP"},
                {ward: "Deagon", winner: "Labor"},
                {ward: "Doboy", winner: "LNP"},
                {ward: "Enoggera", winner: "LNP"},
                {ward: "ForestLake", winner: "Labor"},
                {ward: "Hamilton", winner: "LNP"},
                {ward: "HollandPark", winner: "LNP"},
                {ward: "Jamboree", winner: "LNP"},
                {ward: "MacGregor", winner: "LNP"},
                {ward: "Marchant", winner: "LNP"},
                {ward: "McDowall", winner: "LNP"},
                {ward: "Moorooka", winner: "Labor"},
                {ward: "Morningside", winner: "Labor"},
                {ward: "Northgate", winner: "LNP"},
                {ward: "Paddington", winner: "LNP"},
                {ward: "Pullenvale", winner: "LNP"},
                {ward: "Runcorn", winner: "LNP"},
                {ward: "Tennyson", winner: "Independent"},
                {ward: "TheGabba", winner: "Greens"},
                {ward: "TheGap", winner: "LNP"},
                {ward: "WalterTaylor", winner: "LNP"},
                {ward: "WynnumManly", winner: "Labor"}
];

const totals = [{party: "LNP", seats: 0}, {party: "Labor", seats: 0}, {party: "Greens", seats: 0}, {party: "Independent", seats: 0}];
    
function calculateTotals() {
    
    for (let j = 0; j < totals.length; j++) {
        totals[j].seats = 0;
    }
    
    for (let i = 0; i < wardResults.length; i++) {
     for (let j = 0; j < totals.length; j++) {
         if (totals[j].party == wardResults[i].winner) { totals[j].seats++ }
         }
    }    
}    

function colourWards() {
    for (let i=0; i < wardResults.length; i++) {
        switch(wardResults[i].winner) {
            case "LNP":
                document.getElementById(wardResults[i].ward).style.backgroundColor = "#274D98";
                break;
            case "Labor":
                document.getElementById(wardResults[i].ward).style.backgroundColor = "#D44547";
            break;
            case "Greens":
                document.getElementById(wardResults[i].ward).style.backgroundColor = "#3D8A44";
                break;
            case "Independent":
                document.getElementById(wardResults[i].ward).style.backgroundColor = "#E6C34B";
            break;
        }
    }
}

function cycleWinner(clickedWard) {
    for (let i=0; i < wardResults.length; i++) {
    if (wardResults[i].ward == clickedWard) {
    switch(wardResults[i].winner) {
            case "LNP":
                wardResults[i].winner = "Labor";
                break;
            case "Labor":
                wardResults[i].winner = "Greens";
            break;
            case "Greens":
                wardResults[i].winner = "Independent";
                break;
            case "Independent":
                wardResults[i].winner = "LNP";
            break;
        }
    }
    }
    colourWards();
    calculateTotals();
    updateTable();
}

function updateTable() {
    for (let j = 0; j < totals.length; j++) {
        document.getElementById(totals[j].party).innerHTML = totals[j].seats;
        if (totals[j].seats > 13) { 
            
            document.getElementById(totals[j].party).style.fontWeight = "heavy";
            document.getElementById(totals[j].party).style.backgroundColor = "yellow";
            
        } else { 
            
            document.getElementById(totals[j].party).style.fontWeight = "normal"
            document.getElementById(totals[j].party).style.backgroundColor = "transparent";}
        
    }
}
