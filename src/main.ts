import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter, Routes } from '@angular/router';
import { AiChatComponent } from './app/component/ai-chat/ai-chat.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'ai-chat',
    component: AiChatComponent
  }
];

bootstrapApplication(AppComponent,
    {
  providers: [
    provideHttpClient()

  ]
}
).catch(err => console.error(err));