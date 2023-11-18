import FigHome from "../../ui-components/FigHome";
import FigCreateRoom from "../../ui-components/FigCreateRoom";
import { FuncHomeOverride } from "../overrides/home_override";
import { View } from "@aws-amplify/ui-react";
import { FuncCreateRoomOverride } from "../overrides/create_room_override";
import { ComponentStateContext } from "../../contexts/data_models/context";
import React from "react";
import RegistrationCreateForm from "../../ui-components/RegistrationCreateForm";

export default function HomeLayout() {
  const { ComponentStateObject } = React.useContext(ComponentStateContext);

  const { homeOverride } = FuncHomeOverride();
  const { createRoomOverride } = FuncCreateRoomOverride();

  return (
    <View position="relative" display="inline-block">
      <FigHome overrides={homeOverride} />
      {ComponentStateObject.showCreateRoomPage && (
        <View position="absolute" display="block" top="0">
          <RegistrationCreateForm />
        </View>
      )}
    </View>
  );
}
// <FigCreateRoom overrides={createRoomOverride} />
