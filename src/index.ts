import { MatchReader } from "./MatchReader";
import { MatchResult } from "./matchResult";
import { CsvFileReader } from "./CsvFileReader";

// create am object that statisfies 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');


// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// now we can reference anyhtime matchreader.matches


let manUnitedWins = 0;
for(let match of matchReader.matches){
    if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin){
        manUnitedWins++;
    }
    else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin){
        manUnitedWins++;
    }
}

console.log(`Man United won ${manUnitedWins} games`)