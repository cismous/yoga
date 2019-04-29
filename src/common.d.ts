declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.svg' {
  const content: string
  export default content
}
declare const Omega: {
  appKey: string
  autoPosition: boolean
  userName: string
  trackEvent(eventName: string, desc: string, attr: { [key: string]: string | number }): void
  sendPageView(): Promise<void>
}
