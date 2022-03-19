# Blockies

A tiny library for generating blocky identicons.

![Sample blockies image](samples/sample.png)

## Use

```javascript
import {toDataUrl} from 'blockies';

const img = new Image() ;
img.src = blockies.toDataUrl('cb381b46c1ed8030d7cf7affe5bff470f068c5ea3498');

document.body.appendChild(img);
```

## License

[CORE License](LICENSE)
