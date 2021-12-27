import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={350} height={249} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path d="m36.2 241.82 5.81-.001 2.763-22.407H36.2l.002 22.408Z" fill="#FFB6B6" />
      <Path
        d="m35.996 247.88 17.864-.001v-.226a6.953 6.953 0 0 0-6.953-6.953l-3.264-2.476-6.088 2.476-1.56.001v7.179Z"
        fill="#2F2E41"
      />
      <Path d="m45.581 214.709 4.574 3.583 15.993-15.936-6.75-5.287-13.817 17.64Z" fill="#FFB6B6" />
      <Path
        d="m41.683 219.354 14.064 11.016.139-.178a6.954 6.954 0 0 0-1.186-9.762l-1.043-3.961-6.32-1.805-1.227-.962-4.427 5.652Z"
        fill="#2F2E41"
      />
      <Path
        d="M72.931 112.613s7.71 7.996 4.284 26.557l2.877 31.781.742 1.471a4.666 4.666 0 0 1-.866 5.401l-.612 1.896-.57 3.713-21.275 31.982-8.138-8.567 13.136-29.983-3.57-7.71-8.281-26.843-5.711 49.116 1.142 42.263H35.158l-6.774-47.117-7.139-66.25 3.714-7.71H72.93Z"
        fill="#2F2E41"
      />
      <Path
        d="m23.026 126.352-.078-.11c-4.16-5.825 2.097-19.822 3.04-21.851a5.096 5.096 0 0 1-3.486-5.44l.407-3.46.424-3.392-3.038-3.038-.009-.076-1.748-15.299-2.543-10.161a22.31 22.31 0 0 1 6.332-21.62l5.877-.933 7.141-6.88h11.517l3.948 3.772c7.372 1.293 8.638.87 14.97 8.469l-2.877 23.623-.718 3.25.002 4.408 1.825 2.028a6.312 6.312 0 0 1 1.497 5.459l-.24 1.2c1.882.806 3.678 15.139 4.107 17.141l.64 2.991c.55.724 4.168 5.549 4.168 6.869 0 .198-.146.389-.46.601-2.466 1.671-12.3 13.518-18.333 11.104-6.427-2.57-31.975 1.285-32.232 1.324l-.133.021Z"
        fill="#3F3D56"
      />
      <Path
        d="M21.479 98.882s2.957-16.714-.022-23l-11.82.844 1.799 23.845 10.332 26.474a4.712 4.712 0 0 0 1.557 4.467 4.708 4.708 0 1 0 6.075-7.195l-7.921-25.435Z"
        fill="#FFB6B6"
      />
      <Path
        d="m9.637 67.017.731-7.966a22.84 22.84 0 0 1 8.19-15.514 10 10 0 0 1 10.464-1.381 9.975 9.975 0 0 1 5.152 12.607c-2.732 7.165-1.745 14.741-7.072 15.665l.579 2.754-5.238 17.092-14.917-1.728 2.11-21.529Z"
        fill="#3F3D56"
      />
      <Path
        d="M88.312 90.96s-8.658-14.6-15.016-17.422l-8.41 8.348L81.8 98.789l25.098 13.333a4.702 4.702 0 0 0 4.093 2.371 4.71 4.71 0 1 0-.087-9.416L88.312 90.96Z"
        fill="#FFB6B6"
      />
      <Path
        d="m58.555 74.525-4.64-6.516a22.842 22.842 0 0 1-3.908-17.102 10 10 0 0 1 7.032-7.871 9.976 9.976 0 0 1 12.127 6.198c2.601 7.213 12.09 19.068 8.653 23.242l2.234 1.71 3.377 9.619-12.436 8.418-12.439-17.698Z"
        fill="#3F3D56"
      />
      <Path
        d="M40.326 30.767c7.064 0 12.79-5.726 12.79-12.79 0-7.064-5.726-12.79-12.79-12.79-7.063 0-12.79 5.726-12.79 12.79 0 7.064 5.727 12.79 12.79 12.79Z"
        fill="#FFB6B6"
      />
      <Path
        d="M31.044 26.992c-.111-.098-.217-.202-.326-.303-.004.01-.004.02-.009.031l.335.272ZM50.808 4.47a7.253 7.253 0 0 0-2.562-2.468 10.715 10.715 0 0 0-2.238-.794L43.983.656A16.046 16.046 0 0 0 40.8.015a8.197 8.197 0 0 0-7.487 4.062C32.7 5.16 32.21 6.513 31.029 6.91c-.951.32-1.99-.131-2.99-.044a3.601 3.601 0 0 0-2.734 2.014 7.76 7.76 0 0 0-.717 3.436 19.256 19.256 0 0 0 6.13 14.373c.33-.87-.213-1.81-.643-2.642-.435-.842-.704-2.016.024-2.623.811-.675 2.11-.02 3.068-.46a2.141 2.141 0 0 0 1.07-1.721c.093-.7-.004-1.41.04-2.115a5.294 5.294 0 0 1 5.662-4.951c2.182.155 4.299 1.646 6.399 1.033.985-.288 1.826-1.02 2.845-1.144 1.129-.137 2.19.5 3.15 1.112a11.226 11.226 0 0 0-1.525-8.707Z"
        fill="#2F2E41"
      />
      <Path
        d="m95.147 240.694-3.254-5.23-.65 2.989a93.321 93.321 0 0 0-.334 1.583c-.924-.79-1.908-1.52-2.87-2.221a6211.016 6211.016 0 0 1-8.86-6.442l.924 5.361c.57 3.302 1.165 6.67 2.575 9.688.156.342.325.68.506 1.009h13.737c.11-.306.186-.623.227-.945a.33.33 0 0 0 .005-.064c.215-2.047-.916-3.976-2.006-5.728ZM333.263 235.046l-5.903-9.487-1.18 5.421a186.96 186.96 0 0 0-.605 2.871c-1.676-1.432-3.46-2.756-5.206-4.027-5.36-3.89-10.717-7.785-16.072-11.685l1.677 9.724c1.033 5.988 2.113 12.098 4.67 17.573.284.62.59 1.233.919 1.83h24.916c.2-.555.339-1.13.414-1.715a.635.635 0 0 0 .007-.115c.391-3.714-1.661-7.213-3.637-10.39Z"
        fill="#F0F0F0"
      />
      <Path d="m349.497 247.945-348.994.13a.502.502 0 0 1 0-1.005l348.994-.13a.504.504 0 0 1 0 1.005Z" fill="#CACACA" />
      <Path
        d="M109.499 100.592v121.161a5.824 5.824 0 0 0 5.823 5.823h179.549a5.826 5.826 0 0 0 5.823-5.823V100.592a5.834 5.834 0 0 0-5.823-5.817H115.322a5.832 5.832 0 0 0-5.823 5.817Z"
        fill="#3F3D56"
      />
      <Path
        d="M113.711 102.1v118.159c.002.825.33 1.615.913 2.199a3.124 3.124 0 0 0 2.199.913h176.553a3.12 3.12 0 0 0 3.112-3.112V102.1a3.122 3.122 0 0 0-3.112-3.119H116.823a3.118 3.118 0 0 0-3.112 3.119Z"
        fill="#fff"
      />
      <Path
        d="M105.744 245.383a3.487 3.487 0 0 0 2.748 1.314h192.253a3.549 3.549 0 0 0 2.744-1.309 3.531 3.531 0 0 0 .714-2.954l-2.984-14.176a3.546 3.546 0 0 0-2.203-2.57 3.43 3.43 0 0 0-1.255-.236H111.464a3.435 3.435 0 0 0-1.255.236 3.553 3.553 0 0 0-2.203 2.57l-2.984 14.176a3.538 3.538 0 0 0 .722 2.949Z"
        fill="#2F2E41"
      />
      <Path
        d="M290.68 231.557h5.51a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.14c0 .114.093.206.206.206ZM278.838 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM266.995 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM255.152 231.557h5.51a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.14c0 .114.093.206.206.206ZM243.31 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM231.467 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM219.624 231.557h5.51a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.14c0 .114.093.206.206.206ZM207.782 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM195.939 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM184.096 231.557h5.51a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.14c0 .114.093.206.206.206ZM172.254 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM160.411 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM148.568 231.557h5.51a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.14c0 .114.093.206.206.206ZM136.726 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM124.883 231.557h5.509a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM113.04 231.557h5.51a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.14c0 .114.093.206.206.206ZM290.82 237.479h5.51a.207.207 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.141c0 .113.093.206.206.206ZM278.978 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM267.135 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM255.292 237.479h5.51a.207.207 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.141c0 .113.093.206.206.206ZM243.45 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM231.607 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM219.764 237.479h5.51a.207.207 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.141c0 .113.093.206.206.206ZM207.922 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM196.079 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM184.236 237.479h5.51a.207.207 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.141c0 .113.093.206.206.206ZM172.394 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM160.551 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM148.708 237.479h5.51a.207.207 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.141c0 .113.093.206.206.206ZM136.866 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM125.023 237.479h5.509a.206.206 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.509a.206.206 0 0 0-.206.206v3.141c0 .113.092.206.206.206ZM113.18 237.479h5.51a.207.207 0 0 0 .206-.206v-3.141a.206.206 0 0 0-.206-.206h-5.51a.206.206 0 0 0-.206.206v3.141c0 .113.093.206.206.206ZM179.44 244.584h46.959a.206.206 0 0 0 .206-.206v-3.14a.206.206 0 0 0-.206-.206H179.44a.206.206 0 0 0-.206.206v3.14c0 .114.092.206.206.206ZM245.32 170.557a39.952 39.952 0 1 1-2.275-13.362v.002a38.65 38.65 0 0 1 .975 3.182 40.223 40.223 0 0 1 1.3 10.178Z"
        fill="#3F3D56"
      />
      <Path
        d="M200.699 143.421a13.485 13.485 0 0 0-11.847-.485c-1.656.721-3.4 2.014-3.953 4.349 2.235-1.319 5.128.765 5.703 4.108l-.134.037c-.304 2.316.374 4.837 1.687 6.273a4.404 4.404 0 0 1 2.117-3.141c.965-.634 2.032-1.095 2.768-2.184.873-1.292 1.094-3.181 1.441-4.903.347-1.723 1.005-3.574 2.218-4.054Z"
        fill="#6C63FF"
      />
      <Path
        d="M188.189 163.125c-.619.93-1.445 1.513-2.187 2.239a5.028 5.028 0 0 0-1.591 2.974c-.094.809.051 1.631.031 2.449-.02.818-.293 1.738-.849 1.942-.878.317-1.549-1.314-2.451-1.428-.718-.089-1.363 1.039-1.155 2.018.207.978 1.184 1.412 1.745.773.507.851.149 2.395-.613 2.657l-.239 1.606c-1.926-1.347-3.872-2.717-5.51-4.69a14.24 14.24 0 0 1-3.244-7.669c-.213-2.268.102-4.862-.939-6.607-.833-1.397-2.263-1.705-3.55-1.618-.235.016-.472.043-.706.072a39.793 39.793 0 0 1 2.88-6.592c.262-.112.505-.264.721-.449 1.198-1.017 1.73-3.075 2.702-4.498.063-.092.127-.181.194-.268.995-1.298 2.326-1.967 3.614-2.588 2.848-1.383 5.78-2.784 8.788-2.592l-.856.083c-.999 2.797-1.998 5.595-2.999 8.393-.152.429-.305.858-.46 1.289-.568 1.591-1.153 3.285-1.066 5.065.051 1.055.418 2.181 1.115 2.543.65.335 1.361-.076 1.989-.482.266-.17.529-.34.795-.512.954-.615 2.011-1.245 3.019-.834.923.376 1.604 1.629 1.734 2.981a5.958 5.958 0 0 1-.912 3.743ZM193.864 182.225l-8.36-5.148.047-.121c-1.732.659-2.452 3.739-2.165 6.258.286 2.518 1.257 4.77 1.748 7.224a19.183 19.183 0 0 1-.723 10.061 82.317 82.317 0 0 0 9.679-13.338 7.12 7.12 0 0 0 .876-1.941 3.083 3.083 0 0 0-.205-2.197 2.434 2.434 0 0 0-.897-.798Z"
        fill="#6C63FF"
      />
      <Path
        d="M182.866 151.01a3.085 3.085 0 0 0-.141 2.241 2.48 2.48 0 0 0 1.388 1.285l1.539.763c.513.254 1.065.511 1.587.302.63-.252 1.067-1.24.954-2.156-.121-.976-.736-1.647-1.304-2.218l-2.388-2.399-.448.549a6.026 6.026 0 0 0-1.187 1.633ZM237.066 161.438l2.078.489c-.121 2.34-1.28 4.505-2.835 5.289-.648.327-1.37.447-1.906 1.057-.485.554-.731 1.417-.957 2.241l-1.186 4.317c-.425 1.551-.97 3.274-2.074 3.832-.947.481-2.031-.107-2.759-1.092-.729-.986-1.173-2.311-1.605-3.602.027 1.408-.628 2.788-1.555 3.278-.929.489-2.06.047-2.681-1.046-.447-.784-.633-1.819-1.071-2.614-.438-.796-1.356-1.252-1.834-.505-.315.496-.275 1.255-.431 1.886a2.045 2.045 0 0 1-1.712 1.646 2.843 2.843 0 0 1-2.049-.936 9.285 9.285 0 0 1-2.545-5.132 6.121 6.121 0 0 1 .072-2.807c.274-.869.938-1.539 1.597-1.374.434-.916-.422-2.132-1.193-2.024-.773.107-1.379.936-2.013 1.573-.633.636-1.518 1.099-2.154.467a.87.87 0 0 1-.887.927 3.182 3.182 0 0 1-1.156-.612c-1.459-.91-3.311-.306-4.348 1.414.648-2.757 1.598-5.921 3.589-6.569.813-.266 1.7-.047 2.469-.508 1.361-.815 1.635-3.896.46-5.168.15 1.202.121 2.606-.514 3.428-.634.822-1.966.286-1.886-.93a.817.817 0 0 1-1.141.659.815.815 0 0 1-.374-.337c-.422-.643-.386-1.696-.087-2.465a5.81 5.81 0 0 1 1.303-1.85c1.061-1.137 2.138-2.288 3.367-3.003 1.231-.715 2.652-.956 3.886-.246.65.376 1.222 1.001 1.886 1.332a1.385 1.385 0 0 0 1.577-.071 1.4 1.4 0 0 0 .369-.416c.494-.867.261-2.154.445-3.238.328-1.915 2.243-2.811 3.304-1.546-.793-.203-1.613.735-1.711 1.873-.101 1.137.474 2.285 1.242 2.63 1.292.572 2.556-.867 3.533-2.199 1.019-1.395 2.039-2.788 3.061-4.181.163-.237.346-.46.548-.666a1.758 1.758 0 0 1 2.406-.049c1.032.842 1.517 2.57 2.364 3.758 1.229 1.728 3.068 2.148 4.78 2.483 1.276.248 2.552.497 3.83.748a39.816 39.816 0 0 1 2.223 4.91 13.45 13.45 0 0 0-5.725 4.949ZM244.02 160.379a8.051 8.051 0 0 0-.425 2.393c-1.095-1.336-1.269-3.841-.55-5.575a38.65 38.65 0 0 1 .975 3.182ZM241.191 188.323a40.005 40.005 0 0 1-3.33 5.571c-.804-.345-1.669.27-2.422.846-.786.604-1.731 1.191-2.538.642-.825-.563-1.09-2.139-.829-3.388a9.03 9.03 0 0 1 1.546-3.182c.671-1.001 1.388-2.04 2.32-2.428.934-.389 2.133.16 2.406 1.488l.661-.023c-.37-.509-.176-1.564.322-1.749.575-.217 1.073.572 1.412 1.269.152.315.307.632.452.954Z"
        fill="#6C63FF"
      />
      <Path
        d="M215.86 178.885c-1.422.089-2.548-1.661-3.296-3.383-.749-1.721-1.431-3.69-2.714-4.567-.733-.5-1.569-.569-2.364-.812a2.918 2.918 0 0 1-2.007-1.767l-.902-.364a13.535 13.535 0 0 0-3.424 2.441 7.652 7.652 0 0 0-2.04 4.46c-.172 1.806.464 3.818 1.653 4.496.939.536 2.032.198 2.984.689 1.188.613 1.894 2.393 2.161 4.151.267 1.757.199 3.584.391 5.362.191 1.778.717 3.627 1.807 4.538 1.365 1.14 3.366.193 3.978-1.882.3-1.018.29-2.167.514-3.223.396-1.861 1.463-3.242 2.309-4.768.846-1.527 1.512-3.6.95-5.371ZM201.812 160.6c.132.122.256.253.37.393a1.29 1.29 0 0 1-.023 1.333 1.243 1.243 0 0 0 .889-.451c.259-.296.487-.617.681-.96a1.046 1.046 0 0 0 .2-.837c-.067-.191-.226-.273-.337-.417a2.826 2.826 0 0 1-.311-.905 1.641 1.641 0 0 0-1.183-1.247l.071.014a.68.68 0 0 0-.317.72c.044.279.223.51.205.795-.026.409-.434.6-.46 1.009a.778.778 0 0 0 .215.553ZM199.376 153.651l.006-.002c.044-.039.085-.083.122-.129l-.128.131Z"
        fill="#6C63FF"
      />
      <Path
        d="M199.802 155.57a1.24 1.24 0 0 0 .386-1.229c-.103-.465-.469-.777-.806-.692a.82.82 0 0 1-.764.225c-.208-.053-.437-.192-.618-.035a.946.946 0 0 0-.21.412l-.201.616a.388.388 0 0 0-.024.233.204.204 0 0 0 .152.121l1.205.355a1.03 1.03 0 0 0 .88-.006ZM230.111 182.071l-.557-.912a3.034 3.034 0 0 0-.733-.921.66.66 0 0 0-.483-.149.656.656 0 0 0-.443.242l.023.173c.497.533.835 1.194.978 1.908.042.311.027.632.064.944a1.1 1.1 0 0 0 .344.77c.292.195.636-.093.843-.444.186-.289.27-.631.237-.973a1.693 1.693 0 0 0-.273-.638ZM233.022 182.466a2.078 2.078 0 0 0-.068-.848c-.013-.373.086-.74.284-1.056.196-.298.345-.624.441-.968a.807.807 0 0 0-.021-.474c-.061-.138-.21-.201-.295-.092l.182.118a1.657 1.657 0 0 0-.741.036.91.91 0 0 0-.562.633c-.03.223-.079.443-.147.657-.109.224-.32.298-.452.495a1.179 1.179 0 0 0 .018 1.124c.167.28.431.488.743.584.223.08.516.084.618-.209ZM238.207 184.03c.08.21.188.408.321.59.248.25.586.096.887.036a1.536 1.536 0 0 1 1.458.585 3.715 3.715 0 0 0-2.135-2.664 6.254 6.254 0 0 0-2.195-.343l-.128.032c.325.946 1.345.925 1.792 1.764ZM216.249 185.965l.001.004.037-.072-.038.068ZM215.462 187.487a7.099 7.099 0 0 0-.441.969 8.444 8.444 0 0 0-.32 1.659c-.04.32-.052.728.148.884a.285.285 0 0 0 .372-.051 1.48 1.48 0 0 0 .269-.4 9.19 9.19 0 0 0 .909-2.159 3.75 3.75 0 0 0-.149-2.42l-.788 1.518ZM207.875 146.928a.89.89 0 0 0 .965.188c.334-.146.642-.349.908-.599.22-.163.407-.367.55-.601a1.205 1.205 0 0 0 .113-.928.948.948 0 0 0-.719-.568l-1.336-.396.322-.291c-.332-.178-.699.153-.906.562a3.006 3.006 0 0 0-.275.846 2.168 2.168 0 0 0 .378 1.787ZM215.742 144.287a.738.738 0 0 0 1.003.081c.126-.094.231-.214.307-.352.077-.138.124-.29.137-.447.032-.35-.142-.74-.389-.77l.057-.328c-.477-.087-1.064-.104-1.32.475a1.362 1.362 0 0 0 .205 1.341Z"
        fill="#6C63FF"
      />
      <Path
        d="M286.85 120.372h-163.5a.431.431 0 0 1-.42-.429.429.429 0 0 1 .42-.428h163.5a.426.426 0 0 1 .419.428.43.43 0 0 1-.419.429Z"
        fill="#CACACA"
      />
      <Path
        d="M132.786 114.371c2.547 0 4.612-2.111 4.612-4.714 0-2.604-2.065-4.715-4.612-4.715s-4.612 2.111-4.612 4.715c0 2.603 2.065 4.714 4.612 4.714ZM148.718 114.371c2.547 0 4.612-2.111 4.612-4.714 0-2.604-2.065-4.715-4.612-4.715s-4.612 2.111-4.612 4.715c0 2.603 2.065 4.714 4.612 4.714ZM164.65 114.371c2.547 0 4.612-2.111 4.612-4.714 0-2.604-2.065-4.715-4.612-4.715s-4.612 2.111-4.612 4.715c0 2.603 2.065 4.714 4.612 4.714ZM277.303 106.111h-11.318a.856.856 0 0 0 0 1.713h11.318a.856.856 0 0 0 0-1.713ZM277.303 109.327h-11.318a.86.86 0 0 0-.84.857.858.858 0 0 0 .84.857h11.318a.857.857 0 0 0 0-1.714ZM277.303 112.54h-11.318a.856.856 0 0 0 0 1.713h11.318a.856.856 0 0 0 0-1.713Z"
        fill="#3F3D56"
      />
      <Path
        opacity={0.35}
        d="M291.182 172.538c2.631-1.147-2.706-1.815-8.76-2.035-6.055-.219-13.38-.207-17.249-.832-3.742-.604-3.467-1.678-3.781-2.651-.315-.973-1.754-1.971-7.593-2.188-7.277-.269-19.276.768-24.769.145-5.126-.581-2.079-2.405-9.554-2.474-4.268-.04-9.767.561-14.516.706a52.943 52.943 0 0 1-10.072-.525c-2.315-.379-3.927-.86-6.533-1.195-6.84-.88-20.222-.584-32.166.543-11.944 1.127-22.182 2.975-27.956 4.804-5.774 1.83-7.369 3.631-6.024 5.159.859.975 3.056 1.888 8.388 2.28 9.971.733 27.725-.529 38.029.138 5.743.372 8.291 1.293 13.33 1.798 5.413.541 13.338.57 21.124.557 16.211-.026 32.838-.193 49.791-.498 7.081-.128 14.501-.294 22.036-.902 7.535-.608 15.221-1.781 16.81-2.881"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h350v248.075H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;