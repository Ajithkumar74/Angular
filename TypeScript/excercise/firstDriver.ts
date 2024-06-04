
export namespace firstD {

    export class Train {
    
    trainID: number;
    
    trainName: string;
    
    speed: number;
    
    constructor(trainID: number, trainName: string, speed: number) {
    
    this.trainID= trainID;
    
    this.trainName = trainName;
    
    this.speed = speed;
    }
    
    distanceCover(hours: number): void {
    const distance = this.speed * hours;
    console.log(`The train ${this.trainName} with ID ${this.trainID} covered a distance of ${distance} km in ${hours} hours.`);
    
    } 
    } 
    
    export class Driver {
    
    drive(): void {
    
    console.log("Driver with Train");
    
    }
    
    }
    
    }
    