export const MARCAS = [
    { id: 1, nombre: 'Bugatti' },
    { id: 2, nombre: 'Koenigsegg' },
    { id: 3, nombre: 'Lamborghini' },
    { id: 4, nombre: 'Ferrari' },
    { id: 5, nombre: 'McLaren' },
    { id: 6, nombre: 'Aston Martin' },
    { id: 7, nombre: 'Porsche' },
    { id: 8, nombre: 'Bentley' },
];

const YEARMAX = new Date().getFullYear();
export const YEARS = Array.from( new Array(20), (valor, index) => YEARMAX - index );

export const PLANES = [
    { id: 1, nombre: "Basico" },
    { id: 2, nombre: "Plus" },
]