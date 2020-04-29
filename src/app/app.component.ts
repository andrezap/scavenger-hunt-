import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {PointsService} from './shared/point/points.service';
import {RouteService} from './shared/route/route.service';
import {ScreenOrientation} from '@ionic-native/screen-orientation/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private pointsService: PointsService,
        private routeService: RouteService,
        private screenOrientation: ScreenOrientation
    ) {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE).then(() => {
            console.log('Locked');
        }).catch(e => console.log(e));
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.pointsService.start();
            this.routeService.start();
            this.platform.backButton.subscribeWithPriority(1, () => { // to disable hardware back button on whole app
            });
        });
    }
}
