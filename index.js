#!/usr/bin/env node
"use strict"

const fs = require("fs")
const path = require("path")

const args = process.argv.slice(2)
const argsLower = args.map((a) => a.toLowerCase())

function assignFile(file, source) {
    let existingConfig = {}
    if (fs.existsSync(file)) {
        const existingPlain = fs.readFileSync(file, { encoding: "utf-8" })
        existingConfig = JSON.parse(existingPlain)
    }

    let newConfig = { ...existingConfig, ...source }

    if (existingConfig.recommendations && source.recommendations) {
        const combinedArray = existingConfig.recommendations.concat(
            source.recommendations
        )
        newConfig.recommendations = combinedArray.filter(
            (item, index) => combinedArray.indexOf(item) === index
        )
    }

    return newConfig
}

const file = path.join(process.cwd(), ".prettierrc")

const lgkConfig = {
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: false,
    trailingComma: "none",
    bracketSpacing: true,
    bracketSameLine: false,
    fluid: false
}
const newConfig = assignFile(file, lgkConfig)
fs.writeFileSync(file, JSON.stringify(newConfig, null, 4))

const vsCode = argsLower.includes("--vscode") || argsLower.includes("-c")

if (vsCode) {
    const vsCodeFolder = path.join(process.cwd(), ".vscode")

    if (!fs.existsSync(vsCodeFolder)) {
        fs.mkdirSync(vsCodeFolder)
    }

    const lgkExtensions = {
        recommendations: ["esbenp.prettier-vscode"]
    }
    const extensionsFile = path.join(vsCodeFolder, "extensions.json")
    const newExtensionFile = assignFile(extensionsFile, lgkExtensions)
    fs.writeFileSync(extensionsFile, JSON.stringify(newExtensionFile, null, 4))

    const lgkSettings = {
        "editor.formatOnSave": true
    }
    const settingsFile = path.join(vsCodeFolder, "settings.json")
    const newSettingsFile = assignFile(settingsFile, lgkSettings)
    fs.writeFileSync(settingsFile, JSON.stringify(newSettingsFile, null, 4))
}
