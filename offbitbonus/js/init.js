  // IE 11 POLYFILL FOR INCLUDES
  if (!String.prototype.includes) {
    String.prototype.includes = function(search, start) {
      'use strict';

      if (search instanceof RegExp) {
        throw TypeError('first argument must not be a RegExp');
      }
      if (start === undefined) { start = 0; }
      return this.indexOf(search, start) !== -1;
    };
  }
  if(!!document.documentElement.dataset.ps && document.documentElement.dataset.ps=='b'){
    window.psDefault = 'b'
    // window.Cookies.set('psAlias', 'b')
    localStorage.setItem('psAlias', 'b')
    window.psAlias = localStorage.getItem('psAlias') || window.psDefault
  } else {
    window.psDefault = 'h'
    if(Array.isArray(window.psDomains)){
      for (var i = 0; i < window.psDomains.length; i++) {
        if(location.href.includes(window.psDomains[i].link)){
          localStorage.setItem('psAlias', window.psDomains[i].ps)
            // console.log('ps: ',window.psDomains[i].ps)
          }
      }
    }

    window.psAlias = localStorage.getItem('psAlias') || window.psDefault
  }

  window.preventHistory = true
  if(localStorage.getItem('isPreventHistory')){
    window.preventHistory = JSON.parse(localStorage.getItem('isPreventHistory').toLowerCase()) // "false"/"true" -> false/true
  } else {
    localStorage.setItem('isPreventHistory', window.preventHistory)
  }
  if(window.preventHistory){
    history.pushState(null, null, location.href);
    window.onpopstate = function(event) {
        history.go(1);
    };
  }


    let bufferArray = [];
    let lastKeystrokeTime = Date.now();

    //Our cheat code
    const cheatcode = "hesoyam";

    window.addEventListener("keyup", e => {
      const key = e.key.toLowerCase();
      const latestKeystrokeTime = Date.now();

      if (latestKeystrokeTime - lastKeystrokeTime > 1500) {
        bufferArray = [];
      }

      bufferArray.push(key);

      const word = bufferArray.join("");
      if (word === cheatcode) {
        test();
      }

      lastKeystrokeTime = latestKeystrokeTime;
    });

  window.test = function () {
    let current = localStorage.getItem('test')
    if(localStorage.getItem('test') || document.documentElement.classList.contains('testmode')){
      localStorage.removeItem('test')
      document.querySelector('#app').__vue__.isTestMode = false
      document.documentElement.classList.remove('testmode')
    } else {
      document.documentElement.classList.add('testmode')
      localStorage.setItem('test', true)
      document.querySelector('#app').__vue__.isTestMode = true
    }
    console.log('Test mode', localStorage.getItem('test') ? 'ON' : 'OFF')
    // Metrika Get Data
    // insert next button on upsells
  }
  // check if test() add testmode class to html
  if(localStorage.getItem('test')){
    document.documentElement.classList.add('testmode')
  } else if(document.documentElement.classList.contains('testmode')){
      document.documentElement.classList.remove('testmode')
  }

  // if(domain_from_url(window.location.hostname)[0]=='r'){
  //   window.lang = 'ru'
  // } else if(domain_from_url(window.location.hostname)[0]=='e'){
  //   window.lang = 'en'
  // } else {
  //   window.lang = 'ru'
  // }
    window.lang = 'ru'

  function domain_from_url(url) {
    var result
    var match
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
        result = match[1]
        if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
            result = match[1]
        }
    }
    return result
  }
