import fs from "fs"
import path from "path"

export default function handler(req,res) {
    const files = fs.readdirSync(path.resolve("data"));
    const tip = files[Math.floor(Math.random() * files.length)];
    console.log(tip)
}