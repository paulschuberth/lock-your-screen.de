import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lockScreenShortCut(forOs: OS|undefined): string {
    switch (forOs) {
      case 'Windows': return 'Windows Key + L';
      case 'Android':
      case 'iOS': return 'Lock button';
      case 'Linux': return 'Ctrl + Alt + L';
      case 'macOS': return 'Ctrl + Command + Q';
      default: return 'Unknown';
    }
  }

  detectOS(): OS|undefined {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Windows NT')) {
      return 'Windows';
    }

    if (userAgent.includes('like Mac')) {
      return 'iOS';
    }

    if (userAgent.includes('Mac')) {
      return 'macOS';
    }

    if (userAgent.includes('Android')) {
      return 'Android';
    }

    if (userAgent.includes('Linux')) {
      return 'Linux';
    }

    return undefined;
  }
  title = 'lock-your-screen';
}

export type OS = 'macOS' | 'Windows' | 'Android' | 'iOS' | 'Linux'
