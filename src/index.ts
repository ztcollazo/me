import { registerSW } from 'virtual:pwa-register';

const updateSW = registerSW({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onNeedRefresh() {},
  onOfflineReady() {
    console.log('Offline ready');
  },
});

updateSW();