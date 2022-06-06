const RE = new RegExp('^' + require('legal-versioning-regexp') + '$')

module.exports = string => {
  const match = RE.exec(string)
  if (!match) throw new Error(`Invalid Legal Versioning Number: ${string}`)
  const returned = {}
  for (const key of ['edition', 'update', 'correction']) {
    returned[key] = parseInt(match.groups[key])
  }
  if (match.groups.draft) {
    returned.draft = parseInt(match.groups.draft)
  }
  return returned
}
