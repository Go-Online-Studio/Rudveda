/* Karmakand Data & Dynamic Rendering */
(function(){
'use strict';
var D=[
{id:'bhagwanShiv',title:'Bhagwan Shiv',icon:'fa-solid fa-om',services:[
{name:'Rudra Abhishek',img:'image/RudraAbhishek.webp',desc:'A powerful Vedic ritual dedicated to Lord Shiva involving the sacred bathing of the Shiva Lingam with milk, honey, curd, and holy water while chanting Rudra mantras for divine blessings.',benefits:['Removes negative energies and doshas','Brings inner peace and spiritual growth','Promotes health and prosperity','Strengthens mental resilience']},
{name:'Rudri',img:'image/Rudri.webp',desc:'The complete recitation of Sri Rudram from the Yajurveda, performed to invoke Lord Shiva\'s grace. This chanting purifies the atmosphere and bestows spiritual strength upon devotees.',benefits:['Purifies mind, body, and surroundings','Invokes divine protection','Alleviates karmic burdens','Enhances spiritual awareness']},
{name:'Laghu Rudra',img:'image/LaghuRudra.webp',desc:'An elaborate poojan involving eleven recitations of Sri Rudram, amplifying the spiritual benefits manifold. Ideal for significant life milestones and overcoming major obstacles.',benefits:['Multiplied spiritual merit','Effective remedy for planetary afflictions','Brings success in endeavors','Promotes family harmony']},
{name:'Maha Rudra',img:'image/MahaRudra.webp',desc:'The grandest form of Rudra worship comprising 1,331 recitations of Sri Rudram by multiple priests over several days, creating an immensely powerful spiritual vibration.',benefits:['Supreme divine blessings','Deep karmic cleansing','Protection from severe afflictions','Brings lasting peace and abundance']},
{name:'Bilva Patra Archana',img:'image/BilvaPatraArchana.webp',desc:'A devotional offering of sacred Bilva (Bael) leaves to Lord Shiva, each leaf representing surrender and devotion. This ritual is especially auspicious during Shravan and Mahashivratri.',benefits:['Fulfills heartfelt wishes','Deepens devotion to Lord Shiva','Removes sins and negative karma','Brings mental clarity and focus']}
]},
{id:'bhagwanVishnu',title:'Bhagwan Vishnu',icon:'fa-solid fa-hands-praying',services:[
{name:'Purusha Suktam',img:'image/PurushaSuktam.webp',desc:'A sacred Vedic hymn from the Rigveda glorifying Lord Vishnu as the cosmic being. Its recitation invokes universal harmony and divine consciousness.',benefits:['Invokes cosmic blessings','Promotes universal harmony','Enhances spiritual consciousness','Brings prosperity and well-being']},
{name:'Tulsi Akshatam Pushpa Archana',img:'image/TulsiArchana.webp',desc:'A devotional offering of sacred Tulsi leaves, Akshat (rice grains), and flowers to Lord Vishnu, symbolizing purity, devotion, and surrender.',benefits:['Pleases Lord Vishnu immensely','Purifies the home environment','Attracts positive vibrations','Strengthens family bonds']},
{name:'Shatanama Archana',img:'image/ShatanamaArchana.webp',desc:'Worship through the chanting of 100 divine names of Lord Vishnu, each name invoking a specific aspect of the Lord\'s grace and protection.',benefits:['Invokes multi-faceted divine blessings','Removes obstacles in life','Promotes peace of mind','Strengthens devotional practice']},
{name:'Sahasranama Archana',img:'image/SahasranamaArchana.webp',desc:'The grand recitation of 1,000 names of Lord Vishnu from the Vishnu Sahasranama, one of the most revered prayers in Hindu tradition.',benefits:['Supreme spiritual merit','Protection from all negativities','Fulfillment of righteous desires','Attainment of moksha']},
{name:'Vishnu Yagna',img:'image/VishnuYagna.webp',desc:'A sacred fire ceremony dedicated to Lord Vishnu, involving offerings of ghee and herbs into the consecrated fire while chanting Vishnu mantras.',benefits:['Purifies environment and karma','Invokes Lord Vishnu\'s protection','Brings material and spiritual success','Removes Vastu doshas']},
{name:'Satyanarayan Katha',img:'image/SatyanarayanKatha.webp',desc:'A beloved devotional narrative and poojan honoring Lord Satyanarayan (Vishnu), traditionally performed during auspicious occasions, new beginnings, and festivals.',benefits:['Brings prosperity and happiness','Removes hardships and sorrows','Ideal for housewarmings and celebrations','Strengthens faith and gratitude']},
{name:'Nrusimha Poojan',img:'image/NrusimhaPoojan.webp',desc:'Worship of Lord Narasimha, the fierce avatar of Vishnu, performed for powerful protection against enemies, evil forces, and insurmountable difficulties.',benefits:['Powerful protection from enemies','Removes deep-rooted fears','Bestows courage and strength','Overcomes legal and personal battles']},
{name:'Varaha Poojan',img:'image/VarahaPoojan.webp',desc:'Devotional worship of Lord Varaha, the boar avatar of Vishnu who rescued the Earth. This poojan is performed for stability, grounding, and property-related blessings.',benefits:['Blessings for land and property','Brings stability in life','Removes obstacles in real estate matters','Promotes groundedness and security']},
{name:'Shree Ram Poojan',img:'image/ShreeRamPoojan.webp',desc:'Sacred worship of Lord Rama, the embodiment of dharma and righteousness. This poojan invokes the virtues of truth, duty, and noble conduct.',benefits:['Inspires righteous living','Brings harmony in relationships','Bestows courage and moral strength','Removes family conflicts']},
{name:'Shree Krishna Poojan',img:'image/ShreeKrishnaPoojan.webp',desc:'Devotional worship of Lord Krishna, the divine strategist and embodiment of love. This poojan invokes wisdom, joy, and divine guidance in all aspects of life.',benefits:['Attracts divine love and joy','Enhances wisdom and intellect','Removes confusion and doubt','Brings success in endeavors']},
{name:'Hayagriva Poojan',img:'image/HayagrivaPoojan.webp',desc:'Worship of Lord Hayagriva, the horse-headed avatar of Vishnu and deity of knowledge and wisdom. Especially beneficial for students and scholars.',benefits:['Enhances learning and memory','Bestows academic excellence','Removes ignorance','Ideal for students and educators']}
]},
{id:'deviPoojan',title:'Devi Poojan',icon:'fa-solid fa-star-and-crescent',services:[
{name:'Chandi Paath',img:'image/ChandiPaath.webp',desc:'The sacred recitation of Durga Saptashati (700 verses) glorifying Goddess Durga\'s victories over evil forces. A powerful ritual for divine feminine protection.',benefits:['Invokes Goddess Durga\'s protection','Destroys negative energies','Empowers courage and determination','Brings victory over adversaries']},
{name:'Nava Chandi',img:'image/NavaChandi.webp',desc:'Nine consecutive recitations of the Durga Saptashati, performed by multiple priests to amplify the divine energy of Goddess Chandi manifold.',benefits:['Ninefold spiritual power','Removes severe obstacles','Brings miraculous transformations','Deep karmic purification']},
{name:'Shata Chandi',img:'image/ShataChandi.webp',desc:'One hundred recitations of the Durga Saptashati, an extraordinarily powerful ritual performed over several days for the most challenging life situations.',benefits:['Hundredfold divine blessings','Overcomes impossible obstacles','Massive spiritual purification','Attracts supreme divine grace']},
{name:'Sahasra Chandi',img:'image/SahasraChandi.webp',desc:'The grand performance of one thousand recitations of the Durga Saptashati, the ultimate expression of devotion to the Divine Mother.',benefits:['Thousand-fold spiritual merit','Rarest and most powerful ritual','Complete transformation of destiny','Ultimate divine protection']},
{name:'Archana',img:'image/DeviArchana.webp',desc:'A personalized worship offering flowers and sacred items to the Goddess while chanting her divine names, invoking her specific blessings for the devotee.',benefits:['Personalized divine blessings','Fulfills specific wishes','Deepens devotional connection','Brings peace and contentment']},
{name:'Lalita Devi Poojan',img:'image/LalitaDeviPoojan.webp',desc:'Worship of Goddess Lalita Tripurasundari, the supreme form of the Divine Mother representing beauty, grace, and cosmic power.',benefits:['Bestows beauty and grace','Attracts harmonious relationships','Enhances creative abilities','Brings spiritual enlightenment']}
]},
{id:'ganeshPoojan',title:'Shree Ganesh Poojan',icon:'fa-solid fa-dharmachakra',services:[
{name:'Ganapati Atharva Shirsha',img:'image/GanapatiAtharvaShirsha.webp',desc:'A sacred Upanishadic hymn dedicated to Lord Ganesha, revealing his supreme cosmic nature. Its recitation removes all obstacles and bestows wisdom.',benefits:['Removes all obstacles','Bestows supreme wisdom','Brings auspicious beginnings','Grants success in all ventures']},
{name:'Archana',img:'image/GaneshArchana.webp',desc:'A devotional offering to Lord Ganesha with flowers, durva grass, and modak while chanting his sacred names, seeking his blessings for success.',benefits:['Pleases Lord Ganesha','Removes hurdles in projects','Brings intellectual clarity','Attracts prosperity']},
{name:'Ganesh Yagna',img:'image/GaneshYagna.webp',desc:'A sacred fire ceremony dedicated to Lord Ganesha, invoking his blessings through Vedic fire offerings for the removal of obstacles and new beginnings.',benefits:['Purifies surroundings','Powerful obstacle removal','Ideal for new ventures','Brings divine protection']},
{name:'Ganesh Jap',img:'image/GaneshJap.webp',desc:'The dedicated repetition of Ganesha mantras (such as Om Gam Ganapataye Namaha) performed with focused devotion for specific intentions and blessings.',benefits:['Deep meditative benefits','Strengthens willpower','Enhances focus and concentration','Removes fear and anxiety']}
]},
{id:'suryaPoojan',title:'Surya Poojan',icon:'fa-solid fa-sun',services:[
{name:'Surya Poojan',img:'image/SuryaPoojan.webp',desc:'Sacred worship of Lord Surya (the Sun God), the source of all life energy. This poojan involves Arghya (water offering) and Vedic mantras to invoke vitality, health, and leadership qualities.',benefits:['Boosts vitality and health','Enhances leadership qualities','Remedies for Surya-related doshas','Brings fame and recognition']}
]},
{id:'hanumanPoojan',title:'Hanuman Poojan',icon:'fa-solid fa-hand-fist',services:[
{name:'Hanuman Poojan',img:'image/HanumanPoojan.webp',desc:'Devotional worship of Lord Hanuman, the supreme devotee of Lord Rama and embodiment of strength, courage, and unwavering devotion. This poojan is performed for protection, physical strength, and overcoming fear.',benefits:['Bestows immense courage and strength','Powerful protection from evil','Removes fear and anxiety','Enhances physical and mental endurance']}
]},
{id:'shantiKarma',title:'Shanti Karma',icon:'fa-solid fa-peace',services:[
{name:'Graha Shanti',img:'image/GrahaShanti.webp',desc:'A specialized Vedic ritual to pacify malefic planetary influences in one\'s horoscope. Performed with specific mantras and offerings for each planet to restore cosmic balance.',benefits:['Neutralizes negative planetary effects','Improves overall life circumstances','Enhances favorable planetary periods','Restores astrological balance']},
{name:'Kal Sarpa Shanti',img:'image/KalSarpaShanti.webp',desc:'A powerful ritual to mitigate the effects of Kal Sarpa Dosha, which occurs when all planets are hemmed between Rahu and Ketu in the birth chart.',benefits:['Mitigates Kal Sarpa Dosha effects','Removes delays and obstacles','Restores career and financial growth','Brings mental peace']},
{name:'Nakshatra Shanti',img:'image/NakshatraShanti.webp',desc:'A pacification ritual performed for one\'s birth Nakshatra (lunar constellation) to harmonize its energies and enhance its positive influences in life.',benefits:['Harmonizes birth star energies','Enhances positive life influences','Improves health and relationships','Brings alignment with cosmic rhythms']},
{name:'Kumbh Vivah',img:'image/KumbhVivah.webp',desc:'A sacred ceremonial marriage performed with a pot (Kumbh) or tree as a remedial ritual for specific astrological doshas, particularly Manglik Dosha.',benefits:['Remedies Manglik Dosha','Removes marriage-related obstacles','Ensures marital harmony','Protects spouse from negative effects']},
{name:'Ark Vivah',img:'image/ArkVivah.webp',desc:'A ceremonial marriage performed with an Ark (Calotropis) plant as part of astrological remediation, typically for Manglik Dosha before actual marriage.',benefits:['Nullifies Manglik Dosha effects','Paves way for successful marriage','Removes astrological impediments','Brings peace of mind to families']},
{name:'Udaka Shanti',img:'image/UdakaShanti.webp',desc:'A purification ritual involving the sanctification of water with Vedic mantras, used for spiritual cleansing of individuals, homes, and spaces.',benefits:['Complete spiritual purification','Cleanses home and environment','Removes negative vibrations','Brings freshness and positivity']},
{name:'Graha Mantra Jap',img:'image/GrahaMantraJap.webp',desc:'The dedicated chanting of specific planetary mantras to strengthen weak planets or pacify malefic ones in the horoscope, performed with focused devotion and ritual precision.',benefits:['Strengthens weak planetary positions','Pacifies malefic influences','Enhances favorable planetary results','Improves specific life areas']}
]},
{id:'sanskar',title:'Sanskar',icon:'fa-solid fa-seedling',services:[
{name:'Garbha Dhanam',img:'image/GarbhaDhanam.webp',desc:'The first of the sixteen Vedic Sanskars, performed for the sanctification of conception. This sacred ritual invokes divine blessings for a healthy and virtuous progeny.',benefits:['Blesses the conception process','Invokes healthy progeny','Purifies the womb environment','Spiritual foundation for new life']},
{name:'Punsavan Sanskar',img:'image/PunsavanSanskar.webp',desc:'A prenatal Sanskar performed during the early months of pregnancy to ensure the healthy development of the fetus and invoke blessings for a strong, virtuous child.',benefits:['Promotes healthy fetal development','Invokes blessings for the child','Protects mother and baby','Strengthens the spiritual bond']},
{name:'Seemant Sanskar',img:'image/SeemantSanskar.webp',desc:'A sacred ceremony performed during the later months of pregnancy to bless the expectant mother, ensure safe delivery, and protect both mother and child.',benefits:['Blesses expectant mother','Ensures safe delivery','Removes pregnancy-related fears','Celebrates the joy of motherhood']},
{name:'Jatak Karma',img:'image/JatakKarma.webp',desc:'The birth ceremony performed immediately after the child is born, welcoming the newborn into the world with sacred mantras, honey-touching, and parental blessings.',benefits:['Sacred welcome for the newborn','Invokes lifelong divine protection','Establishes spiritual foundation','Strengthens parent-child bond']},
{name:'Naamkaran Sanskar',img:'image/NaamkaranSanskar.webp',desc:'The sacred naming ceremony where the child receives their name based on astrological calculations, family traditions, and divine guidance through Vedic rituals.',benefits:['Astrologically aligned naming','Establishes child\'s identity','Invokes blessings of ancestors','Celebrated community event']},
{name:'Anna Prashanam',img:'image/AnnaPrashanam.webp',desc:'The first-feeding ceremony where the child is introduced to solid food for the first time, performed with Vedic rituals to bless the child with good health and nourishment.',benefits:['Blesses the child\'s nutrition','Marks important developmental milestone','Invokes health and vitality','Joyful family celebration']}
]}
];

// Render tabs and content
var tabsNav=document.getElementById('kkTabsNav');
var tabContent=document.getElementById('kkTabContent');
var sectionToScroll = document.getElementById('karmakandSection');

D.forEach(function(cat,i){
  // Tab button
  var li=document.createElement('li');
  li.className='nav-item';
  li.setAttribute('role','presentation');
  var btn=document.createElement('button');
  btn.className='nav-link'+(i===0?' active':'');
  btn.id=cat.id+'-tab';
  btn.setAttribute('data-bs-toggle','pill');
  btn.setAttribute('data-bs-target','#'+cat.id);
  btn.setAttribute('type','button');
  btn.setAttribute('role','tab');
  btn.setAttribute('aria-controls',cat.id);
  btn.setAttribute('aria-selected',i===0?'true':'false');
  btn.innerHTML='<i class="'+cat.icon+'"></i> '+cat.title;
  li.appendChild(btn);
  tabsNav.appendChild(li);

  // Tab pane
  var pane=document.createElement('div');
  pane.className='tab-pane fade'+(i===0?' show active':'');
  pane.id=cat.id;
  pane.setAttribute('role','tabpanel');
  pane.setAttribute('aria-labelledby',cat.id+'-tab');
  pane.setAttribute('tabindex','0');

  cat.services.forEach(function(svc,j){
    var block=document.createElement('div');
    block.className='kk-sub-service';
    var isEven=(j%2===1);
    block.innerHTML=
      '<div class="row'+(isEven?' flex-row-reverse':'')+'">'+
        '<div class="col-md-5">'+
          '<img loading="lazy" src="'+svc.img+'" alt="'+svc.name+'">'+
        '</div>'+
        '<div class="col-md-7">'+
          '<h3 class="therdH">'+svc.name+'</h3>'+
          '<p>'+svc.desc+'</p>'+
          '<h4 class="fourthH">Benifits</h4>'+
          '<ul class="ulStyles">'+svc.benefits.map(function(b){return '<li>'+b+'</li>';}).join('')+'</ul>'+
          '<button type="button" class="kk-inquiry-btn" data-bs-toggle="modal" data-bs-target="#inquiryModal" data-service="'+svc.name+'"><i class="fa-solid fa-envelope"></i> Quick Inquiry</button>'+
        '</div>'+
      '</div>';
    pane.appendChild(block);
  });

  tabContent.appendChild(pane);
});

// Pre-fill subject when inquiry modal opens
document.getElementById('inquiryModal').addEventListener('show.bs.modal',function(e){
  var trigger=e.relatedTarget;
  if(trigger){
    var svc=trigger.getAttribute('data-service');
    if(svc){document.getElementById('validationSubject').value='Inquiry about '+svc;}
  }
});

// Tab click functionality: Scroll to section and handle mobile scroll
tabsNav.addEventListener('click',function(e){
  var btn=e.target.closest('.nav-link');
  if(btn){
    // Scroll tab button into view horizontally on mobile
    btn.scrollIntoView({behavior:'smooth',block:'nearest',inline:'center'});
    
    // Scroll page to the start of the section for better UX
    if(sectionToScroll){
        const offset = 100; // Account for sticky header
        const elementPosition = sectionToScroll.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  }
});
})();
