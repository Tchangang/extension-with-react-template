// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var demo_1 = __importDefault(require("./demo"));
chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ number: 1 }, function () {
        console.log('The number is set to 1.');
    });
});
function updateIcon() {
    chrome.storage.sync.get('number', function (data) {
        var current = data.number;
        // chrome.browserAction.setIcon({path: 'icon' + current + '.png'});
        demo_1.default();
        alert('start');
        current++;
        if (current > 5) {
            current = 1;
        }
        chrome.storage.sync.set({ number: current }, function () {
            console.log('The number is set to ' + current);
        });
    });
}
chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();
