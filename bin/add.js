#!/usr/bin/env node

const inquirer = require("inquirer")
const chalk = require("chalk")
const fs = require("fs")
const tplObj = require(`${__dirname}/../template`)

let question = [
	{
		name: "name",
		type: "input",
		message: "请输入模板名称",
		validate(val) {
			if (val === "") {
				return "Name is required!"
			} else if (tplObj[val]) {
				return "Template has already existed!"
			} else {
				return true
			}
		}
	},
	{
		name: "url",
		type: "input",
		message: "请输入模板地址",
		validate(val) {
			if (val === "") return "The url is required!"
			return true
		}
	}
]

inquirer.prompt(question).then(answers => {
	let { name, url } = answers
	tplObj[name] = url.replace(/[\u0000-\u0019]/g, "")
	fs.writeFile(
		`${__dirname}/../template.json`,
		JSON.stringify(tplObj),
		"utf-8",
		err => {
			if (err) console.log(err)
			console.log("\n")
			console.log(chalk.green("Added successfully!\n"))
			console.log(chalk.grey("The latest template list is: \n"))
			console.log(tplObj)
			console.log("\n")
		}
	)
})
