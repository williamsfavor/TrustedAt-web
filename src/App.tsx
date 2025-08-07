import { Route, Routes } from "react-router"
import MainLayout from "./components/layouts/main"
import HomePage from "./pages/home"
import AboutUs from "./pages/aboutus"
import ContactUs from "./pages/contact"
import LegalPage from "./pages/legal"
import PrivacyPolicyPage from "./pages/legal/privacypolicy"
import ChildSafetyPage from "./pages/legal/childsafety"
import CookiePolicyPage from "./pages/legal/cookiepolicy"
import EthicalCodePage from "./pages/legal/ethicalpage"
import UserAgreementPage from "./pages/legal/useragreement"

function App() {


  return (

   <Routes>
      <Route element={<MainLayout/>} >
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/legal" element={<LegalPage/>}>
            <Route path="/legal" element={<PrivacyPolicyPage/>}></Route>
            <Route path="/legal/ethical-code" element={<EthicalCodePage/>}></Route>
            <Route path="/legal/user-agreement" element={<UserAgreementPage/>}></Route>
            <Route path="/legal/child-safety" element={<ChildSafetyPage/>}></Route>
            <Route path="/legal/cookie-policy" element={<CookiePolicyPage/>}></Route>
          </Route>
          
      </Route>

   </Routes>
    
  )
}

export default App
