## umi-quick-create

#### 介绍

> umi-quick-create 是基于我们现在项目 umi + ts 架构开发的插件

能够如下几个方面提升我们的开发效率

##### 1. 快速创建模块

找到相应目录右键选择[umi]新建模块：

![](https://imgkr2.cn-bj.ufileos.com/c3d3b22c-c774-4179-ac48-c5c22f5b523c.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=loHmitLF46Ou1RwxXM%252F3Nf0BD08%253D&Expires=1607393865)

自动生成目录结构：

![](https://imgkr2.cn-bj.ufileos.com/4884be46-e669-46d3-8e9a-cf09d9771544.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=HM4LIreHSt5zMGy7FCnb5yTZ1a0%253D&Expires=1607393982)

##### 2. 快速创建组件

找到相应目录右键选择[umi]新建组件：

![](https://imgkr2.cn-bj.ufileos.com/2f0ec6a1-f865-45f1-ad3f-657e0ea3d4c2.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=Dqe%252Bpph5GCFySbB3D2aqWAjk8aA%253D&Expires=1607395015)

自动生成目录结构：

![](https://imgkr2.cn-bj.ufileos.com/9d2e224a-9b4c-4d7f-83db-351b5fab22c7.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=yC4DT8KYkt0D5zGpl0OPHwW%252BThw%253D&Expires=1607395207)

##### 3. 内置摸版

内置两个摸版， 使用快捷命令： fc、fcp
![](https://imgkr2.cn-bj.ufileos.com/57e27205-cedf-4434-9157-451fe7d50f9c.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=ClnagVL91s%252FvSs5HKczJr9FDS3w%253D&Expires=1607395272)

fc:

```javascript
export interface IDemoProps {
  [key: string]: any;
}
const Demo: React.FC<IDemoProps> = (props) => {
  const {} = props;
  return <div className={styles.Demo}></div>;
};
```

fcp:

```javascript
import React from "react";
import styles from "./index.less";

export interface IDemoProps {
  [key: string]: any;
}

const Demo: React.FC<IDemoProps> = (props) => {
  const {} = props;
  return <div className={styles.Demo}></div>;
};

export default Demo;
```

##### 4. 对现有组件改造

目标文件：

```javascript
import React from "react";
import styles from "./index.less";

export interface IDemoProps {
  [key: string]: any;
}

const Demo: React.FC<IDemoProps> = (props) => {
  const {} = props;
  const a = 12312312;
  return (
    <div className={styles.Demo}>
      <div className={styles.demo_simple}>{a}</div>
    </div>
  );
};

export default Demo;
```

选中需要抽离的部分右键选择[umi]新建方法:

![](https://imgkr2.cn-bj.ufileos.com/f5be11fd-b13a-471f-b22c-4f388b482960.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=s90HQtXOCx%252BIaKvnxp9rt4rcPU4%253D&Expires=1607395622)

最终生成：

```javascript
import React from "react";
import styles from "./index.less";

export interface IDemoProps {
  [key: string]: any;
}

const Demo: React.FC<IDemoProps> = (props) => {
  const {} = props;
  const a = 12312312;
  return (
    <div className={styles.Demo}>
      <Demosimple a={a} />
    </div>
  );
};

export default Demo;
export interface IDemosimple {
  [key: string]: any;
}
export const Demosimple: React.FC<IDemosimple> = (props) => {
  const { a } = props;
  return <div className={styles.demo_simple}>{a}</div>;
};
```

##### 5. json 数据快速生成 ts interface

点击工作台：

![](https://imgkr2.cn-bj.ufileos.com/7a1c9e57-0491-4545-9f91-9af86ddbde61.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=rjlAlQZGpfdiSRCoMoh9x67hQOk%253D&Expires=1607395811)

会将当前窗口一分为二

![](https://imgkr2.cn-bj.ufileos.com/63530974-64a5-4776-9c81-eb173338b2f5.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=DGQFCkuae1NLVXRdDkidP3t5CWM%253D&Expires=1607395871)

输入 json

```json
{ "code": 200, "message": "ok", "data": "nihao" }
```

生成：

```
// IDemo demo

export default interface IDemo {
	code?:number,
	message?:string,
	data?:string
}
```

### 快速开始

要开始写 VS Code 扩展，需要两个工具：

yeoman：有助于启动新项目
`vscode-generator-code`：由`VS Code`团队使用`yeoman`构建的生成器 可以使用 yarn 或 npm 安装这两个工具，安装完成之后执行`yo code`，等一会之后它会帮我们生成起始项目，并会询问几个问题：

![](https://imgkr2.cn-bj.ufileos.com/279182f7-2d08-4630-80aa-06525adad65f.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=GdwZ90dDMYUVVrn9bV0DcDqQoRc%253D&Expires=1607398816)

确认信息之后，会帮我们初始化好整个项目，此时的目录结构是这样的：

![](https://imgkr2.cn-bj.ufileos.com/9531666a-e5b0-4b15-80ae-fb722ae5c810.png?UCloudPublicKey=TOKEN_8d8b72be-579a-4e83-bfd0-5f6ce1546f13&Signature=QOf6Yv6IRxMl1ljxC2%252B9OnGBLjc%253D&Expires=1607399223)
