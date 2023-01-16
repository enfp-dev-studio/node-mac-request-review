# node-mac-request-review

![npm](https://img.shields.io/npm/dm/node-mac-request-review?style=flat-square)

---
### Note
A Native module to show App Store review requesting UI. This library is a simple wrapper of [Storekit's requestReview](https://developer.apple.com/documentation/storekit/skstorereviewcontroller/2851536-requestreview).  
It was created for use in Electron apps. It is currently being used in my app, [Capture Note](https://capture-note.enfpdev.com).

<p align="center">
  <img center width="532" alt="image" src="https://user-images.githubusercontent.com/57121116/209694268-af2d01c0-d6ef-4141-9e94-dd3b2453d0b2.png">
</p>


### How To Install

```bash
$ yarn add node-mac-request-review
```

### How to Use

```typescript
import { requestReview } from "node-mac-request-review";

// Ask Review
requestReview();
```

---

<!-- Coffee fuels coding ☕️

<p align="center">
<a href="https://www.buymeacoffee.com/enfpdev" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
 </p>
 -->


