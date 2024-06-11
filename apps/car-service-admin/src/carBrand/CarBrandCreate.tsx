import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CarBrandCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="brandName" source="brandName" />
      </SimpleForm>
    </Create>
  );
};
