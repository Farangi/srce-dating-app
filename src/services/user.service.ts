import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from 'firebase/app';

interface UserData {
    uid: string;
    email: string;
    photoURL?: string;
    username?: string;
    gender?: string;
    birthday?: string;
}

@Injectable()
export class UserService {
    constructor(
        private db: AngularFirestore
    ) {
        // For time error
        //db.firestore.settings({ timestampsInSnapshots: true });        
    }

    public getUserSettings(){
        return new Promise<any>((resolve, reject) => {
            this.getCurrentUser()
            .then(user => {
                this.db.doc(`user_settings/${user.uid}`).ref.get()
                .then(doc => {
                    resolve(doc.data());
                })
                .catch(err => {
                    reject(err);
                });
            })
            .catch(error => {
                reject(error);
            });
        });
    }

    public getUserData(){
        return new Promise<any>((resolve, reject) => {
            this.getCurrentUser()
            .then(user => {
                this.db.doc(`users/${user.uid}`).ref.get()
                .then(doc => {
                    resolve(doc.data());
                })
                .catch(err => {
                    reject(err);
                });
            })
            .catch(error => {
                reject(error);
            });
        });
    }

    public getUserProfile(){
        return new Promise<any>((resolve, reject) => {
            this.getCurrentUser()
            .then(user => {
                this.db.doc(`user_profile/${user.uid}`).ref.get()
                .then(doc => {
                    resolve(doc.data());
                })
                .catch(err => {
                    reject(err);
                });
            })
            .catch(error => {
                reject(error);
            });
        });
    }

    private getCurrentUser() {
        return new Promise<any>((resolve, reject) => {
            const user = firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    resolve(user);
                } else {
                    reject('No user logged in');
                }
            });
        });
    }

    public updateCurrentUser(value) {
        return new Promise((resolve, reject) => {
            const user = firebase.auth().currentUser;
            user.updateProfile({
                displayName: value.username,
                photoURL: user.photoURL
            }).then(res => {
                this.registerUserData(user, value)
                    .then(data => {
                        resolve(res);
                    })
                    .catch(err => {
                        reject(err);
                    });
            }, err => reject(err));
        });
    }
    private registerUserData(user, value) {
        // Sets user data to firestore on register
        const userRef: AngularFirestoreDocument<any> = this.db.doc(`users/${user.uid}`);
        const data: UserData = {
            uid: user.uid,
            email: user.email,
            username: value.username,
            photoURL: user.photoURL,
            gender: value.gender,
            birthday: value.birthday
        };
        return userRef.set(data);
    }

    public updateUserSettings(data) {
        // Sets user settings
        return this.getCurrentUser()
            .then(user => {
                const userRef: AngularFirestoreDocument<any> = this.db.doc(`user_settings/${user.uid}`);
                return userRef.set(data);
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    }

    public updateUserProfile(data) {
        // Sets user profile
        return this.getCurrentUser()
            .then(user => {
                const userRef: AngularFirestoreDocument<any> = this.db.doc(`user_profile/${user.uid}`);
                return userRef.set(data);
            })
            .catch(err => {
                console.log(err);
                return err;
            });
    }
}
