import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastComponent } from './shared/components/toast/toast.component';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DialogComponent } from './shared/components/dialog/dialog.component';
import { ComplexModalComponent } from './components/complex-modal/complex-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        ToastComponent,
        ModalComponent,
        DialogComponent,
        ComplexModalComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
