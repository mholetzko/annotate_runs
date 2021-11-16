import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    console.log("... hello world")
    core.error('This is a bad error. This will also fail the build.')
    core.warning('Something went wrong, but it\'s not bad enough to fail the build.')
    core.notice('Something happened that you might want to know about.')
    core.notice(core.getInput('milliseconds'))
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
