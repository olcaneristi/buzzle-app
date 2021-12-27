import * as React from 'react';
import Svg, { G, Path, Defs, ClipPath } from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={350} height={250} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        d="m308.199 228.634.341-8.663c3.554-2.147 7.517-3.281 11.547-3.304-5.546 5.125-4.853 15.003-8.613 21.894-1.187 2.139-2.785 3.949-4.675 5.295-1.89 1.346-4.024 2.194-6.243 2.482l-4.641 3.211a31.771 31.771 0 0 1 .412-12.078c.907-3.945 2.561-7.621 4.847-10.774a25.586 25.586 0 0 1 4.429-4.651c1.112 3.312 2.596 6.588 2.596 6.588ZM73.61 219.141l-11.199-3.832a48.076 48.076 0 0 1 .03-20.531c4.611 11.193 17.788 13.756 25.382 22.631 2.35 2.789 4.115 6.14 5.163 9.804a28.859 28.859 0 0 1 .894 11.364l2.45 8.961c-5.485-.448-10.82-2.234-15.637-5.237-4.816-3.002-9-7.149-12.261-12.154a43.474 43.474 0 0 1-4.414-9.151c4.75-.609 9.592-1.855 9.592-1.855Z"
        fill="#F2F2F2"
      />
      <Path
        d="M269.396 248.133a1.076 1.076 0 0 1-.258.7.853.853 0 0 1-.282.212.77.77 0 0 1-.333.073h-3.506a.767.767 0 0 1-.334-.074.87.87 0 0 1-.283-.213.994.994 0 0 1-.189-.321 1.092 1.092 0 0 1-.066-.377v-119.84c0-2.642-.785-4.786-1.748-4.791H44.143c-.968.005-1.749 2.149-1.753 4.791v119.105c0 .245-.082.481-.228.662a.841.841 0 0 1-.562.319c-.706.079-1.412.148-2.114.212-.018 0-.035.005-.053.005-.383.039-.767.069-1.151.104h-.004c-.201-.41-.393-.829-.59-1.247a1.146 1.146 0 0 1-.095-.459V122.078c0-.73.026-1.464.07-2.189.062-.995.171-1.985.327-2.967.737-4.579 2.403-7.679 4.295-7.689H264.25c.276.002.549.068.802.192.372.186.708.452.99.784.383.449.71.955.973 1.503.933 1.858 1.6 4.628 1.836 7.852 0 .029.004.059.004.089.061.798.091 1.611.087 2.425l.061 10.562.039 6.299.118 19.765.044 7.018.192 82.411Z"
        fill="#E6E6E6"
      />
      <Path
        d="M188.394 72.694h-22.242c-.315 0-.617.142-.839.394a1.432 1.432 0 0 0-.346.949v39.713h24.615V74.037c0-.177-.03-.352-.09-.515a1.36 1.36 0 0 0-.258-.435 1.185 1.185 0 0 0-.385-.291 1.07 1.07 0 0 0-.455-.102Zm-11.046 22.564c-.696-.003-1.362-.317-1.854-.873s-.769-1.309-.773-2.095v-4.58c0-.788.277-1.543.77-2.1.492-.557 1.16-.87 1.857-.87.696 0 1.364.313 1.857.87.492.557.769 1.312.769 2.1v4.58c-.003.786-.281 1.539-.773 2.095-.491.556-1.158.87-1.853.873Z"
        fill="#CCC"
      />
      <Path
        d="M164.89 112.48v3.831a.81.81 0 0 0 .195.53c.124.14.292.219.468.219h23.443a.63.63 0 0 0 .467-.22.801.801 0 0 0 .196-.529v-3.831H164.89Z"
        fill="#3F3D56"
      />
      <Path
        d="M225.226 10.716h-95.078c-.817.002-1.6.37-2.178 1.022-.577.653-.903 1.538-.904 2.461v72.517c.001.923.326 1.809.904 2.462.577.652 1.361 1.02 2.178 1.02h95.078c.817 0 1.6-.368 2.178-1.02.578-.653.902-1.539.903-2.462V14.199c-.001-.923-.326-1.808-.904-2.461-.577-.653-1.36-1.02-2.177-1.022Z"
        fill="#E6E6E6"
      />
      <Path
        d="M224.432 13.232h-93.49a1.562 1.562 0 0 0-1.165.548c-.309.35-.483.824-.483 1.319v70.718c.001.494.175.968.484 1.317.308.349.727.545 1.164.546h93.49c.437 0 .856-.197 1.165-.546.308-.35.482-.823.483-1.317V15.099c0-.494-.173-.968-.482-1.318a1.562 1.562 0 0 0-1.166-.548Z"
        fill="#fff"
      />
      <Path
        d="M206.222 118.394H150.6a.93.93 0 0 1-.44-.113 1.062 1.062 0 0 1-.354-.315 1.229 1.229 0 0 1-.2-.457 1.307 1.307 0 0 1-.007-.51l.863-4.633c.049-.259.175-.492.357-.659a.96.96 0 0 1 .644-.259h53.896a.958.958 0 0 1 .644.259c.182.167.308.4.357.659l.863 4.633c.031.168.029.343-.007.51a1.213 1.213 0 0 1-.2.457 1.062 1.062 0 0 1-.354.315.93.93 0 0 1-.44.113Z"
        fill="#CCC"
      />
      <Path
        d="M153.358 112.282h-1.287c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM156.785 112.282h-1.288c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.288c.117 0 .212-.108.212-.241v-.68c0-.133-.095-.241-.212-.241ZM160.211 112.282h-1.288c-.117 0-.212.108-.212.241v.68c0 .133.095.241.212.241h1.288c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM163.637 112.282h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM167.063 112.282h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM170.489 112.282h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM173.915 112.282h-1.287c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM177.342 112.282h-1.288c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.288c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM180.768 112.282h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM184.194 112.282h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM187.62 112.282h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM191.046 112.282h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM194.473 112.282h-1.288c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.288c.117 0 .212-.108.212-.241v-.68c0-.133-.095-.241-.212-.241ZM197.899 112.282h-1.288c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.288c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM201.325 112.282h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM204.751 112.282h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM153.318 114.218h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM156.744 114.218h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM160.17 114.218h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM163.596 114.218h-1.287c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM167.023 114.218h-1.288c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.288c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM170.449 114.218h-1.288c-.117 0-.212.108-.212.241v.68c0 .133.095.241.212.241h1.288c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM173.875 114.218h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM177.301 114.218h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM180.727 114.218h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM184.153 114.218h-1.287c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM187.58 114.218h-1.288c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.288c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM191.006 114.218h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM194.432 114.218h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM197.858 114.218h-1.287c-.118 0-.213.108-.213.241v.68c0 .133.095.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM201.284 114.218h-1.287c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.287c.118 0 .213-.108.213-.241v-.68c0-.133-.095-.241-.213-.241ZM204.711 114.218h-1.288c-.117 0-.213.108-.213.241v.68c0 .133.096.241.213.241h1.288c.117 0 .213-.108.213-.241v-.68c0-.133-.096-.241-.213-.241ZM181.755 116.542h-13.279c-.117 0-.213.107-.213.24v.681c0 .133.096.24.213.24h13.279c.118 0 .213-.107.213-.24v-.681c0-.133-.095-.24-.213-.24Z"
        fill="#E6E6E6"
      />
      <Path
        d="M219.733 22.975h-87.479a.33.33 0 0 1-.241-.118.424.424 0 0 1-.099-.275c0-.103.036-.201.099-.275a.33.33 0 0 1 .241-.118h87.479c.09.002.177.045.241.118a.424.424 0 0 1 .099.275.424.424 0 0 1-.099.275.333.333 0 0 1-.241.118Z"
        fill="#CACACA"
      />
      <Path
        d="M138.209 20.181c1.126 0 2.039-1.054 2.039-2.355s-.913-2.356-2.039-2.356c-1.126 0-2.039 1.055-2.039 2.356 0 1.3.913 2.355 2.039 2.355ZM145.252 20.181c1.126 0 2.039-1.054 2.039-2.355s-.913-2.356-2.039-2.356c-1.126 0-2.039 1.055-2.039 2.356 0 1.3.913 2.355 2.039 2.355ZM152.295 20.181c1.126 0 2.038-1.054 2.038-2.355s-.912-2.356-2.038-2.356-2.039 1.055-2.039 2.356c0 1.3.913 2.355 2.039 2.355ZM215.492 16.054h-5.003a.36.36 0 0 0-.263.129.46.46 0 0 0-.108.3c0 .111.039.219.108.299.07.08.164.126.263.128h5.003a.36.36 0 0 0 .263-.128.46.46 0 0 0 .108-.3.46.46 0 0 0-.108-.3.359.359 0 0 0-.263-.128ZM215.492 17.661h-5.003a.36.36 0 0 0-.263.129.46.46 0 0 0-.108.3c0 .111.039.219.108.3.07.08.164.125.263.127h5.003a.36.36 0 0 0 .263-.128.46.46 0 0 0 .108-.3.46.46 0 0 0-.108-.3.359.359 0 0 0-.263-.128ZM215.492 19.266h-5.003a.36.36 0 0 0-.263.129.46.46 0 0 0-.108.3c0 .111.039.22.108.3.07.08.164.125.263.128h5.003a.36.36 0 0 0 .263-.129.46.46 0 0 0 .108-.3.46.46 0 0 0-.108-.3.359.359 0 0 0-.263-.128Z"
        fill="#CCC"
      />
      <Path
        d="m175.904 28.937-.283-.933 36.133-21.22.282.934-36.132 21.22ZM284.924 68.24l-.283-.932 21.742-21.112.282.932-21.741 21.113ZM243.152 73.155l-36.133-21.22.283-.932 36.132 21.22-.282.932ZM261.648 58.39l-21.183-39.306.67-.632 21.182 39.305-.669.633ZM278.179 7.173l-20.63-.107V6.08l20.63.108v.985Z"
        fill="#3F3D56"
      />
      <Path
        d="M315.55 13.288h-23.113c-1.503 0-2.945-.675-4.008-1.877-1.063-1.201-1.661-2.831-1.661-4.53 0-1.7.598-3.33 1.661-4.531 1.063-1.202 2.505-1.877 4.008-1.877h23.113c1.503 0 2.945.675 4.008 1.877 1.063 1.201 1.661 2.831 1.661 4.53 0 1.7-.598 3.33-1.661 4.531-1.063 1.202-2.505 1.877-4.008 1.877ZM344.331 50.747h-23.112c-1.504 0-2.946-.675-4.009-1.877-1.063-1.201-1.66-2.831-1.66-4.53 0-1.7.597-3.33 1.66-4.531 1.063-1.202 2.505-1.877 4.009-1.877h23.112c1.503 0 2.945.675 4.009 1.877 1.063 1.201 1.66 2.831 1.66 4.53 0 1.7-.597 3.33-1.66 4.531-1.064 1.202-2.506 1.877-4.009 1.877Z"
        fill="#6C63FF"
      />
      <Path d="m306.96 77.162-20.629-.107v-.985l20.629.107v.985Z" fill="#3F3D56" />
      <Path
        d="M344.331 83.278h-23.112c-1.504 0-2.946-.676-4.009-1.877-1.063-1.202-1.66-2.832-1.66-4.531 0-1.7.597-3.33 1.66-4.53 1.063-1.203 2.505-1.877 4.009-1.877h23.112c1.503 0 2.945.675 4.009 1.876 1.063 1.202 1.66 2.832 1.66 4.531 0 1.7-.597 3.33-1.66 4.53-1.064 1.202-2.506 1.877-4.009 1.877ZM276.739 78.861h-23.113c-1.503 0-2.945-.675-4.008-1.876-1.063-1.202-1.661-2.832-1.661-4.531 0-1.7.598-3.33 1.661-4.53 1.063-1.203 2.505-1.878 4.008-1.878h23.113c1.503 0 2.945.675 4.008 1.877 1.063 1.202 1.661 2.832 1.661 4.53 0 1.7-.598 3.33-1.661 4.532-1.063 1.201-2.505 1.876-4.008 1.876ZM245.341 12.815h-23.112c-1.504 0-2.946-.675-4.009-1.877-1.063-1.201-1.66-2.831-1.66-4.53 0-1.7.597-3.33 1.66-4.531C219.283.675 220.725 0 222.229 0h23.112c1.503 0 2.945.675 4.009 1.877 1.063 1.201 1.66 2.831 1.66 4.53 0 1.7-.597 3.33-1.66 4.531-1.064 1.202-2.506 1.877-4.009 1.877Z"
        fill="#6C63FF"
      />
      <Path
        d="M134.869 122.817h-26.164c-.926 0-1.813.415-2.467 1.155-.655.739-1.022 1.742-1.022 2.788 0 1.046.367 2.049 1.022 2.788.654.74 1.541 1.155 2.467 1.155h9.593v30.559h6.978v-30.559h9.593c.926 0 1.813-.415 2.467-1.155.654-.739 1.022-1.742 1.022-2.788 0-1.046-.368-2.049-1.022-2.788-.654-.74-1.541-1.155-2.467-1.155Z"
        fill="#3F3D56"
      />
      <Path
        d="M152.139 178.186H82.155c-6.784-.028-13.334-2.814-18.451-7.849-5.117-5.034-8.462-11.982-9.422-19.573l-2.477-10.299c-5.127-21.342-12.937-41.742-23.191-60.577-4.687-8.603-7.099-16.93-1.62-24.948l.138-.201c4.394-6.465 26.267-7.865 33.397-8.137.282-.01.564-.016.848-.016h43.529c.284 0 .567.005.848.016 3.844.127 7.586 1.427 10.829 3.763 3.243 2.336 5.865 5.621 7.59 9.506 1.84 3.966 2.696 8.422 2.476 12.893-.219 4.472-1.505 8.793-3.722 12.505-15.29 25.961-19.972 42.239-15.179 52.781 4.636 10.196 18.848 15.41 44.724 16.405 6.954.268 10.145 6.388 10.168 11.961.021 5.429-3.047 11.423-9.835 11.754-.221.011-.443.016-.666.016Z"
        fill="#3F3D56"
      />
      <Path
        d="M94.044 248.422h26.165c.925 0 1.812-.415 2.466-1.155.655-.739 1.022-1.742 1.022-2.788 0-1.046-.367-2.049-1.022-2.788-.654-.74-1.541-1.155-2.466-1.155h-9.594v-66.54h-6.977v66.54h-9.594c-.925 0-1.813.415-2.467 1.155-.654.739-1.022 1.742-1.022 2.788 0 1.046.368 2.049 1.022 2.788.654.74 1.542 1.155 2.467 1.155Z"
        fill="#3F3D56"
      />
      <Path d="m117.725 221.597 4.508 2.767 11.932-18.647-6.653-4.084-9.787 19.964Z" fill="#A0616A" />
      <Path
        d="m119.895 214.952 8.183 2.896-1.303 3.875 5.611 9.204c.277.455.419.998.404 1.549a2.797 2.797 0 0 1-.488 1.518 2.294 2.294 0 0 1-1.188.897 2.041 2.041 0 0 1-1.427-.074l-9.526-4.091-.354-4.537-1.929 3.557-3.592-1.542 5.609-13.252Z"
        fill="#2F2E41"
      />
      <Path
        d="M129.114 33.553a6.442 6.442 0 0 1-.161 2.475 5.98 5.98 0 0 1-1.073 2.164 5.13 5.13 0 0 1-1.782 1.449c-.68.33-1.416.487-2.156.46l-17.379 41.794-5.45-8.59 17.889-39.52c.122-1.402.695-2.706 1.61-3.662.915-.957 2.109-1.502 3.355-1.53 1.247-.029 2.459.46 3.407 1.375.949.914 1.568 2.19 1.74 3.585Z"
        fill="#A0616A"
      />
      <Path
        d="M71.442 90.346s-.465 7.301 6.84 8.733c7.306 1.432 26.836-12.526 30.044-14.67 3.207-2.143 9.184-29.11 9.184-29.11l-5.198-9.937c-6.418 9.176-11.458 17.637-11.764 23.644l-29.106 21.34Z"
        fill="#6C63FF"
      />
      <Path
        d="m79.876 115.496 1.578 7.663s.016 7.065 1.123 8.368c1.1 1.296 25.273-1.307 25.273-1.307s-2.563-11.386-2.529-20.001l-25.445 5.277Z"
        fill="#A0616A"
      />
      <Path
        d="m130.945 213.508-8.722-5.422c-.166-12.827 6.66-30.186 14.757-48.368-18.108 3.52-35.19 4.647-49.966.389-2.426-.724-4.502-2.497-5.78-4.937-1.278-2.441-1.655-5.351-1.05-8.103.057-.27.124-.538.2-.802 1.768-6.098-2.198-9.921 1.45-16.628 9.592-3.703 18.704-4.748 27.037-1.479l5.22 13.048 25.879-3.785a8.488 8.488 0 0 1 3.729.33 9.202 9.202 0 0 1 3.33 1.926c.987.884 1.809 1.98 2.42 3.225.61 1.245.996 2.614 1.136 4.028.035.318.058.637.068.957-5.232 27.726-11.099 52.673-19.708 65.621Z"
        fill="#2F2E41"
      />
      <Path
        d="m76.364 66.985 9.969-.665c.42-.028.838.093 1.195.346.356.252.634.625.795 1.065l2.817 7.72 11.709 10.937s4.636 6.668 4.647 15.279c.011 8.612 1.645 28.543 1.645 28.543s-6.766-10.764-10.942-7.901c-.71.487-.96 1.483-1.705 1.987-.37.251-1.228.007-1.603.258-5.755 3.861-11.756 7.633-12.317 6.972-1.1-1.299-2.436-7.934-2.436-7.934l-9.126-37.897a15.807 15.807 0 0 1-.288-6.129 15.1 15.1 0 0 1 2.054-5.681c.637-1.015 1.305-1.77 1.926-1.894 1.394-.336.653-3.867 1.66-5.006Z"
        fill="#6C63FF"
      />
      <Path d="m161.168 237.649 4.208-3.307-9.533-20.328-6.211 4.88 11.536 18.755Z" fill="#A0616A" />
      <Path
        d="m161.804 224.009-6.595 6.663c-10.487-13.207-18.415-31.73-25.133-52.765-17.603-5.827-30.877-15.224-42.466-26.382-3.932-3.76-6.879-8.59-3.526-13.17.157-.215.32-.422.491-.622 3.959-4.598 13.999-3.722 19.879-7.935l13.135 15.869-.826 4.255 24.672 9.446a9.366 9.366 0 0 1 3.216 2.151c.936.95 1.696 2.1 2.237 3.384a12.063 12.063 0 0 1 .362 8.274c-.092.302-.196.6-.311.893l14.865 49.939ZM158.714 236.308l6.737-5.995 2.093 3.403 9.889-.034c.489-.002.965.173 1.359.499a2.6 2.6 0 0 1 .833 1.312 2.904 2.904 0 0 1-.017 1.614 2.582 2.582 0 0 1-.86 1.29l-8.367 6.574-3.513-2.234 1.507 3.809-3.154 2.479-6.507-12.717Z"
        fill="#2F2E41"
      />
      <Path
        d="M91.085 162.491a5.122 5.122 0 0 1-1.787-1.442 5.952 5.952 0 0 1-1.08-2.16 6.437 6.437 0 0 1-.169-2.473 6.194 6.194 0 0 1 .773-2.322l-22.57-38.495 9.327-.802 20.584 37.808c.997.846 1.684 2.076 1.932 3.457a6.405 6.405 0 0 1-.586 4.035c-.626 1.218-1.626 2.135-2.81 2.576a4.55 4.55 0 0 1-3.614-.183v.001Z"
        fill="#A0616A"
      />
      <Path
        d="M78.109 77.29s-5.278-4.243-10.156 2.069c-4.878 6.312-4.47 32.425-4.517 36.636-.014 1.319 1.67 4.164 3.992 7.451a134.927 134.927 0 0 0 3.415 4.595c.696.9.096 2.773.795 3.648.695.87 2.688.741 3.349 1.549 3.137 3.832 5.686 6.749 5.686 6.749l10.213.142c.115-8.581-5.084-16.24-11.764-23.643L78.11 77.289Z"
        fill="#6C63FF"
      />
      <Path
        d="M67.814 39.928c-.967.788-1.984 1.6-3.164 1.796-1.18.196-2.561-.449-2.888-1.745-.399-1.585.867-3.028 2.005-4.058l3.61-3.267a8.69 8.69 0 0 1 2.212-1.617 2.656 2.656 0 0 1 1.286-.28c.442.017.875.145 1.267.377.388.296.702.7.913 1.171.211.473.311.998.292 1.527a6.266 6.266 0 0 1-.894 2.955 9.93 9.93 0 0 1-2.57 2.983 8.658 8.658 0 0 1-3.4 1.604"
        fill="#2F2E41"
      />
      <Path
        d="M95.186 124.788H69.021c-.925 0-1.812.416-2.467 1.155-.654.74-1.021 1.743-1.021 2.789 0 1.045.367 2.048 1.021 2.788.655.739 1.542 1.155 2.467 1.155h9.594v30.558h6.977v-30.558h9.594c.925 0 1.813-.416 2.467-1.155.654-.74 1.022-1.743 1.022-2.788 0-1.046-.368-2.049-1.022-2.789-.654-.739-1.542-1.155-2.467-1.155Z"
        fill="#3F3D56"
      />
      <Path
        d="M69.417 31.655c.105-2.957-2.682-5.298-5.294-5.113-2.612.185-4.857 2.262-6.338 4.701-1.481 2.438-2.37 5.261-3.537 7.908-1.167 2.646-2.72 5.237-5.038 6.608-2.318 1.37-5.544 1.125-7.146-1.213a7.063 7.063 0 0 0-.914 2.845 7.3 7.3 0 0 0 .322 3.004c.656 1.92 1.88 3.523 3.462 4.54.63.422 1.303.756 2.004.996a9.628 9.628 0 0 1 1.207-2.452 8.56 8.56 0 0 0-.26 2.714 7.114 7.114 0 0 0 3.266-.058 6.66 6.66 0 0 0 2.877-1.58 7.824 7.824 0 0 0 1.947-2.867c.98-2.62.48-5.61.69-8.445.208-2.835 1.72-6.073 4.237-6.119 1.917-.035 1.664.143 2.878 1.82"
        fill="#2F2E41"
      />
      <Path
        d="M86.826 47.19c0 3.398-1.195 6.658-3.321 9.061-2.126 2.404-5.01 3.754-8.017 3.754-6.262 0-12.21-8.202-12.21-15.28 0-7.077 5.948-10.35 12.21-10.35 3.007 0 5.89 1.35 8.017 3.753 2.126 2.403 3.32 5.663 3.32 9.062Z"
        fill="#2F2E41"
      />
      <Path
        d="M81.075 62.547c5.853-1.354 9.626-7.814 8.429-14.429-1.198-6.615-6.913-10.88-12.766-9.527-5.853 1.354-9.627 7.814-8.429 14.429 1.198 6.615 6.913 10.88 12.766 9.527Z"
        fill="#A0616A"
      />
      <Path
        d="M92.495 48.668c-3.202.989-6.435 2.025-7.684 0a11.988 11.988 0 0 0-1.356-3.775 16.96 16.96 0 0 1-.798 3.775c-4.046.994-7.827 1.232-11.094 0-.45.919-.71 1.94-.763 2.987a3.607 3.607 0 0 0-.506-.3.748.748 0 0 0-.689-.069.636.636 0 0 0-.193.211.729.729 0 0 0-.09.286c-.022.206-.013.414.026.616.045.705.232 1.39.545 2.002.124.21.285.39.473.526.189.137.4.228.621.267.454 2.883 4.065 6.782 4.065 6.782C64.15 62.47 64.15 54.11 64.15 46.204l1.308-2.957h4.36v-6.408h12.21c2.776 0 5.438 1.248 7.4 3.466 1.963 2.218 3.066 5.226 3.067 8.363Z"
        fill="#2F2E41"
      />
      <Path
        d="M191.849 249.849.519 250a.477.477 0 0 1-.199-.044.536.536 0 0 1-.169-.127.608.608 0 0 1-.113-.191.653.653 0 0 1 0-.45.592.592 0 0 1 .113-.19.477.477 0 0 1 .368-.172l191.33-.151a.49.49 0 0 1 .367.172c.098.11.153.259.153.415a.627.627 0 0 1-.153.415.49.49 0 0 1-.367.172ZM319.621 249.849 220.74 250a.481.481 0 0 1-.369-.171.635.635 0 0 1-.112-.641.593.593 0 0 1 .112-.19.481.481 0 0 1 .369-.172l98.881-.151a.49.49 0 0 1 .367.172c.097.11.152.259.152.415a.63.63 0 0 1-.152.415.49.49 0 0 1-.367.172Z"
        fill="#CACACA"
      />
      <Path
        d="M196.222 72.947H158.74c-1.564-.002-3.063-.705-4.168-1.955-1.106-1.25-1.728-2.944-1.73-4.71V38.21c.002-1.767.624-3.461 1.73-4.711 1.105-1.25 2.604-1.953 4.168-1.954h37.482c1.564.002 3.063.704 4.168 1.954 1.106 1.25 1.728 2.944 1.729 4.711v28.071c-.001 1.767-.623 3.462-1.729 4.711-1.105 1.25-2.604 1.953-4.168 1.955ZM158.74 32.53c-1.333.002-2.61.601-3.552 1.666-.942 1.065-1.472 2.508-1.473 4.014v28.071c.001 1.506.531 2.95 1.473 4.015.942 1.064 2.219 1.663 3.552 1.665h37.482c1.332-.002 2.61-.6 3.552-1.665.942-1.065 1.472-2.509 1.473-4.015v-28.07c-.001-1.507-.531-2.95-1.473-4.015-.942-1.065-2.22-1.664-3.552-1.666H158.74Z"
        fill="#E6E6E6"
      />
      <Path
        d="M169.846 40.416H159.82v.986h10.026v-.986ZM182.06 44.36h-22.24v.985h22.24v-.985ZM182.06 47.81h-22.24v.985h22.24v-.985ZM188.165 51.26H159.82v.986h28.345v-.986ZM174.646 54.71H159.82v.986h14.826v-.986ZM186.857 58.16H159.82v.986h27.037v-.986ZM164.616 61.61h-4.796v.986h4.796v-.985Z"
        fill="#E6E6E6"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h350v250H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;