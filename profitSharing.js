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



//Avoiding infinate recursion
//Have a break or
//create a test that ensures the function will stop calling itself after a certain number of calls
//Can set up a counter that tracks the number of function calls. When the number hits a predetermined maximum, the script should bail out of the recursion process.

// var currentCall = 1;
// var maximumCall = 3;

// recursionTest();

// function recursionTest(){
//     if (currentCall <= maximumCall){ 
//         console.log(currentCall);
//         currentCall++;
//         recursionTest();
//     }
// }