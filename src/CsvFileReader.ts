import fs from 'fs'

export class CsvFileReader{
    // initializing the data which is 2D vector.
    data: string[][] = [];
    
    constructor(public filename: string){}
    
    read(): void{
        this.data = fs
        .readFileSync(this.filename,{
            encoding: 'utf-8'
        })
        .split('\n')
        .map((row:string):string[]=>{
            return row.split(',');
        })
    }
}