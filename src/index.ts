import { runTestAndWriteData, indexOf } from './utils'
import { indexOfSortedRef } from './indexOfSorted'
function main() {
  console.log('---- RUNNING MAIN ----')
  // var array = [6, 13, 14, 25, 33, 43, 51, 53, 64, 72, 84, 93, 95, 96]
  runTestAndWriteData(indexOf, true)
}

main()
