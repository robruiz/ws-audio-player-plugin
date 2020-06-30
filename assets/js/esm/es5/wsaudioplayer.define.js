
// wsAudioPlayer: Custom Elements Define Library, ES Module/es5 Target

import { defineCustomElement } from './wsaudioplayer.core.js';
import {
  WSAudioPlayer
} from './wsaudioplayer.components.js';

export function defineCustomElements(win, opts) {
  return defineCustomElement(win, [
    WSAudioPlayer
  ], opts);
}
