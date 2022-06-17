"use strict";

const shareImgBtn = document.getElementsByClassName('author-share-image');
const getwhiteBtn = document.getElementsByClassName('author-share-image-desktop-active');
const shareImageMenuBtn = document.getElementsByClassName('share-img');
const allInfo_m = document.getElementsByClassName('author-info-m');
const allInfo_d = document.getElementsByClassName('author-info-d');
const allShareMenu = document.getElementsByClassName('popup-footer');
const removeAuthorInfo_m = () => allInfo_m[0].classList.toggle('hide');
const toggleAuthorInfo_m = () => allInfo_m[0].classList.remove('hide');
const removeHideSection = () => allShareMenu[0].classList.toggle('hide');
const toggleShowSection = () => allShareMenu[0].classList.remove('hide');
const removeNormalShareIcon = () => shareImgBtn[1].classList.toggle('hide');
const toggleWhiteShareIcon = () => getwhiteBtn[0].classList.remove('hide');

shareImgBtn[0].addEventListener("click", function(){
    toggleShowSection();
    removeAuthorInfo_m();
    
}) ;

shareImgBtn[1].addEventListener("click", function(){
    toggleShowSection();
    removeNormalShareIcon();
    toggleWhiteShareIcon();
}) ;

shareImageMenuBtn[0].addEventListener("click", function(){
    toggleAuthorInfo_m();
    removeHideSection();
}) ;




