import * as firebase from 'firebase';

export class AuthService {
    signupUser(email: string, password: string) {
        console.log('ajunge la metoda');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }
}
