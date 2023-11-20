import FigHome from "../../ui-components/FigHome";
import FigCreateRoom from "../../ui-components/FigCreateRoom";
import { FuncHomeOverride } from "../overrides/home_override";
import { Alert, View } from "@aws-amplify/ui-react";
import { FuncCreateRoomOverride } from "../overrides/create_room_override";
import {
  ComponentStateContext,
  HelpersContext,
} from "../../contexts/data_models/context";
import React from "react";
import { AlertBoxHome } from "../../classes/components/alertBoxHome";

export default function HomeLayout() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const { homeOverride } = FuncHomeOverride();
  const { createRoomOverride } = FuncCreateRoomOverride();
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
    </View>
  );
}
