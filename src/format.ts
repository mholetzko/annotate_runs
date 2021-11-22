import * as core from '@actions/core'

export function formatInfos(info: string, title: string): void {
  if (info) {
    if (title) {
      core.notice(info, {title, file: 'www.google.com'})
    } else {
      core.notice(info)
    }
  } else {
    core.info('no info set')
  }
}

export function formatWarning(warn: string, title: string): void {
  if (warn) {
    if (title) {
      core.warning(warn, {title})
    } else {
      core.warning(warn)
    }
  } else {
    core.info('no warn set')
  }
}

export function formatErrors(error: string, title: string): void {
  if (error) {
    if (title) {
      core.error(error, {title})
    } else {
      core.error(error)
    }
  } else {
    core.info('no error set')
  }
}
