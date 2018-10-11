import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
   photos:any;
  constructor(public navCtrl: NavController,private camera: Camera) {

  }
  photo(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     
     this.photos = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    console.log(err);
    
    });
  }

  pick(){
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum:false
    }
    
    this.camera.getPicture(options).then((imageData) => {
     
     this.photos = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
    console.log(err);
    
    });

  }

}
