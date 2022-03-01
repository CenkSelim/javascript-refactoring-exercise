//var txr = [];

function processTransactions(transActions) {

    if (transActions === undefined) throw new Error("Undefined collection of transactions");

    let txr = [];

    //  if(!validateTransactions(transActions)) {
    //      throw new Error("Undefined collection of transactions")
    //  }
  
    // let txCount = {}

    // const numberOfTransactions = transActions.length;
    
    // for(var i = 0; i < numberOfTransactions; i++) {
    //     const transaction = transActions[i];
    //     txCount[transaction] ? txCount[transaction] += 1 : txCount[transaction] = 1;
    // } 
    // Reduce to count instances
    // ['notebook', 'notebook', 'mouse', 'keyboard', 'mouse']
    let txCount = transActions.reduce((allTransactions, transaction) => 
                                  (allTransactions[transaction] = allTransactions[transaction] + 1 || 1, allTransactions), {});

    //{notebook: 2, mouse: 2, keyboard: 1}                             
    txCount = sortByAmountThenName(txCount);
    // {mouse: 2, notebook: 2, keyboard: 1}

    // Place them back in array for returning
    Object.keys(txCount).forEach((key, index) => txr[index] = `${key} ${txCount[key]}`);
    // ['mouse 2', 'notebook 2', 'keyboard 1']

    return txr;
}

function sortByAmountThenName(txCount) {
//     let sortedKeys = Object.keys(txCount).sort(function sortingFunction(itemOne, itemTwo) {
//         return  txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo)}
//     );

    let sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => 
                txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo));
    // ['mouse', 'notebook', 'keyboard']

    let sortedResults = {};
    for(let objectKey of sortedKeys) {
        sortedResults[objectKey] = txCount[objectKey];
    }
    // {mouse: 2, notebook: 2, keyboard: 1}

    return sortedResults;
}


function validateTransactions(transactions) {

    return transactions !== undefined;
    // if(transactions === undefined) {
    //     return false;
    // } 

    // return true;
}

module.exports = processTransactions;