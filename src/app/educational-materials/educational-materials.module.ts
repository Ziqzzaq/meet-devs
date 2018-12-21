import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { EducationalMaterialsComponent } from '~/app/educational-materials/educational-materials.component';

@NgModule({
    declarations: [
        EducationalMaterialsComponent
    ],
    imports: [
        NativeScriptCommonModule
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class EducationalMaterialsModule {
}
