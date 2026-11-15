'use strict';
// Zmiana pytań i odpowiedzi: edytuj tablicę QUESTIONS poniżej.
// correct to indeks poprawnej odpowiedzi: 0 = A, 1 = B, 2 = C.
const QUESTIONS = [
  {emoji:'⏰',question:'Jaki jest mój największy BOSS FIGHT?',options:['Wstawanie rano z łóżka','Robienie makijażu','Powstrzymanie się przed kupieniem czegoś nowego'],correct:0},
  {emoji:'👀',question:'Jaki mam kolor oczu?',options:['Zielony','Niebieski','Zielono-niebieski'],correct:1},
  {emoji:'📅',question:'Kiedy mam imieniny?',options:['21 września','14 czerwca','10 lutego'],correct:1},
  {emoji:'🧸',question:'Ilu mam chrześniaków?',options:['1','2','3'],correct:2},
  {emoji:'🎨',question:'Jaki jest mój ulubiony kolor?',options:['Lawendowy','Różowy','Liliowy'],correct:1},
  {emoji:'📺',question:'Jaki serial mogę oglądać nieograniczoną ilość razy?',options:['The Office','Friends','Off Campus'],correct:1},
  {emoji:'🍕',question:'Które z podanych dań jest moim ulubionym?',options:['Pad thai','Pizza na cienkim cieście','Chilli con carne'],correct:1},
  {emoji:'💌',question:'Jak brzmi moje drugie imię?',options:['Katarzyna','Natalia','Magdalena'],correct:2}
];

let questionIndex=0;
let selection=null;
let responses=[];
const $=id=>document.getElementById(id);
const screens=['start-screen','question-screen','result-screen'];
const screen=id=>screens.forEach(name=>$(name).classList.toggle('hidden',name!==id));

function startQuiz(){
  questionIndex=0; selection=null; responses=[];
  $('reward-reveal').classList.add('hidden');
  $('reward-btn').hidden=false;
  $('answers-list').classList.add('hidden');
  $('answers-btn').setAttribute('aria-expanded','false');
  $('answers-btn').textContent='Zobacz poprawne odpowiedzi ▾';
  screen('question-screen');renderQuestion();
}
function renderQuestion(){
  selection=null;
  const q=QUESTIONS[questionIndex];
  $('question-count').textContent=`LEVEL ${questionIndex+1} / ${QUESTIONS.length}`;
  $('score-mini').textContent=`⭐ ${responses.filter((a,i)=>a===QUESTIONS[i].correct).length * 100} XP`;
  $('progress-fill').style.width=`${questionIndex/QUESTIONS.length*100}%`;
  $('progress').setAttribute('aria-valuenow',String(questionIndex));
  $('question-emoji').textContent=q.emoji;
  $('question-title').textContent=q.question;
  $('next-btn').disabled=true;
  $('next-btn').textContent=questionIndex===QUESTIONS.length-1?'ZOBACZ WYNIK →':'DALEJ →';
  const opts=$('options');opts.replaceChildren();
  q.options.forEach((answer,i)=>{
    const button=document.createElement('button');button.type='button';button.className='option';
    button.setAttribute('aria-pressed','false');
    const letter=document.createElement('span');letter.className='option-letter';letter.textContent='ABC'[i];
    const content=document.createElement('span');content.textContent=answer;
    button.append(letter,content);
    button.addEventListener('click',()=>{
      selection=i;opts.querySelectorAll('.option').forEach((el,j)=>{el.classList.toggle('selected',i===j);el.setAttribute('aria-pressed',String(i===j))});
      $('next-btn').disabled=false;
    });
    opts.append(button);
  });
}
function next(){
  if(selection===null)return;
  responses.push(selection);questionIndex++;
  if(questionIndex===QUESTIONS.length){showResults();return}
  renderQuestion();
}
function showResults(){
  const score=responses.filter((a,i)=>a===QUESTIONS[i].correct).length;
  const result=score<=3?{
    icon:'💀',heading:'QUEST FAILED!',rank:'NOOB FIANCÉ',message:'Czy my się w ogóle znamy?! Według regulaminu nagroda Ci nie przysługuje, ale administratorka gry postanowiła okazać Ci świąteczną łaskę.',status:'🎁 BONUS REWARD UNLOCKED!'
  }:score<=6?{
    icon:'⚔️',heading:'QUEST COMPLETED... ALMOST!',rank:'PRO FIANCÉ',message:'Całkiem nieźle, ale do legendarnego poziomu jeszcze trochę brakuje! Na szczęście Twoja narzeczona ma dziś wyjątkowo dobry humor i przyznała Ci dodatkowy loot.',status:'🎁 BONUS REWARD UNLOCKED!'
  }:{
    icon:'👑',heading:'PERFECT MATCH!',rank:'LEGENDARY FIANCÉ',message:'Gratulacje! Udowodniłeś, że doskonale znasz swoją narzeczoną! Twoja wiedza osiągnęła legendarny poziom. Nagroda w pełni zasłużona!',status:'🎁 LEGENDARY REWARD UNLOCKED!'
  };
  $('progress-fill').style.width='100%';$('progress').setAttribute('aria-valuenow',String(QUESTIONS.length));
  $('result-icon').textContent=result.icon;$('result-heading').textContent=result.heading;
  $('result-rank').textContent=result.rank;$('result-score').textContent=`${score}/${QUESTIONS.length}`;
  $('result-message').textContent=result.message;$('reward-status').textContent=result.status;
  const review=$('answers-list');review.replaceChildren();
  QUESTIONS.forEach((q,i)=>{
    const entry=document.createElement('div');entry.className='answer-item';
    const title=document.createElement('strong');title.textContent=`${i+1}. ${q.question}`;
    const answer=document.createElement('span');answer.className=responses[i]===q.correct?'right':'wrong';
    answer.textContent=responses[i]===q.correct?`✓ ${q.options[q.correct]}`:`✗ Twoja odpowiedź: ${q.options[responses[i]]} · Poprawna: ${q.options[q.correct]}`;
    entry.append(title,answer);review.append(entry);
  });
  screen('result-screen');
}
$('start-btn').addEventListener('click',startQuiz);
$('next-btn').addEventListener('click',next);
$('restart-btn').addEventListener('click',startQuiz);
$('reward-btn').addEventListener('click',()=>{
  $('reward-reveal').classList.remove('hidden');$('reward-btn').hidden=true;
  $('reward-reveal').focus({preventScroll:true});$('reward-reveal').scrollIntoView({behavior:'smooth',block:'nearest'});
});
$('answers-btn').addEventListener('click',()=>{
  const shown=$('answers-list').classList.toggle('hidden')===false;
  $('answers-btn').setAttribute('aria-expanded',String(shown));
  $('answers-btn').textContent=shown?'Ukryj poprawne odpowiedzi ▴':'Zobacz poprawne odpowiedzi ▾';
});
