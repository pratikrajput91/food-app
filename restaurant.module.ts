import { NgModule } from '@angular/core';
import { RestaurantLoginComponent } from './restaurantLogin.component';
import { RestaurantRegistrationComponent } from './restaurantRegistration.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [RestaurantLoginComponent,
        RestaurantRegistrationComponent,
    ],

    imports:[BrowserModule,
        ],

        exports:[RestaurantLoginComponent,
            RestaurantRegistrationComponent,
            ],
        
})
export class RestaurantModule {

}