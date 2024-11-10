import { promises as fs } from 'fs'
import path from 'path'

const dataFilePath = path.join(process.cwd(), '/helper/data.json')

//functions
//read/get
export const readData = async () => {
    const jsonData = await fs.readFile(dataFilePath, 'utf8')
    return JSON.parse(jsonData)
}

//write/post/create
export const writeData = async (data) => {
    const jsonData = JSON.stringify(data)
    await fs.writeFile(dataFilePath, jsonData, 'utf-8')
}