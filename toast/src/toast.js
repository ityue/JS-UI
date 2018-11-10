/*
 * @Author: renqingyue 
 * @Date: 2018-10-25 17:45:39 
 * @Last Modified by: renqingyue
 * @Last Modified time: 2018-10-30 12:06:27
 */

class Toast {
    constructor(options) {
        this.settings = Object.assign({}, Toast.defaults, options)
        this.init()
    }
    init() {
        // console.log(utils.hasClass)
        // this.addStyle()
        this.create()
        // 关闭时间
        if (!isNaN(this.settings.time)&&(this.settings.time!=null)) {
            this.time()
        }
        const mToast = document.querySelector('.m-toast-yue')
        setTimeout(function(){
            if (mToast)
                mToast.style.cssText="bottom: 50%; opacity:0.98; zIndex: this.settings.zIndex;"
        }, 0)
    }
    create() {
        const oCont = this.settings.content,
        ToastTem = `
                <p class="t-txt">${oCont}</p>
        `,
        LoadTem = `
                <div class="t-logo"></div>
        `;
        const mToastDom = document.createElement('div')
            mToastDom.className = 'm-toast-yue'
            mToastDom.innerHTML = ToastTem;
        const mToastLoad = document.createElement('div')
            mToastLoad.className = 'm-toast-logo-yue loading_play'
            mToastLoad.innerHTML = LoadTem
        //toast方式
        if (this.settings.type == 'toast') {
            this.dialog = document.querySelector('body').appendChild(mToastDom)
        }
        //loading
        if (this.settings.type == 'loading') {
            this.dialog = document.querySelector('body').appendChild(mToastLoad)
        }
        document.documentElement.style.overflow = "hidden"
    }

    time() {
        this.closeTimer = setTimeout(() => {
            this.close()
            if (this.settings.finish)
                this.settings.finish()
        }, this.settings.time)
    }

    close() {
        if (this.dialog)
            this.dialog.remove()
        
        document.documentElement.style.overflow = "scroll"
    }
} 
/**
 * Toast 可配置参数
 * type:    弹框类型('toast'或'loading')    {string}
 * content: 弹框内容                        {string}
 * time:    弹框出现时间                     {number}
 * finish:  弹框结束回调                     {Fn}
 * zIndex:  弹框层级                         {number}
 */
Toast.defaults = {
    type: 'toast',
    content: '',
    time: 1000,
    finish: null,
    zIndex: 9999
}

const alert = (options) => {
    return new Toast(options)
}

module.exports =  alert;


