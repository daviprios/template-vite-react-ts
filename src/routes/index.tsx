import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'

import { paths } from '$utils/paths'

import BaseLayout from '$layouts/BaseLayout'

import Home from '$pages/Home'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={paths.home} element={<BaseLayout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes