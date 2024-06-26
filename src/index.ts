function helloSolidLib() {
  const [a, setA] = createSignal(0)
  const c = createMutable({})
  setA(() => a() + 1)
  console.log(a(), c)
}

export { helloSolidLib }
