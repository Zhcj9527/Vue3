import { onMounted } from "vue"


type Options = {
  el: string
}

export default function(options: Options): Promise<{baseUrl: string}> {
  // 加了一层promise
  return new Promise((resolve) => {
    onMounted(() => {
      let img: HTMLImageElement = document.querySelector(options.el)!
      console.log(img);
      // img加载完毕之后才操作
      img.onload = () => {
        resolve({
          baseUrl: base64(img)
        })
      }
    })
  
    const base64 = (el: HTMLImageElement) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = el.width
      canvas.height = el.height
      ctx?.drawImage(el, 0,0,canvas.width,canvas.height)
      return canvas.toDataURL('image/png')
    }
  })
}