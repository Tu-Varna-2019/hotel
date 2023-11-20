import { useState } from "react";

export function ComponentState() {
  // Create
  const [showCreateRoomPage, setShowCreateRoomPage] = useState(false);
  const [showCreateRegistrationPage, setShowCreateRegistrationPage] =
    useState(false);

  // Update
  const [showUpdateClientPage, setShowUpdateClientPage] = useState(false);
  const [showUpdateRoomPage, setShowUpdateRoomPage] = useState(false);
  const [showUpdateRegistrationPage, setShowUpdateRegistrationPage] =
    useState(false);

  return {
    showUpdateClientPage,
    setShowUpdateClientPage,
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
