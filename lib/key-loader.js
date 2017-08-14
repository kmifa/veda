/* @flow */
import * as THREE from 'three';

export default class KeyLoader {
  texture: THREE.DataTexture;
  _array: Uint8Array;

  constructor() {
    this._array = new Uint8Array(256);
    this.texture = new THREE.DataTexture(
      this._array,
      256,
      1,
      THREE.LuminanceFormat,
      THREE.UnsignedByteType
    );

    (document.body: any).addEventListener('keydown', (e: any) => {
      this._array[e.keyCode] = 255;
      this.texture.needsUpdate = true;
    });
    (document.body: any).addEventListener('keyup', (e: any) => {
      this._array[e.keyCode] = 0;
      this.texture.needsUpdate = true;
    });
  }
}