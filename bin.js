#!/usr/bin/env node
const argument = process.argv[2]
if (!argument) {
  process.stderr.write('Usage: <version>\n')
  process.exit(1)
}

let parsed
try {
  parsed = require('./')(argument)
} catch (error) {
  process.stderr.write(error.toString())
  process.exit(1)
}

process.stdout.write(`Edition: ${parsed.edition}\n`)
process.stdout.write(`Update: ${parsed.update}\n`)
process.stdout.write(`Correction: ${parsed.correction}\n`)
if (parsed.draft) {
  process.stdout.write(`Draft: ${parsed.draft}\n`)
}
