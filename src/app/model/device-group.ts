import { Device } from "./device";

export class DeviceGroup {
    private deviceList:Array<Device> 
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

    getDeviceList():Array<Device>{
        return this.deviceList 
    }

    setDeviceList(deviceList:Array<Device>){
        this.deviceList = deviceList
    }

    static fromJson(jsonObject):DeviceGroup{
        let toReturn:DeviceGroup = new DeviceGroup(jsonObject.id,
                                                   jsonObject.name)
        let devicesListJson = jsonObject.devices
        let devicesList:Array<Device> = [] 
        for (let currDevice of devicesListJson) {
            let device:Device = Device.fromJson(currDevice)
            devicesList.push(device)
        }
        toReturn.setDeviceList(devicesList)
        return toReturn
    }
}
