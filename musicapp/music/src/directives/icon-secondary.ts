// This example shows how to register a directive as local
export default {
  beforeMount(el: any, binding: any) {
    let iconClass = `fa fa-${binding.value.icon} text-green-400 text-xl`

    if (binding.value.right) {
      iconClass += ' float-right'
    }

    el.innerHTML += `<i class="${iconClass}"></i>`
    console.log(el.innerHTML)
  }
}
