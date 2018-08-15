import { Component, OnInit } from '@angular/core'; 
import { DeviceGroup } from '../model/device-group';
import { SelectBlackboxService } from '../services/select-blackbox.service';

@Component({
  selector: 'app-select-blackbox',
  templateUrl: './select-blackbox.component.html',
  styleUrls: ['./select-blackbox.component.css']
})
export class SelectBlackboxComponent implements OnInit {
  groupList:Array<DeviceGroup> 
  constructor(private blackboxServiceService:SelectBlackboxService) { }

  ngOnInit() {
    this.blackboxServiceService.getAllGroups()
                                  .then((res:Array<DeviceGroup>)=>{
                                    this.groupList = res 
                                  })
  }

}
