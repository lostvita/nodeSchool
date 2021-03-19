/*
 * @Author: Wilton.Qiu
 * @Date: 2021-03-19 19:38:10
 * @Description: writable
 */
const { Writable } = require('stream')

class MyWritable extends Writable {
  _write(chunk, encoding='utf8', callback) {
    console.log(`writing: ${chunk.toString()}`)
    callback()
  }
}

const writable = new MyWritable()

process.stdin.pipe(writable)
