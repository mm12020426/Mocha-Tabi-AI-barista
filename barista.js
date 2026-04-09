/*! AI Barista Diagnostic - mochatabi-coffee */
(function () {

  /* ===== CSS ===== */
  var CSS = [
    '.abh{display:none!important}',
    '.abw{text-align:center;animation:abf .6s}',
    '.abwc{padding:40px 30px}',
    '.abi{width:80px;height:80px;background:linear-gradient(135deg,#6B4423,#8B5A3C);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 8px 24px rgba(107,68,35,.2)}',
    '.abi i{font-size:2.5rem;color:#fff}',
    '.abwt{font-size:2rem;color:#6B4423;margin-bottom:15px;font-weight:700}',
    '.abwx{font-size:1.1rem;color:#6B5D52;margin-bottom:30px;line-height:1.8}',
    '.ab-btn{padding:15px 35px;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:all .3s;display:inline-flex;align-items:center;justify-content:center;gap:10px;text-decoration:none}',
    '.ab-bp{background:linear-gradient(135deg,#6B4423,#8B5A3C);color:#fff;box-shadow:0 4px 16px rgba(107,68,35,.2)}',
    '.ab-bp:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(107,68,35,.3)}',
    '.ab-bs{background:#FBF8F3;color:#6B4423;border:2px solid #E8DFD6}',
    '.ab-bs:hover{border-color:#6B4423;background:#fff}',
    '.abq{animation:abf .6s}',
    '.abpc{margin-bottom:30px}',
    '.abpb{width:100%;height:8px;background:#E8DFD6;border-radius:10px;overflow:hidden;margin-bottom:10px}',
    '.abpf{height:100%;background:linear-gradient(90deg,#6B4423,#8B5A3C);border-radius:10px;transition:width .4s}',
    '.abpt{text-align:center;color:#6B5D52;font-size:.9rem;font-weight:500}',
    '.abqc{padding:30px;margin-bottom:20px}',
    '.abqh{text-align:center;margin-bottom:30px}',
    '.abqt{font-size:1.8rem;color:#6B4423;margin-bottom:10px;font-weight:600}',
    '.abqs{font-size:1rem;color:#6B5D52}',
    '.aboc{display:grid;gap:15px}',
    '.aob{background:#FBF8F3;border:2px solid #E8DFD6;padding:20px;border-radius:12px;cursor:pointer;transition:all .3s;text-align:left}',
    '.aob:hover{border-color:#6B4423;transform:translateY(-2px);box-shadow:0 8px 24px rgba(107,68,35,.1)}',
    '.aoi{font-size:2rem;margin-bottom:10px;color:#6B4423}',
    '.aot{font-size:1.2rem;font-weight:600;color:#2C2419;margin-bottom:5px}',
    '.aod{font-size:.9rem;color:#6B5D52;line-height:1.6}',
    '.abnb{display:flex;justify-content:center;gap:15px}',
    '.abr{animation:abf .6s}',
    '.abrc{padding:30px}',
    '.abrh{text-align:center;margin-bottom:30px}',
    '.abri{width:70px;height:70px;background:linear-gradient(135deg,#7CB342,#9CCC65);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;box-shadow:0 8px 24px rgba(124,179,66,.3);animation:abs2 .5s}',
    '.abri i{font-size:2.2rem;color:#fff}',
    '.abrt{font-size:2rem;color:#6B4423;margin-bottom:10px;font-weight:700}',
    '.abrs{font-size:1rem;color:#6B5D52}',
    '.abpc2{background:#FBF8F3;border-radius:12px;padding:25px;margin-bottom:25px;border:2px solid #E8DFD6}',
    '.abpn{font-size:1.6rem;color:#6B4423;margin-bottom:15px;font-weight:600}',
    '.abpt2{display:inline-block;background:#D4A574;color:#fff;padding:5px 15px;border-radius:20px;font-size:.85rem;font-weight:600;margin-bottom:15px}',
    '.abpfl{margin-bottom:20px}',
    '.abft{font-size:1rem;font-weight:600;color:#2C2419;margin-bottom:10px;display:flex;align-items:center;gap:8px}',
    '.abft i{color:#6B4423}',
    '.abfts{display:flex;flex-wrap:wrap;gap:8px}',
    '.abftg{background:#fff;padding:5px 12px;border-radius:20px;font-size:.85rem;color:#2C2419;border:1px solid #E8DFD6}',
    '.abpd{color:#6B5D52;line-height:1.8;margin-bottom:20px}',
    '.abpf2{background:#fff;padding:20px;border-radius:10px;margin-bottom:20px}',
    '.abft2{font-size:1rem;font-weight:600;color:#2C2419;margin-bottom:15px;display:flex;align-items:center;gap:8px}',
    '.abft2 i{color:#6B4423}',
    '.abfl{list-style:none;padding:0;margin:0}',
    '.abfi{padding:10px 0;border-bottom:1px solid #E8DFD6;color:#6B5D52;display:flex;align-items:center;gap:10px}',
    '.abfi:last-child{border-bottom:none}',
    '.abfi i{color:#6B4423;font-size:.9rem}',
    '.abpr{background:linear-gradient(135deg,rgba(107,68,35,.05),rgba(139,90,60,.05));padding:20px;border-radius:10px;border-left:4px solid #6B4423}',
    '.abrt2{font-size:1rem;font-weight:600;color:#6B4423;margin-bottom:10px;display:flex;align-items:center;gap:8px}',
    '.abrt2 i{font-size:1.2rem}',
    '.abrt3{color:#6B5D52;line-height:1.7}',
    '.abra{display:flex;flex-direction:column;gap:15px}',
    '@keyframes abf{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}',
    '@keyframes abs2{from{transform:scale(0)}to{transform:scale(1)}}',
    '@media(max-width:768px){',
    '  .abwt,.abqt,.abrt{font-size:1.6rem}',
    '  .abwc,.abqc,.abrc{padding:25px 20px}',
    '  .abi{width:70px;height:70px}',
    '  .abi i{font-size:2rem}',
    '  .aob{padding:15px}',
    '  .aot{font-size:1.1rem}',
    '  .ab-btn{padding:12px 25px;font-size:.95rem}',
    '}'
  ].join('\n');

  /* ===== 商品データ ===== */
  var PRODUCTS = [
    {
      id: "panama-geisha",
      name: "パナマ ゲイシャ・チリキ ボルカン",
      type: "焙煎豆",
      url: "https://shop.mochatabi-coffee.com/items/95770329",
      flavors: ["柑橘系", "レモン", "華やか", "フローラル"],
      description: "この豆は、レモンを思わせる柑橘系の風味とゲイシャ特有の華やかな香りが特徴で、浅煎りにすることでその特性が最大限に引き出されます。口に含むと、軽やかな酸味とともに、透き通るような甘みが広がり、まるで花のような香りが感じられる瞬間が訪れます。余韻には、ほのかなハチミツのような甘さが残り、最後まで心地よい飲み心地を楽しめます。",
      features: ["軽やかで爽やかな風味", "レモンのような柑橘系の酸味", "ゲイシャ特有の華やかな香り", "ハチミツのような甘い余韻"],
      recommendation: "軽やかで爽やかな風味をお楽しみいただけるため、朝の一杯やリフレッシュしたい時にぴったりです。また、コーヒー通の方にも満足いただける、深い味わいが特徴の逸品です。"
    },
    {
      id: "colombia-geisha",
      name: "コロンビア ゲイシャ",
      type: "焙煎豆",
      url: "https://shop.mochatabi-coffee.com/items/141224622", // いただいたURLを設定しました！
      flavors: ["シトラス", "マンダリン", "グレープフルーツ", "フローラル"],
      description: "この豆は、マンダリンやグレープフルーツを思わせる柑橘系の風味と、ゲイシャ特有のフローラルな香りが特徴のコロンビア産ゲイシャです。浅煎りにすることで、明るく透明感のある酸味と華やかなアロマが際立ちます。口に含むと、シトラスのような爽やかな酸味とともに、みずみずしく上品な甘みが広がります。飲み進めるにつれてフローラルな香りがふわりと立ち上がり、クリーンで心地よい余韻が長く続きます。",
      features: ["マンダリンやグレープフルーツを思わせる柑橘の風味", "ゲイシャ特有のフローラルな香り", "明るく透明感のある酸味", "クリーンで心地よい余韻"],
      recommendation: "爽やかなシトラス系の風味と華やかな香りを楽しめるため、コーヒーの香りをゆっくり味わいたい時間にぴったりです。フルーティーでクリーンな味わいは、浅煎りコーヒーがお好きな方やスペシャルティコーヒーの魅力を楽しみたい方におすすめの一杯です。"
    },
    {
      id: "colombia-pink-bourbon",
      name: "コロンビア ピンクブルボン",
      type: "焙煎豆",
      url: "https://shop.mochatabi-coffee.com/items/103540187",
      flavors: ["ベリー系", "ラズベリー", "チョコレート", "フルーティー"],
      description: "この豆はナチュラル精製により、まるで完熟ラズベリーのような甘酸っぱさと、ブラックチョコレートを思わせるほろ苦い甘さが見事に調和しています。ベリー系の華やかな香りと繊細な酸味が引き立ち、口に含んだ瞬間、ジューシーな果実感とともに柔らかいコクが広がります。余韻にはチョコレートのような丸みのある甘みが残り、一杯の中に甘さ・酸味・ほろ苦さがバランスよく共存する、満足度の高いコーヒーに仕上がりました。",
      features: ["完熟ラズベリーのような甘酸っぱさ", "ブラックチョコレートのほろ苦さ", "ジューシーな果実感", "軽やかさと深みの両立"],
      recommendation: "軽やかさと深みを併せ持つこの豆は、コーヒーをゆっくり味わいたい時間や、特別なひとときにぴったりです。"
    },
    {
      id: "yunnan-puerh-peach",
      name: "雲南 プーアルピーチ",
      type: "焙煎豆",
      url: "https://shop.mochatabi-coffee.com/items/121394442",
      flavors: ["ピーチ", "チョコレート", "ベリー", "ブランデー"],
      description: "プーアル茶の製法からヒントを得た、アナエロビック(嫌気性)とエアロビック(好気性)を組み合わせた独自のダブルファーメンテーション製法によって生まれた、芳醇で個性豊かなコーヒー豆です。口に含むと、完熟ピーチのような華やかな香りがふわりと広がり、チョコレートのようなまろやかなコクが余韻を包みます。ベリー系の酸味とブランデーを思わせる重厚な甘みが絶妙に調和し、冷めるにつれてフルーティーな透明感がより際立つのが特徴。",
      features: ["完熟ピーチの華やかな香り", "チョコレートのまろやかなコク", "ブランデーのような重厚な甘み", "独自のダブルファーメンテーション製法"],
      recommendation: "明るくジューシーでありながら、深みのあるアロマを楽しめる、まさに\"果実と発酵の芸術\"ともいえるコーヒーです。"
    },
    {
      id: "colombia-el-paraiso-lychee",
      name: "コロンビア エルパライソ ライチ",
      type: "焙煎豆",
      url: "https://shop.mochatabi-coffee.com/items/127940029",
      flavors: ["ライチ", "ピーチ", "フローラル", "ジューシー"],
      description: "コロンビアの名門、エルパライソ農園が世界に衝撃を与えた傑作ロットが入荷しました。最大の特徴は、徹底した温度管理のもとで二度にわたり発酵を行う特殊製法「ダブルアナエロビックファーメンテーション」。この緻密なプロセスにより、コーヒー豆が持つポテンシャルを極限まで引き出し、これまでのコーヒーにはなかった「ライチ」を思わせる瑞々しい果実感を実現しました。カップから溢れ出すのは、ピーチやフローラルをも連想させる甘く芳醇な香り。口に含めば、ジュースのようにジューシーでほかにはない強いフレーバーが広がります。",
      features: ["ライチの瑞々しい果実感", "ピーチとフローラルの芳醇な香り", "ジューシーで強烈なフレーバー", "特殊なダブルアナエロビックファーメンテーション"],
      recommendation: "「これがコーヒー？」と思わず驚くような、未体験の香味。特別な一杯を求める方にこそ味わっていただきたい、至高のコーヒーです。"
    },
    {
      id: "cold-brew-sweet-berry",
      name: "コールドブリューパック コロンビア スウィートベリー",
      type: "コールドブリューバッグ",
      url: "https://shop.mochatabi-coffee.com/items/114201464",
      flavors: ["ベリー系", "甘味", "すっきり"],
      description: "本格的なカフェの味をご家庭で簡単に。水出しコーヒー用に焙煎したコロンビア スウィートベリーを使用しています。適度な酸味とほのかな苦味、名前の通りの甘味が特徴で、暑い夏にゴクゴク飲めるすっきりとした一杯が出来上がります！1パックで500ml〜1L作ることができます。パックをボトルに入れて冷蔵庫で12時間程度放置するだけで本格的なコーヒーをお召し上がりいただけます。",
      features: ["水出しで簡単抽出", "すっきりとした味わい", "1パックで500ml〜1L", "冷蔵庫で12時間放置するだけ"],
      recommendation: "忙しい朝やお休みのひと時に本格的なコールドブリューで極上なお時間をお過ごしください。"
    },
    {
      id: "dripbox-yirgacheffe",
      name: "Dripbox エチオピア イルガチェフ",
      type: "ドリップバッグ",
      url: "https://shop.mochatabi-coffee.com/items/114201328",
      flavors: ["香り高い", "酸味", "軽やか"],
      description: "本格的なカフェの味をご家庭で簡単に。ドリップコーヒー用に焙煎したエチオピア イルガチェフの最高等級豆を使用しています。苦味が少なく香りと酸味の心地よさが特徴です。コップに乗せてお湯を注ぐだけの簡単使用で、忙しい朝にも本格的な美味しいコーヒーをお召し上がりいただけます。1杯当たり220mlのお湯を数回に分けて注いでください。",
      features: ["ドリップバッグで簡単", "香りと酸味が心地よい", "エチオピア最高等級豆使用", "1杯220ml"],
      recommendation: "ご家庭では中々味わえない本格的なコーヒーをお気軽にお楽しみいただけます。"
    }
  ];

  /* ===== 質問データ ===== */
  var QUESTIONS = [
    {
      id: 1,
      title: "どのような形でコーヒーを楽しみたいですか？",
      subtitle: "あなたのライフスタイルに合った形をお選びください",
      options: [
        { id: "beans", icon: "fa-coffee", title: "焙煎豆", description: "豆を挽いて本格的に楽しみたい", value: "beans" },
        { id: "drip", icon: "fa-filter", title: "ドリップバッグ", description: "手軽にお湯を注ぐだけで楽しみたい", value: "drip", productId: "dripbox-yirgacheffe" },
        { id: "cold", icon: "fa-tint", title: "コールドブリュー", description: "水出しでスッキリと楽しみたい", value: "cold", productId: "cold-brew-sweet-berry" }
      ]
    },
    {
      id: 2,
      title: "どんな味わいがお好みですか？",
      subtitle: "あなたにぴったりの焙煎豆をお選びします",
      options: [
        { id: "citrus", icon: "fa-lemon-o", title: "軽やかで柑橘系", description: "爽やかな酸味とゲイシャ特有の華やかな香り", value: "citrus" },
        { id: "berry-chocolate", icon: "fa-heart", title: "ベリーとチョコの調和", description: "ラズベリーの甘酸っぱさとチョコレートのコク深い味わい", value: "berry-chocolate", productId: "colombia-pink-bourbon" },
        { id: "peach", icon: "fa-leaf", title: "ピーチの芳醇な香り", description: "完熟ピーチの華やかさとブランデーのような重厚な甘み", value: "peach", productId: "yunnan-puerh-peach" },
        { id: "lychee", icon: "fa-star", title: "ライチの個性的な味わい", description: "未体験の香味、ジュースのようにジューシーで強烈なフレーバー", value: "lychee", productId: "colombia-el-paraiso-lychee" }
      ],
      condition: function (answers) { return answers[0] === "beans"; }
    },
    {
      id: 3,
      title: "柑橘系の風味の中で、どちらのニュアンスがお好みですか？",
      subtitle: "2つの特別なゲイシャからお選びください",
      options: [
        { id: "lemon-honey", icon: "fa-sun-o", title: "レモンとハチミツの甘み", description: "透き通るような甘みと花のような香り（パナマ産）", value: "lemon", productId: "panama-geisha" },
        { id: "grapefruit-mandarin", icon: "fa-tint", title: "グレープフルーツのみずみずしさ", description: "明るく透明感のある酸味と上品な甘み（コロンビア産）", value: "grapefruit", productId: "colombia-geisha" }
      ],
      condition: function (answers) { return answers[0] === "beans" && answers[1] === "citrus"; }
    }
  ];

  /* ===== CSS注入 ===== */
  function injectCSS() {
    var s = document.createElement("style");
    s.textContent = CSS;
    document.head.appendChild(s);
  }

  /* ===== メインロジック ===== */
  function init() {
    injectCSS();

    var currentQ = 0;
    var answers = [];
    var activeQuestions = [];

    // DOM要素
    var elWelcome = document.getElementById("abw");
    var elQuiz = document.getElementById("abq");
    var elResult = document.getElementById("abr");
    var btnStart = document.getElementById("abs");
    var btnBack = document.getElementById("abb");
    var btnRetry = document.getElementById("abrb");
    var elProgress = document.getElementById("abpf");
    var elCurrentQ = document.getElementById("abcq");
    var elTotalQ = document.getElementById("abtq");
    var elQTitle = document.getElementById("abqt");
    var elQSub = document.getElementById("abqs");
    var elOptions = document.getElementById("aboc");
    var elResultPanel = document.getElementById("abrp");
    var elProductLink = document.getElementById("abpl");

    /* 質問を表示 */
    function showQuestion() {
      var q = activeQuestions[currentQ];
      var pct = (100 * (currentQ + 1) / activeQuestions.length).toString();

      elProgress.style.width = pct + "%";
      elCurrentQ.textContent = currentQ + 1;
      elTotalQ.textContent = activeQuestions.length;
      elQTitle.textContent = q.title;
      elQSub.textContent = q.subtitle;
      elOptions.innerHTML = "";

      q.options.forEach(function (opt) {
        var btn = document.createElement("button");
        btn.className = "aob";
        btn.innerHTML =
          '<div class="aoi"><i class="fa ' + opt.icon + '"></i></div>' +
          '<div class="aot">' + opt.title + '</div>' +
          '<div class="aod">' + opt.description + '</div>';
        btn.addEventListener("click", function () { pickOption(opt); });
        elOptions.appendChild(btn);
      });

      btnBack.style.display = currentQ > 0 ? "inline-flex" : "none";
    }

    /* 選択肢を選んだとき */
    function pickOption(opt) {
      answers[currentQ] = opt.value;

      // 即座に結果へ飛ぶ場合
      if (opt.productId) {
        showResult(opt.productId);
        return;
      }

      // 回答が進むたびに質問リストを動的に更新
      activeQuestions = [QUESTIONS[0]];
      for (var i = 1; i < QUESTIONS.length; i++) {
        var q = QUESTIONS[i];
        if (!q.condition || q.condition(answers)) {
          activeQuestions.push(q);
        }
      }

      // 次の質問へ
      if (currentQ < activeQuestions.length - 1) {
        currentQ++;
        showQuestion();
      }
    }

    /* 結果を表示 */
    function showResult(productId) {
      elQuiz.classList.add("abh");
      elResult.classList.remove("abh");

      var product = PRODUCTS.find(function (p) { return p.id === productId; });
      if (!product) return;

      elProductLink.href = product.url;

      var flavorTags = product.flavors.map(function (f) {
        return '<span class="abftg">' + f + '</span>';
      }).join("");

      var featureItems = product.features.map(function (f) {
        return '<li class="abfi"><i class="fa fa-check"></i>' + f + '</li>';
      }).join("");

      elResultPanel.innerHTML =
        '<h3 class="abpn">' + product.name + '</h3>' +
        '<span class="abpt2">' + product.type + '</span>' +
        '<div class="abpfl">' +
        '  <h4 class="abft"><i class="fa fa-leaf"></i>フレーバー</h4>' +
        '  <div class="abfts">' + flavorTags + '</div>' +
        '</div>' +
        '<p class="abpd">' + product.description + '</p>' +
        '<div class="abpf2">' +
        '  <h4 class="abft2"><i class="fa fa-star"></i>特徴</h4>' +
        '  <ul class="abfl">' + featureItems + '</ul>' +
        '</div>' +
        '<div class="abpr">' +
        '  <h4 class="abrt2"><i class="fa fa-lightbulb-o"></i>AIバリスタからのおすすめポイント</h4>' +
        '  <p class="abrt3">' + product.recommendation + '</p>' +
        '</div>';
    }

    /* スタートボタン */
    btnStart.addEventListener("click", function () {
      currentQ = 0;
      answers = [];
      activeQuestions = [QUESTIONS[0]];
      elWelcome.classList.add("abh");
      elQuiz.classList.remove("abh");
      showQuestion();
    });

    /* 戻るボタン */
    btnBack.addEventListener("click", function () {
      if (currentQ > 0) {
        currentQ--;
        answers.pop();
        // 戻る時も質問リストを再計算
        activeQuestions = [QUESTIONS[0]];
        for (var i = 1; i < QUESTIONS.length; i++) {
          var q = QUESTIONS[i];
          if (!q.condition || q.condition(answers)) {
            activeQuestions.push(q);
          }
        }
        showQuestion();
      }
    });

    /* もう一度ボタン */
    btnRetry.addEventListener("click", function () {
      elResult.classList.add("abh");
      elWelcome.classList.remove("abh");
      currentQ = 0;
      answers = [];
      activeQuestions = [];
      document.getElementById("abw").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  /* ===== 実行 ===== */
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

})();
