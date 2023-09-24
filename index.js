import { parse } from 'node-html-parser'
import { srcdoc } from './failedsrcdoc.js'
import { srcdocWorking } from './workingsrcdoc.js';


const calculatePerformance = (s, name) => {
  // Start measuring time
  const startTime = performance.now();
  // Parse the HTML string
  s.replace(/&quot;/g, '"')
  const root = parse(s);
  root.toString()
  // End measuring time
  const endTime = performance.now();
  // Calculate the time taken
  const timeTaken = endTime - startTime;
  
  console.log(`Parsing time for ${name}: ${timeTaken} milliseconds.`);
}

calculatePerformance(srcdoc, 'Failed build srcdom')
calculatePerformance(srcdocWorking, 'Working build srcdom')
