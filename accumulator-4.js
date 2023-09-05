
const stringSecondName = ['Esanukaev','Baybatyrov', 'Dudaev', 'Maskhadov', 'Basaev',
 'Gilaev', 'Idigov','Avtorkhanov' ,'Malsagov' ,'Mukiev'];

 let accumulator = []

 for( let i = 0; i < stringSecondName.length; i++ ) {
    if (stringSecondName[i][0].toLowerCase() === 'a') {
        accumulator.push(stringSecondName[i])

    }
 }
 console.log(accumulator);
