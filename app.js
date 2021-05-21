const quiz = [
{
question: '呪術廻戦　五条先生のお誕生日は？',
  answers: [
  '1978年12月7日',
  '1988年12月7日',
  '1979年12月7日',
  '1989年12月7日'
],
correct: '1989年12月7日'
},{
question: '五条先生の身長は？',
answers: [
  '190cm',
  '192cm',
  '194cm',
  '195cm'
],
correct: '190cm'
},{
question: 'アニメ呪術廻戦　五条先生の御出演シーン　一番の見所は何話？',
answers: [
 '第１話　両面宿儺',
 '第７話　急襲',
 '第２０話　規格外',
 '星のカービィ'
 ],
correct: '第２０話　規格外'
}
];


const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

 const $button = document.getElementsByTagName('button');
 const buttonLength = $button.length;

//クイズの問題文、選択技を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
   buttonIndex++;
 }
}
setupQuiz();

const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent) {
     window.alert('正解！');
     score++;
     }else{
     window.alert('不正解！');
  }

quizIndex++;

if (quizIndex < quizLength) {
//問題数がまだであればこちらを実行
setupQuiz();
}else{
  //問題数がなければこちらを実行
  window.alert('終了です！お疲れ様でした( ^ω^ )あなたの正解数は ' + score + '/' + quizLength + 'ですっ！');

}

};

//ボタンをクリックしたら正解判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
$button[handlerIndex].addEventListener('click',(e) => {
 clickHandler(e);
});
handlerIndex++;
}

























