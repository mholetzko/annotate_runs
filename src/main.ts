import * as core from '@actions/core'
import * as fmt from './format'

async function run(): Promise<void> {
  try {
    fmt.formatErrors(core.getInput('error'))
    fmt.formatWarning(core.getInput('warning'))
    fmt.formatInfos(core.getInput('info'))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
