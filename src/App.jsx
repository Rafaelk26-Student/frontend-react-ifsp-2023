import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Page404 from './components/pages/Page404'

import {Routes, Route} from 'react-router-dom'

const App = () =>{

    
  return (  
      <Routes>
       <Route path='/' Component={Home} />
       <Route path='/about' Component={About} />
       <Route path='/contato' Component={Contact} />
       <Route path='/*' Component={Page404} />
      </Routes>
    )
}

export default App;