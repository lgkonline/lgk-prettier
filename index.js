#!/usr/bin/env node
"use strict"

const fs = require("fs")
const path = require("path")

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

let existingConfig = {}

if (fs.existsSync(file)) {
    const existingPlain = fs.readFileSync(file, { encoding: "utf-8" })
    existingConfig = JSON.parse(existingPlain)
}

const newConfig = { ...existingConfig, ...lgkConfig }

fs.writeFileSync(file, JSON.stringify(newConfig, null, 4))
