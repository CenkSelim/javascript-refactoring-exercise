const sortByAmountThenName = (txCount) =>
    Object.keys(txCount).sort((itemOne, itemTwo) =>
    (txCount[itemOne] === txCount[itemTwo]) ? itemOne.localeCompare(itemTwo) : txCount[itemTwo] - txCount[itemOne]);

const processTransactions = (transActions) => {
    if(transActions === undefined) throw new Error("Undefined collection of transactions");

    // Calculate the frequency of distinct transactions
    let txCount = transActions.reduce((allTxr, transaction) => 
        ({ ...allTxr, [transaction]: allTxr[transaction] + 1 || 1}), {});

    // sort the keys based on value, if values are same sort the keys
    let sortedKeys = sortByAmountThenName(txCount);

    // Place the keys and corresponding values in an array for returning
    return sortedKeys.map(item => `${item} ${txCount[item]}`);
}

module.exports = processTransactions;