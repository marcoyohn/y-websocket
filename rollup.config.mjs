export default {
  input: './src/y-websocket.js',
  external: id => /^(lib0|yjs|y-protocols)/.test(id),
  output: [{
    name: 'y-websocket',
    file: 'dist/y-websocket.js',
    format: 'es',
    sourcemap: true    
  }]
}
