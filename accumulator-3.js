
const stringArray = ['JS','two', 'Java', 'four', 'five',
 'six', 'seven','C+' ,'Cotlin' ,'Phitone']

 let accumulator = []

 for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i].length > 3) {
        accumulator.push(stringArray[i])
    }
 }
 console.log(accumulator);