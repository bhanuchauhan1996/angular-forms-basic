import { DataService } from './../data/data.service';

import { UserSetting } from '../data/user-setting';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-setting-forn',
  templateUrl: './user-setting-forn.component.html',
  styleUrls: ['./user-setting-forn.component.css']
})
export class UserSettingFornComponent implements OnInit {

  
  constructor(private dataService:DataService) { }
  originalUserSetting : UserSetting = {
    name:'bhanu',
    emailoffer:true,
    exampleRadios:'Dark',
    subscription:'Monthly',
    notes:'mja aa gya'
  };
  userSetting:UserSetting={ ...this.originalUserSetting};
  ngOnInit(): void {
  }
onSubmit(form:NgForm){
    this.dataService.postUserSettingForm(this.userSetting).subscribe(
      result=>console.log('sucess',result),
      error=>console.log('error',error)
      
    );
}
}
