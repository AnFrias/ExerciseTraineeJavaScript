const cars = [
  {
    marca: 'Peugeot',
    modelo: '206',
    puertas: 4,
    precio: 200000.50,
  },
  {
    marca: 'Honda',
    modelo: 'Titan',
    cilindrada: '125cc',
    precio: 60000.00,
  },
  {
    marca: 'Peugeot',
    modelo: '208',
    puertas: '5',
    precio: 250000.00,
  },
  {
    marca: 'Yamaha',
    modelo: 'YBR',
    cilindrada: '160cc',
    precio: 80500.50,
  }
]

const validateCars = (cars) => {
  if (!cars) return 'params are not right for validateCars() function';
  let expensier = 0;
  let cheapear;
  let containersY = '';
  cars.forEach(car => {
    if (car.modelo.includes('Y')) containersY = car
  })
  
  orderderedCarsASC = cars.sort((a, b) => b.precio - a.precio);
  orderderedCarsExpensier = cars.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
  // we could reuse the function cars.sort and just change the index of the array
  cheapear = orderderedCarsExpensier[orderderedCarsExpensier.length - 1]
  expensier = orderderedCarsASC[0];
  
  console.log('=============================')
  console.log(`Vehículo más caro: ${expensier.marca} ${expensier.modelo}`);
  console.log(`Vehículo más barato: ${cheapear.marca} ${cheapear.modelo}`);
  console.log(`Vehículo que contiene en el modelo la letra 'Y': ${containersY.marca} ${containersY.modelo} $${containersY.precio}`);
  console.log('=============================');
  console.log('Vehículos ordenados por precio de mayor a menor:');
  orderderedCarsExpensier.forEach(car => {
    console.log(`${car.marca} ${car.modelo}`)})
}
// this is the functions which is going to return all the consoles we want
validateCars(cars)

