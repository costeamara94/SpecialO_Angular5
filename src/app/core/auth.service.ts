import * as firebase from 'firebase';

export class AuthService {
    signupUser(email: string, password: string) {
        console.log('ajunge la metoda');
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .catch(
                error => console.log(error)
            );
    }

    signinUser(email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => console.log('merge login')
            )
            .catch(
                error => console.log('nu a mers login')
            );
    }

}
