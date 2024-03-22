import { Routes } from '@angular/router';
import { StudentMgmtComponent } from './student-mgmt/student-mgmt.component';

export const routes: Routes = [
    {
        path: "student",
        component: StudentMgmtComponent
    },
    {
        path: "**",
        redirectTo: "/student",
        pathMatch: "full"
    }
];
