
## js原生UI组件库,不依赖任何库
需引用 commmonCss/dist/css/common.css

## 目录
* [toast](#toast)
* [modal](#modal)

<!--toast-api-->
## toast {#toast}
toast提示

### 1.1 使用
#### 1.1.1 commonJs规范
    1 安装  npm install js-toast
    2 引用  import toast from 'toast-js'
    3 使用  toast({content:'xxx'})
#### 1.1.2 引用 dist下js

### 1.2 参数
<table>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>描述</th>
        <th>必选</th>
        <th>默认值</th>
    </tr>
    <tr>
        <th>content</th>
        <th>string</th>
        <th>弹框内容</th>
        <th>Y</th>
        <th>{ }</th>
    </tr>
    <tr>
        <th>type</th>
        <th>string </th>
        <th>弹框种类 toast和loading</th>
        <th>N</th>
        <th>toast</th>
    </tr>
    <tr>
        <th>time</th>
        <th>number</th>
        <th>弹框时间</th>
        <th>N</th>
        <th>1000</th>
    </tr>
     <tr>
        <th>finish</th>
        <th>function</th>
        <th>弹框回调</th>
        <th>N</th>
        <th></th>
    </tr>
     <tr>
        <th>zIndex</th>
        <th>number</th>
        <th>弹框层级</th>
        <th>N</th>
        <th>999</th>
    </tr>
</table>

#### 1.3 示例

```javascript

    // toast提示
    toast({
        content:'弹框',
        time: 2000
    });
    
    // loading提示
    toast({
        type:'loading',
        content:22222
    });
```

<!--modal-api-->

## modal {#modal}
modal对话框

### 1.1 使用
#### 1.1.1 commonJs规范
    1 安装  npm install js-modal
    2 引用  import modal from 'js-modal'
    3 使用  modal({content:'xxx'})
#### 1.1.2 引用 dist下js

### 1.2 参数
<table>
    <tr>
        <th>名称</th>
        <th>类型</th>
        <th>描述</th>
        <th>必选</th>
        <th>默认值</th>
    </tr>
    <tr>
        <th>content</th>
        <th>string</th>
        <th>模拟框内容</th>
        <th>Y</th>
        <th> </th>
    </tr>
    <tr>
        <th>title</th>
        <th>string </th>
        <th>模拟框标题</th>
        <th>N</th>
        <th> </th>
    </tr>
    <tr>
        <th>cancelText</th>
        <th>string</th>
        <th>取消按钮文字</th>
        <th>N</th>
        <th> </th>
    </tr>
     <tr>
        <th>confirmText</th>
        <th>string</th>
        <th>确认按钮文字</th>
        <th>N</th>
        <th>确认</th>
    </tr>
     <tr>
        <th>cancel</th>
        <th>function</th>
        <th>取消点击事件</th>
        <th>N</th>
        <th>关闭当前模拟框</th>
    </tr>
    <tr>
        <th>confirm</th>
        <th>function</th>
        <th>确认点击事件</th>
        <th>N</th>
        <th>点击关闭当前模拟框</th>
    </tr>
    <tr>
        <th>time</th>
        <th>number</th>
        <th>弹框时间</th>
        <th>N</th>
        <th>不自动关闭当前模拟框</th>
    </tr>
    <tr>
        <th>finish</th>
        <th>function</th>
        <th>弹框自动回调 必须配置time </br>time时间结束后自动执行回调事件</th>
        <th>N</th>
        <th>默认没回调事件</th>
    </tr>
    <tr>
        <th>zIndex</th>
        <th>number</th>
        <th>弹框层级</th>
        <th>N</th>
        <th>层级为999</th>
    </tr>
</table>

#### 1.3 示例
```javascript

    modal({
        content:'模拟框',
        cancel:() => {
            console.log('取消')
        },
        finish:() => {
            console.log('结束')
        },
        time:2000,
        confirm:() => {
            console.log('确认')
        },
    });
```