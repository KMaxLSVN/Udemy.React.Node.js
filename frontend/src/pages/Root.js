import { Outlet } from "react-router-dom";

import MainNvigation from "../components/MainNavigation";

function RootLayout() {
  // const navigation = useNavigation();
  return (
    <>
      <MainNvigation />{" "}
      <main>
        {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
