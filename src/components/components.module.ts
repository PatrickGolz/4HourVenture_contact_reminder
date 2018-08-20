import { NgModule } from '@angular/core';
import { NotificationCardComponent } from './notification-card/notification-card';
import { NotificationListComponent } from './notification-list/notification-list';
import { NotificationListNotificationCardComponent } from './notification-list-notification-card/notification-list-notification-card';

import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {EditUserComponent} from "./edit-user/edit-user";


@NgModule({
	declarations: [NotificationCardComponent,
    NotificationListComponent,
    EditUserComponent,
    NotificationListNotificationCardComponent],
	imports: [CommonModule,
    FormsModule,
    IonicModule.forRoot(AboutPage),
    IonicModule.forRoot(ContactPage),
    IonicModule.forRoot(HomePage),
    IonicModule.forRoot(TabsPage)],
	exports: [NotificationCardComponent,
    NotificationListComponent,
    EditUserComponent,
    NotificationListNotificationCardComponent]
})
export class ComponentsModule {}
