---
slug: 2022-12-03_3ds_bad_apple_node
authors: [weiji,]
tags: [learning note, 3ds, javascript, quickjs ]
--- 

# Javascript x Bad Apple x Ascii 筆記

## 從影片逐幀取出畫面

這個步驟不難，使用 FFmpeg 只要一行指令就能完成：

```shell
mkdir output
ffmpeg -i bad_apple.mp4 -vf fps=5 output/%04d.png
```

## 將畫面轉換成 ASCII 純文字檔

這個步驟也不難，把剛剛生成的畫面載入、轉換再吐出去，搞定。

```javascript
import fs from 'fs';
import asciify from 'asciify-image';

fs.mkdirSync('data', { recursive: true });

var options = {
    fit: 'none',
    width: 50,
    height: 30,
    c_ratio: 1,
    color: false,
}

/**
 * @param {string} path 
 * @returns {Promise<string>}
 */
const imageToAsciiPromise = (path) => new Promise((resolve, reject) => {
    asciify(path, options, (err, asciified) => {
        if (err) {
            reject(err)
        }
        resolve(asciified.replaceAll(';', ' '));
    });
});

const _files = fs.readdirSync('img');

const files = _files.map((file, index) => {
    const sourcePath = (`img/${file}`);
    const targetPath = `data/${(index + 1).toString().padStart(4, '0')}.txt`;
    return {
        sourcePath, targetPath
    };
});

for (const { sourcePath, targetPath } of files) {
    const acsii = await imageToAsciiPromise(sourcePath);
    fs.writeFileSync(targetPath, acsii);
    console.log(sourcePath)
}
```

## 播放

```javascript
import * as os from "os";
import * as std from "std";

let count = 1;

const drawFrame = () => {
    const timer = os.setTimeout(drawFrame, 200);
    count++;

    const f = std.loadFile(`data/${count.toString().padStart(4, '0')}.txt`);
    if (f === null) {
        os.clearTimeout(timer);
        return;
    }

    std.out.puts('\x1B[2J');
    std.out.puts(f + '\n');
}

drawFrame();
```

需要特別注意的是，這個執行環境是 QuickJs，`os` 和 `std` 都是該直譯器提供的模組。