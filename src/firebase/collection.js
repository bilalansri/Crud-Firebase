import {collection} from 'firebase/firestore'
import {db} from './firebase'

export const collref = collection(db, 'movies')
export const day2ref = collection(db, 'crudform')
