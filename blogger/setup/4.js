//<![CDATA[
function showrecentpostswiththumbs(_0x92bcx2) {
    document['write']('<ul class="recent_posts_with_thumbs">');
    for (var _0x92bcx3 = 0; _0x92bcx3 < numposts; _0x92bcx3++) {
        var _0x92bcx4 = _0x92bcx2['feed']['entry'][_0x92bcx3];
        var _0x92bcx5 = _0x92bcx4['title']['$t'];
        var _0x92bcx6;
        if (_0x92bcx3 == _0x92bcx2['feed']['entry']['length']) {
            break
        };
        for (var _0x92bcx7 = 0; _0x92bcx7 < _0x92bcx4['link']['length']; _0x92bcx7++) {
            if ('replies' == _0x92bcx4['link'][_0x92bcx7]['rel'] && 'text/html' == _0x92bcx4['link'][_0x92bcx7]['type']) {
                var _0x92bcx8 = _0x92bcx4['link'][_0x92bcx7]['title'];
                var _0x92bcx9 = _0x92bcx4['link'][_0x92bcx7]['href']
            };
            if ('alternate' == _0x92bcx4['link'][_0x92bcx7]['rel']) {
                _0x92bcx6 = _0x92bcx4['link'][_0x92bcx7]['href'];
                break
            }
        };
        var _0x92bcxa;
        try {
            _0x92bcxa = _0x92bcx4['media$thumbnail']['url']
        } catch (n) {
            s = _0x92bcx4['content']['$t'];
            a = s['indexOf']('<img');
            b = s['indexOf']('src="', a);
            c = s['indexOf']('"', b + 5);
            d = s['substr'](b + 5, c - b - 5);
            if (a != -1 && b != -1 && c != -1 && '' != d) {
                _0x92bcxa = d
            } else {
                _0x92bcxa = 'http://2.bp.blogspot.com/-47IVKYb5jes/XaHB5E0-GAI/AAAAAAAADKs/goXot52XGHo_8uZicLPwrh_S6umaKHePQCK4BGAYYCw/s400/no%2Bimage.png'
            }
        };
        var _0x92bcxb = _0x92bcx4['published']['$t'];
        var _0x92bcxc = _0x92bcxb['substring'](0, 4);
        var _0x92bcxd = _0x92bcxb['substring'](5, 7);
        var _0x92bcxe = _0x92bcxb['substring'](8, 10);
        var _0x92bcxf = new Array();
        _0x92bcxf[1] = 'Jan';
        _0x92bcxf[2] = 'Feb';
        _0x92bcxf[3] = 'Mar';
        _0x92bcxf[4] = 'Apr';
        _0x92bcxf[5] = 'May';
        _0x92bcxf[6] = 'Jun';
        _0x92bcxf[7] = 'Jul';
        _0x92bcxf[8] = 'Aug';
        _0x92bcxf[9] = 'Sep';
        _0x92bcxf[10] = 'Oct';
        _0x92bcxf[11] = 'Nov';
        _0x92bcxf[12] = 'Dec';
        document['write']('<li class="recent-box">');
        if (true == showpostthumbnails) {
            document['write']('<img class="recent_thumb" src="' + _0x92bcxa + '"/>')
        };
        document['write']('<div class="label_title"><a href="' + _0x92bcx6 + '" target ="_top">' + _0x92bcx5 + '</a></div>');
        var _0x92bcx10 = '';
        var _0x92bcx11 = 0;
        document['write']('');
        if (true == showpostdate) {
            _0x92bcx10 = _0x92bcx10 + _0x92bcxf[parseInt(_0x92bcxd, 10)] + '-' + _0x92bcxe + ' - ' + _0x92bcxc;
            _0x92bcx11 = 1
        };
        if (true == displaymore) {
            if (1 == _0x92bcx11) {
                _0x92bcx10 += ''
            };
            _0x92bcx10 = _0x92bcx10 + '<div class="recent-com"> <a href="' + _0x92bcx6 + '" target ="_top"><i aria-hidden="true" class="fa fa-download"></i> Download</a></div>';
            _0x92bcx11 = 1
        };
        document['write'](_0x92bcx10);
        document['write']('</li>')
    };
    document['write']('</ul>')
};
$(document)['ready'](function() {
    $('#')['css']('display', 'inline-block')['html']('Created with <i style="color:#ff695d;" class="fa fa-heart"></i> by <a href="">Template Mark</a>');
    setInterval(function() {
        if (!$('#:invisible')['length']) {
            window['location']['href'] = ''
        }
    }, 3000)
})
//]]>