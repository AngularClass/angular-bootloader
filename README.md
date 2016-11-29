<p align="center">
  <a href="http://courses.angularclass.com/courses/angular-2-fundamentals" target="_blank">
    <img width="438" alt="Angular 2 Fundamentals" src="https://cloud.githubusercontent.com/assets/1016365/17200649/085798c6-543c-11e6-8ad0-2484f0641624.png">
  </a>
</p>

---

# Angular 2 Bootloader
> Angular 2 Bootloader for async script tag and hmr support

### Install
> `npm install @angularclass/bootloader --save`


`main.module.ts`
```typescript
import { bootloader } from '@angularclass/bootloader';

@NgModule({
  // ...
})
export class MainModule {}

export const platformRef = platformBrowserDynamic();

export function main() {
  return platformRef.bootstrapModule(MainModule);
}

bootloader(main); // this will bootstrap your
```
`index.html`
```html
<script async src="app.bundle.js"></script>
```


enjoy — **AngularClass**

<br><br>

[![AngularClass](https://cloud.githubusercontent.com/assets/1016365/9863770/cb0620fc-5af7-11e5-89df-d4b0b2cdfc43.png  "Angular Class")](https://angularclass.com)
##[AngularClass](https://angularclass.com)
> Learn AngularJS, Angular 2, and Modern Web Development from the best.
> Looking for corporate Angular training, want to host us, or Angular consulting? patrick@angularclass.com
