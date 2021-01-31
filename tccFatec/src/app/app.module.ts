import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {environment} from '../environments/environment';
// HTTP
import {HttpClientModule} from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


// Firebase
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireModule} from '@angular/fire';
import {IonicStorageModule } from '@ionic/storage';
import {AngularFireAuth, AngularFireAuthModule} from '@angular/fire/auth';

// Modals
import {LoginModalModule} from './components/modals/login-modal/login-modal.module';
import {AccountModalModule} from './components/modals/account-modal/account-modal.module';

// Font Awesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {fab} from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fab);

// BrMasker
import { BrMaskerModule } from 'br-mask';
import { YourInterceptor } from '../app/services/Interceptor/interceptor';


@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        AppRoutingModule,
        BrMaskerModule,
        FontAwesomeModule,
        HttpClientModule,
        AngularFireAuthModule,
        LoginModalModule,
        AccountModalModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AngularFireAuth,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: YourInterceptor, multi: true}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
