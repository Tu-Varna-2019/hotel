import { Client } from "../../classes/data_models/client";
import { Registration } from "../../classes/data_models/registration";
import { Room } from "../../classes/data_models/room";
import { DataModelContext } from "../../contexts/data_models/context";

export function DataModelProvider({ children }) {
  const ClientObject = Client();
  const RoomObject = Room();
  const RegistrationObject = Registration();

  return (
    <DataModelContext.Provider
      value={{ ClientObject, RoomObject, RegistrationObject }}
    >
      {children}
    </DataModelContext.Provider>
  );
}
