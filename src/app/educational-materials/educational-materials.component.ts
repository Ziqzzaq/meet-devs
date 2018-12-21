import { Component } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Component({
    selector: 'Educational-materials',
    templateUrl: './educational-materials.component.html',
    styleUrls: ['./educational-materials.component.scss'],
    moduleId: module.id
})
export class EducationalMaterialsComponent {

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
