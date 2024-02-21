import { Component, VERSION } from "@angular/core";
import { SampleApp } from "../assets/FaceTecAngularSampleApp/src/sampleAppController";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  ngOnInit(): void {
    console.log("Angular version: " + VERSION.full);
  }

  themeDir = "../assets/sample-app-resources/images/themes";
  title = "facetec-sample-app";

  // Perform Liveness Check.
  onLivenessCheckPressed() {
    SampleApp.onLivenessCheckPressed();
  }

  onEnrollmentPressed() {
    SampleApp.onEnrollUserPressed();
  }

  onAuthenticatePreseed() {
    SampleApp.onAuthenticateUserPressed();
  }

  onPhotoIDPressed() {
    SampleApp.onPhotoIDMatchPressed();
  }

  onPhotoIDScanPressed() {
    SampleApp.onPhotoIDScanPressed();
  }

  onViewAuditTrailPressed() {
    SampleApp.onViewAuditTrailPressed();
  }

  onDesignShowcasePressed() {
    SampleApp.onDesignShowcasePressed();
  }

  onVocalGuidanceSettingsButtonPressed() {
    SampleApp.onVocalGuidanceSettingsButtonPressed();
  }
}
