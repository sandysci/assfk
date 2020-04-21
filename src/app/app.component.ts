import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Dashboard',
      url: '/merchant/Inbox',
      icon: 'mail'
    },
    {
      title: 'Merchants',
      url: '/merchant/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/merchant/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/merchant/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/merchant/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/merchant/Spam',
      icon: 'warning'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('merchant/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
