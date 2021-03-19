/*
 * @Author: Wilton.Qiu
 * @Date: 2021-03-19 14:26:17
 * @Description: read stream
 */
const { Readable } = require('stream')

class MyStream extends Readable {
  _read() {
  }
}
const file = process.argv[2]
const readable  = new MyStream()
readable.push(file)
readable.pipe(process.stdout)
