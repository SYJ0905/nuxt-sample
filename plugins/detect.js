/* eslint-disable consistent-return */
function detect() {
  function addHtmlClass(browserClass) {
    const htmlElt = document.getElementsByTagName('html')[0];
    if (!htmlElt.className.includes(browserClass)) {
      htmlElt.className = `${htmlElt.className} ${browserClass}`;
    }
  } // END FUNC
  if (process.browser) {
    const BrowserDetect = {
      init() {
        this.browser = this.searchString(this.dataBrowser) || 'An unknown browser';
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || 'an unknown version';
        this.OS = this.searchString(this.dataOS) || 'an unknown OS';
      },
      // eslint-disable-next-line consistent-return
      searchString(data) {
        for (let i = 0; i < data.length; i += 1) {
          const dataString = data[i].string;
          const dataProp = data[i].prop;
          this.versionSearchString = data[i].versionSearch || data[i].identity;
          if (dataString) {
            if (
              dataString.includes(data[i].subString)
            ) {
              const result = data[i].identity;
              if (result === 'Windows') {
                const userAgentInfor = navigator.userAgent.toLowerCase();
                const windowsVersion = userAgentInfor.substr(
                  userAgentInfor.indexOf('windows nt ') + 11,
                  4,
                );
                return this.searchOSversion(
                  windowsVersion,
                );
              }
              return result;
            }
          } else if (dataProp) {
            return data[i].identity;
          }
        }
      },
      searchVersion(dataString) {
        const index = dataString.indexOf(
          this.versionSearchString,
        );
        if (index === -1) {
          return;
        }
        // eslint-disable-next-line consistent-return
        return parseFloat(
          dataString.substring(
            index + this.versionSearchString.length + 1,
          ),
        );
      },
      searchOSversion(version) {
        let resultVersion = '';
        switch (version) {
          case '5.1':
            resultVersion = 'Windows XP';
            break;
          case '6.1':
            resultVersion = 'Windows 7';
            break;
          case '6.3':
            resultVersion = 'Windows 8';
            break;
          case '10.0':
            resultVersion = 'Windows 10';
            break;
          default:
            resultVersion = 'Windows 其他';
            break;
        }
        return resultVersion;
      },
      dataBrowser: [
        {
          string: navigator.userAgent,
          subString: 'Chrome',
          identity: 'Chrome',
        },
        {
          string: navigator.userAgent,
          subString: 'OmniWeb',
          versionSearch: 'OmniWeb/',
          identity: 'OmniWeb',
        },
        {
          string: navigator.vendor,
          subString: 'Apple',
          identity: 'Safari',
          versionSearch: 'Version',
        },
        {
          prop: window.opera,
          identity: 'Opera',
          versionSearch: 'Version',
        },
        {
          string: navigator.vendor,
          subString: 'iCab',
          identity: 'iCab',
        },
        {
          string: navigator.vendor,
          subString: 'KDE',
          identity: 'Konqueror',
        },
        {
          string: navigator.userAgent,
          subString: 'Firefox',
          identity: 'Firefox',
        },
        {
          string: navigator.vendor,
          subString: 'Camino',
          identity: 'Camino',
        },
        {
          // for newer Netscapes (6+)
          string: navigator.userAgent,
          subString: 'Netscape',
          identity: 'Netscape',
        },
        {
          string: navigator.userAgent,
          subString: 'MSIE',
          identity: 'Explorer',
          versionSearch: 'MSIE',
        },
        {
          string: navigator.userAgent,
          subString: 'Gecko',
          identity: 'Mozilla',
          versionSearch: 'rv',
        },
        {
          // for older Netscapes (4-)
          string: navigator.userAgent,
          subString: 'Mozilla',
          identity: 'Netscape',
          versionSearch: 'Mozilla',
        },
      ],
      dataOS: [
        {
          string: navigator.platform,
          subString: 'Win',
          identity: 'Windows',
        },
        {
          string: navigator.platform,
          subString: 'Mac',
          identity: 'Mac',
        },
        {
          string: navigator.userAgent,
          subString: 'iPhone',
          identity: 'iPhone/iPod',
        },
        {
          string: navigator.platform,
          subString: 'Linux',
          identity: 'Linux',
        },
      ],
    };

    if (typeof BrowserDetect.browser === 'undefined') {
      BrowserDetect.init();
    }

    addHtmlClass(BrowserDetect.browser);

    const info = {
      os: BrowserDetect.OS,
      browser: BrowserDetect.browser,
      resolution: `${window.screen.width} x ${window.screen.height}`,
    };

    return info;
  }
}

const detectDevice = detect();

export default detectDevice;
