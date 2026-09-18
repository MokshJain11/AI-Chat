import './App.css'
import AppLayout from './components/AppLayout';
import MainScreen from './components/MainScreen'
import {type JSX} from 'react'
import {Routes, Route} from 'react-router-dom'

export default function App(): JSX.Element {

  return (
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path='/' element={<MainScreen/>}/>
        <Route path='/chat/:chatId' element={<MainScreen/>}/>
      </Route>
    </Routes>
  );
}