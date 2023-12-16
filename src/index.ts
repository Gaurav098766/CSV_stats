import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";


// create am object that statisfies 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv');


// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
// now we can reference anyhtime matchreader.matches

const summary = new Summary(
    new WinsAnalysis('Man United'),
    new ConsoleReport()
)

summary.buildAndPrintReport(matchReader.matches);