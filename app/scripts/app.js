/*
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

(function(document) {
  'use strict';

  // Grab a reference to our auto-binding template
  // and give it some initial binding values
  // Learn more about auto-binding templates at http://goo.gl/Dx1u2g
  var app = document.querySelector('#app');

  app.displayInstalledToast = function() {
    document.querySelector('#caching-complete').show();
  };

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
      // imports are loaded and elements have been registered
      var list = document.querySelector('#app-list');
      console.log(list);
      list.data =
          [{ 'name': 'Alysson Nader', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/Silveredge9/128.jpg' }, { 'name': 'Meagan Robel', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/stevedesigner/128.jpg' }, { 'name': 'Elliott Smitham', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ilya_pestov/128.jpg' }, { 'name': 'Henderson Witting', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/bassamology/128.jpg' }, { 'name': 'Mr. Myron Reinger', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ricburton/128.jpg' }, { 'name': 'Miss Daphnee Beatty', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ralph_lam/128.jpg' }, { 'name': 'Alayna Heidenreich', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }, { 'name': 'Darrick Bauch', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/kirangopal/128.jpg' }, { 'name': 'Lavinia Ortiz', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/kanickairaj/128.jpg' }, { 'name': 'Ford Beahan', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/raquelwilson/128.jpg' }, { 'name': 'Rosetta Kirlin', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/kaelifa/128.jpg' }, { 'name': 'Laurel Padberg', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/emsgulam/128.jpg' }, { 'name': 'Mrs. Baby Fisher', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/rdsaunders/128.jpg' }, { 'name': 'Maude Kerluke', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/gmourier/128.jpg' }, { 'name': 'Elouise Beier', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/rweve/128.jpg' }, { 'name': 'Jadyn Grimes', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/mighty55/128.jpg' }, { 'name': 'Amanda Wolf', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/madysondesigns/128.jpg' }, { 'name': 'Mandy Osinski', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg' }, { 'name': 'Shad Welch', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/plasticine/128.jpg' }, { 'name': 'Elliot Jenkins', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/erwanhesry/128.jpg' }, { 'name': 'Ashton Baumbach', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/jordyvdboom/128.jpg' }, { 'name': 'Stacy Wuckert', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/diansigitp/128.jpg' }, { 'name': 'Glen Lowe', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/s4f1/128.jpg' }, { 'name': 'Freeman Lehner', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/devinhalladay/128.jpg' }, { 'name': 'Anastacio Morar', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/rikas/128.jpg' }, { 'name': 'August Nikolaus', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/igorgarybaldi/128.jpg' }, { 'name': 'Beaulah Leuschke', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/_pedropinho/128.jpg' }, { 'name': 'Terrill Kub', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/christianoliff/128.jpg' }, { 'name': 'Taya Schmitt', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/vanchesz/128.jpg' }, { 'name': 'Nya Schultz', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/gearpixels/128.jpg' }, { 'name': 'Roel Hoppe', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/petrangr/128.jpg' }, { 'name': 'Malinda Sanford', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ajaxy_ru/128.jpg' }, { 'name': 'Miss Chet Zboncak', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/larrygerard/128.jpg' }, { 'name': 'Ms. Demario Herzog', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/eugeneeweb/128.jpg' }, { 'name': 'Callie Bosco', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/dss49/128.jpg' }, { 'name': 'Tremaine Steuber', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/overra/128.jpg' }, { 'name': 'Pattie Reichert', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/GavicoInd/128.jpg' }, { 'name': 'Billie Mitchell', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/her_ruu/128.jpg' }, { 'name': 'Mr. Juston Wolf', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/franciscoamk/128.jpg' }, { 'name': 'Miguel Hansen Miss', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/chatyrko/128.jpg' }, { 'name': 'Alden Friesen', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/hgharrygo/128.jpg' }, { 'name': 'Dr. Myrtle Cartwright', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/pyronite/128.jpg' }, { 'name': 'Kelton Heidenreich', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/nandini_m/128.jpg' }, { 'name': 'Rosemarie Hamill', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/katiemdaly/128.jpg' }, { 'name': 'Lloyd Becker', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/sharvin/128.jpg' }, { 'name': 'Rigoberto Wilkinson', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/swooshycueb/128.jpg' }, { 'name': 'Brenden Jast', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/mylesb/128.jpg' }, { 'name': 'Dante Kunze', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/mahmoudmetwally/128.jpg' }, { 'name': 'Sammie McLaughlin', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/snowshade/128.jpg' }, { 'name': 'Ruby O\'Conner', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/victorerixon/128.jpg' }, { 'name': 'Miss Georgianna Weissnat', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/gavr1l0/128.jpg' }, { 'name': 'Abby Cremin', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/thomasgeisen/128.jpg' }, { 'name': 'Domenica Carter', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/nasirwd/128.jpg' }, { 'name': 'Marcellus McLaughlin', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/happypeter1983/128.jpg' }, { 'name': 'Armando Greenfelder', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/stevedesigner/128.jpg' }, { 'name': 'Florian Dare', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/mikemai2awesome/128.jpg' }, { 'name': 'Hester Macejkovic', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ramanathan_pdy/128.jpg' }, { 'name': 'Pietro Klein', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/chaabane_wail/128.jpg' }, { 'name': 'Jessyca Howell', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/lmjabreu/128.jpg' }, { 'name': 'Nat Fahey', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/dmitriychuta/128.jpg' }, { 'name': 'Hope Stracke', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/baumann_alex/128.jpg' }, { 'name': 'Damien Hand', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/codysanfilippo/128.jpg' }, { 'name': 'Emilio Senger Mr.', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/vikasvinfotech/128.jpg' }, { 'name': 'Elenora Lehner Dr.', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/brandonmorreale/128.jpg' }, { 'name': 'Richard Torphy Ms.', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/bermonpainter/128.jpg' }, { 'name': 'Anibal Schaden', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/n_tassone/128.jpg' }, { 'name': 'Derick Lynch', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/fuck_you_two/128.jpg' }, { 'name': 'Mr. Jazmyne Walsh', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/knilob/128.jpg' }, { 'name': 'Mertie Larkin', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/pixage/128.jpg' }, { 'name': 'Jailyn Corkery', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/jcubic/128.jpg' }, { 'name': 'Savanna Dach', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/isaacfifth/128.jpg' }, { 'name': 'Estell Abbott', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/dvdwinden/128.jpg' }, { 'name': 'Clay Rodriguez', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/j04ntoh/128.jpg' }, { 'name': 'Edwin Quigley', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/jacobbennett/128.jpg' }, { 'name': 'Veronica Farrell', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/muridrahhal/128.jpg' }, { 'name': 'Miss Pascale Koelpin', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/nerdgr8/128.jpg' }, { 'name': 'Mr. Cheyenne Howe', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/lebronjennan/128.jpg' }, { 'name': 'Kacie Hackett', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/danthms/128.jpg' }, { 'name': 'Mavis Champlin Mr.', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }, { 'name': 'Piper Moen', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/derekcramer/128.jpg' }, { 'name': 'Angelica Hauck', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/lhausermann/128.jpg' }, { 'name': 'Edmond Klocko', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/olgary/128.jpg' }, { 'name': 'Ned Quitzon', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/tom_even/128.jpg' }, { 'name': 'Alvina Dicki', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/amanruzaini/128.jpg' }, { 'name': 'Jarrell Dooley', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/chanpory/128.jpg' }, { 'name': 'Sage Bosco', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/alexivanichkin/128.jpg' }, { 'name': 'Mr. Yvonne Bailey', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/mattdetails/128.jpg' }, { 'name': 'Freddie Rice', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/antonyryndya/128.jpg' }, { 'name': 'Jeffry Sauer', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/alexandermayes/128.jpg' }, { 'name': 'Dr. Sydni Parisian', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/aaronalfred/128.jpg' }, { 'name': 'Osvaldo King Dr.', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/urrutimeoli/128.jpg' }, { 'name': 'Logan Emmerich', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/motionthinks/128.jpg' }, { 'name': 'Mustafa Moore', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/gabrielrosser/128.jpg' }, { 'name': 'Chase Goodwin', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/nastya_mane/128.jpg' }, { 'name': 'Gabrielle Gerhold Miss', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/alessandroribe/128.jpg' }, { 'name': 'Dayana Towne Mrs.', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/buryaknick/128.jpg' }, { 'name': 'Sabryna Christiansen', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/Elt_n/128.jpg' }, { 'name': 'Miss Wade Mertz', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/benefritz/128.jpg' }, { 'name': 'Felicia Douglas', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/mutlu82/128.jpg' }, { 'name': 'Darryl Corkery', 'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/creartinc/128.jpg' }];
   
  });

  // Main area's paper-scroll-header-panel custom condensing transformation of
  // the appName in the middle-container and the bottom title in the bottom-container.
  // The appName is moved to top and shrunk on condensing. The bottom sub title
  // is shrunk to nothing on condensing.
  addEventListener('paper-header-transform', function(e) {
    var appName = document.querySelector('.app-name');
    var middleContainer = document.querySelector('.middle-container');
    var bottomContainer = document.querySelector('.bottom-container');
    var detail = e.detail;
    var heightDiff = detail.height - detail.condensedHeight;
    var yRatio = Math.min(1, detail.y / heightDiff);
    var maxMiddleScale = 0.50;  // appName max size when condensed. The smaller the number the smaller the condensed size.
    var scaleMiddle = Math.max(maxMiddleScale, (heightDiff - detail.y) / (heightDiff / (1-maxMiddleScale))  + maxMiddleScale);
    var scaleBottom = 1 - yRatio;

    // Move/translate middleContainer
    Polymer.Base.transform('translate3d(0,' + yRatio * 100 + '%,0)', middleContainer);

    // Scale bottomContainer and bottom sub title to nothing and back
    Polymer.Base.transform('scale(' + scaleBottom + ') translateZ(0)', bottomContainer);

    // Scale middleContainer appName
    Polymer.Base.transform('scale(' + scaleMiddle + ') translateZ(0)', appName);
  });

  // Close drawer after menu item is selected if drawerPanel is narrow
  app.onMenuSelect = function() {
    var drawerPanel = document.querySelector('#paperDrawerPanel');
    if (drawerPanel.narrow) {
      drawerPanel.closeDrawer();
    }
  };

  

})(document);
