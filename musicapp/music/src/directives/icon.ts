export default {
    beforeMount(el, bindings) {
        const iconClass = `"fa fa-${bindings.value} float-right text-green-400 text-xl"`
        el.innerHtml += `<i class="${iconClass}"></i>`
    }
}