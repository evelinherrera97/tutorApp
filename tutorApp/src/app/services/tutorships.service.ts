import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class TutorshipsService {

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  addtutorInforamtion(tutorshipsInfo) {  
    return this.angularFirestore.collection('tutorships').add(tutorshipsInfo);  
  } 

  getAllTutorships() {  
    return this.angularFirestore.collection('tutorships').snapshotChanges();  
  }

  deleteItem (id) {
    this.angularFirestore.doc('tutorships/' + id).delete(); 

  }

  updateTutorships(tutorshipsid, tutorshipsInfo) {  
    delete tutorshipsInfo.id;  
    this.angularFirestore.doc('tutorships/' + tutorshipsid).update(tutorshipsInfo);  
  } 

 
}
