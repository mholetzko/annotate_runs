import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')
    core.notice('Hello World ${ms} (... or run)')
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
