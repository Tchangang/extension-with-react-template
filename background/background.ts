// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict'
import checkIfEveryThingIsOk from './demo';

function updateIcon() {
    chrome.storage.sync.get('number', function(data) {
        // chrome.browserAction.setIcon({path: 'icon' + current + '.png'});
        checkIfEveryThingIsOk();
    });
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
