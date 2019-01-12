var moment = require('moment')

//都是10位时间戳
function timestampToTime(timestamp) {

    return moment(new Date(timestamp*1000)).format('YYYY-MM-DD HH:mm:ss');
}

function timeToTimestamp(time){

    var timestamp = Date.parse(new Date(time));
    timestamp = timestamp / 1000;
    return timestamp

}

function elapseTime(time){

    var date3=new Date(time*1000)
    //计算出相差天数
    var days=Math.floor(date3/(24*3600*1000))

    var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000))
    //计算相差分钟数
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))
    //计算相差秒数
    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000)

    if(days==0)
    {
        if(hours==0)
        {
            return(minutes+" m "+seconds+" s");
        }

       return (hours+" h "+minutes+" m "+seconds+" s") ;
    }
    else
        return (days+" day "+hours+" h "+minutes+" m "+seconds+" s") ;




}


export{
    timestampToTime,
    elapseTime,
    timeToTimestamp

}
