import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { EducationalMaterialsComponent } from '~/app/educational-materials/educational-materials.component';

const routes: Routes = [
    {path: '', component: EducationalMaterialsComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class EducationalMaterialsRoutingModule {
}
