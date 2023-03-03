import Employee, {Contract} from "./Employee"

const emp1 = new Employee('dian','cahaya',4500)
const contract1 = new Contract('danis','hari',3000,[],'Contract')

emp1.skill = ['postgres','java']
const listEmployee = {emp1,contract1}

console.log(emp1.ToString());
console.log(contract1.ToString());