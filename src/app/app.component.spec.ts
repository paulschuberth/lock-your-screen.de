import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Lock your screen!'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Lock your screen!');
  });

  it('detects OS for Mac OS user agent', () => {
    spyOnProperty(window.navigator, 'userAgent').and.returnValue('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36');
    const component = new AppComponent();
    const actual = component.detectOS();
    expect(actual).toBe('macOS');
  });

  it('detects OS for Windows user agent', () => {
    spyOnProperty(window.navigator, 'userAgent').and.returnValue('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36');
    const component = new AppComponent();
    const actual = component.detectOS();
    expect(actual).toBe('Windows');
  });

  it('detects OS for iOS user agent', () => {
    spyOnProperty(window.navigator, 'userAgent').and.returnValue('Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 Instagram 265.0.0.13.302 (iPhone14,3; iOS 16_0; en_TR; en-TR; scale=3.00; 1284x2778; 435784589) NW/3');
    const component = new AppComponent();
    const actual = component.detectOS();
    expect(actual).toBe('iOS');
  });

  it('detects OS for Android user agent', () => {
    spyOnProperty(window.navigator, 'userAgent').and.returnValue('Mozilla/5.0 (Linux; Android 10; Pixel 3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Mobile Safari/537.36');
    const component = new AppComponent();
    const actual = component.detectOS();
    expect(actual).toBe('Android');
  });

  it('detects OS for Linux user agent', () => {
    spyOnProperty(window.navigator, 'userAgent').and.returnValue('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) HeadlessChrome/89.0.4389.0 Safari/537.36 +SematextSyntheticsRobot');
    const component = new AppComponent();
    const actual = component.detectOS();
    expect(actual).toBe('Linux');
  });

  it('detects OS for unknown user agent', () => {
    spyOnProperty(window.navigator, 'userAgent').and.returnValue('foo');
    const component = new AppComponent();
    const actual = component.detectOS();
    expect(actual).toBeUndefined();
  });

  it('returns correct screen lock shortcut for Windows', () => {
    const component = new AppComponent();
    const actual = component.lockScreenShortCut('Windows');
    expect(actual).toBe('Windows Key + L');
  });

  it('returns correct screen lock shortcut for Android', () => {
    const component = new AppComponent();
    const actual = component.lockScreenShortCut('Android');
    expect(actual).toBe('Lock button');
  });

  it('returns correct screen lock shortcut for iOS', () => {
    const component = new AppComponent();
    const actual = component.lockScreenShortCut('iOS');
    expect(actual).toBe('Lock button');
  });

  it('returns correct screen lock shortcut for macOS', () => {
    const component = new AppComponent();
    const actual = component.lockScreenShortCut('macOS');
    expect(actual).toBe('⌃ + ⌘ + Q');
  });

  it('returns correct screen lock shortcut for Linux', () => {
    const component = new AppComponent();
    const actual = component.lockScreenShortCut('Linux');
    expect(actual).toBe('Ctrl + Alt + L');
  });

  it('returns correct screen lock shortcut for unknown OS', () => {
    const component = new AppComponent();
    const actual = component.lockScreenShortCut(undefined);
    expect(actual).toBe('Unknown');
  });

  it(`has correct repo link`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.repoLink).toEqual('https://github.com/paulschuberth/lock-your-screen.de')
  });


});
