/*
 * @Author: renqingyue 
 * @Date: 2018-10-25 17:45:55 
 * @Last Modified by: renqingyue
 * @Last Modified time: 2018-10-29 17:33:36
 */


class Modal {
    constructor(options) {
        this.settings = Object.assign({}, Modal.defaults, options)
        this.init()
    }
    init() {
        this.create()
        // 关闭时间
        if (this.settings.time) {
            this.time()
        }
        const mDialogYue = document.querySelector('.m-dialog-yue')
        const mDialogMaskYue = document.querySelector('.m-dialog-mask-yue')
        setTimeout(function() {
            if (mDialogYue) {
                mDialogYue.style.cssText="bottom: 50%; opacity:1; zIndex: this.settings.zIndex;"
            }
            if (mDialogMaskYue) {
                mDialogMaskYue.style.cssText = "background: rgba(0,0,0,0.5)"
            }
        }, 0)
        
        // $('.m-dialog-yue').css({
        //     'display' : 'block',
        //     'zIndex' : this.settings.zIndex
        // });
    }

    create() {
        const oTitle = this.settings.title,
            oCont = this.settings.content,
            oCancel = this.settings.cancel,
            oCancelT = this.settings.cancelText,
            oConfirm = this.settings.confirm,
            oConfirmT = this.settings.confirmText;

        const isHidden = (str) => {
            return str ? '' : 'hidden';
        }

        const isRmove = () => {
            const oCancelHtml = `<div id="cancelMod">${oCancelT}</div>`;
            if(!oCancelT){
                return '';
            }else{
                return oCancelHtml;
            }
        }
        
        const modalTem = `
            <div class="m-dialog-yue ${oCont ? 'm-dialog-auto-yue' : ''}">
                <div class="dialog-tit ${isHidden(oTitle)}">${oTitle}</div>    
                <div class="dialog-txt ${isHidden(oCont)}">${oCont}</div>
                <div class="dialog-btn">
                    ${isRmove()}
                    <div class="${isHidden(oConfirmT)}" id="confirmMod">${oConfirmT}</div>
                </div>
            </div>
        `;

        const dialogDom = document.createElement('div')
        dialogDom.className = 'm-dialog-mask-yue'
        dialogDom.innerHTML = modalTem
        this.dialog = document.body.appendChild(dialogDom)

        document.documentElement.style.overflow = "hidden";
        
        this.confirm();
        this.cancel();
    }
    confirm() {
        const confirmModDOM = document.querySelector('#confirmMod')
        if (confirmModDOM)
            confirmModDOM.onclick = () => {
                if (this.settings.confirm && typeof(this.settings.confirm) == 'function') {
                    const cancelCallback = this.settings.confirm()
                    // 关闭modal
                    if (cancelCallback == undefined || cancelCallback) {
                        this.close()
                    }     
                } else {
                    this.close();
                }      
            }
    }

    cancel() {
        const cancelModDOM = document.querySelector('#cancelMod')
        if (cancelModDOM)
            cancelModDOM.onclick = () => {
                if (this.settings.cancel && typeof(this.settings.cancel) == 'function') { 
                    const cancelCallback = this.settings.cancel();
                        // 关闭modal
                    if (cancelCallback == undefined || cancelCallback) {
                        this.close();
                    }
                } else {
                        this.close();                
                }            
            }
    }

    time() {
        this.closeTimer = setTimeout(() => {
            this.close();
            if(this.settings.finish)
                this.settings.finish();
        }, this.settings.time);
    }

    close() {
        this.dialog.remove();
        document.documentElement.style.overflow = "scroll";
    }
} 
/**
 * Modal 可配置参数
 * title:       弹框title                       {string}
 * content:     弹框内容                         {string}
 * time:        弹框出现时间                      {number}
 * finish:      弹框结束回调                      {Fn}
 * zIndex:      弹框层级                         {number}
 * cancel:      弹框取消点击事件                   {Fn}
 * cancelText:  弹框取消按钮文字                   {string}
 * confirm:     弹框确认点击事件                   {Fn}
 * confirmText: 弹框确认按钮文字                   {string}
 */
Modal.defaults = {
    title: '',
    content: '',
    time: '',
    finish: null,
    zIndex: 9999,
    cancel: null,
    cancelText: '',
    confirm: null,    
    confirmText: '确定'
}

const alert = (options) => {
    return new Modal(options)
}

module.exports =  alert;

