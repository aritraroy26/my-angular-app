import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-user-info-display',
  templateUrl: './user-info-display.component.html',
  styleUrls: ['./user-info-display.component.css'],
})
export class UserInfoDisplayComponent implements OnInit {
  info: any = {};
  isLoading: boolean = true;
  constructor(private userInfoService: UserInfoService) {}

  ngOnInit(): void {
    this.userInfoService.loadData().subscribe((userInfo) => {
      this.info = userInfo;
      this.isLoading = false;
    });
  }
}
