const langData = {
    ar: {
        "nav-home": "الرئيسية", "nav-edu": "التثقيف الصحي", "nav-exam": "دليل الفحص", "nav-assess": "تقييم المخاطر", "nav-map": "مراكز خنشلة",
        "hero-title": "مرحباً بكم في منصة", "hero-desc": "منصة رقمية صحية ذكية تهدف إلى المساهمة في الكشف المبكر عن سرطان الثدي من خلال التوعية الصحية الرقمية، وتقييم عوامل الخطر، وتوجيه النساء نحو الفحوصات المناسبة.",
        "what-is-title": "ما هو سرطان الثدي؟", "what-is-desc": "هو نمو غير طبيعي وخارج عن السيطرة لخلايا نسيج الثدي، ويعتبر أكثر أنواع السرطان شيوعاً بين النساء عالمياً، إلا أن الكشف المبكر عنه يحقق نسب شفاء عالية جداً.",
        "importance-title": "أهمية الكشف المبكر", "importance-desc": "يساهم الكشف المبكر في إنقاذ الحياة بنسبة تصل إلى أكثر من 90%. الفحص الدوري يسهل العلاج ويقلل من فترة التعافي وفرص انتشار المرض.",
        "stats-title": "إحصائيات توعوية", "stat-1": "امرأة معرضة للإصابة عالمياً", "stat-2": "نسبة الشفاء عند الكشف المبكر", "stat-3": "الأكثر انتشاراً في الجزائر وعالمياً",
        "edu-title": "قسم التثقيف الصحي", "edu-c1-t": "عوامل الخطر", "edu-c1-d": "تشمل التقدم في السن، التاريخ العائلي، الطفرات الجينية، التدخين، وعدم ممارسة النشاط البدني أو السمنة المفرطة.",
        "edu-c2-t": "علامات الإنذار المبكر", "edu-c2-d": "ظهور كتلة أو غلظ في الثدي، تغير في شكل أو حجم الثدي، إفرازات غير طبيعية من الحلمة، أو تغير في ملمس الجلد.",
        "edu-c3-t": "طرق الوقاية", "edu-c3-d": "اتباع نظام غذائي صحي، ممارسة الرياضة بانتظام، الرضاعة الطبيعية، تجنب الممارسات الضارة، والالتزام بالفحوصات الدورية.",
        "exam-title": "دليل الفحص الذاتي للثدي (خطوة بخطوة)", "step1-t": "الملاحظة البصرية أمام المرآة", "step1-d": "قفي أمام المرآة واكتشفي أي تغيرات في الشكل، الحجم، اللون، أو وجود تجاعيد في الجلد.",
        "step2-t": "رفع اليدين لأعلى", "step2-d": "ارفعي يديكِ ولاحظي إن كان هناك أي علامات لشد أو عدم تماثل بين الثديين.",
        "step3-t": "الفحص اللمسي الدائري", "step3-d": "باستخدام باطن الأصابع الثلاثة الوسطى، تحسسي الثدي بحركات دائرية من الخارج نحو الحلمة للبحث عن كتل.",
        "assess-title": "تقييم عوامل الخطر الذكي", "q-age": "1. العمر:", "q-history": "2. هل لديك تاريخ عائلي مع الإصابة بسرطان الثدي؟", "q-lifestyle": "3. نمط الحياة (عدم ممارسة نشاط بدني، السمنة، الممارسات الضارة):", "q-symptoms": "4. هل لديك أعراض حالية؟ (إفرازات، ألم، تغير شكل الثدي أو الحلمة):",
        "opt-no": "لا", "opt-yes": "نعم", "opt-good": "صحي / نشط", "opt-bad": "غير صحي / خمول وسمنة", "btn-analyze": "تحليل البيانات",
        "disclaimer": "⚠️ ملاحظة: هذا التقييم يعتبر احتمالاً فقط، والتشخيص المؤكد يكون حصراً من خلال طبيب عام أو مختص.",
        "secure-db": "قاعدة بيانات آمنة وحماية كاملة للبيانات الشخصية", "created-by": "منشئ المنصة:", "contact": "تواصل معنا:",
        
        // ترجمة المراكز الصحية الجديدة
        "map-title": "المراكز الصحية في ولاية خنشلة",
        "map-sub1": "أولاً: المؤسسات العمومية الاستشفائية (المستشفيات العامة والمتخصصة)",
        "map-sub2": "ثانياً: المؤسسات العمومية للصحة الجوارية (EPSP)",
        "map-intro": "تُشرف هذه المؤسسات على العيادات متعددة الخدمات وقاعات العلاج الموزعة عبر البلديات لتقديم الرعاية الأولية:",
        "h-hosp1": "🏥 م.ع.ا أحمد بن بلة - خنشلة", "d-hosp1": "المستشفى الرئيسي بعاصمة الولاية، يضم مصالح طبية وجراحية هامة.",
        "h-hosp2": "🩺 م.ا.م في طب النساء والتوليد مستشفى صالحي بلقاسم", "d-hosp2": "مؤسسة متخصصة في رعاية الأمومة والطفولة تقع ببلدية خنشلة.",
        "h-hosp3": "🏥 م.ع.ا علي بوسحابة - خنشلة", "d-hosp3": "صرح استشفائي إضافي لدعم التغطية الصحية في عاصمة الولاية.",
        "h-hosp4": "🏥 م.ع.ا قايس", "d-hosp4": "تغطي دائرة قايس والبلديات المجاورة لها بالخدمات الجراحية والاستشفائية.",
        "h-hosp5": "🏥 م.ع.ا ششار (مستشفى الشادلي بن جديد)", "d-hosp5": "تضمن التغطية الصحية والاستعجالية للجهة الجنوبية للولاية.",
        "h-hosp6": "🏥 م.ع.ا أولاد رشاش", "d-hosp6": "تقدم الخدمات الطبية لسكان دائرة أولاد رشاش والمناطق القريبة منها.",
        "h-hosp7": "🏥 م.ع.ا بوحمامة", "d-hosp7": "منشأة صحية حيوية تخدم سكان المنطقة الجبلية والدائرة الغربية للولاية.",
        "h-epsp1": "🏘️ المؤسسة العمومية للصحة الجوارية خنشلة", "d-epsp1": "تغطي عاصمة الولاية وضواحيها القريبة.",
        "h-epsp2": "🏘️ المؤسسة العمومية للصحة الجوارية قايس", "d-epsp2": "تُعنى بالصحة الجوارية والتلقيح في دائرة قايس.",
        "h-epsp3": "🏘️ المؤسسة العمومية للصحة الجوارية ششار", "d-epsp3": "تضمن الرعاية الأولية لسكان بلديات دائرة ششار.",
        "h-epsp4": "🏘️ المؤسسة العمومية للصحة الجوارية المحمل", "d-epsp4": "تشرف على الهياكل الصحية الجوارية ببلدية المحمل والمناطق التابعة لها.",
        "h-epsp5": "🏘️ المؤسسة العمومية للصحة الجوارية يابوس", "d-epsp5": "تغطي الخدمات الجوارية في دائرة بوحمامة وبلدية يابوس.",
        "h-epsp6": "🏘️ المؤسسة العمومية للصحة الجوارية جلال", "d-epsp6": "مركز رعاية صحية جوارية مخصص لجنوب الولاية والمناطق الرعوية ببلدية جلال."
    },
    fr: {
        "nav-home": "Accueil", "nav-edu": "Éducation", "nav-exam": "Auto-examen", "nav-assess": "Évaluation", "nav-map": "Centres Khenchela",
        "hero-title": "Bienvenue sur la plateforme", "hero-desc": "Une plateforme santé numérique intelligente visant à contribuer au dépistage précoce du cancer du sein par la sensibilisation et l'évaluation des risques.",
        "what-is-title": "Qu'est-ce que le cancer du sein ?", "what-is-desc": "C'est une prolifération incontrôlée de cellules anormales dans le tissu mammaire. C'est le cancer le plus fréquent chez les femmes.",
        "importance-title": "Importance du dépistage précoce", "importance-desc": "Le dépistage précoce permet de sauver des vies dans plus de 90% des cas et facilite grandement le traitement.",
        "stats-title": "Statistiques et Sensibilisation", "stat-1": "1 femme sur 8 touchée dans le monde", "stat-2": "Taux de guérison si dépistage précoce", "stat-3": "Le plus répandu en Algérie et dans le monde",
        "edu-title": "Éducation Sanitaire", "edu-c1-t": "Facteurs de Risque", "edu-c1-d": "Âge, antécédents familiaux, mutations génétiques, tabagisme, obésité et sédentarité.",
        "edu-c2-t": "Signes d'Alerte Précoces", "edu-c2-d": "Apparition d'une masse, changement de forme, écoulement anormal du mamelon.",
        "edu-c3-t": "Méthodes de Prévention", "edu-c3-d": "Alimentation saine, activité physique, allaitement et examens réguliers.",
        "exam-title": "Guide de l'Auto-examen (Pas à Pas)", "step1-t": "Observation devant le miroir", "step1-d": "Vérifiez s'il y a des changements de forme, de taille ou de couleur de la peau.",
        "step2-t": "Lever les bras", "step2-d": "Levez les bras et observez la symétrie des seins.",
        "step3-t": "Palpation circulaire", "step3-d": "Palpez avec le bout des doigts de façon circulaire de l'extérieur vers le mamelon.",
        "assess-title": "Évaluation Intelligente des Risques", "q-age": "1. Âge :", "q-history": "2. Antécédents familiaux de cancer du sein ?", "q-lifestyle": "3. Mode de vie (Sédentarité, tabagisme, obésité) :", "q-symptoms": "4. Présentez-vous des symptômes actuellement ? (douleur, masse) :",
        "opt-no": "Non", "opt-yes": "Oui", "opt-good": "Sain / Actif", "opt-bad": "Malsain / Sédentaire", "btn-analyze": "Analyser les données",
        "disclaimer": "⚠️ Note: Cette évaluation est une probabilité. Le diagnostic doit être confirmé par un médecin.",
        "secure-db": "Base de données sécurisée & Protection des données privées", "created-by": "Créé par :", "contact": "Contact :",
        
        // ترجمة فرنسية للمراكز الصحية
        "map-title": "Établissements de Santé à Khenchela",
        "map-sub1": "I. Établissements Publics Hospitaliers (EPH / EHS)",
        "map-sub2": "II. Établissements Publics de Santé de Proximité (EPSP)",
        "map-intro": "Ces structures gèrent les polycliniques et salles de soins à travers les communes :",
        "h-hosp1": "EPH Ahmed Ben Bella - Khenchela", "d-hosp1": "Hôpital principal du chef-lieu de la wilaya, services médicaux et chirurgicaux.",
        "h-hosp2": "EHS Gynécologie-Obstétrique Salhi Belkacem", "d-hosp2": "Établissement spécialisé de la mère et de l'enfant à Khenchela.",
        "h-hosp3": "EPH Ali Boushaba - Khenchela", "d-hosp3": "Structure hospitalière de soutien pour la couverture sanitaire au chef-lieu.",
        "h-hosp4": "EPH Kais", "d-hosp4": "Couvre la daïra de Kais et communes limitrophes en chirurgie et médecine.",
        "h-hosp5": "EPH Chechar (Chadli Bendjedid)", "d-hosp5": "Assure la couverture sanitaire et les urgences de la zone Sud.",
        "h-hosp6": "EPH Ouled Rechache", "d-hosp6": "Fournit des soins médicaux pour la daïra d'Ouled Rechache.",
        "h-hosp7": "EPH Bouhmama", "d-hosp7": "Établissement vital desservant la zone montagneuse et l'Ouest.",
        "h-epsp1": "EPSP Khenchela", "d-epsp1": "Couvre le chef-lieu de la wilaya et ses environs.",
        "h-epsp2": "EPSP Kais", "d-epsp2": "Gère la santé de proximité et la vaccination à Kais.",
        "h-epsp3": "EPSP Chechar", "d-epsp3": "Assure les soins primaires pour la daïra de Chechar.",
        "h-epsp4": "EPSP El Mahmal", "d-epsp4": "Supervise les structures de proximité de la commune d'El Mahmal.",
        "h-epsp5": "EPSP Yabous", "d-epsp5": "Couvre la daïra de Bouhmama et la commune de Yabous.",
        "h-epsp6": "EPSP Djellal", "d-epsp6": "Centre de soins primaires pour le Sud et les zones pastorales de Djellal."
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'fr' : 'ar';
    document.body.className = currentLang === 'fr' ? 'lang-fr' : '';
    document.documentElement.dir = currentLang === 'fr' ? 'ltr' : 'rtl';
    document.documentElement.lang = currentLang;
    
    document.querySelector('.lang-btn').innerText = currentLang === 'ar' ? 'Français' : 'العربية';

    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (langData[currentLang][key]) {
            el.innerText = langData[currentLang][key];
        }
    });
}

function switchSection(sectionId, element) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active-section'));
    document.querySelectorAll('nav ul li a').forEach(link => link.classList.remove('active'));
    
    document.getElementById(sectionId).classList.add('active-section');
    element.classList.add('active');
}

function calculateRisk(event) {
    event.preventDefault();
    
    const age = parseInt(document.getElementById('age').value);
    const family = document.getElementById('familyHistory').value;
    const lifestyle = document.getElementById('lifestyle').value;
    const symptoms = document.getElementById('symptoms').value;

    let score = 0;

    if (age > 40) score += 2;
    if (family === 'yes') score += 3;
    if (lifestyle === 'unhealthy') score += 1;
    if (symptoms === 'yes') score += 4;

    const resDiv = document.getElementById('assessmentResult');
    const resTitle = document.getElementById('resultTitle');
    const resDesc = document.getElementById('resultDesc');

    resDiv.className = ""; 
    resDiv.style.display = "block";

    if (score <= 2) {
        resDiv.classList.add('result-low');
        resTitle.innerText = currentLang === 'ar' ? "خطر منخفض" : "Risque Faible";
        resDesc.innerText = currentLang === 'ar' ? "نمط حياتك جيد وعوامل الخطر لديك منخفضة. واصلي المتابعة الذاتية الدورية." : "Votre niveau de risque est faible. Continuez l'auto-examen régulier.";
    } else if (score <= 5) {
        resDiv.classList.add('result-medium');
        resTitle.innerText = currentLang === 'ar' ? "خطر متوسط" : "Risque Modéré";
        resDesc.innerText = currentLang === 'ar' ? "يُنصح بتحسين نمط الحياة واستشارة الطبيب العام للقيام بفحص وقائي دوري." : "Conseillé d'améliorer votre mode de vie et de consulter pour un contrôle.";
    } else {
        resDiv.classList.add('result-high');
        resTitle.innerText = currentLang === 'ar' ? "خطر مرتفع أو وجود أعراض" : "Risque Élevé / Symptômes Présents";
        resDesc.innerText = currentLang === 'ar' ? "يرجى التوجه في أقرب وقت لأقرب مركز صحي أو عيادة في ولاية خنشلة لإجراء فحص التصوير الشعاعي (Mammographie)." : "Veuillez consulter un médecin spécialiste à Khenchela le plus tôt possible pour une mammographie.";
    }
}