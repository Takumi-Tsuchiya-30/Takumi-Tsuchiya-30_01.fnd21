'use strict';
// 画像の配列
const images = ['Rimi.jpg', 'Mina.jpg', 'Ruka.jpg', 'Kaker.jpeg'];
// 現在の画像のインデックス
let currentIndex = 0;

function changeImage() {
  let imgElement = document.getElementById('timeBasedImage');
  
   // フェードアウト開始
   imgElement.classList.add('fadeOut');
  
   // フェードアウトが完了したら新しい画像を設定
   setTimeout(function() {
     imgElement.src = images[currentIndex];
     // 次の画像のインデックスに更新
     currentIndex = (currentIndex + 1) % images.length;
     // フェードアウト終了（フェードイン開始）
     imgElement.classList.remove('fadeOut');
   }, 2000); // 2秒後に実行（CSSのtransitionと同じ時間）
 }
 

// 4秒ごとに画像を更新
window.onload = function () {
  changeImage();
  setInterval(changeImage, 6 * 1000);
};
