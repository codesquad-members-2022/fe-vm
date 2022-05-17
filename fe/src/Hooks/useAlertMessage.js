import { AlertMessage, SetAlertMessage } from "App";
import { useContext } from "react";

export default function useAlertMessage() {
  const [alertMessage, setAlertMessage] = [useContext(AlertMessage), useContext(SetAlertMessage)];
  return [alertMessage, setAlertMessage];
}
