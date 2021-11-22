import * as core from '@actions/core'
import * as fmt from './format'

async function run(): Promise<void> {
  try {
    fmt.formatErrors(core.getInput('error'), core.getInput('title'))
    fmt.formatWarning(core.getInput('warning'), core.getInput('title'))
    fmt.formatInfos(core.getInput('info'), core.getInput('title'))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
