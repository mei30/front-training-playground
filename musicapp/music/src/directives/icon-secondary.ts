// This example showes how to register a directive as local 
export default {
    beforeMount(el, bindings) {
        let iconClass = `"fa fa-${bindings.value.icon} text-green-400 text-xl"`

        if (bindings.value.right) {
            iconClass += ' float-right'
        }

        el.innerHTML += `<i class="${iconClass}"></i>`
    }
}