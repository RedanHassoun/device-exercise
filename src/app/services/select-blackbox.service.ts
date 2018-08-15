import { Injectable } from '@angular/core';
import { DeviceGroup } from '../model/device-group'; 
import { Http } from '@angular/http'
declare var Promise: any;

@Injectable()
export class SelectBlackboxService {
  static readonly KEY_DEVICE_GROUP:string = "device_groups" 
  
  constructor(private http: Http) { 
  }

  getAllGroups(){
    let promise = new Promise((resolve,reject)=>{ 
        let jsonGroupList:any =  this.http.get("./assets/db.json")
        .subscribe((res:any) => {
          let jsonObj = res.json() 
          let toReturn:Array<DeviceGroup> = []
          for (let entry of jsonObj.device_groups) {
              console.log(entry)
              let currGroup:DeviceGroup = DeviceGroup.fromJson(entry)
              toReturn.push(currGroup)
          }
          console.log('device_groups array size:  '+toReturn.length)

          resolve(toReturn) 
        },(error:any)=>{
            reject()
        }) 
    })

    return promise  
    // let group: DeviceGroup = this.jsonConvert
    //           .deserializeObject(jsonObj, User);


    // .get(BlackboxServiceService.KEY_DEVICE_GROUP)
    // for (let entry of jsonGroupList) {
    //   let currObject = DeviceGroup.fromJson(entry)
    //   toReturn.push(currObject)
    // }

    // return toReturn
 
  }

}
