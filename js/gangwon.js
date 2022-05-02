(function($){
  // 객체(Object) 형식의 이벤트
 $('.main-btn').on({
     mouseenter: function(){    //마우스 접근성
       $('.sub').stop().fadeOut(0);
       $(this).next().stop().fadeIn(300);
   
       $('.main-btn').removeClass('on');
       $(this).addClass('on');
     },
     focusin: function(){   //탭키 접근성(필수 입력)
       $('.sub').stop().fadeOut(0);
       $(this).next().stop().fadeIn(300);
   
       $('.main-btn').removeClass('on');
       $(this).addClass('on');
     }
 });


 $('#nav').on({
   mouseleave:function(){
     $('.sub').stop().fadeOut(300);
     $('.main-btn').removeClass('on');
   }
 });



 //메인슬라이드 (페이드인아웃)

 let cnt=0;
function mainSlide(){
  $('.slide').css({zIndex:1}).animate({opacity:1},0);
  $('.slide').eq(cnt).css({zIndex:2});
  $('.slide').eq(cnt===0?2:cnt-1).css({zIndex:3}).animate({opacity:0},600);
}

function nextCount(){
 cnt++;
 cnt>2?cnt=0:cnt;
 mainSlide();
}

function autoTimer(){
  setInterval(nextCount, 3000);
}
autoTimer();

 //공지사항 & 갤러리 탭메뉴 클릭 이벤트
 // 갤러리버튼 클릭
 $('.gallery-btn').on({
     click: function(){
       $('.notice-btn').addClass('on');
       $('.gallery-btn').addClass('on');
       $('.notice-box').addClass('on');
       $('.gallery-box').addClass('on');
     }
 });

 // 공지사항버튼 클릭
 $('.notice-btn').on({
     click: function(){
       $('.notice-btn').removeClass('on');
       $('.gallery-btn').removeClass('on');
       $('.notice-box').removeClass('on');
       $('.gallery-box').removeClass('on');
     }
 });


 // 레이어팝업창 
 $('.link-btn').on({
     click: function(){
       $('#modal').stop().fadeIn(300);
     }
 });


 // 닫기
 $('.close-btn').on({
     click: function(){
       $('#modal').stop().fadeOut(300);
     }
 });




})(jQuery);