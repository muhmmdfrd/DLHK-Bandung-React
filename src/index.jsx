// react library
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

// root module
import App from "./App";

// service worker
import * as serviceWorker from "./serviceWorker";

// css library
import "./assets/css/fontawesome-free/css/all.min.css";
import "./assets/css/sb-admin-2.css";

// js library
import "chart.js";

// provider and context
import { PersonProvider } from "./providers/PersonContext";
import { PresenceProvider } from "./providers/PresenceContext";
import { ItemProvider } from "./providers/ItemContext";
import { EmployeeProvider } from "./providers/EmployeeContext";
import { ApplicantProvider } from "./providers/ApplicantContext";
import { InterviewProvider } from "./providers/InterviewContext";
import { RoleProvider } from "./providers/RoleContext";
import { DashboardProvider } from "./providers/DashboardContext";
import { UserProvider } from "./providers/UserContext";

const AllProvider = ({ children }) => {
  return (
    <PersonProvider>
      <PresenceProvider>
        <ItemProvider>
          <EmployeeProvider>
            <ApplicantProvider>
              <InterviewProvider>
                <RoleProvider>
                  <DashboardProvider>
                    <UserProvider>{children}</UserProvider>
                  </DashboardProvider>
                </RoleProvider>
              </InterviewProvider>
            </ApplicantProvider>
          </EmployeeProvider>
        </ItemProvider>
      </PresenceProvider>
    </PersonProvider>
  );
};

ReactDOM.render(
  <StrictMode>
    <AllProvider>
      <App />
    </AllProvider>
  </StrictMode>,
  document.getElementById("root")
);

// register or unregister serviceworker
serviceWorker.unregister();
