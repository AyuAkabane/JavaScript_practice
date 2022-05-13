const number = Math.floor(Math.random() * 6);
    const answer = parseInt(window.prompt('数当てゲーム。0~5の数字を入力してね。')); //プロンプトに入力した値を整数値に直す。
    let message;
    if (answer === number){
        message = 'あたり！';
    } else if (answer< number){
        message = '残念！もっと大きい！';
    } else if (answer > number){
        message = '残念！ もっと小さい！';
    } else {
        message = '0~5の数字を入力してください';
    }
    window.alert(message);
