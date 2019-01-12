var moment = require('moment')
var timeUtil = require('./timeConvert.js')
var mergeJobList=require('./mergeJobList.js')
function parser(shieldJob){

    shieldJob.map(l=>{
        if(l['status']=='valid'){
            l['status']=0
        }
        else{
            l['status']=1
        }


       l['started']=timeUtil.timeToTimestamp(l['started']);
       l['ended']=timeUtil.timeToTimestamp(l['ended']);





    })

    var jobs=[];
    for(var i=0;i<shieldJob.length;i++)
        {
            let newJob={
            "jobid":shieldJob[i]['target_uuid'],
            "status":shieldJob[i]['status'],
            "started":shieldJob[i]['started'],
            "ended":shieldJob[i]['ended'],
            "engine":"Shield",
            "elapsed":shieldJob[i]['ended']-shieldJob[i]['started'],
            "client":shieldJob[i]['client']
            };

            jobs.push(newJob)





        }

    return jobs

}
export{
    parser
}