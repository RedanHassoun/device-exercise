export class Device {
    private active:number
    checked:boolean = false

    constructor(private id:number,private name:string){
    }

    getId():number{
        return this.id
    }

    getName():string{
        return this.name 
    }

    setId(id:number){
        this.id = id 
    }

    setName(name:string){
        this.name = name 
    }

    setActive(active:number){
        this.active = active
    }

    getActive():number{
        return this.active 
    }
 
    static fromJson(jsonObj):Device{
        let device:Device = new Device(jsonObj.id,jsonObj.name)
        device.setActive(jsonObj.active)  
        return device 
    }
}
