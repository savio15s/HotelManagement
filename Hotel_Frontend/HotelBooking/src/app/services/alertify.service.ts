import { Injectable } from '@angular/core';

declare let alertify: any;

@Injectable({
  providedIn: 'root'
})

export class AlertifyService {

  constructor() { }
  confirm(message: string, okCallBack: () => any) {
      alertify.confirm(message, (e:any) => {

          if(e){
            okCallBack();
          } else {

          }
      });
  }

  success(message : string) {
    alertify.success(message);
  }

  error(message : string) {
    alertify.error(message);
  }

  warning(message : string) {
    alertify.warning(message);
  }

  message(message : string) {
    alertify.sucess(message);
  }

  
  alert(title: string, message: string, movable: boolean) {
    alertify.alert(title, message).set('movable', movable);
  }
}
