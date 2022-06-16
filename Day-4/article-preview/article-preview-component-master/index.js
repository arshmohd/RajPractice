"use strict";

const shareImgBtn = document.getElementsByClassName('author-share-image');

const shareImageMenuBtn = document.getElementsByClassName('share-img');
const allInfo = document.getElementsByClassName('author-info');
const allShareMenu = document.getElementsByClassName('popup-footer');
const removeAuthorInfo = () => allInfo[0].classList.toggle('show');
const toggleAuthorInfo = () => allInfo[0].classList.remove('show');
const removeHideSection = () => allShareMenu[0].classList.toggle('show');
const toggleShowSection = () => allShareMenu[0].classList.remove('show');

shareImgBtn[0].addEventListener("click", function(){
    toggleShowSection();
    removeAuthorInfo();
}) ;

shareImageMenuBtn[0].addEventListener("click", function(){
    toggleAuthorInfo();
    removeHideSection();
}) ;




