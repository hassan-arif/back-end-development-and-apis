const fs = require('fs')
const fsPromises = require("fs/promises");
const crypto = require("crypto");
const os = require("os");
const path = require("path");

// const data = fs.readFileSync('assets/poem.txt', { encoding: 'utf-8'})
// console.log(data)

// fs.readFile('assets/poem.txt', { encoding: 'utf-8' }, (err, data) => {
//     console.log(data)
// })

// async function main() {
//   const data = await fsPromises.readFile("assets/poem.txt", {
//     encoding: "utf8",
//   });
//   console.log(data);
// }
// main();

// fs.writeFileSync("assets/output.txt", "Hello, freeCodeCamp!");
// fs.appendFileSync("assets/output.txt", "\nSecond line");

// const exists = fs.existsSync("assets/output.txt");
// console.log(exists); // true or false

// const entries = fs.readdirSync("assets");
// console.log(entries); // [ 'output.txt', 'poem.txt' ]

// const buf = Buffer.from('Hello, Node!');
// console.log(buf); // <Buffer 48 65 6c 6c 6f 2c 20 4e 6f 64 65 21>
// console.log(buf.toString("hex")); // 48656c6c6f2c204e6f646521
// console.log(buf.toString("base64")); // SGVsbG8sIE5vZGUh

// const buf2 = Buffer.alloc(8, 0xff);
// console.log(buf2);

// const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
// console.log(decoded); // freeCodeCamp

// const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest("hex");
// console.log(hash); // a58ba4988d1062ed6d4f35b655b9e68df6395a5f17f8b531d7f38baaaa3153f5

// const random = crypto.randomBytes(16).toString("hex");
// console.log(random); // 2bb73fee30f74385dbcecbd6f7bb69d4

// const id = crypto.randomUUID();
// console.log(id);

// console.log(os.platform())
// console.log(os.arch())
// console.log(os.hostname())
// linux
// x64
// codespaces-c42ae9

// console.log(os.totalmem())
// console.log(os.freemem())
// console.log(os.uptime())
// 8330444800
// 3416842240
// 741.97

// console.log(os.cpus().length);

const filePath = path.join(__dirname, "assets", "poem.txt");
// console.log(filePath);
// console.log(path.basename(filePath))
// console.log(path.dirname(filePath))
// console.log(path.extname(filePath))
// /workspaces/back-end-development-and-apis/build-a-file-processor/assets/poem.txt
// poem.txt
// /workspaces/back-end-development-and-apis/build-a-file-processor/assets
// .txt

// console.log(path.join("assets", "..", "server.js")); // server.js
// console.log(path.resolve("assets", "..", "server.js")); // /workspaces/back-end-development-and-apis/build-a-file-processor/server.js

// console.log(path.parse(filePath))
// {
//   root: '/',
//   dir: '/workspaces/back-end-development-and-apis/build-a-file-processor/assets',
//   base: 'poem.txt',
//   ext: '.txt',
//   name: 'poem'
// }

// console.log(process.version) // v24.18.0
// console.log(process.platform) // linux
// console.log(process.env.NODE_ENV) // undefined

// console.log(process.argv)

// process.stdout.write("Hello from stdout\n");
// process.stderr.write("Hello from stderr\n");

const readable = fs.createReadStream("assets/poem.txt", { encoding: "utf8" });
// readable.on("data", (chunk) => {
//   console.log(chunk);
// });
// readable.on("end", () => {
//   console.log("Done reading");
// });

const writable = fs.createWriteStream("assets/stream-output.txt");
// writable.write("First chunk\n");
// writable.write("Second chunk\n");
// writable.end();

readable.pipe(writable);