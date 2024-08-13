import { Routes } from '@angular/router';
import { LearnComponent } from './pages/learn/learn.component';
import { VersesComponent } from './pages/verses/verses.component';
import { LeaderboardComponent } from './pages/leaderboard/leaderboard.component';
import { PracticeComponent } from './pages/practice/practice.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { QuestsComponent } from './pages/quests/quests.component';

export const routes: Routes = [
    { path: '', redirectTo: 'learn', pathMatch: 'full' },
    { path: 'learn', component: LearnComponent },
    { path: 'verses', component: VersesComponent},
    { path: 'leaderboard', component: LeaderboardComponent},
    { path: 'practice', component: PracticeComponent},
    { path: 'profile', component: ProfileComponent},
    { path: 'quests', component: QuestsComponent}
];
