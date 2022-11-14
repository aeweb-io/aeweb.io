import { useEffect, RefObject, useRef, useMemo } from "react"
import throttle from 'lodash/throttle'
import Konva from "konva"
function animation(size: number, progress = 0, duration = 200, fps = 60) {
  const durationSeconds = duration / 1000
  const frame = (Math.PI * 2) / (durationSeconds * fps)
  const current = (frame * progress) / duration
  const half = size / 3
  const x = half * Math.cos(current) + size / 2
  const y = half * Math.sin(current) + size / 2
  return [x, y]
}

const init = (ref: RefObject<HTMLDivElement>) => () => {
  if (ref.current?.parentElement) {
    const size = ref.current.parentElement.clientWidth * 0.75

    const stage = new Konva.Stage({
      container: ref.current,
      width: size,
      height: size,
    })
    const layer = new Konva.Layer()
    const yellow = new Konva.Circle({
      x: size / 2,
      y: size / 2,
      radius: size / 3,
      fill: "#C1B42D",
    })

    const green = new Konva.Circle({
      x: size / 4,
      y: size / 4,
      radius: size / 6,
      fill: "#005249",
      globalCompositeOperation: "color",
    })

    layer.add(yellow, green)

    const anim = new Konva.Animation((frame) => {
      const [x, y] = animation(size, frame?.time, 800)

      green.x(x)
      green.y(y)
    }, layer)
    anim.start()
    stage.add(layer)

    return () => {
      stage.destroy()
    }
  }

}

function BallAnimation({ className }: { className?: string }) {
  const canvasStageRef = useRef<HTMLDivElement>(null)

  const canvasInit = useMemo(() => throttle(init(canvasStageRef), 500), [])

  useEffect(() => {
    const destroy = canvasInit()
    window.addEventListener("resize", canvasInit)
    return destroy
  }, [])
  return <div className={className}>
    <div ref={canvasStageRef}></div>
  </div>
}

export default BallAnimation