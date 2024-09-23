import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Controller from "../containers/controller_cont";
// import Login from "../../auth/container/superadminCont";
// import UserLogin from "../../auth/container/userLoginCont";
// import UserOtpVerificationCont from "../../auth/container/userOtpVerificationCont";
// import Dashboard from "../../pages/Dashboard/Container/dashboardconts";
// import Whatsapp from "../../pages/Dashboard/Container/dashboardconts";
// import Drawer_option_con from "../containers/drawer_cont";
import Error from "../../404";
// import CampaignDetails from "../../pages/Campaign Details/Components/CampaignDetails";
// import AdminWhatsApp from "../../pages/AdminWhatsApp/Components/AdminWhatsApp";
// import WhatsappClientCont from "../../pages/Whatsapp Report/Container/WhatsappCont";
// import BusinessWhatsApp from "../../pages/BusinessWhatsApp/Components/BusinessWhatsApp";
// import Sms from "../../pages/sms/Container/WhatsappCont";
// import Voice from "../../pages/voice/Container/WhatsappCont";
// import VoiceCall from "../../pages/voiceCall/Components/voiceCall";
// import ContactUs from "../../pages/ContactUs/Container/ContactUsCont";
import Home from "../../pages/home/home";
import Header from "../../common/header/header";
import Footer from "../../pages/Footer/Footer";
// import WhatsappClientCont from "../../pages/Whatsapp Report/Components/Whatsapp";
// import CreateAccount from "../../auth/container/CreateaccountCont";
//Help

class Routers extends Component {
  render() {
    const { login, onLogout } = this.props;
    let body;
    // console.log(login);

    if (login.isHome) {
      body = (
        <div>
          <main
            style={{
              flexGrow: 1,
            }}
          >
            <Controller />
            <Header />
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route exact path="/signup" element={<CreateAccount />} /> */}
              {/* <Route exact path="/footer" element={<Footer />} /> */}
              <Route exact path="*" element={<Error />} />
            </Routes>
            <Footer/>
          </main>
        </div>
      );
    }

    // Uncomment this to use login facility

    // else {
    //   if (login.role === "Admin") {
    //     body = (
    //       <div style={{

    //         marginLeft:"0px",
    //         marginTop:"40px"
    //       }}>
    //         <Drawer_option_con
    //           type={login.type}
    //           onLogout={onLogout}
    //           name={login.name}
    //           style={{display: "none"}}
    //         />
    //         <main>
    //           <Controller />
    //           <Routes>
    //             <Route exact path="/" element={<AdminWhatsApp />}></Route>
    //           </Routes>
    //         </main>
    //       </div>
    //     );
    //   } else if (login.role === "User") {
    //     body = (
    //       <div>
    //         <Drawer_option_con
    //           type={login.type}add
    //           onLogout={onLogout}
    //           name={login.name}
    //         />
    //         <main
    //           style={{
    //             flexGrow: 1,
    //             marginLeft: 100,
    //             marginTop: 0,
    //           }}
    //         >
    //           <Controller />
    //           <Routes>
    //             <Route exact path="/" element={<Whatsapp />}></Route>
    //             <Route exact path="/WhatsappClient" element={<WhatsappClientCont />}></Route>
    //             <Route exact path="/sms" element={<Sms />}></Route>
    //             <Route exact path="/voice" element={<Voice />}></Route>
    //             <Route exact path="/voiceCall" element={<VoiceCall />}></Route>
    //             <Route exact path="/contactUs" element={<ContactUs />}></Route>
    //             <Route exact path="/BusinessWhatsApp" element={<BusinessWhatsApp />}></Route>
    //             {/* <Route exact path="/plans" element={<WhatsappClientCont />}></Route> */}
    //           </Routes>
    //         </main>
    //       </div>
    //     );
    //   }
    // }
    return <Router>{body}</Router>;
  }
}
export default Routers;

// sudo sysctl fs.inotify.max_user_watches=524288
