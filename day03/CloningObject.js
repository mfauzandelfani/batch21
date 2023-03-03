const employee = {
    firstname: 'John',
    lastname: 'Doe',
    portfolio: {
        ipk: 3.4,
        skill: ['java','oracle']
    }
}

const {firstname,lastname,portfolio:{skill},portfolio:{ipk}} = employee
console.log();