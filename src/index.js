/*!
 * extract-content-speak-ja/src/index.js
 *
 * Copyright (c) 2021 Fumikazu Fujiwara <github@ze.gs>
 *
 * Released under the MIT license.
 * see https://opensource.org/licenses/MIT
 *
 * The Class ExtractContentJS is:
 * MIT license | https://github.com/hatena/extract-content-javascript#label-LICENCE
 */
(function() {
  const e = new ExtractContentJS.LayeredExtractor();
  e.addHandler(e.factory.getHandler('Heuristics'));
  const r = e.extract(window.document);
  if (r.isSuccess && window.speechSynthesis) {
    const synth = window.speechSynthesis;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(r.content.toString());
    u.lang = 'ja-JP';
    synth.speak(u);
  }
})();
