import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'
describe('environmental variables', () => {
  beforeEach(() => {
    jest.resetModules() // Most important - it clears the cache

    delete process.env['INPUT_WARNING']
    delete process.env['INPUT_INFO']
    delete process.env['INPUT_ERROR']
  })
  // shows how the runner will run a javascript action with env / stdout protocol
  test('test runs with all inputs', () => {
    process.env['INPUT_WARNING'] = 'warning'
    process.env['INPUT_INFO'] = 'info'
    process.env['INPUT_ERROR'] = 'error'

    const np = process.execPath
    const ip = path.join(__dirname, '..', 'lib', 'main.js')
    const options: cp.ExecFileSyncOptions = {
      env: process.env
    }
    const log = cp.execFileSync(np, [ip], options).toString()
    expect(log).toContain('::error')
    expect(log).toContain('::info')
    expect(log).toContain('::warning')
  })

  test('test runs with no inputs', () => {
    const np = process.execPath
    const ip = path.join(__dirname, '..', 'lib', 'main.js')
    const options: cp.ExecFileSyncOptions = {
      env: process.env
    }
    console.log(cp.execFileSync(np, [ip], options).toString())
    const log = cp.execFileSync(np, [ip], options).toString()
    expect(log).toContain('no warn set')
    expect(log).toContain('no info set')
    expect(log).toContain('no error set')
  })

  test('test runs with some input', () => {
    process.env['INPUT_WARNING'] = 'warning'
    const np = process.execPath
    const ip = path.join(__dirname, '..', 'lib', 'main.js')
    const options: cp.ExecFileSyncOptions = {
      env: process.env
    }
    const log = cp.execFileSync(np, [ip], options).toString()
    expect(log).toContain('no error set')
    expect(log).toContain('no info set')
    expect(log).toContain('::warning')
  })
})
