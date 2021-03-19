/*
 * @Author: Wilton.Qiu
 * @Date: 2021-03-19 13:27:44
 * @Description: pipe api
 */
const fs = require('fs')

const file = process.argv[2]

fs.createReadStream(file).pipe(process.stdout)