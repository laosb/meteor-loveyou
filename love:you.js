LoveYou = {};

LoveYou.lang = 'en';
/*
Languages:
en
zh_cn
*/

LoveYou.strings = {
    en: {
        'I_LOVE_YOU_HONEY': 'I love you, honey.',
        'I_LOVE_YOU__PRE': 'I love you ',
        'I_LOVE_YOU__END': '. ',
        'SPECIALLY_BUILT_FOR_YOU': 'This app is specially built for you. ',
        'LOVE_LASTS_FOREVER': 'Love lasts forever.'
    },
    zh_cn: {
        'I_LOVE_YOU_HONEY': '宝贝我爱你。',
        'I_LOVE_YOU__PRE': '我爱你，',
        'I_LOVE_YOU__END': '。',
        'SPECIALLY_BUILT_FOR_YOU': '为你私人定制的。',
        'LOVE_LASTS_FOREVER': '爱无尽。'
    }
}

LoveYou.writeConsole = function() {
    console.log(LoveYou.strings[LoveYou.lang].I_LOVE_YOU_HONEY);
}

Template.registerHelper('love', function(person) {
    return LoveYou.strings[LoveYou.lang].I_LOVE_YOU__PRE + person + LoveYou.strings[LoveYou.lang].I_LOVE_YOU__END + LoveYou.strings[LoveYou.lang].SPECIALLY_BUILT_FOR_YOU + LoveYou.strings[LoveYou.lang].LOVE_LASTS_FOREVER;
});

Meteor.startup(function() {
    LoveYou.writeConsole();
});
