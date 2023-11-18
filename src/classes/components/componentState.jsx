import { useState } from "react";

export function ComponentState() {
  const [showCreateRoomPage, setShowCreateRoomPage] = useState(false);
  const [showUpdateRoomPage, setShowUpdateRoomPage] = useState(false);
  const [showCreateRegistrationPage, setShowCreateRegistrationPage] =
    useState(false);
  const [showUpdateRegistrationPage, setShowUpdateRegistrationPage] =
    useState(false);

  return {
    showCreateRoomPage,
    showUpdateRoomPage,
    showCreateRegistrationPage,
    showUpdateRegistrationPage,
    setShowCreateRoomPage,
    setShowUpdateRoomPage,
    setShowCreateRegistrationPage,
    setShowUpdateRegistrationPage,
  };
}
