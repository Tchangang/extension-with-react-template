// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var demo_1 = __importDefault(require("./demo"));
function updateIcon() {
    chrome.storage.sync.get('number', function (data) {
        // chrome.browserAction.setIcon({path: 'icon' + current + '.png'});
        demo_1.default();
    });
}
chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
