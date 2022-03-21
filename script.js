

let timer;

document.addEventListener('input', e => {
  const el = e.target;
  
  if( el.matches('[data-color]') ) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      document.documentElement.style.setProperty(`--color-${el.dataset.color}`, el.value);
    }, 100)
  }
})

const nameInput = document.getElementById("name");
const button = document.getElementById("myButton");

  function changeText(){

    switch(nameInput.value) {
        case "남궁도위":
          document.getElementById("resultHeader").innerHTML = "남궁도위를 선택했다!";
          document.getElementById("resultText").innerHTML = "<div>&ldquo;청명은 가장 가까이에 있던 남궁도위에게 일단 말을 꺼내보았다.</div><div>&ldquo;야, 니가 나좀 도와주면 안돼? 남색가인 척좀 같이 해줘라.&rdquo;</div><div>“에엑? 왜 저를 보십니까? 안그래도 성기능에 문제 있다는 소문이 있는데, 남색가라는 소문이 돈다면 전 정말 평생 결혼을 못 할 겁니다!”         <br> 남궁도위는 질색하며 거절했다.</div><div>&lsquo;그래, 쟤한테 예전 일로도 좀 미안하긴 했는데 여기에 또 이상한 소문을 안겨 주는건 좀 미안하지.&rsquo;</div>";
          document.getElementById("smallText").innerHTML = "(1) 실패: 청명은 거절당했다!";
          break; 
        case "홍대광":
          document.getElementById("resultHeader").innerHTML = "홍대광을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 마침 가까이에 있던 홍대광에게 일단 말을 꺼내보았다.</div> <div> &nbsp;</div> <div> &ldquo;저기, 홍대광 아저씨! 그러면 저랑 같이 단수인 척 해주시면 안 되나요?&rdquo;</div> <div> &nbsp;</div> <div> 홍대광은 자신을 가리켰다. &ldquo;응? 나랑?&rdquo;</div> <div> &ldquo;네.&rdquo;</div> <div> &ldquo;아니, 다 늙은 나랑 그런 소문이 나서 좋을 것도 없을 텐데. 대체 왜&hellip;&rdquo;</div> <div> &ldquo;어차피 일단 상황을 모면하기 위한 거니까요. 그래서, 안 해 주실 거에요?&rdquo;</div> <div> &ldquo;으&hellip; 나도 영 내키진 않긴 한데, 그래도 그동안 많이 신세진 것도 있으니&hellip;&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;오 좋아요! 그럼 바로 가죠!&rdquo;</div> <div> &nbsp;</div> <div> &mdash;</div> <div> 청명이 중대 발표가 있다고 불러 천우맹의 모두가 모여 있는 자리에 청명과 홍대광이 같이 들어 왔다.</div> <div> &ldquo;음, 무슨 일로 불렀나, 화산검협?&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;사실, 그동안 부끄러워서 말을 못 했는데, 홍대광 아저씨랑 저는 정인인 사이었어요!&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;뭐, 뭣이?&rdquo;</div> <div> &ldquo;말도 안돼&hellip;&rdquo;</div> <div> &ldquo;세상에&hellip;&rdquo;</div> <div> &ldquo;아니, 청명아, 네가 뭐가 그리 모자라다고 그런 거지 아저씨랑 사귀는 거냐?&rdquo;</div> <div> &nbsp;</div> <div> 홍대광을 위아래로 아무리 훑어보아도 그저 풍채 좋고 인상 좋은 거지, 그 이상도 이하도 아니었다.</div> <div> 홍대솽은 그 말에 약간 발끈했다. &ldquo;거지라 미안하게 됐수다!&rdquo;</div> <div> &ldquo;뭐, 나는 사람의 외면보다는 내면을 중시하니까. 홍대광 아저씨의 사람 좋은 면에 반한거지.&rdquo;</div> <div> &ldquo;아무리 그래도 외면도 조금 봐라 청명아.&hellip;&rdquo;</div>"
          document.getElementById("smallText").innerHTML = "(2)성공! 홍대광은 마음에 상처를 입긴 했어도 일단 다들 어느 정도 속은 듯 하다.";
          break;
        case "당패":
          document.getElementById("resultHeader").innerHTML = "당패를 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> &lsquo;조금 뭣 한 부탁이라서 아무에게 부탁은 못 하겠는데? 누구에게 말을&hellip; 그래! 그 놈이라면 거절은 못 하겠지.&rsquo;</div> <div> 청명은 천우맹의 젊은 무인들 중 만만한 당패에게 가서 부탁했다.</div> <div> &nbsp;</div> <div> 청명은 다짜고짜 당패가 있는 곳에 쳐들어가서 사정을 설명했다.</div> <div> &ldquo;알겠냐? 너 그때 나한테 빚진 것도 있고 하니, 이번에 협조 한번 좀 해줘라.&rdquo;</div> <div> &ldquo;예, 어쩔 수 없죠. 대신 이 일로 더 이상의 빚진 일은 없는 겁니다!&rdquo; 당패는 어쩔 수 없이 청명의 부탁을 들어주기로 했다.</div> <div> &ldquo;알았다! 이젠 그 일 기억에서 완전 지웠어!&rdquo;</div> <div> &nbsp;</div> <div> 청명은 천우맹 무인들을 또 다른 중대 발표가 있다며 한 곳에 모았다.</div> <div> &ldquo;자, 자 모두 모였냐? 사실, 내가 혼인을 못하는 이유가 있는데, 그건 사실 애인이 따로 있어서다. 바로 이 녀석!&rdquo;</div> <div> 청명은 옆에 선 당패를 데리고 와 어깨동무를 했다.</div> <div> &ldquo;저 녀석이 내 배에 칼을 꽂았을 때 나도 저 녀석에게 꽂혔다!&rdquo;</div> <div> &ldquo;아니, 청명도&hellip;아니 청명아, 이젠 그 일 다 잊었다면서 왜 자꾸 그 얘기를 꺼내는 겁니까?&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;청명이 저 녀석, 단수인건 둘째치고, 취향이 좀 이상한데요? 자기 배때지에 칼빵을 놓은 녀석을 사랑한다고 하다니.&rdquo;</div> <div> &ldquo;약간 그런 이상한 취향을 가진 사람들 있지 않습니까? 그런데 청명이 그 쪽일 줄이야&hellip;&rdquo;</div> <div> &ldquo;아니, 당패야. 다른 사람도 아닌 네가&hellip;&rdquo; 당군악이 망연자실하듯 말했다.</div> <div> &ldquo;당패 오라버니는 대체 우리 사형이랑 언제 정분을 통한 거에요?&rdquo;</div> <div> &ldquo;응? 아 그, 화산에서 수련하면서 틈틈히 마음을 키워 왔지. 그러다가 이번에 혼인한다는 소식이 들리길래 마음을 고백했어.&rdquo;</div> <div> &ldquo;어쩔수 없지, 청명이 저 자식을 잘 부탁한다, 당패야.&rdquo; 백천이 당패의 어깨를 두드렸다.</div> <div> &lsquo;어색한 연긴데 이게 의외로 통하네?&rsquo; 청명은 생각했다.</div> ";
          document.getElementById("smallText").innerHTML = "(3) 성공!: 어색하지만 의외로 먹혀들어갔다!";          
          break;
        case "임소병":
          document.getElementById("resultHeader").innerHTML = "임소병을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 엉망이 된 머리채와 흠씬 두들겨 맞은 몸을 겨우 추스리고 있는 임소병에게 말을 걸었다.</div> <div> &ldquo;음&hellip; 도위 놈은 싫다고 하고, 다른 정파 도련님들에게 부탁 하기도 미안하단 말이지. 어이, 사파 놈? 같이 연기좀 해 주지?&rdquo;</div> <div> &ldquo;그래, 다른 정파 도련님들 창창한 혼삿길은 막아도 되면서 저 같은 사파 나부랭이 혼삿길은 아무 안중에도 없단 말입니까? 너무해!</div> <div> &ldquo;그래서, 안 하려고?&rdquo;</div> <div> &ldquo;예, 만만한 제가 굴러야죠, 뭐. 제 평판따위 쓰고 버린 헌신짝과도 같은 것 아니겠습니까?</div> <div> 그만좀 징징대라. 자 그럼 빨리 따라 나와. 말 좀 맞춰 보자.&rdquo;</div> <div> &ldquo;예, 예.</div> <div> -주변의 반응</div> <div> 청명은 천우맹 무인들을 또 다른 중대 발표가 있다며 한 곳에 모았다.</div> <div> &nbsp;</div> <div> &ldquo;음, 무슨 일로 불렀나, 화산검협?&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;사실, 내가 혼인을 못하는 이유가 있는데, 그건 사실 애인이 따로 있어서다. 바로 이 녀석이지!&rdquo;&nbsp;</div> <div> 청명은 어느새 다시 머리를 정돈하고 망가진 의복을 정돈해 다시 멀끔해 진 임소병을 데리고 왔다.&rdquo;</div> <div> &ldquo;에엑?&rdquo;</div> <div> &ldquo;청명이 네가? 녹림왕이랑?&rdquo;</div> <div> &ldquo;아니, 아까는 그렇게 결혼을 축하하던다니, 왜 지금은 또 사귄다는 겁니까?&rdquo;</div> <div> &ldquo;훗, 당연히 청명이가 저 몰래 혼인을 한 다니 순간 질투심이 한 마음에도 없는 말이었던 것이지요.&rdquo; 임소병은 능숙히 둘러댔다.</div> <div> &ldquo;으, 참 안 어울리는 한 쌍이구만.&rdquo;</div> <div> &ldquo;무슨 소릴? 저희는 사실 아주 뜨거운 사이입니다만? 한 떨기의 매화꽃 같은 우리 청명이. 후훗, 귀여워.&rdquo;</div> <div> 임소병은 청명의 손을 잡아 그의 품으로 끌어당겼다.</div> <div> &nbsp;</div> <div> &ldquo;뭐, 뭐래. 이 놈이!&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;후훗, 부끄러워 하는게 더 귀엽다니까 내 매화는.&rdquo;</div> <div> &ldquo;윽, 징그러. 온 몸에 닭살 돋겠다.&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;청명이 녀석. 평소에 그렇게 사파놈 사파놈 하며 구박하더니, 사실은 좋아하는 걸 숨기려고 한 소리였던 거였구만.&rdquo;</div> <div> 임소병은 연인들이 밀어를 속삭이듯이 청명에 귓가에 대고 속삭였다.</div> <div> &lsquo;저기, 너무 가짜인 게 티나잖습니까? 연기 좀 잘 하시죠?&rsquo;</div> <div> &lsquo;너는 굳이 그런 지랄을 떨어야 하냐? 아까 먹은게 올라오게 생겼잖아!&rsquo;</div>";
          document.getElementById("smallText").innerHTML = "(4) 성공!: 훌륭하게 모두를 속아넘겼다!";          
          break;
        case "설소백":
        case "소백":
          document.getElementById("resultHeader").innerHTML = "설소백을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 젊은 무인들 중, 자신의 말을 가장 잘 따르는 설소백에게 부탁하기로 했다.</div> <div> 끄으음&hellip; 저 꼬맹이의 혼삿길을 막는 것 같아서 죄책감이 들긴 하는데, 그래도 일단 나 먼저 살고 보자!</div> <div> &ldquo;소백아, 나 좀 도와줄 수 있니? 난 결혼하기 싫어!&rdquo;</div> <div> &ldquo;알겠습니다! 청명 도장!&rdquo;</div> <div> &nbsp;</div> <div> 청명이 또 다른 중대 발표가 있다고 부른 차,&nbsp; 천우맹의 모두가 모여 청명의 중매 소식에 대해 수군거리고 있는 와중에 갑자기 설소백이 목소리를 높였다.</div> <div> &ldquo;잠깐! 청명 도장이 중매라니, 그럴 순 없습니다!&rdquo;</div> <div> &ldquo;설 궁주님, 갑자기 왜?..&rdquo;</div> <div> &ldquo;청명 도장님과 저는 이미 서로 미래를 약속한 사이입니다. 그런데 저를 두고 청명 도장이 중매라니요.&rdquo;</div> <div> 천우맹의 모두는 청명을 바라보았다.</div> <div> &ldquo;그&hellip; 그래! 우린 그런 사이다!&rdquo;</div> <div> &ldquo;예?&rdquo;</div> <div> &ldquo;아무리 그래도, 나이 차가&hellip; 좀 심한 거 아닙니까?.&rdquo;</div> <div> &ldquo;저런 이팔 청춘의 궁주님이랑, 저런 겉만 젊지, 내용물은 다 늙어빠진 청명이랑이라니...&rdquo;</div> <div> &ldquo;아뇨! 이제 저도 곧 있으면 약관입니다. 제가 나이가 되면 청명 도장이랑 혼인하기로 약조했단 말입니다!&rdquo;</div> <div> &ldquo;안됩니다! 궁주님! 이제 설가의 핏줄은 궁주님 뿐인데, 단수가 되시면&hellip;흐어엉&hellip;&rdquo; 한이명은 절규하듯 말했다.</div> <div> &ldquo;아&hellip; 그, 그게&hellip;&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(5) 실패! 청명은 죄책감이 들었다!";          
          break;
        case "유이설":
        case "이설":
          document.getElementById("resultHeader").innerHTML = "유이설을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 다른 오검들 몰래 유이설을 불러 말을 건넸다.</div> <div> &ldquo;사고, 나 좀 도와줘라. 만약 내가 결혼하고 가정이 생겨서 더 바빠지면 앞으로 사고의 검을 봐 줄 시간도 훨씬 적어질 거라고.&rdquo;</div> <div> &ldquo;알았어.&rdquo; 유이설은 잠시 생각해 보더니 승낙했다.&nbsp;</div> <div> 청명은 화산으로 돌아가더니 또 다른 중대 발표가 있다며 모두를 불러 모았다.</div> <div> &ldquo;모두에게 발표할 게 있는데요. 이설 사고랑 저는 사실 저희는 서로 은애햐는 사이에요.&rdquo;</div> <div> &ldquo;맞아. 사질은 내꺼야.&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;도대체 언제부터?&rdquo;</div> <div> &ldquo;그, 그러냐? 축하한다.&rdquo;</div> <div> &ldquo;어쩐지, 예전부터 청명이를 그렇게 따라다니더니, 내 감이 맞았어!&rdquo; 조걸은 혼자서 엉뚱하게 헛다리를 짚었다.</div> <div> &ldquo;그동안 유 사고의 검을 봐준게 아니라 둘만의 밀회였던것, 맞지&rdquo;</div> <div> &ldquo;어, 어떻게 알았어?&rdquo;</div> <div> &ldquo;역시!&rdquo;</div> <div> &ldquo;그런데 너희들 결혼은 안 할 거니? 화산에 다 준비가 되어 있는데&hellip;&rdquo; 현종은 물었다.</div> <div> &ldquo;결혼 안 해요. 검에 집중하는데 방해돼.&rdquo;</div> <div> &ldquo;예, 저희는 영원히 친구 같은 연인 사이로 있을거에요.&rdquo;&nbsp;</div> <div> &ldquo;그래 알았다. 너희들이 알아서 하겠지.&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(6) 성공! 무난하게 먹혀들어갔다!";          
          break;
        case "진동룡":
        case "백천":
          document.getElementById("resultHeader").innerHTML = "백천을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 다른 오검들 몰래 백천을 불러 말을 건넸다.</div> <div> &ldquo;사숙, 나는 결혼하기 싫어. 그러니까 장로님들이랑 장문인들이 날 결혼 시키는 걸 포기하게 나랑 정인인 척 해 줘.&rdquo;</div> <div> &ldquo;정인인 척?&rdquo;</div> <div> &ldquo;어.&rdquo;</div> <div> &ldquo;아, 아니. 너와 나는 사숙과 사질, 그리고 사조와 사손 사이인데 어떻게 그런 후안무치한 짓을&hellip;&rdquo;</div> <div> &ldquo;사숙, 왜 그렇게 진지해? 그냥 척일 뿐인데. 사숙은 그냥 얼굴에 철판 깔고 있으면 돼. 내가 알아서 할 게.&rdquo;</div> <div> &ldquo;음&hellip; 알았다.&rdquo;</div> <div> &nbsp;</div> <div> 청명은 화산으로 돌아가더니 중대 발표가 있다며 모두를 불러 모았다.</div> <div> 기다리고 있는 모두의 앞에서 청명은 백천과 다정한 연인인 척, 손을 잡고 나왔다</div> <div> &ldquo;사실 백천 사숙이랑 나는 은애하는 사이에요. 그치? 동룡아?&rdquo;</div> <div> &ldquo;어? 어, 그렇지. 우린 그런 사이지&hellip;&rdquo;</div> <div> &ldquo;청명이가 단수인 것도 놀라운데, 상대가 그 백천 사숙?&rdquo;</div> <div> &ldquo;저 얼굴이 개연성이지 뭐, 저 정도면 천하의 그 청명도 넘어갈 만 하지.&rdquo;</div> <div> &ldquo;아무리 그래도 다른 이도 아니고 그 백천 사숙이 청명과 몰래 사귀고 있었다니&hellip; 조금 충격이네요&rdquo;</div> <div> &ldquo;원래 얌전한 고양이가 부뚜막에 먼저 올라간다잖아요.&rdquo;</div> <div> &ldquo;큭큭. 이거 기사멸조 아냐?&rdquo;</div> <div> 백천은 그런 수군대는 말을 듣고 아무 말도 못 하고 얼굴이 홍당무가 되어 있었다.</div> <div> &ldquo;사숙, 왜 그렇게 뻣뻣하게 굳어 있어? 웃어, 웃어.&rdquo; 청명은 백천을 팔꿈치로 찔렀다.</div> <div> &ldquo;어? 어, 그래. 하하하&hellip;&rdquo;</div> <div> 그런 백천의 모습을 보고 현종은 나중에 백천을 조용히 그의 처소로 불렀다.</div> <div> &ldquo;백천아. 사실대로 말하거라. 대체 무슨 사정이 있는 것이냐?&rdquo;</div> <div> &lsquo;그..그게&hellip;&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(7) 실패! 아쉽지만 연기가 들통나고 말았다.";          
          break;
        case "윤종":
          document.getElementById("resultHeader").innerHTML = "윤종을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 다른 오검들 몰래 윤종을 불러 말을 건넸다.</div> <div> &ldquo;사형, 협조 좀 해줘요! 날 이렇게 팔려나가게 둘 거에요?&rdquo;</div> <div> &ldquo;어휴, 알았다. 청명아.&rdquo;</div> <div> &ldquo;그런데 그 연기는 어떻게 할 거니?&rdquo;</div> <div> &ldquo;어떻게 하냐뇨? 그냥 연인인 척 하면 되죠.&rdquo;</div> <div> &ldquo;일단 고백은 누가 한 걸로 할 거냐?&rdquo;</div> <div> &ldquo;흐음&hellip; 글쎄요. 그럼 제가 한걸로 하면 되죠 뭐.&rdquo;</div> <div> &ldquo;그럼 넌 나의 어떤 면이 가장 매력적이라고 생각하지? 그리고 반한 계기는?&rdquo;</div> <div> &ldquo;음&hellip; 글쎄. 그냥 윤종 사형의 성실한 면에? 나를 잘 챙겨 주니까?&rdquo;</div> <div> &ldquo;그럼 우리 둘은 평소에 뭘 하면서 시간을 보내지? 그러고 또&hellip;&rdquo;</div> <div> &ldquo;아니 그런 것까지 다 생각해 놓을 필요는 없잖아!&rdquo;</div> <div> &ldquo;아니다. 이런 게 있어야 아무래도 신빙성이 더한 법이지. 걱정 말고 나에게 맡겨라 청명아.&rdquo;</div> <div> &nbsp;</div> <div> 윤종은 화산으로 돌아가더니 중대 발표가 있다며 모두를 불러 모았다.</div> <div> &nbsp;</div> <div> &ldquo;흠, 흠 여러분. 사실 제가 그동안 숨기고 있던 것이 있습니다. 사실 청명이와 저는 서로 정인 사이입니다.&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;뭐?&rdquo;</div> <div> &ldquo;잠깐, 내 귀가 이상한데?&rsquo;</div> <div> &ldquo;아니, 윤종이 너, 그렇게 안 봤더니, 다른 사람도 아닌 그 청명이랑&hellip;&rdquo; 현종이 놀라 말했다.</div> <div> &ldquo;대사형, 혹시 협박당해서 사귀고 있다거나 하는 건 아니죠?&rdquo; 청자배 중 한 명이 물었다.</div> <div> &ldquo;지금 한 말 누구야?&rdquo; 청명이 소리질렀다.</div> <div> &ldquo;아닙니다. 저는 청명이의 누구보다 강하면서도 때로는 어리숙해서 챙겨 주고 싶은 그런 매력에 반해 청명이의 고백에 응한 것 뿐이고 그 어디에도 강압은 없었습니다. 물론, 이 관계가 세인들의 눈에 그리 바람직해 보이지 않을 수 있다는 사실은 잘 알고 있습니다, 그러므로 사형제간의 건전한 교제를 위해 앞으로 저희가 행할 일은&hellip;&nbsp;</div> <div> &nbsp;</div> <div> (중략)</div> <div> &nbsp;</div> <div> &hellip;그리하여, 제가 장문인이 되어도 공과 사는 구분하며 사귀도록 하겠습니다. 또한, 노후에 금분세수를 한다면 화음에서 작은 기왓집 하나를 구입하여 마당에 강아지 한 마리를 키우며 오순도순 살아가기로 이미 계획하고 있습니다.&ldquo;</div> <div> &nbsp;</div> <div> &ldquo;알았다. 알았으니까. 너희가 알아서 해라. 원.&rdquo; 현종도 이미 두손 두발을 다 들었다.</div> ";
          document.getElementById("smallText").innerHTML = "(8) 성공! 어찌됐든 납득한 듯하다.";          
          break;
        case "조걸":
          document.getElementById("resultHeader").innerHTML = "조걸을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 다른 오검들 몰래 조걸을 불러 말을 건넸다.</div> <div> &nbsp;</div> <div> &ldquo;하여튼! 난 이대로 선이나 보고 다니긴 싫다고! 사형, 협조 좀 해!&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;알았다 이 녀석아. 근데 어떻게 하면 되냐?&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;그냥 죽고 못 사는 연인인척 하기만 하면 돼!&rdquo;</div> <div> &nbsp;</div> <div> &mdash;</div> <div> &nbsp;</div> <div> &ldquo;자, 아까 내가 말한 대로 다시 해봐.&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;좋아, 다시 간다! 후!</div> <div> 여.러.분., 저와 청명이는 정인.입니다. 그렇지 청명아? 하.하.하. 나.의. 사랑. 청명이의. 귀.여.운&hellip; 으아아악! 오글거려서 못 하겠다 청명아, 미안하다!&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;어휴, 저 도움 안 돼는 사형 놈 같으니! 그래, 너한테 부탁한 내가 바보였지.&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(9) 실패! 연기에 조금 더 능숙한 인물을 고르자!";          
          break;
        case "당소소":
          document.getElementById("resultHeader").innerHTML = "당소소를 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 다른 오검들 몰래 소소를 불러 말을 건넸다.</div> <div> &ldquo;소소야, 협조 좀 해줘!&rdquo;</div> <div> &ldquo;저도 강제 결혼이 싫은 그 기분은 알죠. 알겠어요 사형. 그런데 저로 괜찮으시겠어요?&rdquo;</div> <div> &nbsp;</div> <div> 청명은 천우맹 무인들을 또 다른 중대 발표가 있다며 한 곳에 모았다.</div> <div> &nbsp;</div> <div> &ldquo;사실 그 동안 말 안하고 있었는데, 저랑 청명 사형은 정인 사이였어요.&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;엥? 소소 사매랑 사귄다고?&rdquo;&nbsp;</div> <div> &ldquo;뭐야, 그럼 그 때 그냥 결혼하지 그랬어? 괜히 싫은 척 하더니.&rdquo;</div> <div> &ldquo;헤헤, 화산에서 같이 한솥밥 먹으면서 지내다 보니 정이 들더라고요.&rdquo; 청명이 말했디/</div> <div> &ldquo;뭐 둘이 좋다니, 우리가 어쩔 수 있나? 자, 모두들, 당가와 화산에 연통을 넣어 혼례를 준비하게나!&rdquo; 당군악이 말했다.</div> <div> &ldquo;예? 아니 잠깐 저흰 그냥 가볍게 사귀기만 하는 건데요. 갑자기 결혼은 좀&hellip;&rdquo;</div> <div> &ldquo;뭐? 자네 설마 내 딸을 건드려 놓고 책임은 지기 싫다, 이런 말 하는 건 아니겠지?&rdquo;</div> <div> 당군악이 청명을 싸늘히 바라봤다.</div> <div> &ldquo;아, 그&hellip; 그게&hellip;&rdquo;</div> <div> &ldquo;것 봐요 사형. 내가 말했잖아요&hellip;&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(10) 실패!: 진짜 결혼을 진행하려고 한다!";          
          break;
        case "맹소":
          document.getElementById("resultHeader").innerHTML = "맹소를 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> &ldquo;맹소 궁주님, 저좀 도와주세요.&rdquo;</div> <div> &ldquo;아니, 검존 어르신, 이런 저라도 괜찮으시다면 당연히 도와드리겠습니다!&rdquo; 남만야수궁주 맹소는 청명의 청을 흔쾌히 승낙했다.</div> <div> &nbsp;</div> <div> 청명이 중대 발표가 있다고 불러 천우맹의 모두가 모여 있는 자리에 누군가 문을 뻥 하고 차고 들어왔다. 맹소가 청명을 공주님 안기로 안아들고 회의장에 도착한 것이었다.</div> <div> &ldquo;자 모두들, 주목! 요즘 이상한 소문이 들어서 이제야 밝히는 건데, 사실 우리는 연인 사이다.&rdquo;</div> <div> &ldquo;검존 어르신에게 제 순정을 바치겠습니다!&rdquo;</div> <div> &nbsp;</div> <div> 그 말을 들은 천우맹의 모든 무인들의 얼굴이 구겨졌다.</div> <div> &ldquo;순정은 무슨? 청명이를 저런 도둑놈에게 줄 쏘냐!&rdquo;</div> <div> &ldquo;아니죠, 사실 청명 도장이 훨씬 더 연상&hellip;&rdquo; 야수궁도 한 명이 따지고 들었다.</div> <div> &ldquo;나이를 떠나서 일단 청명이 취향이 저런 수염나고 애 딸린 유부남이였다니&hellip;&rdquo;</div> <div> &ldquo;이건 잘못된 만남이군.&rdquo; 당군악도 고개를 주억거렸다.</div> <div> &ldquo;사모님께 대체 뭐라고 말 할지&hellip;&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(11) 실패! 주변의 극렬한 반대 때문에 사실을 밝히고 말았다.";          
          break;
        case "혜연":
          document.getElementById("resultHeader").innerHTML = "혜연을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 헤연에게 가 사정을 설명해 보았다.</div> <div> &ldquo;나 좀 도와줘라. 응? 중생을 구제하는게 너같은 스님이 해야 할 일 아니냐?&rdquo;</div> <div> &ldquo;시주, 왜 이러십니까, 저는 불법을 닦는 몸입니다. 그런데 남색이라뇨. 아무리 연기라지만&hellip; 다른 분에게 부탁해 보시죠.&rdquo;</div> <div> &ldquo;에잉, 알았다.&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(12) 실패! 연애가 가능한 인물을 고르자!";          
          break;
        case "백아":
          document.getElementById("resultHeader").innerHTML = "백아를 선택했다!";
          document.getElementById("resultText").innerHTML = "-키익?";
          document.getElementById("smallText").innerHTML = "(13) 실패! 동물과는 연인 관계가 될 수 없다!";          
          break;
        case "당잔":
          document.getElementById("resultHeader").innerHTML = "당잔을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> &ldquo;어이 거기.&rdquo;</div> <div> &ldquo;청명 도장님? 저한테는 왜&hellip;&rdquo;</div> <div> &ldquo;사실 그게&hellip;&rdquo;</div> <div> &ldquo;예? 아니, 저도 단수라는 소문이 나는 건 싫습니다. 제가 소가주는 아니지만 저도 장래에 혼인을 해야 하는데요.&rdquo;</div> <div> &ldquo;이게? 화산에서 나한테 단련은 다 받아 놓고 이대로 입 싹 씻겠다 이거냐? 협조 좀 해!&rdquo;&nbsp;</div> <div> &ldquo;에휴&hellip;그럼 어쩔 수 없죠. 이번만입니다.&rdquo;</div> <div> &nbsp;</div> <div> 청명은 천우맹 모두를 모아 놓고 발표를 했다.</div> <div> &ldquo;자 모두 주목! 사실 당패랑 나는 연인 관계다!&rdquo;</div> <div> &ldquo;하하, 어쩌다보니 그렇게 됐네요.&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;허?&rdquo;</div> <div> &ldquo;아니, 저 둘이 단수? 뭔가 엄청 의왼데?&rdquo;</div> <div> 당소소는 이후 당잔은 청명 몰래 불러 추궁했다.</div> <div> &ldquo;잔아, 너 제대로 불어, 대체 어떻게 해서 우리 사형을 꼬신거야?&rdquo;</div> <div> &ldquo;아&hellip; 아니 그게&hellip;&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(14) 실패! 당잔은 협조를 하나 싶더니만, 누나의 끈질긴 추궁에, 소소에게 일러 바쳤다!";          
          break;
        case "청진":
        case "청문":
        case "명도":
        case "당보":
        case "암존":
          document.getElementById("resultHeader").innerHTML = "";
          document.getElementById("resultText").innerHTML = "‘내가 무슨 생각을…’";
          document.getElementById("smallText").innerHTML = "(15) 실패! 죽은 사람과는 연인인 척 할 수 없다!";   
          break;  
        case "이송백":
          document.getElementById("resultHeader").innerHTML = "이송백을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> &lsquo;천우맹 내에 있는 무인은 아니어도, 그 녀석이면 부탁 해 볼 만도 하지.&rsquo;</div> <div> 청명은 내킨 김에 아예 서안에 있는 종남파로 방문했다.</div> <div> &nbsp;</div> <div> &ldquo;어이, 이송백! 놀러 왔&hellip;</div> <div> 어? 뭐야, 이놈들 또 봉문했잖아? 이젠 아예 심심하면 봉문이네!&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(16)실패! 종남파가 다시 봉문에 들어가고 말았다!";
          break;
        case "진금룡":
        case "진은룡":
        case "종서한":
        case "허도":
        case "허공":
        case "무진":
        case "진초백":
          document.getElementById("resultHeader").innerHTML = "";
          document.getElementById("resultText").innerHTML = "응? 그 녀석?";
          document.getElementById("smallText").innerHTML = "(17) 천우맹 내에 있는 무인이나, 청명과 친분이 깊은 인물에게 부탁해보자!";   
          break;
        case "곽회":
        case "진태":
        case "종회":
        case "임평":
        case "백상":
        case "운검":
        case "운암":
        case "현종":
        case "현영":
        case "현상":
          document.getElementById("resultHeader").innerHTML = "";
          document.getElementById("resultText").innerHTML = "";
          document.getElementById("smallText").innerHTML = "(18) 그를 포함한 화산의 나머지를 속이려는 것이니 그에게 부탁 할수는 없다!";
          break;
        case "위소행":
          document.getElementById("resultHeader").innerHTML = "위소행을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 화영문의 젊은 문주, 위소행에게 가서 부탁하였다.</div> <div> &ldquo;아니, 저는 화영문을 이어야 할 의무가&hellip; 아버지가 대체 뭐라고 생각하실 지&hellip;&rdquo;</div> <div> 그래서, 정작 내가 가장 도움이 필요한 순간에 날 버리겠다 이거냐? 그게 화영문의 의리야?&ldquo;</div> <div> &ldquo;아, 아닙니다! 도와드리겠습니다!&rdquo;</div> <div> &nbsp;</div> <div> &mdash;</div> <div> &nbsp;</div> <div> &ldquo;크흠!&nbsp;</div> <div> &ldquo;자 모두 주목! 사실 소행이랑 나는 연인 관계다!&rdquo;</div> <div> &ldquo;뭐? 저 둘이?&rdquo;</div> <div> &ldquo;엄청 의외인데요?&rsquo;</div> <div> &ldquo;이거 농담이지?&rdquo;</div> <div> &ldquo;아뇨, 아닙니다. 힘든 일에도 가장 면저 앞으로 나가 맞서 싸우는 그 대담함과 어리지만 문파를 이끄는 그 모습에 그만 반하고 말핬습니다. 처음엔 그저 닮고 싶은 우상이라고 생각했는데 점점 남자로 느껴지더군요. 저도 화영문을 청명 도장처럼 이끌 수 있는 그런 문주가 되고 싶습니다. &rdquo;</div> <div> &ldquo;후훗, 짜식. 애송이가 잘 컸네&rdquo; 나름 본인의 진심이 담긴 위소행의 한 마디를 듣자 웬지 뿌듯해진 청명이었다.</div> <div> &nbsp;</div> <div> &ldquo;그래. 알았다. 근데 그게 연애감정 맞긴 하니 너희들?&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(19) 성공! 일단 대충 얼버무렸다.";   
          break;
        case "당군악":
          document.getElementById("resultHeader").innerHTML = "당군악을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> &ldquo;당군악 아저씨, 친구 좋다는 게 뭐에요. 좀 도와주세요!&rdquo;</div> <div> &ldquo;아니, 자네는 그게 말이 된다고 생각하나? 사실, 화산검협이 당군악 가주의 몇번째 부인으로 들어가기로 했다. 이러면 모두가 납득할 지 생각해 보세.&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;하긴, 그것도 그렇네요. 그냥 다른 사람에게 물어봐야겠어요.&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(21) 실패! 되도록이면 결혼을 하지 않은 인물을 고르자!";   
          break;
        case "남궁명":
        case "위립산":
          document.getElementById("resultHeader").innerHTML = "";
          document.getElementById("resultText").innerHTML = "<div>&ldquo;아저씨, 좀 도와주실 수 있나요?&rdquo;</div><div>&ldquo;응? 미안하네, 나는 유부남이라서 못 도와주겠어. 근데 왜 굳이 나를...&rdquo;</div>";
          document.getElementById("smallText").innerHTML = "(21) 실패! 되도록이면 결혼을 하지 않은 인물을 고르자!";   
          break;
        case "번충":
          document.getElementById("resultHeader").innerHTML = "번충을 선택했다.";
          document.getElementById("resultText").innerHTML = "<div> &ldquo;번충아, 나 좀 도와줘라.&rdquo;</div> <div> &ldquo;알겠습니다 형님!&rdquo;</div> <div> &nbsp;</div> <div> 번충은 화산의 도문으로 찾아가 모두가 보는 앞에서 무릎을 꿇었다.</div> <div> &nbsp;</div> <div> &ldquo;청명 형님의 호방함과 강한 힘! 그리고 남자다운 매력에 반했습니다!&lt;br&gt;</div> <div> 이제 형님이 아닌 낭군으로 모시겠습니다!&rdquo;</div> <div> -수군수군</div> <div> &ldquo;저&hellip; 저, 산적 놈이 감히 우리 청명이를 넘봐!&rdquo; 현영은 그 꼴을 보고 뒤로 넘어가려고 했다.&nbsp;</div> <div> &ldquo;저도 손 씻고 건실하게 살아간지 꽤 되었습니다. 제가 평생 책임질 테니 청명 도장을 제게 주시지요!&rdquo;</div> <div> &ldquo;윽, 저 조합은 뭐냐?&rdquo;</div> <div> &ldquo;이거 진짜냐? 그냥 단수인게 문제가 아니라 청명이 눈이 좀 많이 이상한거 아니냐?&rdquo;</div> <div> &ldquo;천지신명이시어..&rdquo;</div> <div> &ldquo;녹림왕이 화산에 독을 풀었다!&rdquo;</div>";
          document.getElementById("smallText").innerHTML = "(22) 성공? 강한 반대에 부딪히긴 했어도 아슬아슬하게 통과!";   
          break;
        case "구칠":
          document.getElementById("resultText").innerHTML = "구칠을 선택했다!";
          document.getElementById("resultHeader").innerHTML = "<div> 청명은 화음에 있는 개방 분타로 들어가 구칠을 찾았다.</div> <div> &nbsp;</div> <div> &ldquo;초삼아, 난 왜 불렀어?&rdquo;</div> <div> &ldquo;저기, 그게 사실은&hellip;&rdquo;</div> <div> &ldquo;뭐, 네가 결혼을? 축하해.&rdquo;</div> <div> &ldquo;아니, 축하할 일이 아니고, 난 결혼 따위 하기 싫다고. 그러니까 네가 좀 도와줘라.&rdquo;</div> <div> &ldquo;뭐, 내가? 하지만&hellip;&rdquo;</div> <div> &ldquo;그냥 예전부터 사귀던 사이었다고 대충 둘러대면 돼. 자 그럼 가자!&rdquo;</div> <div> &ldquo;자, 잠깐!&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;크흠, 그래서 너희 둘은 예전부터 정인이었던 사이였다고?&rdquo;현종은 구칠을 날카로운 눈으로 훑어보았다.</div> <div> &ldquo;예&hellip; 하하.&rdquo;</div> <div> &ldquo;어쩐지 저 놈에겐 너무 잘 해주더라.&rdquo; 누군가 소근거렸다.</div> <div> 현자배와 운자배, 그리고 화산 오검까지 모인 자리에서 모두의 시선은 구칠에게 가 있었다.</div> <div> &lsquo;으윽, 다들 날 뚫어져라 쳐다보네.&rsquo;</div> <div> &ldquo;구칠아, 긴장하지 마.&rdquo; 청명은 다정한 척, 구칠의 손을 잡았다.</div> <div> &ldquo;우리 그이가 많이 소심하네 하. 하. 너무 부담스럽나 보다. 그만 좀 취조하죠?&rdquo;</div>";
          document.getElementById("smallText").innerHTML = "(23) 성공! 어떻게 지금 당장은 속아넘긴 것 같다!";   
          break;
        case "종팔":
          document.getElementById("resultHeader").innerHTML = "종팔을 선택했다.";
          document.getElementById("resultText").innerHTML = "<div> &ldquo;그럼 홍대광 아저씨, 종팔이 놈 좀 불러 주세요.&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;히익!&rdquo;</div> <div> &ldquo;저 놈은 자네를 보기만 해도 저렇게 기겁하는데, 저 놈과 제대로 된 연기가 가능하겠나?&rdquo;</div> <div> &ldquo;음, 그렇긴 해요.&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(24) 실패! 친분이 있는 인물 위주로 고르자! ";   
          break;
        case "남궁단":
          document.getElementById("resultHeader").innerHTML = "남궁단을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 남궁도위에게 거절당한 청명은 남궁도위 대신 그의 사촌이 생각났다.&nbsp;</div> <div> &ldquo;그러냐? 그럼 네 사촌인 남궁단이라는 놈에게라도 도움 좀 받자.&rdquo;</div> <div> &ldquo;휴우&hellip; 알겠습니다. 제가 단이에게 말을 해 놓겠습니다.&rdquo;</div> <div> &lsquo;미안하다 단아! 이 부족한 형 때문에, 네 혼삿길이 막혀 버렸구나!&rsquo;</div> <div> &nbsp;</div> <div> &ldquo;야, 남궁단! 얘기는 들었지? 날 좀 도와줘라&rdquo;</div> <div> &nbsp;</div> <div> &ldquo;예&hellip;&rdquo;</div> <div> &nbsp;</div> <div> &mdash;</div> <div> &nbsp;</div> <div> 남궁단은 의외로 연기력이 뛰어났다.</div> <div> &ldquo;훗, 청명 도장, 여기 입에 당과 부스러기가 묻었잖습니까?&rdquo; 남궁단은 들고 있던 손수건으로 청명의 입을 닦아주었다.</div> <div> &ldquo;아 그래? 고마워.&rdquo;</div> <div> &nbsp;</div> <div> 남궁명은 능숙하게 연인 행세를 하고 있는 둘을 떨떠름하게 바라보았다. &ldquo;저 녀석, 남궁도위의 일도 그렇고 우리 가문에 대체 무슨 억하심정이 있길래 이러는 거지? 남궁 가의 씨를 아예 말릴 작정인가?&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(25) 성공! 하지만 남궁가의 미래는 조금 불투명해지고 말았다…";   
          break;
        case "도운찬":
          document.getElementById("resultHeader").innerHTML = "도운찬을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> 청명은 최근 사업을 더더욱 확장하고 있는 유령문의 문주인 도운찬에게 부탁하기로 했다.&nbsp;</div> <div> &ldquo;저기, 도운찬 문주님? 사실 제가&hellip;&rdquo;&nbsp;</div> <div> &ldquo;예엑? 아무리 그래도 왜 저랑&hellip;바쁘게 일하고 있는 것 안 보이십니까?&rdquo;</div> <div> -스윽</div> <div> 청명은 금자와 유령문에게 유리하게 작성된 계약서의 수정 조항 내역을 도운찬에게 내밀었다.</div> <div> &ldquo;예, 예. 그럼요. 도와드려야죠 제가.&rdquo;</div> <div> 이젠 거의 돈 귀신이 되어버린 도운찬이었다.</div> <div> &nbsp;</div> <div> &mdash;</div> <div> &nbsp;</div> <div> &ldquo;저기, 문주님? 청명 도장의 어떤 점에 반하시게 된 건가요?&rdquo;</div> <div> &ldquo;하하, 저는 청명 도장의 그 능숙한 수완과 자본력에 반했달까요? 역시 남자는 능력 아니겠습니까?&rdquo;</div> <div> &ldquo;청명아. 문주님이랑 정말 사귀는 거 맞냐? 돈으로 매수한 건 사귀는 게 아니란다.&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(26) 실패! 돈이 세상만사에 다 능사는 아닌 것 같다.";   
          break;
        case "천마":
        case "장일소":
        case "법정":
        case "호가명":
        case "천살":
            document.getElementById("resultHeader").innerHTML = "";
            document.getElementById("resultText").innerHTML = "대가리 깨지고 싶지?";
            document.getElementById("smallText").innerHTML = "";   
            break;
        case "청명":
        case "매화검존":
          document.getElementById("resultHeader").innerHTML = "청명을 선택했다!";
          document.getElementById("resultText").innerHTML = "<div> &ldquo;끄으으으&hellip; 도사가 무슨 결혼? 다 꺼져! 나는 나와 연애한다!&rdquo;</div> <div> &ldquo;청명아, 그게 무슨 개소리냐.&rdquo;</div> <div> &ldquo;그냥 혼인하기 싫으면 그렇다고 해요.&rdquo;</div> <div> &ldquo;저놈, 그렇게 안 보여도 의외로 도사다운 면도 조금 있단 말이지. 아무래도 평생 독신으로 사려나 보네.&rdquo;&nbsp;</div> <div> &ldquo;그럼 장문인과 장로님들에게 솔직히 말씀드려라. 괜히 여기서 혼자 고민해봤자 아무 답도 안 나오니.&rdquo;</div> <div> &ldquo;휴, 그래 돌아가서 결착을 봐야겠다.&rdquo;</div> ";
          document.getElementById("smallText").innerHTML = "(0) 성공! 그러나 연애는 혼자서 할 수 없다! <br> -True ending-";   
          break;
        case "" :
          return
        default:
            document.getElementById("resultHeader").innerHTML = "그게 누구였더라...?";
            document.getElementById("resultText").innerHTML = "음... 이 사람에게 부탁 할 수는 없어.";
            document.getElementById("smallText").innerHTML = "한번 공백이나 오타 없이 이름을 다시 제대로 입력해보자!";
     }
     
    document.getElementById("searchHeader").innerHTML = "부탁할 사람을 다시 고를까?";
    document.getElementById("resultCard").style = "display:block";

}
myButton.addEventListener("click", changeText);
