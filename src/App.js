import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import blogs from "./components/blog/blogs"
import { RegsiterOtp } from "./pages/login/RegsiterOtp"
import { RegsiterPassword } from "./pages/login/RegsiterPassword"
import polles from "./components/Polles/polles"
import { DetailsPolles } from "./pages/details/DetailsPolles"
import { Contact } from "./pages/contact/Regsiter"
import { About } from "./pages/home/About"
import { ForgetOtp } from "./pages/login/ForgetOtp"
import { ForgetVerifyOtp } from "./pages/login/ForgetVerifyOtp"
import { ForgetPassword } from "./pages/login/ForgetPassword"

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/blogs' component={blogs} />
          <Route exact path='/polls' component={polles} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/register' component={Regsiter} />
          <Route exact path='/register/otp' component={RegsiterOtp} />
          <Route exact path='/register/password' component={RegsiterPassword} />
          <Route exact path='/details/:id' component={DetailsPages} />
          <Route exact path='/detail/:id' component={DetailsPolles} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/create' component={Create} />
          <Route exact path='/about' component={About} />
          <Route exact path='/forget/otp' component={ForgetOtp} />
          <Route exact path='/forget/verifyotp' component={ForgetVerifyOtp} />
          <Route exact path='/forget/password' component={ForgetPassword} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}
export default App
