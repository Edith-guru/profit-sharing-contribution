var grossProfit = 100000;
var netProfit;
var profitSharingPercent;

//initial guess
var profitSharing = grossProfit * profitSharingPercent;

calculatingProfitSharing(profitSharing);

calculatingProfitSharing = (guess) => {
    
    //calculating the new net profit
    netProfit = grossProfit - guess;
    profitSharing = Math.ceil(netProfit * profitSharingPercent);
    if((netProfit + profitSharing) != grossProfit){
        //if not, plug it in again
        calculatingProfitSharing(profitSharing);
    }
}

console.log("Gross Profit:\t" + grossProfit + "\nNet Profit:\t" + netProfit + "\nProfit Sharing:\t" + profitSharing);