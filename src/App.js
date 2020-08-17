import React from 'react';
import './assets/css/app.scss';
import 'antd/dist/antd.css';

import { Layout } from '@/components'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'

export default class App extends React.Component  {
  render(){
    return (
      
      <HashRouter>
        
        < Provider store={store}>
           < Layout />   
        </Provider>
          
      </HashRouter>
    )
  }
}


