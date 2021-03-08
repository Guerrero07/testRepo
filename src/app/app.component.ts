import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notificaciones';

  respuesta:any;
  readonly VAPID_PUBLIC_KEY =
  "BCn48qnFWH5puGRhdAPBVyVwnojz_BY0Bg5i20cy7OEmdEzeNl1EGTM23atoVVux1c0dW1t_A90HYGG6zKRLboY";
  
constructor(
  private swPush: SwPush){
    
  }

subscribeToNotifications(){
  this.swPush.requestSubscription(
    {
      serverPublicKey: this.VAPID_PUBLIC_KEY
    }
  ).then(respuesta =>{
    this.respuesta=respuesta
  })
  .catch(err =>{
    this.respuesta=err
  })
}
}