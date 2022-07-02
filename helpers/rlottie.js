const ffi = require('ffi-napi')
const ref = require('ref-napi')
const {createCanvas, ImageData} = require('canvas')
const {devNull} = require('os')

const lottieAnimation = ref.types.void
const lottieAnimationPtr = ref.refType(lottieAnimation)

const librlottie = ffi.Library('librlottie', {
  'lottie_animation_from_file': [lottieAnimationPtr, ['string']],
  'lottie_animation_from_data': [lottieAnimationPtr, ['string', 'string', 'string']],
  'lottie_animation_destroy': ['void', [lottieAnimationPtr]],
  'lottie_animation_get_duration': ['double', [lottieAnimationPtr]],
  'lottie_animation_get_totalframe': ['long', [lottieAnimationPtr]],
  'lottie_animation_get_framerate': ['double', [lottieAnimationPtr]],
  'lottie_animation_get_frame_at_pos': ['int', [lottieAnimationPtr, 'float']],
  'lottie_animation_render': ['void', [lottieAnimationPtr, 'int', 'string', 'int', 'int', 'int']]
})

const render = (src, width, height, pos) => {
  var buffer = Buffer.alloc(4 * width * height)

  const lottie = librlottie.lottie_animation_from_data(src, Math.random().toString(36).slice(2), devNull)
  librlottie.lottie_animation_render(lottie, librlottie.lottie_animation_get_frame_at_pos(lottie, pos), buffer, width, height, 4 * width)
  librlottie.lottie_animation_destroy(lottie)

  for (var i = 0; i < buffer.length; i += 4) {
    // buffer = R(8)G(8)B(8)A(8)
    const tmp = buffer[i]
    buffer[i] = buffer[i + 2]
    buffer[i + 1] = buffer[i + 1]
    buffer[i + 2] = tmp
  }

  const canvas = createCanvas(width, height)
  const ctx = canvas.getContext('2d', {
    pixelFormat: 'RGBA32'
  })

  const pixels = new Uint8ClampedArray(buffer)
  const imageData = new ImageData(pixels, width, height)

  ctx.putImageData(imageData, 0, 0)
  return canvas
}

module.exports = {
  render: render
}
