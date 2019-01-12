
let host = 'https://ppc-backup-data-service.run.aws-eu-central-1-pr.ice.predix.io'

if (/http:\/\/localhost|http:\/\/127.0.0.1/.test(location.href)) {
  host = 'http://localhost:3000'
}

export  function getJobJson(){
  console.log(`${host}`)
  return fetch(`${host}/latestJobs`, {
    method: 'GET',
    mode:'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

//http://localhost:3000/storageUsage
export function getUsageJson(){
  return fetch(`${host}/storageUsage`, {
    method: 'GET',
    mode:'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
}

export function getJobJsonFromShield(){
  return fetch(`${host}/latestJobsFromShield`, {
    method: 'GET',
    mode:'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })
}
