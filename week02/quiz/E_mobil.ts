//Class
class nopolice {
  protected type: string;
  constructor(type: string) {
    this.type = type;
  }
  setType(type: string): void {
    this.type = type;
  }
  getType(): string {
    return this.type;
  }
}

//Inheritance
class vehicle extends nopolice {
  private id: string;
  private total: number;
  constructor(id, type, total) {
    super(type);
    this.id = id;
    this.total = total;
  }
  setTotal(total: number): void {
    this.total = total;
  }
  getTotal(): number {
    return this.total;
  }
}

//Interface
interface methoods {
  TotalVhc(): void;
  TotalVhc2(pointer: string): void;
  TotalAll(): void;
  TotalincomeVhc(pointer: string): void;
}

class TotalV implements methoods {
  private tot: vehicle[];
  constructor(tot: vehicle[]) {
    this.tot = tot;
  }
  setTotal(tot: vehicle[]): void {
    this.tot = tot;
  }

  getTotal(): object {
    return this.tot;
  }

  TotalVhc(): void {
    let arrays: string[] = [];
    for (let i in this.tot) {
      arrays.push(this.tot[i].getType());
    }
    console.log(`Total Vehicle: ${arrays.length}`);
  }

  TotalVhc2(pointer: string): void {
    let arrays: string[] = [];

    for (let i in this.tot) {
      if (pointer === this.tot[i].getType()) arrays.push(this.tot[i].getType());
    }
    console.log(`Total Vehicle ${pointer} : ${arrays.length}`);
  }
  TotalAll(): void {
    let arrays: number[] = [];
    for (let i in this.tot) {
      arrays.push(this.tot[i].getTotal());
    }
    console.log(`Total Semua: ${arrays.reduce((a, b) => a + b, 0)}`);
  }

  TotalincomeVhc(pointer: string): void {
    let arrays: number[] = [];

    for (let i in this.tot) {
      if (pointer === this.tot[i].getType()) {
        arrays.push(this.tot[i].getTotal());
      }
    }
    console.log(`Total Semua ${pointer}: ${arrays.reduce((a, b) => a + b, 0)}`);
  }
}

const v1 = new vehicle("D1001UM", "SUV", 650000);
const v2 = new vehicle("D1002UM", "SUV", 650000);
const v3 = new vehicle("D1003UM", "SUV", 650000);
const v4 = new vehicle("D1004UM", "SUV", 650000);
const v5 = new vehicle("D11UK", "Taxi", 202500);
const v6 = new vehicle("D12UK", "Taxi", 337500);
const v7 = new vehicle("D13UK", "Taxi", 405000);
const v8 = new vehicle("ID8089", "PrivateJet", 50000000);
const v9 = new vehicle("ID8099", "PrivateJet", 80000000);

let tot: vehicle[] = [v1, v2, v3, v4, v5, v6, v7, v8, v9];
const hasil = new TotalV(tot);

hasil.TotalVhc();
hasil.TotalVhc2("SUV");
hasil.TotalincomeVhc("SUV");
hasil.TotalincomeVhc("Taxi");
hasil.TotalincomeVhc("PrivateJet");
hasil.TotalAll();
