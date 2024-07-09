import { configureStore } from '@reduxjs/toolkit'
import contador from '../reducers/contador'

export default configureStore({
  reducer: {
    counter: contador
  }
});