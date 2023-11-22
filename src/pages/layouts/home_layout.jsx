import FigHome from "../../ui-components/FigHome";
import FigCreateRoom from "../../ui-components/FigCreateRoom";
import FigUpdateUser from "../../ui-components/FigUpdateUser";
import FigUpdateRegistration from "../../ui-components/FigUpdateRegistration";
import FigUpdateRoom from "../../ui-components/FigUpdateRoom";
import FigCreateRegistration from "../../ui-components/FigCreateRegistration";
import FigBlank from "../../ui-components/FigBlank";
import { FuncHomeOverride } from "../overrides/home_override";
import { View } from "@aws-amplify/ui-react";
import { FuncCreateRoomOverride } from "../overrides/create_room_override";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import React from "react";
import { AlertBoxHome } from "../../classes/components/alertBoxHome";
import { FuncCreateRegistrationOverride } from "../overrides/create_registration_override";
import { FuncUpdateClientOverride } from "../overrides/update_client_override";
import { FuncUpdateRoomOverride } from "../overrides/update_room_override";
import { FuncOutputTableOverride } from "../overrides/output_table_override";
import { OutputTableHome } from "../../classes/components/outputTableHome";

export default function HomeLayout() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const { homeOverride } = FuncHomeOverride();

  // Create
  const { createRoomOverride } = FuncCreateRoomOverride();
  const { createRegistrationOverride } = FuncCreateRegistrationOverride();

  // Update
  const { updateClientOOverride } = FuncUpdateClientOverride();
  const { updateRoomOverride } = FuncUpdateRoomOverride();

  // Output table
  const { outputTableOverride } = FuncOutputTableOverride();

  const { UtilsObject } = React.useContext(HelpersContext);

  return (
    <View position="relative" display="inline-block">
      {UtilsObject.showAlertBox && <AlertBoxHome />}
      <FigHome overrides={homeOverride} />

      {ComponentStateObject.showCreateRoomPage && (
        <View position="absolute" display="block" top="0">
          <FigCreateRoom overrides={createRoomOverride} />
        </View>
      )}
      {ComponentStateObject.showCreateRegistrationPage && (
        <View position="absolute" display="block" top="0">
          <FigCreateRegistration overrides={createRegistrationOverride} />
        </View>
      )}

      {ComponentStateObject.showUpdateClientPage && (
        <View position="absolute" display="block" top="0">
          <FigUpdateUser overrides={updateClientOOverride} />
        </View>
      )}
      {ComponentStateObject.showUpdateRoomPage && (
        <View position="absolute" display="block" top="0">
          <FigUpdateRoom overrides={updateRoomOverride} />
        </View>
      )}
      {ComponentStateObject.showUpdateRegistrationPage && (
        <View position="absolute" display="block" top="0">
          <FigUpdateRegistration overrides={createRegistrationOverride} />
        </View>
      )}

      {(ComponentStateObject.showAvailableRooms ||
        ComponentStateObject.showAllSSNs) && (
        <View position="absolute" display="block" top="0">
          <FigBlank overrides={outputTableOverride} />

          <View
            position="absolute"
            display="block"
            top="0"
            justifyContent="center"
            right="700px"
          >
            <OutputTableHome />
          </View>
        </View>
      )}
    </View>
  );
}
