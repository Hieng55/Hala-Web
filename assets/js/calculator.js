"use strict";

/*

   Author: Truong Duong
   Date:   11/21/2021
   
*/

const lowPagePrices = [3, 6, 9, 20,
30];

const lowStylePrices = [0, 6, 9, 15];

const lowCopyWritingPrices = [0, 3, 6, 11];

const lowSeoPrices = [0, 6, 12, 18];

const responsiveDesignPrice = [0, 9];

const lowDatabasePrices = [0, 6, 12];

const lowEcommercePrices = [0, 6, 12];

const lowCMSPrices = [0, 6, 12];

const highPagePrices = [6, 9, 20, 30,
   45];
   
   const highStylePrices = [0, 9, 15, 30];
   
   const highCopyWritingPrices = [0, 6, 11, 22];
   
   const highSeoPrices = [0, 12, 18, 30];
   
   const highDatabasePrices = [0, 12, 30];
   
   const highEcommercePrices = [0, 12, 30];
   
   const highCMSPrices = [0, 12, 30];

/* Function to get low price for all options */
function getLowPriceForPagesOption() {
   var pages = document.getElementById('pages');
   var pagesValue = pages.options[pages.selectedIndex].value;
   var lowPriceForPagesOption = lowPagePrices[pagesValue];
   return lowPriceForPagesOption;
}

function getLowPriceForStylesOption() {
   var style = document.getElementById('styles');
   var styleValue = style.options[style.selectedIndex].value;
   var lowPriceForStyleOption = lowStylePrices[styleValue];
   return lowPriceForStyleOption;
}

function getLowPriceForCopyWriting() {
   var copyPages = document.getElementById('cPages');
   var copyPagesValue = copyPages.options[copyPages.selectedIndex].value;
   var lowPriceForCopyWriting = lowCopyWritingPrices[copyPagesValue];
   return lowPriceForCopyWriting;
}

function getLowPriceForSEO() {
   var seo = document.getElementById('seo');
   var seoValue = seo.options[seo.selectedIndex].value;
   var lowPriceForSEO = lowSeoPrices[seoValue];
   return lowPriceForSEO;
}

function getPriceForResponsiveDesign() {
   var mobile = document.getElementById('mobile-friendly');
   var mobileValue = mobile.options[mobile.selectedIndex].value;
   var priceForResponsiveDesign = responsiveDesignPrice[mobileValue];
   return priceForResponsiveDesign;
}

function getLowPriceForDatabase() {
   var data = document.getElementById('data');
   var dataValue = data.options[data.selectedIndex].value;
   var lowPriceForDatabase = lowDatabasePrices[dataValue];
   return lowPriceForDatabase;
}

function getLowPriceForCMS() {
   var cms = document.getElementById('cms');
   var cmsValue = cms.options[cms.selectedIndex].value;
   var lowPriceForCMS = lowCMSPrices[cmsValue];
   return lowPriceForCMS;
}

function getLowPriceForEcommerce() {
   var ecommerce = document.getElementById('ecommerce');
   var ecommerceValue = ecommerce.options[ecommerce.selectedIndex].value;
   var lowPriceForEcommerce = lowEcommercePrices[ecommerceValue];
   return lowPriceForEcommerce;
}

/* Function to get high price for all options */
function getHighPriceForPagesOption() {
   var pages = document.getElementById('pages');
   var pagesValue = pages.options[pages.selectedIndex].value;
   var highPriceForPagesOption = highPagePrices[pagesValue];
   return highPriceForPagesOption;
}

function getHighPriceForStylesOption() {
   var style = document.getElementById('styles');
   var styleValue = style.options[style.selectedIndex].value;
   var highPriceForStyleOption = highStylePrices[styleValue];
   return highPriceForStyleOption;
}

function getHighPriceForCopyWriting() {
   var copyPages = document.getElementById('cPages');
   var copyPagesValue = copyPages.options[copyPages.selectedIndex].value;
   var highPriceForCopyWriting = highCopyWritingPrices[copyPagesValue];
   return highPriceForCopyWriting;
}

function getHighPriceForSEO() {
   var seo = document.getElementById('seo');
   var seoValue = seo.options[seo.selectedIndex].value;
   var highPriceForSEO = highSeoPrices[seoValue];
   return highPriceForSEO;
}

function getHighPriceForDatabase() {
   var data = document.getElementById('data');
   var dataValue = data.options[data.selectedIndex].value;
   var highPriceForDatabase = highDatabasePrices[dataValue];
   return highPriceForDatabase;
}

function getHighPriceForCMS() {
   var cms = document.getElementById('cms');
   var cmsValue = cms.options[cms.selectedIndex].value;
   var highPriceForCMS = highCMSPrices[cmsValue];
   return highPriceForCMS;
}

function getHighPriceForEcommerce() {
   var ecommerce = document.getElementById('ecommerce');
   var ecommerceValue = ecommerce.options[ecommerce.selectedIndex].value;
   var highPriceForEcommerce = highEcommercePrices[ecommerceValue];
   return highPriceForEcommerce;
}

/* Function to get total low price*/
function getTotalLowPrice() {
   var totalLowPrice = getLowPriceForPagesOption() + getLowPriceForStylesOption() + getLowPriceForCopyWriting() + getPriceForResponsiveDesign() + getLowPriceForSEO() + getLowPriceForDatabase() + getLowPriceForCMS() + getLowPriceForEcommerce();
   return totalLowPrice;
}

/* Function to get total high price*/
function getTotalHighPrice() {
   var totalHighPrice = getHighPriceForPagesOption() + getHighPriceForStylesOption() + getHighPriceForCopyWriting() + getPriceForResponsiveDesign() + getHighPriceForSEO() + getHighPriceForDatabase() + getHighPriceForCMS() + getHighPriceForEcommerce();
   return totalHighPrice;
}

/* Function to display pricing quote on user interface*/
function getTotalPrice() {
   document.getElementById("totalPrice").innerHTML = "Chúng tôi ước tính chi phí để thực hiện dự án website của bạn sẽ có giá từ " + "<strong>" + getTotalLowPrice() + " triệu" + "</strong> " + " đến " + "<strong>" + getTotalHighPrice() + " triệu. </strong> "+ " Vui lòng liên hệ trực tiếp tại số điện thoại 078 416 9491 hoặc <a href=" + "lien-he/" + " class="+ "internal-link" + ">biểu mẫu liên hệ</a> để nhận được báo giá dự án chính xác từ đội ngũ nhân viên tư vấn của Hala Media.";
}

