const fs = require('node:fs')
const path = require('node:path')
const { execSync } = require('node:child_process')

const root = process.cwd()
const pkgPath = path.join(root, 'packages', 'ui', 'package.json')

const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
const name = pkg.name
const version = pkg.version

if (!name || !version) {
    console.error('Unable to read package name/version from packages/ui/package.json')
    process.exit(1)
}

const tag = `${name}@${version}`

function run(cmd) {
    return execSync(cmd, { stdio: 'inherit' })
}

try {
    execSync(`git rev-parse ${tag}`, { stdio: 'ignore' })
    console.log(`Tag already exists: ${tag}`)
    process.exit(0)
} catch {}
run(`git add .`)
// run(`git commit -m "release: 新版本发布 ${tag}"`)
run(`git tag ${tag}`)
run(`git push origin ${tag}`)
