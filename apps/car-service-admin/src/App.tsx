import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { CarBrandList } from "./carBrand/CarBrandList";
import { CarBrandCreate } from "./carBrand/CarBrandCreate";
import { CarBrandEdit } from "./carBrand/CarBrandEdit";
import { CarBrandShow } from "./carBrand/CarBrandShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CarService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="CarBrand"
          list={CarBrandList}
          edit={CarBrandEdit}
          create={CarBrandCreate}
          show={CarBrandShow}
        />
      </Admin>
    </div>
  );
};

export default App;
