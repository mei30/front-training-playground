export default {
    beforeMount(el, bindings) {
        let iconClass = `"fa fa-${bindings.value} text-xl"`

        if (bindings.modifiers.right) {
            iconClass += ' float-right'
        }

        if (bindings.modifiers.yellow) {
            iconClass += ' text-yellow-400'
        }
        else {
            iconClass += ' text-green-400'
        }

        el.innerHTML += `<i class="${iconClass}"></i>`
    }
}