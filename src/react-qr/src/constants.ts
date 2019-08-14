// Copyright 2017-2019 @polkadot/react-qr authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.

const DEFAULT_IMG_SIZE = 300;
const ADDRESS_PREFIX = 'substrate:';
const FRAME_SIZE = 2048;
const SUBSTRATE_ID = new Uint8Array([0x53]);
const CRYPTO_SR25519 = new Uint8Array([0x01]);
const CMD = 0 | 1 | 2 | 3;

export {
  ADDRESS_PREFIX,
  CMD,
  CRYPTO_SR25519,
  DEFAULT_IMG_SIZE,
  FRAME_SIZE,
  SUBSTRATE_ID
};
