<p align="center">
  <a href="http://courses.angularclass.com/courses/angular-2-fundamentals" target="_blank">
    <img width="438" alt="Angular 2 Fundamentals" src="https://cloud.githubusercontent.com/assets/1016365/17200649/085798c6-543c-11e6-8ad0-2484f0641624.png">
  </a>
</p>

---

# Angular 2 Bootloader
> Angular 2 Bootloader for async script tag and hmr support

#### Why do I need async tag support?
Chrome V8 parses script tags with `<script async>` or `<script defer>` on a separate thread once downloading of `index.html` begins. Initial load of your `index.html` improves by up to **10%**


![czkf6kfviaamqm6](https://cloud.githubusercontent.com/assets/1016365/21236289/6f7dffd6-c2c8-11e6-97f4-291f8eeeb72d.jpg)


### Install
> `npm install @angularclass/bootloader --save`


`main.module.ts`
```typescript
import { bootloader } from '@angularclass/bootloader';

@NgModule({
  // ...
})
export class MainModule {}

export function main() {
  return platformBrowserDynamic().bootstrapModule(MainModule);
}

bootloader(main); // this will bootstrap your main function
```
`index.html`
```html
<script async src="app.bundle.js"></script>
```

If you have a vendor file you can delete it and include async tag in your one app bundle

enjoy — **AngularClass**

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? patrick@angularclass.com
