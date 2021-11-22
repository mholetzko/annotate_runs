import * as core from '@actions/core'

export function formatInfos(info:string){
 if (info) {
    core.notice(info)
 } else {
     core.info('no info set')
 }

}

export function formatWarning(warn:string){
    if (warn) {
        core.warning(warn)
     } else {
         core.info('no warn set')
     } 
}

export function formatErrors(error:string){
    if (error) {
        core.error(error)
     } else {
         core.info('no warn set')
     } 
}

