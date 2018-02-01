var Toast = {};

import ToastComponent from './vue-toast.vue'
Toast.install = function (Vue,options) {
    Vue.prototype.$toast = function (message,option) {
        const ToastController = Vue.extend(ToastComponent);
        var instance = new ToastController().$mount(document.createElement("div"));
        instance.message = message;
        instance.visible = true;
        document.body.appendChild(instance.$el);
        setTimeout(()=>{
            instance.visible = false;
            setTimeout(()=>{
                document.body.removeChild(instance.$el)
            },500)
        },6000)
    }
    Vue.prototype.$toast['show'] = function (message,option) {
        return Vue.prototype.$toast(message,option);
    }
}
export default Toast;