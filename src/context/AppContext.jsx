import { createContext, useEffect, useState } from "react";
// import axios from "axios";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  /*
        ********
        *********
        ***********
        MISC
      */

  // Topbar Title
  const [topbarTitle, setTopbarTitle] = useState("Dashboard");

  /* ***********
   *********
   ********
   */

  // ****Fetch Everything ****//
  useEffect(() => {}, []);

  return (
    <AppContext.Provider
      value={{
        /*
                          ********
                          *********
                          ***********
                          MISC
                        */
        topbarTitle,

        setTopbarTitle,

        /* ***********
         *********
         ********
         */
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
