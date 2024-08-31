declare module '*.md' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const attributes: Record<string, any>
  const react: React.FC
  export { attributes, react }
}
