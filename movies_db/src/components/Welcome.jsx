import React from "react"
import { IndexMenu } from "../pages/IndexMenu";

export function Welcome(prop) {
    return(
      <>
        <h1>Bienvenido { prop.username }</h1>
        <h2>Pel·lícules per a l’estiu.</h2>

        <IndexMenu/>
      </>
    );
}