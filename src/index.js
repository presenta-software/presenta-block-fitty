import css from './style.css'
import fitty from 'fitty'

const block = function (el, config) {
  const that = this
  return new Promise((resolve, reject) => {
    const rnd = Math.random() + ''
    const last = rnd.split('.')[1]
    const sandbox = 'sandfit' + last

    const child = document.createElement('div')
    child.classList.add(sandbox, css.fitty)

    const heightFactor = config.linefactor || 0.8
    const contWidth = config.width || 100
    const uppercase = config.uppercase ? css.uppercase : null

    const cont = document.createElement('div')
    cont.classList.add(css.prestyle, uppercase)
    cont.style.width = contWidth + '%'

    const arr = config.text.split('\n')

    arr.forEach(d => {
      const el = document.createElement('div')
      el.classList.add(css.fit)

      const span = document.createElement('span')
      span.innerHTML = d

      el.appendChild(span)

      cont.appendChild(el)
    })

    child.appendChild(cont)
    el.appendChild(child)

    cont.style.transform = 'scale(1)'

    let cnt = 0
    setTimeout(() => {
      const fitters = fitty('.' + sandbox + ' .' + css.fit)

      fitters.forEach(f => {
        const el = f.element
        el.addEventListener('fit', function (e) {
          el.style.lineHeight = e.detail.newValue * heightFactor + 'px'
          f.freeze()
          cnt++
          if (cnt >= fitters.length) {
            const ch = cont.getBoundingClientRect()

            const bh = cont.parentNode.getBoundingClientRect()

            const scale = bh.height / (ch.height + 40)
            if (scale < 1) cont.style.transform = `scale(${scale})`
            resolve(that)
          }
        })
      })
    }, 150)
  })
}

export default block

block.install = Presenta => {
  Presenta.addBlock('fitty', block)
  Presenta.addProp('fittyPadding')
}

if (typeof window !== 'undefined' && window.Presenta) {
  window.Presenta.use(block)
}
