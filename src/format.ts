import * as core from '@actions/core'

export function formatInfos(info: string): void {
  if (info) {
    core.notice(info)
  } else {
    core.info('no info set')
  }
}

export function formatWarning(warn: string): void {
  if (warn) {
    core.warning(warn)
  } else {
    core.info('no warn set')
  }
}

export function formatErrors(error: string): void {
  if (error) {
    core.error(error)
  } else {
    core.info('no error set')
  }
}
