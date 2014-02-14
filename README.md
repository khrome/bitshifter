bitshifter.js
===============

Yay, bitsquatting!

To set up a shifter for doing URL safe shifts:

    var seen = [];
    var shifter = new BitShifter({
        filter : function(str){
            if(seen.indexOf(str.toLowerCase()) != -1) return;
            seen.push(str.toLowerCase());
            return str.match(/^[0-9a-z.]+$/);
        }
    });

To get an array of urls for 'www.mydomain.com':

    var results = shifter.shift('www.mydomain').map(function(str){return str+'.com'});
    
which results in:

    [
        'www.mydomain.com',
        'gww.mydomain.com',
        '7ww.mydomain.com',
        'wgw.mydomain.com',
        'w7w.mydomain.com',
        'wwg.mydomain.com',
        'ww7.mydomain.com',
        'wwwnmydomain.com',
        'www.oydomain.com',
        'www.midomain.com',
        'www.m9domain.com',
        'www.myeomain.com',
        'www.myfomain.com',
        'www.mylomain.com',
        'www.mytomain.com',
        'www.mydooain.com',
        'www.mydomcin.com',
        'www.mydomein.com',
        'www.mydomiin.com',
        'www.mydomqin.com',
        'www.mydomakn.com',
        'www.mydomamn.com',
        'www.mydomayn.com',
        'www.mydomaio.com' 
    ]

Testing
-------
just run
    
    mocha

Enjoy,

-Abbey Hawk Sparrow