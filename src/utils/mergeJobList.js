function compare(property){
    return function(a,b){
        var value1 = a[property];
        var value2 = b[property];
        return value1 - value2;
    }
}

function mergeJobList(jobList1,jobList2){
    var mergedList=[];
    mergedList=jobList1.concat(jobList2);
    mergedList.sort(compare('started'))
    return mergedList

}

export{
    mergeJobList
}