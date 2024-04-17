import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import terser from '@rollup/plugin-terser'
import del from 'rollup-plugin-delete'
import alias from '@rollup/plugin-alias'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].cjs.js',
        sourcemap: false // 是否输出sourcemap
      },
      {
        dir: 'dist',
        format: 'esm',
        entryFileNames: '[name].esm.js',
        sourcemap: false
      },
      {
        dir: 'dist',
        format: 'umd',
        entryFileNames: '[name].umd.js',
        name: 'se-ui', // umd模块名称，相当于一个命名空间，会自动挂载到window下面
        sourcemap: false
      }
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      resolve({
        extensions: ['.ts']
      }),
      alias({
        entries: [
          { find: 'components/**', replacement: 'src/components/**' },
          { find: 'utils/**', replacement: 'src/utils/**' },
          { find: 'shared/**', replacement: 'src/shared/**' }
        ]
      }),
      commonjs(),
      terser({
        format: {
          comments: false //去掉打包后的注释
        }
      }),
      typescript({ module: 'NodeNext' })
    ]
  }
]
