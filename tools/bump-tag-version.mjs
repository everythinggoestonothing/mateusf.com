import semver from 'semver'
import { simpleGit } from 'simple-git'
import packageJson from '../package.json' assert { type: 'json' }
import path from 'path'

function log(text) {
  console.log(`LOG | ${text}`)
}

const REPO_DIR = path.resolve(__dirname, '../')

async function main() {
  const simplegit = simpleGit(REPO_DIR)

  const tags = await simplegit.tags()
  const lastTag = tags.latest
  const packageVersion = packageJson.version

  if (lastTag) {
    if (semver.gt(packageVersion, lastTag)) {
      log('Synchronizing tag')
      await simplegit.addTag(packageVersion)

      log('Pushing tags')
      await simplegit.push('origin', packageVersion)
    } else {
      throw new Error('Last tag and package version are synchronized')
    }
  } else {
    throw new Error('There is no latest tag')
  }
}

main()
