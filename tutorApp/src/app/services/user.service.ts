import { Injectable } from '@angular/core';
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "firebase/firestore"
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user$: any;

  constructor(
    private angularFirestore: AngularFirestore
  ) { }

  async userRegister(userData) {  
    const db = getFirestore();
    try {
      const docRef = await addDoc(collection(db, "users"), userData);
      return docRef.id
    } catch (e) {
      console.error("Error adding document: ", e);
      return e
    }
  } 

  getAllUser() {  
    return this.angularFirestore.collection('users').snapshotChanges();  
  }  


}
