for (var i = 0; i < document.getElementsByName('button').length; i++) {
  document.getElementsByName('button')[i].addEventListener('click', response);
}

function response(dummy) {
  var dummy = this.id;
  switch (dummy) {
    case 'b1':
      document.querySelector('.img1').setAttribute('src', 'happy.png');
      document.querySelector('p').innerHTML='Happy day is the best day !! </br> Have a great day and enjoy your happiness with your friends and family.</br> Always try to be happy no matter what the situation is.';
      //</br> tag works in js code
      break;
    case 'b2':
      document.querySelector('.img1').setAttribute('src', 'sad.png');
      document.querySelector('p').innerHTML='Sorry to hear !! </br>I understand you are having a bad day but it is temporary.</br>Try to distract yourself by doing something fun.';
      break;
    case 'b3':
      document.querySelector('.img1').setAttribute('src', 'thinking.png');
      document.querySelector('p').innerHTML='Hey chill dude !! </br> Anger is not the solution to anything.</br>The things you do when angry can hurt others.';
      break;
    case 'b4':
      document.querySelector('.img1').setAttribute('src', 'cool.png');
      document.querySelector('p').innerHTML='Don\'t\ worry !! </br> Some people are bad in expressing their feeling.</br> Let\'s\ give him/her another chance.';
      break;
    case 'b5':
      document.querySelector('.img1').setAttribute('src', 'party.png');
      document.querySelector('p').innerHTML='It\'s\ ok to get bored !! </br> Find your passion whether it\'s\ Music, Art or Science.</br> Then follow it.';
      break;
    case 'b6':
      document.querySelector('.img1').setAttribute('src', 'love.png');
      document.querySelector('p').innerHTML='Congrats !! </br> Falling in love is the best experience in the entire world.</br> Enjoy every moment of it because it is priceless.';
      break;
    case 'b7':
      document.querySelector('.img1').setAttribute('src', 'laugh.png');
      document.querySelector('p').innerHTML='Ghosts are not REAL !! </br> Fear is a part of human body.</br> Fear keeps us alive from various dangers.';
      break;
    case 'b8':
      document.querySelector('.img1').setAttribute('src', 'party.png');
      document.querySelector('p').innerHTML='Don\'t\ be shy !! </br> Try to change your fear by challenging yourself.</br> Only you have the power to change yourself.';
      break;
    case 'b9':
      document.querySelector('.img1').setAttribute('src', 'smile.png');
      document.querySelector('p').innerHTML='Well done !! </br> Being kind is a good characteristic.</br> But kind people are exploited by others, so be careful.';
      break;
    case 'b10':
      document.querySelector('.img1').setAttribute('src', 'silly.png');
      document.querySelector('p').innerHTML='Be silly always !! </br> Life is too short to be serious all the time.</br> Enjoy every moment of it. ';
      break;

    default:
      alert('This is default');

  }
}

