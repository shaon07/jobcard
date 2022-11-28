import React from 'react';
import { useUserAuth } from "../context";
import Private from "./Private";
import Public from "./Public";

export default function RoutesProvider() {
  const { user } = useUserAuth();

  return user ? <Private /> : <Public />

}
