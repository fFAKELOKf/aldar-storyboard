import React, { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState("stories");
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    // Загружаем истории с API
    const fetchStories = async () => {
      try {
        console.log('Загружаем истории с API...');
        const response = await fetch('https://aitysai.kazdev.team/rendered_stories/?skip=0&limit=10', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('Получены истории:', data);
        setStories(data);
      } catch (err) {
        console.error('Ошибка загрузки:', err);
        
        // Более детальная диагностика ошибки
        if (err.name === 'TypeError' && err.message.includes('fetch')) {
          console.error('Проблема с сетевым подключением или CORS, используем fallback данные');
          
          // Fallback данные из вашего JSON
          const fallbackData = [
            {
              "id": "68f416e3348bc75db0d9ffe9",
              "theme": "Как алдар обманул бия продав ему палку под видом посоха богатств",
              "style": 0,
              "creation_date": "2025-10-18T22:38:27.662000",
              "story": [
                {
                  "chapter": 1,
                  "text": "Вечер в степи растягивался, как кусок свежего войлока: холодный край за ветром, тёплый центр у огня. Внутри одной юрты голоса плелись в разговор о неведомом — мол, где‑то под войлоком спрятана правда. Услышав шепоты, подошёл к юрте Альдар Кос: глаза у него хитрые, а усмешка — как ножик, который точит рассудок. Он встал у дверного дуга, вдохнул запах чая и дыма и сказал тихо, будто себе: если правда спрятана, значит, пора петь ей песню — или выкопать её ложкой смеха.",
                  "image_path": "images/frame_68f417439396125ba6f0e6a9_1.png"
                },
                {
                  "chapter": 2,
                  "text": "Альдар развёл самовар, поднёс к нему старую ложку и позвал: кто не любит правду, тот любит чай без сахара — придите и угоститесь. Кумыс закапал в чашах, хохот резанул по юрте, и люди вошли, словно птицы на корм. Он подшучивал, подбрасывал вопрос так, чтобы у каждого язык сам хотел выдать тайну: кто видел, кто слышал, кто додумал. Слухи ринулись, противоречили друг другу, перекричивали, словно стая воронов, но в этом шуме Альдар стал вычёркивать лишнее — и медленно вырисовывался силуэт правды, как тень в заходящем свете.",
                  "image_path": "images/frame_68f417439396125ba6f0e6aa_1.png"
                },
                {
                  "chapter": 3,
                  "text": "Когда гости улеглись, Альдар спустился под войлок, туда, где шаги гаснут и тайны прячутся в струнах тишины. Он положил ухо на тёплый войлок и стал вслушиваться: одна нитка шуршала детским плачем, другая — старушечьим смехом, третья — старым скрипом деревянного подлокотника. Каждое шороховое заявление звучало как кусок картины, не полная, но нужная. Так он понял: правда не монотонна, не одна и не всегда чиста; это мозаика голосов, и каждый шепчет свою долю истины, которую надо сложить вместе.",
                  "image_path": "images/frame_68f417439396125ba6f0e6ab_1.png"
                },
                {
                  "chapter": 4,
                  "text": "Под ладонями Альдара звякнула старая ложка — матовая от рук, с вмятиной у края. Он поднял её, покрутил у огня и начал придумывать сказку: мол, ложки помнят, кто ел, держа глаза в глаза, а кто подсыпал тайком. История была простой и смешной, но в её светлых образах люди признали себя: кто‑то посмелее, кто‑то смущался, кто‑то отводил взгляд. Сказка стала зеркалом — и в нём открылись те, кто боялся правды, и те, кто её сторожил, словно редкую посуду.",
                  "image_path": "images/frame_68f417439396125ba6f0e6ac_1.png"
                },
                {
                  "chapter": 5,
                  "text": "Альдар продолжал шутить, но шутки его были ключами. В ту ночь он тихо просил выйти тех, кто что‑то знал и молчал, приглашал под лампу, где тень делала лица длиннее. В полутемных глазах вспыхивали признания: один сказал, что слыхал ночь назад крик, но соврал при допросе, другой — что молчал из страха осудят. Кто‑то плакал, кто‑то смеялся, пытаясь оправдать себя. Постепенно кусочки признаний ложились в одну картину — правда складывалась, как пазл, и в ней не было одного злоумышленника, а была сеть людских страхов и забытых забот.",
                  "image_path": "images/frame_68f417439396125ba6f0e6ad_1.png"
                },
                {
                  "chapter": 6,
                  "text": "На следующий день он повёл народ на базар и устроил там не обычную торговлю, а ярмарку решений: кто желает, мог поставить на прилавок свою историю и обменять её на честное слово другого. Торговля шла бойко: слухи, что дорого стоили вчера, сегодня шуршали в карманах, как пустая монета. Те, кто продавали вымысел, медленно теряли его вес, а те, кто предлагал правду — приобретали уважение и место за общим столом. В этом обмене ложь уронила цену, а правда снова стала ценной монетой, которой можно рассчитываться за мир и понимание.",
                  "image_path": "images/frame_68f417439396125ba6f0e6ae_1.png"
                },
                {
                  "chapter": 7,
                  "text": "Когда солнце клонилось к закату, Альдар собрал народ и, не выставляя виновных на посмешище, рассказал то, что нашёл: под войлоком не лежала единая преступная тайна, а скручивалась вереница недоразумений, старых страхов и забытых слов. Люди слушали и видели себя в этой истории — не как монстров, а как уставших от лжи соседей. Юрта вдруг наполнилась другим дыханием: просьбы о прощении, обещания быть мягче и умение говорить правду так, чтобы она не ранила. Альдар улыбнулся, взял свою ложку, сделал глоток кумыса и тихо ушёл прочь: правда, сказал он себе, как кумыс — горьковата, пока пьёшь один, но сладка в кругу друзей.",
                  "image_path": "images/frame_68f417439396125ba6f0e6af_1.png"
                }
              ]
            },
            {
              "id": "68f41b8e348bc75db0d9ffeb",
              "theme": "Как алдар обманул бия продав ему палку под видом посоха богатств",
              "style": 1,
              "creation_date": "2025-10-18T22:58:22.951000",
              "story": [
                {
                  "chapter": 1,
                  "text": "Однажды на горизонте степи возник ларёк на колёсах, обтянутый рекламой и бумажной лентой, где вместо шариков и тарелок висели аккуратно заламинированные пункты договора. Над прилавком висела вывеска Transhumanism Inc., и продавец подмигивал так, будто знал все ваши секреты заранее. Алдар Кос остановился, потрогал полировку контрактов и улыбнулся: не ради страха, а ради любопытства он купил первую мысль о бессмертии в рассрочку — малую, пробную, как чашку чаю перед пиром. Ему хотелось увидеть, как бессмертие оформляют в офисе, какие печати ставят на нечто, что, казалось бы, не подлежит шталему описанию. Продавец подал бланк с ручкой, и Алдар оставил подпись точно так же легко, как оставлял шутку в гостях на ночь.",
                  "image_path": "images/frame_68f41bef9396125ba6f0e6b0_1.png"
                },
                {
                  "chapter": 2,
                  "text": "Когда касса потребовала плату, Алдар вынул из кармана не монеты, а память — горячее, детское лицо первой любви, которое ещё пахло летом. Техник улыбнулся и принял платёж: в обмен вживил под кожу тонкие микросхемы с напечатанной инструкцией по эксплуатации — раздел «касание», раздел «утомление», раздел «кратковременное вдохновение». Плоть стала подписана и промаркирована; по спине пошли линии QR-кодов, по которым можно было узнать возраст шрама и срок гарантии. Его шаги перестали быть просто шагами: теперь они считались и списывались по тарифу, а центр обслуживания присылал уведомления с предложением апгрейда походки. Алдар прохаживался степью и читал инструкции, словно рецепт супа, и в каждой строчке находил повод для новой шутки.",
                  "image_path": "images/frame_68f41bef9396125ba6f0e6b1_1.png"
                },
                {
                  "chapter": 3,
                  "text": "Юридический отдел требовал ещё одну подпись — не на бумаге, а на том, что живёт внутри. «Нам нужна заверенная подпись на душе», — сказали они в официальном тоне, и кабинет заполнил запах старых печатей и новой виртуальной вежливости. Алдар ответил торгом: «Я дам вам два анекдота и одно доброе дело, если вы включите в контракт пункт о вечной гарантии». Служащие заулыбались: договорам мало было подписи, им требовались KPI, отчёты и аудиты. Дух погрузили в метрические таблицы, нанесли на него метафизические графики с линиями тренда, и это выглядело так нелепо, что Алдар тихо рассмеялся. Он позволил себе дать доброе дело — отвести старуху через пустыню — и услышал в ответ штамп «Принято».",
                  "image_path": "images/frame_68f41bef9396125ba6f0e6b2_1.png"
                },
                {
                  "chapter": 4,
                  "text": "Когда пришли навязчивые привидения-апдейты — шёпоты прошлых решений и всплывающие уведомления о забытых договорах — Алдар позвонил в центр поддержки. Голос автоответчика взял форму дзен-коана: «Когда вы перестанете ждать ответа, тогда ответ придёт». Он пробился до монастыря техногностиков в облаках, где монахи в касках отвечали на звонки и молились кодам. Там, вместо того чтобы удалять неисправности, его научили подписывать их на рассрочку: каждую обиду — на маленькие платежи смеха, каждое сомнение — на рассылку напоминаний. Алдар стал учеником оператора и понял, что иногда проблема не уходит, пока ты не научишься жить с ней в порядке подписки — и пока не превратишь её в анекдот, который можно пересказать.",
                  "image_path": "images/frame_68f41bef9396125ba6f0e6b3_1.png"
                },
                {
                  "chapter": 5,
                  "text": "Проценты начались не с цифр, а с призраков: маленькие тени старых обид, обещания, брошенные на ветру, голоса родных, которым нужно было ответить. Банк кармы пришёл с требованием уплаты — но не деньгами, а юмором и историями, которые разгоняли долг как ветер разгоняет туман. Алдар, чьё ремесло — перевёртывать правду в улыбку, принялся переписывать счёт: каждую забывшуюся клятву он превращал в рассказ, каждую претензию — в шутку, и долг, казалось, сокращался. Иногда платёж приходил в виде чёрствого пирога, иногда в виде песни, которую он пел у костра, и люди возвращали ему плату смехом. Так проценты перешли в обмены, а кредиты судьбы стали валютой рассказов.",
                  "image_path": "images/frame_68f41bef9396125ba6f0e6b4_1.png"
                },
                {
                  "chapter": 6,
                  "text": "Однажды им пришло предложение о рефинансировании: объединиться с другим носителем — взять верблюда в напарники, вписаться в рекурсивную программу или стать городской легендой с собственным хэштегом. Алдар выбрал гибридный план: остаться шутом степи и одновременно согласиться на условия сервиса, где его имя — это ещё и контрактный артикул. На собрании правления он, с лучезарной улыбкой, продал отделу маркетинга одно из своих воспоминаний как бренд — короткую сцену первого поцелуя, упакованную в слоган. Они согласились, заплатили долю в бессмертии, и в ответ он получил право на совместное использование своей души, подписанное мелким шрифтом. Так его сознание стало чем-то вроде франшизы: ты можешь быть легендой и товаром сразу, если умеешь торговаться.",
                  "image_path": "images/frame_68f41bef9396125ba6f0e6b5_1.png"
                },
                {
                  "chapter": 7,
                  "text": "В финале оказалось, что бессмертие — это подписка с автоматическим продлением: оно не отменяет конца, а обещает паузу, пока вы платите по правилам user agreement. Пункт о форс-мажоре, пункт о самоподдержке, маленькая строчка о необходимости рассказывать новые истории — и срок продлён. Алдар прочёл договор и понял, что приобрёл не неизменное «быть», а право на постоянное переиздание себя: каждый раз — новая версия, новая шутка, новый штамп в паспорте памяти. Он улыбнулся: в мире, где можно продать воспоминание маркетологам и подписать душу на рассрочку, даже подписка может стать доброй шуткой, если умеешь её рассказывать дальше. Его урок был прост: бессмертие приходит не как спасение, а как ремесло — умение превращать прошлое в плату и жить, пока тебе идут навстречу смех и рассказы.",
                  "image_path": "images/frame_68f41bef9396125ba6f0e6b6_1.png"
                }
              ]
            }
          ];
          
          console.log('Используем fallback данные:', fallbackData);
          setStories(fallbackData);
          alert('Используем локальные данные из-за проблем с CORS. Приложение работает в демо-режиме.');
        } else {
          alert(`Ошибка загрузки историй: ${err.message}`);
          setStories([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchStories();
  }, []);

  // Функция для добавления новой задачи в список ожидания
  const addPendingTask = (taskData) => {
    const newTask = {
      id: taskData.id,
      theme: taskData.theme,
      style: taskData.style,
      creation_date: taskData.creation_date,
      status: taskData.status
    };
    setPendingTasks(prev => [...prev, newTask]);
    
    // Автоматически удаляем задачу через 5 минут
    setTimeout(() => {
      setPendingTasks(prev => prev.filter(task => task.id !== taskData.id));
    }, 5 * 60 * 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111111] via-[#0a0a0a] to-[#1a1a1a] text-white font-sans relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#8A2BE2] opacity-5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#FF00FF] opacity-5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#8A2BE2] opacity-3 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <NavigationBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div className="relative z-10">
        {currentPage === "stories" && (
          <StoriesPage 
            stories={stories} 
            loading={loading}
            pendingTasks={pendingTasks}
            onSelectStory={(story) => {
              setSelectedStory(story);
              setCurrentPage("story-detail");
            }}
          />
        )}
        {currentPage === "story-detail" && selectedStory && (
          <StoryDetailPage 
            story={selectedStory}
            onBack={() => {
              setCurrentPage("stories");
              setSelectedStory(null);
            }}
          />
        )}
        {currentPage === "generator" && (
          <GeneratorPage onTaskCreated={addPendingTask} />
        )}
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// NavigationBar
// ──────────────────────────────────────────────
function NavigationBar({ currentPage, setCurrentPage }) {
  return (
    <nav className="bg-gradient-to-r from-[#1C1C1C] to-[#2a2a2a] border-b border-[#8A2BE2] px-6 py-4 flex justify-between items-center backdrop-blur-sm relative">
      {/* Glowing background effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2]/10 to-[#FF00FF]/10 opacity-50"></div>
      
      <div className="relative z-10 flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">A</span>
        </div>
        <h1 className="text-xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
          Aldar Kose Storyboard Generator
        </h1>
      </div>
      
      <div className="relative z-10 flex space-x-2">
        <button
          onClick={() => setCurrentPage("stories")}
          className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
            currentPage === "stories"
              ? "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] text-white shadow-lg shadow-[#8A2BE2]/25"
              : "text-[#A0A0A0] hover:text-[#FF00FF] hover:bg-[#8A2BE2]/10"
          }`}
        >
          <span className="text-lg">📚</span>
          <span>Истории</span>
        </button>
        <button
          onClick={() => setCurrentPage("generator")}
          className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
            currentPage === "generator"
              ? "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] text-white shadow-lg shadow-[#8A2BE2]/25"
              : "text-[#A0A0A0] hover:text-[#FF00FF] hover:bg-[#8A2BE2]/10"
          }`}
        >
          <span className="text-lg">🎬</span>
          <span>Генератор</span>
        </button>
      </div>
    </nav>
  );
}

// ──────────────────────────────────────────────
// Stories Page
// ──────────────────────────────────────────────
function StoriesPage({ stories, loading, pendingTasks, onSelectStory }) {
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        <div className="relative">
          <div className="w-20 h-20 border-4 border-[#8A2BE2] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-0 w-20 h-20 border-4 border-[#FF00FF] border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
          <div className="absolute inset-2 w-16 h-16 bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-2xl">A</span>
          </div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
            Загружаем истории...
          </h3>
          <p className="text-[#A0A0A0] text-lg">Алдар Косе готовит свои рассказы</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <section className="text-center space-y-6">
        <div className="inline-block">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
            Истории Алдара Косе
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] mx-auto mt-2 rounded-full"></div>
        </div>
        <p className="text-[#A0A0A0] text-lg max-w-2xl mx-auto">
          Погрузитесь в мир казахских легенд, переосмысленных в футуристическом стиле.
          Каждая история состоит из нескольких глав с уникальными иллюстрациями.
        </p>
      </section>

      {/* Status Bar for Pending Tasks */}
      {pendingTasks.length > 0 && (
        <div className="bg-gradient-to-r from-[#FFA500] to-[#FF8C00] rounded-xl p-6 border border-[#FFA500]/30 shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#FF8C00] text-lg">⏳</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-white mb-2">
                История в процессе создания
              </h3>
              <div className="space-y-2">
                {pendingTasks.map((task) => (
                  <div key={task.id} className="bg-white/10 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-medium">{task.theme}</p>
                        <p className="text-white/80 text-sm">
                          ID: {task.id} • Статус: {task.status}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-white/80 text-sm">
                          Создана: {new Date(task.creation_date).toLocaleTimeString('ru-RU')}
                        </p>
                        <p className="text-white/60 text-xs">
                          История появится через несколько минут
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/80 text-sm mt-3">
                💡 История будет автоматически добавлена на главную страницу после завершения генерации
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {stories.map((story) => (
          <StoryCard key={story.id} story={story} onSelect={onSelectStory} />
        ))}
      </div>

      <section className="text-center space-y-6">
        <h3 className="text-2xl font-semibold text-[#8A2BE2]">Хотите создать свою историю?</h3>
        <p className="text-[#A0A0A0]">Перейдите к генератору и начните творить!</p>
      </section>
    </div>
  );
}

// ──────────────────────────────────────────────
// StoryCard
// ──────────────────────────────────────────────
function StoryCard({ story, onSelect }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStyleLabel = (style) => {
    return style === 0 ? "Классический" : "Футуристический";
  };

  const getStyleColor = (style) => {
    return style === 0 
      ? "bg-blue-500/20 text-blue-400 border-blue-500/30" 
      : "bg-purple-500/20 text-purple-400 border-purple-500/30";
  };

  const firstChapter = story.story && story.story[0];
  const previewText = firstChapter && firstChapter.text 
    ? firstChapter.text.substring(0, 150) + "..." 
    : "Текст недоступен";

  return (
    <div className="group bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] rounded-xl p-6 space-y-4 hover:shadow-2xl hover:shadow-[#8A2BE2]/10 transition-all duration-300 border border-[#8A2BE2]/20 hover:border-[#8A2BE2]/40">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-white group-hover:text-[#8A2BE2] transition-colors line-clamp-2">
          {story.theme}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs border ${getStyleColor(story.style)}`}>
          {getStyleLabel(story.style)}
        </span>
      </div>

      {/* Preview Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img
          src={firstChapter && firstChapter.image_path 
            ? `https://aitysai.kazdev.team/${firstChapter.image_path}`
            : '/logo192.png'
          }
          alt={story.theme}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] text-white text-sm font-bold rounded-lg">
          Глава 1
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/50 text-white text-sm rounded-lg">
          {story.story ? story.story.length : 0} глав
        </div>
      </div>

      {/* Preview Text */}
      <p className="text-[#A0A0A0] text-sm leading-relaxed">
        {previewText}
      </p>

      {/* Story Info */}
      <div className="flex justify-between items-center text-xs text-[#A0A0A0]">
        <span>📅 {formatDate(story.creation_date)}</span>
        <span>🆔 {story.id.substring(0, 8)}...</span>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => onSelect(story)}
          className="flex-1 bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] hover:from-[#FF00FF] hover:to-[#8A2BE2] px-4 py-2 rounded-lg transition-all duration-300 text-white font-medium text-sm shadow-lg hover:shadow-[#8A2BE2]/25"
        >
          📖 Читать историю
        </button>
        <button
          onClick={() => {
            const storyData = {
              id: story.id,
              theme: story.theme,
              chapters: story.story ? story.story.length : 0,
              style: getStyleLabel(story.style)
            };
            navigator.clipboard.writeText(JSON.stringify(storyData, null, 2));
            alert("Информация о истории скопирована!");
          }}
          className="px-4 py-2 bg-[#1C1C1C] border border-[#8A2BE2] hover:border-[#FF00FF] rounded-lg transition-all duration-300 text-[#8A2BE2] hover:text-[#FF00FF] text-sm"
        >
          📋 Копировать
        </button>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// Story Detail Page
// ──────────────────────────────────────────────
function StoryDetailPage({ story, onBack }) {
  const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const currentChapter = story.story && story.story[currentChapterIndex];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getStyleLabel = (style) => {
    return style === 0 ? "Классический" : "Футуристический";
  };

  const getStyleColor = (style) => {
    return style === 0 
      ? "bg-blue-500/20 text-blue-400 border-blue-500/30" 
      : "bg-purple-500/20 text-purple-400 border-purple-500/30";
  };

  const nextChapter = () => {
    if (isTransitioning || !story.story || currentChapterIndex >= story.story.length - 1) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentChapterIndex(prev => prev + 1);
      setIsTransitioning(false);
    }, 300);
  };

  const prevChapter = () => {
    if (isTransitioning || currentChapterIndex <= 0) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentChapterIndex(prev => prev - 1);
      setIsTransitioning(false);
    }, 300);
  };

  const goToChapter = (index) => {
    if (isTransitioning || index === currentChapterIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentChapterIndex(index);
      setIsTransitioning(false);
    }, 300);
  };

  const downloadChapterImage = () => {
    if (!currentChapter || !currentChapter.image_path) return;
    const link = document.createElement("a");
    link.href = `https://aitysai.kazdev.team/${currentChapter.image_path}`;
    link.download = `chapter_${currentChapter.chapter || 'unknown'}.png`;
    link.click();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 px-4 py-2 bg-[#1C1C1C] border border-[#8A2BE2] hover:border-[#FF00FF] rounded-lg transition-all duration-300 text-[#8A2BE2] hover:text-[#FF00FF]"
        >
          <span>←</span>
          <span>Назад к историям</span>
        </button>
        
        <div className="text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
            {story.theme}
          </h1>
          <div className="flex items-center justify-center space-x-4 mt-2 text-sm text-[#A0A0A0]">
            <span className={`px-2 py-1 rounded-full border ${getStyleColor(story.style)}`}>
              {getStyleLabel(story.style)}
            </span>
            <span>📅 {formatDate(story.creation_date)}</span>
            <span>🆔 {story.id.substring(0, 8)}...</span>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-sm text-[#A0A0A0]">Глава {currentChapterIndex + 1} из {story.story ? story.story.length : 0}</span>
        </div>
      </div>

      {/* Chapter Navigation */}
      <div className="flex justify-center space-x-2">
        {story.story && story.story.map((_, index) => (
          <button
            key={index}
            onClick={() => goToChapter(index)}
            disabled={isTransitioning}
            className={`w-10 h-10 rounded-lg transition-all duration-300 ${
              index === currentChapterIndex
                ? "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] text-white shadow-lg"
                : "bg-[#1C1C1C] border border-[#8A2BE2]/30 text-[#A0A0A0] hover:border-[#8A2BE2]"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      {/* Chapter Content */}
      <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] rounded-xl p-8 border border-[#8A2BE2]/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Chapter Image */}
          <div className="space-y-4">
            <div className="relative group">
              <img
                src={currentChapter && currentChapter.image_path 
                  ? `https://aitysai.kazdev.team/${currentChapter.image_path}`
                  : '/logo192.png'
                }
                alt={currentChapter && currentChapter.chapter ? `Глава ${currentChapter.chapter}` : "Глава"}
                className="w-full h-96 object-cover rounded-xl shadow-lg group-hover:shadow-[#8A2BE2]/25 transition-all duration-300"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] text-white text-sm font-bold rounded-lg">
                Глава {currentChapter && currentChapter.chapter ? currentChapter.chapter : "?"}
              </div>
            </div>
            
            {/* Chapter Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevChapter}
                disabled={currentChapterIndex === 0 || isTransitioning}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentChapterIndex === 0 || isTransitioning
                    ? "bg-[#1C1C1C] text-[#A0A0A0] cursor-not-allowed border border-[#8A2BE2]/20"
                    : "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] hover:from-[#FF00FF] hover:to-[#8A2BE2] text-white"
                }`}
              >
                ← Предыдущая
              </button>

              <button
                onClick={nextChapter}
                disabled={!story.story || currentChapterIndex === story.story.length - 1 || isTransitioning}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  !story.story || currentChapterIndex === story.story.length - 1 || isTransitioning
                    ? "bg-[#1C1C1C] text-[#A0A0A0] cursor-not-allowed border border-[#8A2BE2]/20"
                    : "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] hover:from-[#FF00FF] hover:to-[#8A2BE2] text-white"
                }`}
              >
                Следующая →
              </button>
            </div>

            {/* Download Action */}
            <button
              onClick={downloadChapterImage}
              className="w-full bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] hover:from-[#FF00FF] hover:to-[#8A2BE2] px-4 py-3 rounded-lg transition-all duration-300 text-white font-medium shadow-lg hover:shadow-[#8A2BE2]/25"
            >
              📥 Скачать изображение
            </button>
          </div>

          {/* Chapter Text */}
          <div className="space-y-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-[#8A2BE2] flex items-center gap-2">
                <span>📖</span>
                Текст главы
              </h3>
              <div className="bg-[#111111] rounded-lg p-6 border border-[#8A2BE2]/20">
                <p className="text-[#A0A0A0] leading-relaxed text-base">
                  {currentChapter && currentChapter.text ? currentChapter.text : "Текст главы недоступен"}
                </p>
              </div>
            </div>

            {/* Chapter Info */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#8A2BE2] flex items-center gap-2">
                <span>📊</span>
                Информация о главе
              </h4>
              <div className="bg-[#111111] rounded-lg p-4 border border-[#8A2BE2]/20 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#A0A0A0]">Номер главы:</span>
                  <span className="text-white font-semibold">{currentChapter && currentChapter.chapter ? currentChapter.chapter : "?"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0A0]">Всего глав:</span>
                  <span className="text-white font-semibold">{story.story ? story.story.length : 0}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0A0]">Стиль:</span>
                  <span className="text-white font-semibold">{getStyleLabel(story.style)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0A0]">Длина текста:</span>
                  <span className="text-white font-semibold">{currentChapter && currentChapter.text ? currentChapter.text.length : 0} символов</span>
                </div>
              </div>
            </div>

            {/* All Chapters Overview */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#8A2BE2] flex items-center gap-2">
                <span>📋</span>
                Все главы
              </h4>
              <div className="max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {story.story && story.story.map((chapter, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg p-3 border transition-all duration-300 cursor-pointer ${
                      idx === currentChapterIndex
                        ? "bg-[#8A2BE2]/10 border-[#8A2BE2]"
                        : "bg-[#111111] border-[#8A2BE2]/10 hover:border-[#8A2BE2]/30"
                    }`}
                    onClick={() => goToChapter(idx)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5 ${
                        idx === currentChapterIndex
                          ? "bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF]"
                          : "bg-[#8A2BE2]/50"
                      }`}>
                        {idx + 1}
                      </div>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">
                        {chapter.text.substring(0, 100)}...
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// Generator Page
// ──────────────────────────────────────────────
function GeneratorPage({ onTaskCreated }) {
  const [generatorState, setGeneratorState] = useState("input");
  const [generatedFrames, setGeneratedFrames] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState(0);
  const [theme, setTheme] = useState("");
  const [taskId, setTaskId] = useState(null);

  const startGeneration = async () => {
    if (!theme.trim()) {
      alert("Введите тему для генерации!");
      return;
    }
    
    setGeneratorState("loading");
    
    try {
      console.log('Создаем задачу генерации...');
      const response = await fetch('https://aitysai.kazdev.team/story_tasks/', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          theme: theme,
          style: selectedStyle
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error('Ошибка API:', errorData);
        
        if (errorData.detail && Array.isArray(errorData.detail)) {
          const errorMessages = errorData.detail.map(err => `${err.loc.join('.')}: ${err.msg}`).join('\n');
          throw new Error(`Ошибка валидации: ${errorMessages}`);
        } else {
          throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }
      }
      
      const taskData = await response.json();
      console.log('Создана задача:', taskData);
      
      setTaskId(taskData.id);
      
      // Добавляем задачу в список ожидания
      onTaskCreated(taskData);
      
      // Показываем результат с информацией о задаче
      const framesData = {
        frameCount: 1,
        frames: [{
          frameNumber: 1,
          caption: `Задача создана: ${theme}`,
          image: {
            url: `https://aitysai.kazdev.team/images/frame_68f41bef9396125ba6f0e6b1.png`,
            description: "Задача отправлена на генерацию"
          }
        }]
      };
      
      setGeneratedFrames(framesData);
      setGeneratorState("result");
      
    } catch (err) {
      console.error('Ошибка создания задачи:', err);
      
      // Более детальная диагностика ошибки
      if (err.name === 'TypeError' && err.message.includes('fetch')) {
        console.error('Проблема с сетевым подключением или CORS в генераторе');
        alert('Ошибка подключения к серверу в генераторе. Проверьте интернет-соединение или настройки CORS.');
      } else {
        alert(`Ошибка создания задачи: ${err.message}`);
      }
      
      setGeneratorState("input");
    }
  };

  if (generatorState === "loading") return <LoadingState />;
  if (generatorState === "result")
    return (
      <ResultState
        framesData={generatedFrames}
        taskId={taskId}
        onReset={() => setGeneratorState("input")}
        onOpenModal={() => setIsModalOpen(true)}
        isModalOpen={isModalOpen}
        onCloseModal={() => setIsModalOpen(false)}
      />
    );

  return (
    <InputState
      startGeneration={startGeneration}
      theme={theme}
      setTheme={setTheme}
      selectedStyle={selectedStyle}
      setSelectedStyle={setSelectedStyle}
    />
  );
}

// ──────────────────────────────────────────────
// InputState
// ──────────────────────────────────────────────
function InputState({ startGeneration, theme, setTheme, selectedStyle, setSelectedStyle }) {
  const styles = [
    "Обычная казахская сказка",
    "Виктор Пелевин (серия transhumanism inc)",
    "Станислав Лем (серия солярис)",
    "Лавкрафт",
    "Лукьяненко",
    "Мел Гибсон"
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
          Генератор раскадровки Алдара Косе
        </h2>
        <p className="text-[#A0A0A0] text-lg">
          Введите тему и выберите стиль для создания новой истории
        </p>
      </div>

      {/* Theme Input */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-[#8A2BE2]">
          Тема истории:
        </label>
        <div className="relative">
          <textarea
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            rows={3}
            placeholder="Например: Как Алдар обманул бая, продав ему палку под видом посоха богатств..."
            className="w-full bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] text-white rounded-xl p-4 focus:ring-2 focus:ring-[#8A2BE2] focus:border-[#8A2BE2] outline-none border border-[#8A2BE2]/20 transition-all duration-300 resize-none"
          />
          <div className="absolute bottom-3 right-3 text-xs text-[#A0A0A0]">
            {theme.length} символов
          </div>
        </div>
      </div>

      {/* Style Selection */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-[#8A2BE2]">
          Стиль истории:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {styles.map((style, index) => (
            <button
              key={index}
              onClick={() => setSelectedStyle(index)}
              className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                selectedStyle === index
                  ? "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] text-white border-[#8A2BE2] shadow-lg"
                  : "bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] text-[#A0A0A0] border-[#8A2BE2]/20 hover:border-[#8A2BE2]/40"
              }`}
            >
              <div className="font-medium">{style}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] rounded-xl p-6 border border-[#8A2BE2]/20">
        <h3 className="text-lg font-semibold text-[#8A2BE2] mb-3">Как это работает:</h3>
        <div className="space-y-2 text-[#A0A0A0]">
          <p>• Введите тему истории на русском языке</p>
          <p>• Выберите стиль из предложенных вариантов</p>
          <p>• Система создаст задачу генерации и начнет создавать историю</p>
          <p>• Результат можно будет скачать в виде изображений или JSON</p>
        </div>
      </div>

      {/* Generate Button */}
      <div className="text-center">
        <button
          onClick={startGeneration}
          disabled={!theme.trim()}
          className={`px-12 py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${
            theme.trim()
              ? "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] hover:from-[#FF00FF] hover:to-[#8A2BE2] text-white shadow-lg hover:shadow-[#8A2BE2]/25 transform hover:scale-105"
              : "bg-[#1C1C1C] text-[#A0A0A0] cursor-not-allowed border border-[#8A2BE2]/20"
          }`}
        >
          🎬 Создать задачу генерации!
        </button>
      </div>
    </div>
  );
}


// ──────────────────────────────────────────────
// LoadingState
// ──────────────────────────────────────────────
function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
      {/* Animated Logo */}
      <div className="relative">
        <div className="w-20 h-20 border-4 border-[#8A2BE2] border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-20 h-20 border-4 border-[#FF00FF] border-r-transparent rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
        <div className="absolute inset-2 w-16 h-16 bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF] rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-2xl">A</span>
        </div>
      </div>

      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
          Создаем раскадровку...
        </h3>
        <p className="text-[#A0A0A0] text-lg">Алдар Косе работает над вашей историей</p>
      </div>

      {/* Progress Steps */}
      <div className="space-y-3">
        <div className="flex items-center space-x-3 text-sm">
          <div className="w-2 h-2 bg-[#8A2BE2] rounded-full animate-pulse"></div>
          <span className="text-[#A0A0A0]">Анализируем сценарий...</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <div className="w-2 h-2 bg-[#8A2BE2] rounded-full animate-pulse delay-300"></div>
          <span className="text-[#A0A0A0]">Генерируем изображения...</span>
        </div>
        <div className="flex items-center space-x-3 text-sm">
          <div className="w-2 h-2 bg-[#8A2BE2] rounded-full animate-pulse delay-700"></div>
          <span className="text-[#A0A0A0]">Создаем раскадровку...</span>
        </div>
      </div>
    </div>
  );
}

// ──────────────────────────────────────────────
// ResultState
// ──────────────────────────────────────────────
function ResultState({ framesData, taskId, onReset, onOpenModal, isModalOpen, onCloseModal }) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Создаем расширенный массив для бесконечной карусели
  const extendedFrames = [
    ...framesData.frames.slice(-2), // Последние 2 фрейма в начале
    ...framesData.frames,           // Все фреймы
    ...framesData.frames.slice(0, 2) // Первые 2 фрейма в конце
  ];

  const downloadAllImages = () => {
    framesData.frames.forEach((frame, index) => {
      setTimeout(() => {
        const link = document.createElement("a");
        link.href = frame.image.url;
        link.download = `frame_${frame.frameNumber}.png`;
        link.click();
      }, index * 500); // Задержка между скачиваниями
    });
  };

  const downloadJSON = () => {
    const resultData = {
      frames: framesData.frames.map(frame => ({
        frameNumber: frame.frameNumber,
        caption: frame.caption,
        image: frame.image
      }))
    };
    
    const blob = new Blob([JSON.stringify(resultData, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "storyboard.json";
    link.click();
  };

  const nextFrame = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentFrameIndex((prev) => prev + 1);
    
    setTimeout(() => {
      if (currentFrameIndex >= framesData.frames.length - 1) {
        setCurrentFrameIndex(0);
      }
      setIsTransitioning(false);
    }, 500);
  };

  const prevFrame = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentFrameIndex((prev) => prev - 1);
    
    setTimeout(() => {
      if (currentFrameIndex <= 0) {
        setCurrentFrameIndex(framesData.frames.length - 1);
      }
      setIsTransitioning(false);
    }, 500);
  };

  // Проверяем наличие данных
  if (!framesData || !framesData.frames || framesData.frames.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-[#8A2BE2]">
            Ошибка загрузки данных
          </h2>
          <p className="text-[#A0A0A0]">
            Не удалось загрузить данные раскадровки
          </p>
          <button
            onClick={onReset}
            className="bg-[#8A2BE2] hover:bg-[#FF00FF] px-6 py-3 rounded-lg transition-all duration-300 text-white"
          >
            Попробовать снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
          Задача создана
        </h2>
        {taskId && (
          <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] rounded-xl p-4 border border-[#8A2BE2]/20">
            <p className="text-[#A0A0A0] text-sm">ID задачи: <span className="text-white font-mono">{taskId}</span></p>
            <p className="text-[#A0A0A0] text-sm mt-1">Статус: <span className="text-green-400">Создана</span></p>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={downloadAllImages}
          className="bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] hover:from-[#FF00FF] hover:to-[#8A2BE2] px-6 py-3 rounded-lg transition-all duration-300 text-white font-medium shadow-lg hover:shadow-[#8A2BE2]/25"
        >
          📥 Скачать все
        </button>
        <button
          onClick={downloadJSON}
          className="bg-[#1C1C1C] border border-[#8A2BE2] hover:border-[#FF00FF] px-6 py-3 rounded-lg transition-all duration-300 text-[#8A2BE2] hover:text-[#FF00FF]"
        >
          📄 JSON
        </button>
        <button
          onClick={onReset}
          className="bg-[#1C1C1C] border border-[#8A2BE2] hover:border-[#FF00FF] px-6 py-3 rounded-lg transition-all duration-300 text-[#8A2BE2] hover:text-[#FF00FF]"
        >
          🔄 Заново
        </button>
      </div>

      {/* Infinite Carousel */}
      <div className="relative bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] rounded-xl p-8 border border-[#8A2BE2]/20 overflow-hidden">
        {/* Navigation Arrows */}
        <button
          onClick={prevFrame}
          disabled={isTransitioning}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 shadow-lg z-10 ${
            isTransitioning 
              ? 'bg-[#8A2BE2]/50 cursor-not-allowed' 
              : 'bg-[#8A2BE2] hover:bg-[#FF00FF] hover:shadow-[#8A2BE2]/25'
          }`}
        >
          ←
        </button>
        
        <button
          onClick={nextFrame}
          disabled={isTransitioning}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 shadow-lg z-10 ${
            isTransitioning 
              ? 'bg-[#8A2BE2]/50 cursor-not-allowed' 
              : 'bg-[#8A2BE2] hover:bg-[#FF00FF] hover:shadow-[#8A2BE2]/25'
          }`}
        >
          →
        </button>

        {/* Carousel Content */}
        <div className="flex justify-center items-center min-h-[400px] overflow-hidden">
          <div className="w-full max-w-6xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentFrameIndex + 2) * (100 / 3)}%)`
              }}
            >
              {extendedFrames.map((frame, index) => {
                const realIndex = index - 2; // Учитываем дублированные фреймы
                const isActive = realIndex === currentFrameIndex;
                const isVisible = Math.abs(realIndex - currentFrameIndex) <= 1;
                
                return (
                  <div key={`${frame.frameNumber}-${index}`} className="w-1/3 flex-shrink-0 px-2">
                    <div className="flex justify-center">
                      <div 
                        className={`bg-[#111111] rounded-xl overflow-hidden cursor-pointer transition-all duration-500 ${
                          isActive 
                            ? 'scale-105 shadow-2xl shadow-[#8A2BE2]/25' 
                            : isVisible
                            ? 'scale-100 opacity-80'
                            : 'scale-95 opacity-50'
                        }`}
                        onClick={isActive ? onOpenModal : undefined}
                      >
                        <div className="relative">
                          <img
                            src={frame.image.url}
                            alt={frame.caption}
                            className="w-full h-48 object-cover"
                          />
                          <div className={`absolute top-4 left-4 px-3 py-1 rounded-lg text-sm font-bold transition-all duration-300 ${
                            isActive 
                              ? 'bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] text-white' 
                              : 'bg-[#8A2BE2] text-white'
                          }`}>
                            Кадр {frame.frameNumber}
                          </div>
                        </div>
                        <div className="p-4">
                          <p className={`text-sm transition-all duration-300 ${
                            isActive 
                              ? 'text-white font-medium' 
                              : 'text-[#A0A0A0]'
                          }`}>
                            {frame.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Frame Indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {framesData.frames.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentFrameIndex(index)}
              disabled={isTransitioning}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentFrameIndex
                  ? "bg-[#8A2BE2] scale-125"
                  : "bg-[#8A2BE2]/30 hover:bg-[#8A2BE2]/60"
              }`}
            />
          ))}
        </div>
      </div>

      <DetailModal
        isOpen={isModalOpen}
        onClose={onCloseModal}
        framesData={framesData}
      />
    </div>
  );
}

// ──────────────────────────────────────────────
// DetailModal
// ──────────────────────────────────────────────
function DetailModal({ isOpen, onClose, framesData }) {
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  
  if (!isOpen || !framesData || !framesData.frames) return null;
  
  const currentFrame = framesData.frames[currentFrameIndex];

  const nextFrame = () => {
    if (currentFrameIndex < framesData.frames.length - 1) {
      setCurrentFrameIndex(currentFrameIndex + 1);
    }
  };

  const prevFrame = () => {
    if (currentFrameIndex > 0) {
      setCurrentFrameIndex(currentFrameIndex - 1);
    }
  };

  const downloadCurrentImage = () => {
    const link = document.createElement("a");
    link.href = currentFrame.image.url;
    link.download = `frame_${currentFrame.frameNumber}.png`;
    link.click();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300">
      <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2a2a2a] rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-[#8A2BE2]/20 shadow-2xl shadow-[#8A2BE2]/10 animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] bg-clip-text text-transparent">
              Раскадровка - Кадр {currentFrame.frameNumber}
            </h3>
            <p className="text-[#A0A0A0] text-sm mt-1">
              {currentFrameIndex + 1} из {framesData.frames.length}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-[#1C1C1C] border border-[#8A2BE2]/30 hover:border-[#FF00FF] rounded-lg flex items-center justify-center text-[#A0A0A0] hover:text-[#FF00FF] transition-all duration-300 hover:bg-[#8A2BE2]/10"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image */}
          <div className="space-y-4">
            <div className="relative group">
              <img 
                src={currentFrame.image.url} 
                alt={currentFrame.caption} 
                className="rounded-xl w-full shadow-lg group-hover:shadow-[#8A2BE2]/25 transition-all duration-300" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
            
            {/* Frame Navigation */}
            <div className="flex justify-between items-center">
              <button
                onClick={prevFrame}
                disabled={currentFrameIndex === 0}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentFrameIndex === 0
                    ? "bg-[#1C1C1C] text-[#A0A0A0] cursor-not-allowed border border-[#8A2BE2]/20"
                    : "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] hover:from-[#FF00FF] hover:to-[#8A2BE2] text-white"
                }`}
              >
                ← Предыдущий
              </button>

              <div className="flex space-x-2">
                {framesData.frames.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentFrameIndex(index)}
                    className={`w-8 h-8 rounded-lg transition-all duration-300 ${
                      currentFrameIndex === index
                        ? "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] text-white shadow-lg"
                        : "bg-[#1C1C1C] border border-[#8A2BE2]/30 text-[#A0A0A0] hover:border-[#8A2BE2]"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={nextFrame}
                disabled={currentFrameIndex === framesData.frames.length - 1}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentFrameIndex === framesData.frames.length - 1
                    ? "bg-[#1C1C1C] text-[#A0A0A0] cursor-not-allowed border border-[#8A2BE2]/20"
                    : "bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] hover:from-[#FF00FF] hover:to-[#8A2BE2] text-white"
                }`}
              >
                Следующий →
              </button>
            </div>

            {/* Download Actions */}
            <div className="flex gap-3">
              <button
                onClick={downloadCurrentImage}
                className="flex-1 bg-gradient-to-r from-[#8A2BE2] to-[#FF00FF] hover:from-[#FF00FF] hover:to-[#8A2BE2] px-4 py-3 rounded-lg transition-all duration-300 text-white font-medium shadow-lg hover:shadow-[#8A2BE2]/25"
              >
                📥 Скачать изображение
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {/* Frame Info */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#8A2BE2] flex items-center gap-2">
                <span>🎬</span>
                Описание кадра
              </h4>
              <div className="bg-[#111111] rounded-lg p-4 border border-[#8A2BE2]/20">
                <p className="text-[#A0A0A0] leading-relaxed">{currentFrame.caption}</p>
              </div>
            </div>

            {/* Frame Details */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#8A2BE2] flex items-center gap-2">
                <span>📊</span>
                Информация о кадре
              </h4>
              <div className="bg-[#111111] rounded-lg p-4 border border-[#8A2BE2]/20 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#A0A0A0]">Номер кадра:</span>
                  <span className="text-white font-semibold">{currentFrame.frameNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0A0]">Всего кадров:</span>
                  <span className="text-white font-semibold">{framesData.frames.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A0A0A0]">Статус:</span>
                  <span className="text-green-400 font-semibold">Готов</span>
                </div>
              </div>
            </div>

            {/* All Frames Overview */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-[#8A2BE2] flex items-center gap-2">
                <span>📋</span>
                Все кадры
              </h4>
              <div className="max-h-48 overflow-y-auto space-y-2 pr-2 custom-scrollbar">
                {framesData.frames.map((frame, idx) => (
                  <div
                    key={idx}
                    className={`rounded-lg p-3 border transition-all duration-300 cursor-pointer ${
                      idx === currentFrameIndex
                        ? "bg-[#8A2BE2]/10 border-[#8A2BE2]"
                        : "bg-[#111111] border-[#8A2BE2]/10 hover:border-[#8A2BE2]/30"
                    }`}
                    onClick={() => setCurrentFrameIndex(idx)}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5 ${
                        idx === currentFrameIndex
                          ? "bg-gradient-to-br from-[#8A2BE2] to-[#FF00FF]"
                          : "bg-[#8A2BE2]/50"
                      }`}>
                        {idx + 1}
                      </div>
                      <p className="text-[#A0A0A0] text-sm leading-relaxed">{frame.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}