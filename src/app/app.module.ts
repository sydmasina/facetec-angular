import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import type { FaceTecSDK as FaceTecSDKType } from "../assets/core-sdk/FaceTecSDK.js/FaceTecSDK";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

declare global {
  const FaceTecSDK: typeof FaceTecSDKType;
}
