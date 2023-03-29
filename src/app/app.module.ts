import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { ComplexModalComponentComponent } from './components/complex-modal-component/complex-modal-component.component';

@NgModule({
    declarations: [
        AppComponent,
        ToastComponent,
        ModalComponent,
        DialogComponent,
        ComplexModalComponentComponent,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
