$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});

// $('#page-link a[href*="#"]').click(function () {
//   var elmHash = $(this).attr('href'); //ページ内リンクのHTMLタグhrefから、リンクされているエリアidの値を取得
//   var pos = $(elmHash).offset().top;  //idの上部の距離を取得
//   $('body,html').animate({scrollTop: pos}, 500); //取得した位置にスクロール。500の数値が大きくなるほどゆっくりスクロール
//   return false;
// });

// スクロール時の設定
// 動きのきっかけとなるアニメーションの名前を定義
function fadeUpAnime(){

  // ふわっ
  $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
    var elemPos = $(this).offset().top-50;//要素より、50px上の
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
    $(this).addClass('fadeUp');// 画面内に入ったらblurというクラス名を追記
    }else{
    $(this).removeClass('fadeUp');// 画面外に出たらblurというクラス名を外す
    }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    fadeUpAnime();/* アニメーション用の関数を呼ぶ*/
  });// ここまで画面をスクロールをしたら動かしたい場合の記述


// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function(){
  fadeUpAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述





// モーダルウインドウ
//テキストを含む一般的なモーダル
$(".info").modaal({
  overlay_close:true,//モーダル背景クリック時に閉じるか
  before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
  },
  after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
  }
});


// TOPに戻るボタン
//スクロールした際の動きを関数でまとめる
function PageTopCheck(){
  var winScrollTop = $(this).scrollTop();
  var secondTop =  $("#content2").offset().top - 150; //#area-2の上から150pxの位置まで来たら
  if(winScrollTop >= secondTop){
  $('.js-scroll').removeClass('scroll-view');//.js-scrollからscroll-viewというクラス名を除去
  $('.js-pagetop').addClass('scroll-view');//.js-pagetopにscroll-viewというクラス名を付与
} else {//元に戻ったら
  $('.js-scroll').addClass('scroll-view');//.js-scrollからscroll-viewというクラス名を付与
  $('.js-pagetop').removeClass('scroll-view');//.js-pagetopからscroll-viewというクラス名を除去
}

}

//クリックした際の動き
$('.scroll-top a').click(function () {
var elmHash = $(this).attr('href'); //hrefの内容を取得
if (elmHash == "#content2") {//もし、リンク先のhref の後が#area-2の場合
  var pos = $(elmHash).offset().top;
  $('body,html').animate({scrollTop: pos}, pos); //#area-2にスクロール
}else{
  $('body,html').animate({scrollTop: 0}, 500); //それ以外はトップへスクロール。数字が大きくなるほどゆっくりスクロール
}
  return false;//リンク自体の無効化
});

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
PageTopCheck();/* スクロールした際の動きの関数を呼ぶ*/
});





