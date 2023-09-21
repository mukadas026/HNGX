import { initializeApp } from "firebase/app"
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
	apiKey: "AIzaSyDY3Z7voR2pun5mzik2sQ6Jjw7Bgj5zReA",
	authDomain: "image-gallery-hngx.firebaseapp.com",
	projectId: "image-gallery-hngx",
	storageBucket: "image-gallery-hngx.appspot.com",
	messagingSenderId: "272340447493",
	appId: "1:272340447493:web:74dc1d5c3335ebf010876c",
	measurementId: "G-PJE404FCMY",
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)