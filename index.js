const TelegramApi = require('node-telegram-bot-api')
const token = "5500593153:AAEGLoVIcspIDFgP-Mwws_8PxkSTxbC_q2o"

const bot = new TelegramApi(token, {polling:true});

bot.on ('message', async msg => {
    const data = [
        { id: 'Нельзя заставить людей любить тебя. Нужно просто подождать, пока им надоест тебя ненавидеть.'},
        { id: 'Жить — значит рисковать всем. В противном случае ты просто вялая кучка беспорядочно собранных молекул, плывущих по течению Вселенной.'},
        { id: 'Вселенная настолько велика, что ничего на свете не имеет значения!'},
        { id: 'Своими мозгами думайте, не будьте тупым стадом.'},
        { id: 'Никто не существует по определенной причине, никто ни к чему не привязан, все однажды умрут, пойдем посмотрим телек.'},
        { id: 'Послушай, я не самый хороший человек во вселенной. Потому что я умный. А хорошими становятся только глупые люди, чтобы подстраховаться.'},
        { id: 'Теперь надо делать всё с полной уверенностью. Я уверен, что нам полный пиздец!'},
        { id: 'Слушай, тут нечем гордиться, но правда в том, что я продолжал ползти и выжил.'},
        { id: 'Я не обсуждаю проблемы, я их испепеляю.'},
        { id: 'Нет более подходящего момента для выпивки и зловещей расчётливой речи, от которой душа уйдёт в пятки. Речи о политике... О порядке... Братстве... Власти. Но речи — удел агитаторов. Настало время для тех, кто действует...'},
        { id: 'разберись со своим дерьмом! Собери его и положи в рюкзак! Всё дерьмо — собери его в кучу! И если тебе всё это надо куда-то деть, то отнеси его в дерьмомагазин и продай, или отнеси в Музей дерьма! Мне плевать, что ты с ним сделаешь! Просто разберись с ним! Разберись со своим дерьмом!'},
        { id: 'Тот, кто владеет штанами — владеет миром.'},

    ];

    const stickers = [
        {id: 'https://tlgrm.ru/_/stickers/f7e/fba/f7efbacf-9817-4b7e-8e07-dac0cf0430d1/192/14.webp'},
        {id: 'https://tlgrm.ru/_/stickers/5ce/070/5ce07001-7d1e-4531-86d6-e2a3cea9d827/11.webp'},
        {id: 'https://tlgrm.ru/_/stickers/5ce/070/5ce07001-7d1e-4531-86d6-e2a3cea9d827/8.webp'},
        {id: 'https://tlgrm.ru/_/stickers/5ce/070/5ce07001-7d1e-4531-86d6-e2a3cea9d827/3.webp'},
        {id: 'https://tlgrm.ru/_/stickers/5ce/070/5ce07001-7d1e-4531-86d6-e2a3cea9d827/5.webp'},
        {id: 'https://tlgrm.ru/_/stickers/5ce/070/5ce07001-7d1e-4531-86d6-e2a3cea9d827/1.webp'},
        {id: 'https://tlgrm.ru/_/stickers/5ce/070/5ce07001-7d1e-4531-86d6-e2a3cea9d827/12.webp'},
        {id: 'https://tlgrm.ru/_/stickers/f97/508/f975088d-f6d2-3b71-81ff-bc927c550347/3.webp'},
        {id: 'https://tlgrm.ru/_/stickers/7d9/571/7d957182-21c9-48ff-a3b9-0b2cd2d8feef/3.webp'},
        {id: 'https://tlgrm.ru/_/stickers/b0a/6d7/b0a6d71e-f839-39e4-89f4-583d65e5fcbc/9.webp'},
        {id: 'https://tlgrm.ru/_/stickers/b0a/6d7/b0a6d71e-f839-39e4-89f4-583d65e5fcbc/6.webp'},
        {id: 'https://tlgrm.ru/_/stickers/b0a/6d7/b0a6d71e-f839-39e4-89f4-583d65e5fcbc/3.webp'},
    ];
    const randomSticker = stickers[Math.floor(Math.random() * stickers.length)];
    const randomData = data[Math.floor(Math.random() * data.length)];
    const firstName = msg.chat.first_name;
    const answer = randomData.id;
    const answerSticker = randomSticker.id;

    if (text === '/start') {

        await bot.sendSticker(chatId, 'https://tlgrm.ru/_/stickers/45e/9c9/45e9c9bd-3937-36cc-8113-ed995cb95342/2.webp');
        return bot.sendMessage(chatId, ` Ооо...Блять...Опять ты? Ну давай, ${firstName}, пиши свой зап...ргхр...рос, на который тебе так срооочно понадобился ответ.`)
    }
        await bot.sendSticker(chatId, `${answerSticker}`);
        return bot.sendMessage(chatId, `${answer}`)

})
