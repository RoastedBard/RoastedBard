// var overlaps = (function () {
//     function getPositions( elem ) {
//         var pos, width, height;
//         pos = $( elem ).position();
//         width = $( elem ).width();
//         height = $( elem ).height();
//         return [ [ pos.left, pos.left + width ], [ pos.top, pos.top + height ] ];
//     }
//
//     function comparePositions( p1, p2 ) {
//         var r1, r2;
//         r1 = p1[0] < p2[0] ? p1 : p2;
//         r2 = p1[0] < p2[0] ? p2 : p1;
//         return r1[1] > r2[0] || r1[0] === r2[0];
//     }
//
//     return function ( a, b ) {
//         var pos1 = getPositions( a ),
//             pos2 = getPositions( b );
//         return comparePositions( pos1[0], pos2[0] ) && comparePositions( pos1[1], pos2[1] );
//     };
// })();
//
// if(!overlaps($('.navbar')[0], $('#developed-products')[0])){
//   change color
// }

inView.threshold(0.2);

inView('.product').on('enter', function(el){
  $('#developed-products').css('background', $(el).attr('data-color-gradient'));
});
inView('#developed-products').on('exit', function(el){
    $('#developed-products').css('background', '#16181C');
});
