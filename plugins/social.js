import detectDevice from '@/plugins/detect';

const social = () => ({
  fb() {
    function getDevice() {
      let device = '';
      const ua = detectDevice.os;
      if (ua.includes('iPhone') || ua.includes('iPad') || ua.includes('iPod') || ua.includes('Mac')) {
        device = 'ios';
      } else if (ua.includes('Windows')) {
        device = 'desktops';
      } else {
        device = 'android';
      }
      return device;
    }
    if (getDevice() === 'ios') {
      document.location.href = 'fb://profile/?id=編號';
    }
    if (getDevice() === 'android') {
      document.location.href = 'fb://profile/編號';
    }
    if (getDevice() === 'desktops') {
      window.open('https://www.facebook.com/編號', '_blank');
    }
  },
});

export const SOCIAL = social();
