document.documentElement.classList.add('js');

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.navlinks');

menuToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', open);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('.card-toggle').forEach(button => {
  button.addEventListener('click', () => {
    const list = button.nextElementSibling;
    const open = list.classList.toggle('open');
    button.setAttribute('aria-expanded', open);
    button.querySelector('span').textContent = open ? '−' : '+';
  });
});

document.querySelectorAll('.accordion button').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const open = answer.classList.toggle('open');
    button.setAttribute('aria-expanded', open);
    button.querySelector('b').textContent = open ? '−' : '+';
  });
});

const courseDetails = {
  'assistant-medical': {
    title: 'Assistant en cabinet médical',
    domain: 'Domaine santé',
    image: 'assets/f-assistant-medical.webp',
    description: 'Formation professionnelle orientée vers l’accueil, l’organisation administrative et l’accompagnement des patients dans un cabinet médical.'
  },
  'sage-femme': {
    title: 'Assistante sage-femme',
    domain: 'Domaine santé',
    image: 'assets/f-sage-femme.webp',
    description: 'Formation professionnelle destinée à préparer un appui aux soins maternels et au travail des professionnels de la santé féminine.'
  },
  'vendeur-pharmacie': {
    title: 'Vendeur en pharmacie',
    domain: 'Domaine santé',
    image: 'assets/domaine-sante.webp',
    description: 'Formation professionnelle centrée sur l’accueil de la clientèle, la présentation des produits et l’organisation générale d’une officine.'
  },
  'auxiliaire-vie': {
    title: 'Auxiliaire de vie',
    domain: 'Domaine santé',
    image: 'assets/f-auxiliaire-vie.webp',
    description: 'Formation professionnelle axée sur le soutien aux personnes dépendantes dans leurs activités quotidiennes et leur environnement.'
  },
  'laboratoire': {
    title: 'Technicien de laboratoire',
    domain: 'Domaine santé',
    image: 'assets/f-laboratoire.webp',
    description: 'Formation professionnelle liée à l’aide technique, à la préparation des activités et à l’organisation de base d’un laboratoire.'
  },
  'comptabilite': {
    title: 'Comptabilité informatisée de gestion',
    domain: 'TIC & management',
    image: 'assets/f-comptabilite.webp',
    description: 'Formation professionnelle centrée sur la gestion comptable, la saisie des opérations et l’utilisation d’outils informatiques adaptés.'
  },
  'douane': {
    title: 'Douane et transit',
    domain: 'TIC & management',
    image: 'assets/f-douane-transit.webp',
    description: 'Formation professionnelle portant sur les procédures douanières, les formalités administratives et le suivi des opérations de transport.'
  },
  'banque': {
    title: 'Banque & microfinance',
    domain: 'TIC & management',
    image: 'assets/f-banque-microfinance.webp',
    description: 'Formation professionnelle destinée aux métiers d’accueil, d’opérations courantes, de suivi des dossiers et de culture financière.'
  },
  'transport': {
    title: 'Transport & logistique',
    domain: 'TIC & management',
    image: 'assets/f-transport-logistique.webp',
    description: 'Formation professionnelle portant sur l’organisation des flux, la planification, la conservation et la livraison des marchandises.'
  },
  'infographie': {
    title: 'Infographie',
    domain: 'TIC & management',
    image: 'assets/f-infographie.webp',
    description: 'Formation professionnelle axée sur la création graphique, la mise en page et la production de supports visuels.'
  },
  'maintenance': {
    title: 'Maintenance informatique & réseaux',
    domain: 'TIC & management',
    image: 'assets/f-maintenance.webp',
    description: 'Formation professionnelle portant sur le diagnostic, le dépannage, l’installation et l’entretien des équipements numériques et réseaux.'
  },
  'secretariat': {
    title: 'Secrétariat bureautique',
    domain: 'TIC & management',
    image: 'assets/f-secretariat.webp',
    description: 'Formation professionnelle dédiée à la rédaction, au classement, à la communication professionnelle et à la gestion administrative.'
  },
  'marketing': {
    title: 'Marketing digital',
    domain: 'TIC & management',
    image: 'assets/f-marketing-digital.webp',
    description: 'Formation professionnelle orientée vers la communication numérique, les réseaux sociaux, la création de contenu et les campagnes en ligne.'
  }
};

document.querySelectorAll('.formation-card').forEach(card => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', event => {
    if (event.target.closest('.card-toggle')) return;
    const target = card.dataset.domain === 'sante' ? 'filiere-sante' : 'tic-business';
    window.location.href = `formations.html#${target}`;
  });
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) contactForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const firstName = form.elements.firstName ? form.elements.firstName.value.trim() : form.elements.name.value.trim();
  const lastName = form.elements.lastName ? form.elements.lastName.value.trim() : '';
  const fullName = `${firstName} ${lastName}`.trim();
  const phone = form.elements.phone.value.trim();
  const email = form.elements.email ? form.elements.email.value.trim() : '';
  const formation = form.elements.formation.value;
  const level = form.elements.level ? form.elements.level.value : '';
  const intake = form.elements.intake ? form.elements.intake.value : '';
  const project = form.elements.project ? form.elements.project.value.trim() : '';
  const message = [
    `Bonjour, je souhaite déposer une candidature.`,
    `Prénom et nom : ${fullName}`,
    email && `E-mail : ${email}`,
    `Téléphone : ${phone}`,
    `Filière souhaitée : ${formation}`,
    level && `Dernier niveau d’études : ${level}`,
    intake && `Rentrée visée : ${intake}`,
    project && `Projet : ${project}`
  ].filter(Boolean).join('\n');
  window.open(`https://wa.me/237681574613?text=${encodeURIComponent(message)}`, '_blank');
});

if (!localStorage.getItem('precious-cookie-consent')) {
  const cookieBanner = document.createElement('div');
  cookieBanner.className = 'cookie-banner';
  cookieBanner.setAttribute('role', 'dialog');
  cookieBanner.setAttribute('aria-label', 'Consentement aux cookies');
  cookieBanner.innerHTML = `
    <div class="cookie-card">
      <div class="cookie-intro">
        <div class="cookie-title">Bonjour, nous utilisons des cookies.</div>
        <p>Ils nous permettent d’améliorer votre expérience sur notre site, d’analyser la fréquentation et de mesurer l’efficacité de notre contenu.</p>
        <button class="cookie-learn" type="button">En savoir plus sur les cookies</button>
      </div>
      <div class="cookie-actions">
        <button class="cookie-button cookie-reject" type="button">Tout refuser</button>
        <button class="cookie-button cookie-customize" type="button">Personnaliser</button>
        <button class="cookie-button cookie-accept" type="button">Tout accepter</button>
      </div>
    </div>
  `;
  document.body.appendChild(cookieBanner);

  const saveConsent = (value) => {
    localStorage.setItem('precious-cookie-consent', JSON.stringify(value));
    cookieBanner.remove();
  };

  cookieBanner.querySelector('.cookie-accept').addEventListener('click', () => {
    saveConsent({essential:true,analytics:true,preferences:true,marketing:false});
  });
  cookieBanner.querySelector('.cookie-reject').addEventListener('click', () => {
    saveConsent({essential:true,analytics:false,preferences:false,marketing:false});
  });
  cookieBanner.querySelector('.cookie-customize').addEventListener('click', () => {
    cookieBanner.querySelector('.cookie-card').classList.add('customizing');
    cookieBanner.querySelector('.cookie-intro').insertAdjacentHTML('beforeend', `
      <div class="cookie-options">
        <label><span><strong>Cookies essentiels</strong><small>Indispensables au fonctionnement du site</small></span><input type="checkbox" checked disabled></label>
        <label><span><strong>Cookies de mesure</strong><small>Audience et statistiques anonymes</small></span><input type="checkbox" name="analytics"></label>
        <label><span><strong>Cookies de préférence</strong><small>Mémorisation de vos choix</small></span><input type="checkbox" name="preferences" checked></label>
      </div>
    `);
    const actions = cookieBanner.querySelector('.cookie-actions');
    actions.innerHTML = '<button class="cookie-button cookie-confirm" type="button">Confirmer mes choix</button>';
    actions.querySelector('.cookie-confirm').addEventListener('click', () => {
      saveConsent({
        essential:true,
        analytics:cookieBanner.querySelector('[name="analytics"]').checked,
        preferences:cookieBanner.querySelector('[name="preferences"]').checked,
        marketing:false
      });
    });
  });
  cookieBanner.querySelector('.cookie-learn').addEventListener('click', () => {
    cookieBanner.querySelector('.cookie-customize').click();
  });
}

const translations = {
  fr: {
    'Accueil':'Accueil','Formations':'Formations','Le centre':'Le centre','Admissions':'Admissions','Vie au centre':'Vie au centre','Candidater':'Candidater',
    'Construisez les compétences qui ouvrent les portes.':'Construisez les compétences qui ouvrent les portes.',
    'Découvrir les formations':'Découvrir les formations','Découvrir le centre':'Découvrir le centre','Nous rejoindre':'Nous rejoindre',
    'Votre avenir, notre priorité !':'Votre avenir, notre priorité !','Nous trouver':'Nous trouver','Conditions d\'accès':'Conditions d\'accès',
    'Qui peut rejoindre le centre ?':'Qui peut rejoindre le centre ?','Formulaire de candidature':'Formulaire de candidature',
    'Nom complet':'Nom complet','Téléphone':'Téléphone','Dernier diplôme':'Dernier diplôme','Formation souhaitée':'Formation souhaitée',
    'Envoyer sur WhatsApp':'Envoyer sur WhatsApp','Diplômes français':'Diplômes français','Niveaux GCE anglais':'Niveaux GCE anglais',
    'Notre identité':'Notre identité','Qui sommes-nous ?':'Qui sommes-nous ?','Notre engagement':'Notre engagement',
    'Vie au centre':'Vie au centre','Apprendre, pratiquer, progresser.':'Apprendre, pratiquer, progresser.',
    'Toutes les formations':'Toutes les formations','Intéressé par cette filière ?':'Intéressé par cette filière ?',
    'Autres filières':'Autres filières','Besoin d’un conseil ?':'Besoin d’un conseil ?','Déposer ma candidature':'Déposer ma candidature'
  },
  en: {
    'Accueil':'Home','Formations':'Programs','Le centre':'The Center','Admissions':'Admissions','Vie au centre':'Life at the Center','Candidater':'Apply',
    'Construisez les compétences qui ouvrent les portes.':'Build the skills that open doors.',
    'Découvrir les formations':'Discover our programs','Découvrir le centre':'Discover the center','Nous rejoindre':'Join us',
    'Votre avenir, notre priorité !':'Your future, our priority!','Nous trouver':'Find us','Conditions d\'accès':'Admission requirements',
    'Qui peut rejoindre le centre ?':'Who can join the center?','Formulaire de candidature':'Application form',
    'Nom complet':'Full name','Téléphone':'Phone','Dernier diplôme':'Highest qualification','Formation souhaitée':'Desired program',
    'Envoyer sur WhatsApp':'Send via WhatsApp','Diplômes français':'French qualifications','Niveaux GCE anglais':'GCE qualifications',
    'Notre identité':'Our identity','Qui sommes-nous ?':'Who are we?','Notre engagement':'Our commitment',
    'Vie au centre':'Life at the Center','Apprendre, pratiquer, progresser.':'Learn, practice, progress.',
    'Toutes les formations':'All programs','Intéressé par cette filière ?':'Interested in this program?',
    'Autres filières':'Other programs','Besoin d’un conseil ?':'Need guidance?','Déposer ma candidature':'Submit application'
    ,'Quels sont les niveaux requis ?':'What qualifications are required?','Les candidats peuvent être titulaires de l’un des niveaux suivants :':'Candidates can hold any of the following qualifications:',
    'Diplômes français':'French qualifications','Niveaux GCE anglais':'English GCE qualifications',
    'Licence et plus':'Higher National Diploma or above','GCE Ordinary Level':'GCE Ordinary Level','GCE Advanced Level':'GCE Advanced Level',
    'Contact':'Contact','Santé':'Health','TIC & management':'ICT & Business',
    'Centre de formation professionnelle agréé':'Accredited vocational training center',
    'Centre de formation professionnelle agréé, sous le haut patronage du MINFOP.':'Accredited vocational training center under the high patronage of MINFOP.',
    'Centre de formation professionnelle agréé sous le haut patronage du MINFOP.':'Accredited vocational training center under the high patronage of MINFOP.',
    'Construisez les compétences qui':'Build the skills that','ouvrent les portes.':'open doors.',
    'Le professionnalisme, l\'employabilité et votre réussite sont au cœur de nos formations en santé, informatique et métiers du tertiaire.':'Professionalism, employability and your success are at the heart of our healthcare, IT and business programs.',
    'Notre centre':'Our center','SOUS HAUT PATRONAGE DU MINFOP':'UNDER THE HIGH PATRONAGE OF MINFOP',
    'FORMATION CERTIFIANTE':'CERTIFIED TRAINING','STAGE & INSERTION':'INTERNSHIP & CAREER SUPPORT',
    'filières annoncées':'programs offered','sur les flyers':'as listed on our flyers',
    'À propos du centre':'About the center','Une formation pratique pour un avenir professionnel solide.':'Practical training for a strong professional future.',
    'Si vous êtes titulaire du CEP, BEPC, Baccalauréat, BTS, Licence ou d\'un niveau GCE Ordinary/Advanced Level, Precious Vocational Training Center vous accompagne pendant une formation d\'un an.':'Whether you hold a CEP, BEPC, Baccalaureate, BTS, Licence, GCE Ordinary Level or GCE Advanced Level, Precious Vocational Training Center supports you through a one-year program.',
    'Encadrement par des formateurs qualifiés':'Guidance from qualified instructors',
    'Programmes orientés pratique et emploi':'Practical, job-focused programs',
    'Stage académique et accompagnement à l\'insertion':'Academic internship and career support',
    'Nos formations':'Our programs','Choisissez la voie qui vous ressemble.':'Choose the path that suits you.',
    'Des parcours accessibles, professionnalisants et adaptés aux besoins actuels du marché de l\'emploi.':'Accessible, career-focused programs designed for today’s job market.',
    'Santé':'Healthcare','Domaines de la santé':'Healthcare programs','Domaines des TIC':'ICT programs',
    'Gestion & finance':'Management & Finance','Devenez un professionnel qualifié et opérationnel.':'Become a qualified, job-ready professional.',
    'Maîtrisez les outils du monde numérique.':'Master the tools of the digital world.',
    'Acquérez les compétences des métiers tertiaires.':'Build skills for business and administration careers.',
    'Voir les métiers':'Explore careers','Laboratoire':'Laboratory',
    'Pourquoi nous choisir':'Why choose us?','Tout est pensé pour votre réussite.':'Everything is designed for your success.',
    'Formation accélérée':'Fast-track training','Une formation complète en 1 an pour entrer rapidement sur le marché du travail.':'Complete your training in one year and prepare to enter the job market.',
    'Diplômes professionnels':'Professional qualifications','Préparez une qualification DQP ou CQP reconnue dans votre domaine.':'Prepare for a DQP or CQP qualification in your field.',
    'Insertion professionnelle':'Career integration','Bénéficiez d\'un stage académique et d\'un accompagnement vers l\'emploi.':'Benefit from an academic internship and support in finding employment.',
    'année de formation':'year of training','filières annoncées':'programs offered','grands domaines':'main fields','total des frais':'total fees',
    'Stages & débouchés':'Internships & careers','« Une formation d\'un an pour préparer une qualification DQP ou CQP et favoriser l\'insertion professionnelle. »':'“One year of training to prepare for a DQP or CQP qualification and support career integration.”',
    'Placement assuré selon les informations du flyer anglais':'Internship placement arranged according to the English flyer',
    'Les principales formations professionnelles sont organisées sur une durée d\'un an.':'The main vocational programs last one year.',
    'Prêt à commencer ?':'Ready to get started?','Faites le premier pas vers votre avenir.':'Take the first step toward your future.',
    'Notre équipe vous accompagne dans le choix de la formation adaptée à votre niveau et à vos objectifs.':'Our team can help you choose a program suited to your qualifications and goals.',
    'Choisir une formation':'Choose a program','Gestion & finance':'Management & Finance',
    'Former pour faire la différence.':'Training that makes a difference.',
    'Un centre professionnel agréé placé sous le haut patronage du MINFOP, au service de l\'emploi des jeunes.':'An accredited vocational training center under the high patronage of MINFOP, supporting young people’s employment.',
    'Qui sommes-nous ?':'Who are we?','Une formation pratique, accessible et tournée vers l\'emploi.':'Accessible, practical training focused on employment.',
    'Precious Vocational Training Center accompagne les candidats titulaires du CEP, BEPC, Baccalauréat, BTS, Licence, GCE Ordinary Level ou GCE Advanced Level dans l\'acquisition de compétences professionnelles. Nos formations durent un an et préparent aux qualifications DQP ou CQP.':'Precious Vocational Training Center supports applicants holding a CEP, BEPC, Baccalaureate, BTS, Licence, GCE Ordinary Level or GCE Advanced Level as they develop professional skills. Programs last one year and prepare learners for DQP or CQP qualifications.',
    'Encadrement professionnel':'Professional guidance','Apprentissage orienté pratique':'Hands-on learning',
    'Objectif d\'insertion professionnelle':'Career integration objective','Notre engagement':'Our commitment',
    'Votre réussite est notre priorité.':'Your success is our priority.',
    'Une qualification rapide':'A qualification in one year','Une formation complète en une année pour préparer une qualification DQP ou CQP.':'One year of comprehensive training to prepare for a DQP or CQP qualification.',
    'Des métiers professionnels':'Professional career paths','Le centre propose des filières santé, TIC, comptabilité, douane, banque, transport et logistique.':'The center offers programs in healthcare, ICT, accounting, customs, banking, transport and logistics.',
    'Un stage académique':'An academic internship','Le flyer annonce l\'organisation ou la recherche d\'un stage académique par le centre pour favoriser l\'insertion professionnelle.':'The flyer states that the center arranges or finds an academic internship to support career integration.',
    'Vie au centre':'Life at the center','Apprendre, pratiquer, progresser.':'Learn, practice, progress.',
    'Catalogue 2026':'2026 catalog','Nos formations professionnelles.':'Our vocational programs.',
    'Nos formations':'Our programs','Nos formations professionnelles':'Our vocational programs',
    'Conditions d\'accès':'Admission requirements','Qui peut rejoindre le centre ?':'Who can join the center?',
    'Les candidats peuvent être titulaires de l’un des niveaux suivants :':'Applicants may hold one of the following qualifications:',
    'Votre avenir commence ici.':'Your future starts here.',
    'Déposez votre candidature ou contactez-nous pour obtenir toutes les informations sur les formations.':'Submit your application or contact us for information about our programs.',
    'Entrée Mini-Cité':'Mini-Cité entrance','Tous les niveaux suivants sont acceptés':'All of the following qualifications are accepted',
    'Demande de candidature':'Application request','Dernier diplôme':'Highest qualification',
    'Voir les formations':'View programs','Toutes les formations':'All programs',
    'Candidater pour cette formation':'Apply for this program',
    'Intéressé par cette filière ?':'Interested in this program?',
    'Déposez votre candidature en ligne. Notre équipe vous contactera pour un entretien d\'orientation.':'Submit your application online. Our team will contact you for an orientation interview.',
    'Admission':'Admission','Voir les niveaux':'View requirements','Autres filières':'Other programs',
    'Besoin d’un conseil ?':'Need advice?','Un doute sur votre niveau ou votre choix de formation ?':'Unsure about your qualifications or which program to choose?',
    'Nous écrire sur WhatsApp →':'Message us on WhatsApp →',
    'Temps plein':'Full-time','Frais de formation':'Tuition fee','Frais d’inscription':'Registration fee',
    'Caugefar Village':'Caugefar Village','Appel':'Call','Nous trouver':'Find us',
    'Catalogue 2026':'2026 Programs','Nos formations professionnelles.':'Our vocational programs.',
    'Se former pour réussir sa carrière.':'Train for a successful career.',
    'Découvrez nos parcours santé, TIC et management. Chaque formation est préparée pour une durée d’un an avec un objectif d’insertion professionnelle.':'Explore our healthcare, ICT and business programs. Each program lasts one year and aims to support your professional integration.',
    'Découvrir les formations':'Explore programs','Notre accompagnement':'Our support',
    'Tous les outils pour réussir votre formation.':'Everything you need to succeed in your training.',
    'Le centre vous accompagne dans votre parcours professionnel et vous prépare aux exigences du marché de l’emploi.':'Our center supports your professional journey and prepares you for the demands of the job market.',
    'Des formations pratiques':'Practical training','Des parcours organisés autour des compétences professionnelles du domaine choisi.':'Programs focused on the professional skills required in your chosen field.',
    'Une pédagogie appliquée':'Hands-on learning','Des activités de formation orientées vers les situations professionnelles.':'Training activities built around real professional situations.',
    'Des qualifications DQP / CQP':'DQP / CQP qualifications','Des formations annoncées pour préparer une qualification professionnelle en un an.':'Programs designed to prepare you for a professional qualification in one year.',
    'Un stage académique':'Academic internship','Le centre annonce la recherche ou la mise en place d’un placement pour le stage.':'The center states that it arranges or finds an academic internship placement.',
    'Domaine santé':'Healthcare','Domaines TIC & management':'ICT & Business',
    'Des métiers essentiels au quotidien.':'Essential careers for everyday life.',
    'Les compétences recherchées maintenant.':'Skills in demand today.',
    'Formations accessibles aux niveaux annoncés sur les flyers : CEP, BEPC, Baccalauréat, BTS, Licence, GCE Ordinary Level et GCE Advanced Level.':'Programs are open to applicants with the qualifications listed on our flyers: CEP, BEPC, Baccalaureate, BTS, Licence, GCE Ordinary Level or GCE Advanced Level.',
    'Maîtrisez les outils numériques, administratifs et financiers indispensables aux entreprises.':'Master the digital, administrative and financial tools businesses need.',
    'Frais de formation':'Tuition fee','Frais d’inscription':'Registration fee','Frais d\'inscription':'Registration fee',
    'Total indiqué':'Total shown','1 an':'1 year','Voir la fiche →':'View program →',
    'Assistant en cabinet médical':'Medical Office Assistant','Assistante sage-femme':'Midwife Assistant',
    'Vendeur en pharmacie':'Pharmacy Sales Assistant','Auxiliaire de vie':'Care Assistant',
    'Technicien de laboratoire':'Laboratory Technician','Comptabilité informatisée de gestion':'Computerized Management Accounting',
    'Douane et transit':'Customs and Transit','Banque & microfinance':'Banking and Microfinance',
    'Transport & logistique':'Transport and Logistics','Infographie':'Graphic Design',
    'Maintenance informatique & réseaux':'IT Maintenance and Networking','Secrétariat bureautique':'Office Administration',
    'Marketing digital':'Digital Marketing','Durée':'Duration','Qualification':'Qualification',
    'Accompagnement':'Support','Stage académique':'Academic internship',
    'Votre avenir commence ici.':'Your future starts here.',
    'Déposez votre candidature ou contactez-nous pour obtenir toutes les informations sur les formations.':'Apply or contact us for more information about our programs.',
    'Vous pouvez candidater si vous êtes titulaire de l’un des niveaux suivants :':'You can apply if you hold one of the following qualifications:',
    'Licence et plus':'Licence or above','Choisir':'Select','Choisir une formation':'Select a program',
    'Choisir une formation':'Select a program','Assistant en cabinet médical':'Medical Office Assistant',
    'Caugefar Village':'Caugefar Village','Entrée Mini-Cité':'Mini-Cité entrance',
    'Appel':'Call','Nous contacter':'Contact us','Questions fréquentes':'Frequently asked questions',
    'Besoin d’en savoir plus ?':'Need more information?','Quelle est la durée des formations ?':'How long are the programs?',
    'Comment déposer une candidature ?':'How do I apply?','La formation dure un an.':'The program lasts one year.',
    'Appelez-nous, écrivez-nous sur WhatsApp ou remplissez le formulaire de contact.':'Call us, message us on WhatsApp, or fill out the contact form.',
    'Tout accepter':'Accept all','Tout refuser':'Reject all','Personnaliser':'Customize',
    'Bonjour, nous utilisons des cookies.':'Hello, we use cookies.',
    'En savoir plus sur les cookies':'Learn more about cookies',
    'Confirmer mes choix':'Confirm my choices','Cookies essentiels':'Essential cookies',
    'Cookies de mesure':'Analytics cookies','Cookies de préférence':'Preference cookies',
    'Indispensables au fonctionnement du site':'Required for the website to function',
    'Audience et statistiques anonymes':'Anonymous audience statistics',
    'Mémorisation de vos choix':'Remember your choices',
    'Rejoindre Precious, étape par étape.':'Join Precious, step by step.',
    'Une formation en 1 an, ouverte aux titulaires du CEP, BEPC, Baccalauréat, BTS, Licence et plus ou du GCE Ordinary Level et Higher Level, pour préparer un DQP ou un CQP. L’admission se fait après étude du dossier et entretien de motivation.':'A one-year program open to holders of the CEP, BEPC, Baccalaureate, BTS, Licence or higher, or GCE Ordinary Level and Higher Level, preparing learners for a DQP or CQP. Admission follows an application review and a motivation interview.',
    'Déposer ma candidature':'Submit my application','Consulter les tarifs':'View tuition fees',
    'Votre parcours d’admission':'Your admissions journey','Quatre étapes pour nous rejoindre.':'Four steps to join us.',
    'Consultez les filières, préparez votre dossier et échangez avec notre équipe pour choisir un parcours adapté.':'Explore the programs, prepare your application and talk with our team to choose a suitable path.',
    'Choisir sa filière':'Choose your program','Consultez les programmes, les durées et les conditions d’accès. Un conseiller peut vous aider à comparer.':'Review programs, duration and admission requirements. An advisor can help you compare your options.',
    'Voir les formations →':'Explore programs →','Déposer son dossier':'Submit your application',
    'Remplissez le formulaire en ligne ci-dessous ou déposez un dossier papier à l’accueil du centre.':'Complete the online form below or submit a paper application at the center.',
    'Accéder au formulaire →':'Go to the form →','Passer l’entretien':'Attend an interview',
    'Échange de motivation et, selon la filière, test de niveau, de logique ou de créativité.':'A motivation interview and, depending on the program, a skills, logic or creativity test.',
    'Finaliser l’inscription':'Complete your registration',
    'Réponse sous 48 heures ouvrées, puis remise du calendrier et des modalités de paiement.':'A response within 48 business hours, followed by the schedule and payment arrangements.',
    'La formation est accessible aux titulaires d’un diplôme francophone ou anglophone. L’orientation vers le DQP ou le CQP est confirmée lors de l’entretien selon les prérequis.':'The program is open to applicants with French- or English-language qualifications. DQP or CQP placement is confirmed during the interview based on your qualifications.',
    'Diplômes francophones':'French-language qualifications','Niveaux anglophones':'English-language qualifications',
    'GCE Advanced / Higher Level':'GCE Advanced / Higher Level',
    'Diplôme de Qualification Professionnelle.':'Professional Qualification Diploma.',
    'Certificat de Qualification Professionnelle.':'Professional Qualification Certificate.',
    'Durée :':'Duration:','un an de formation. Le stage académique est trouvé par le centre, encadré et validé en fin de parcours.':'one year of training. The center finds and supervises the academic internship, which is validated at the end of the program.',
    'Filières santé :':'Healthcare programs:',
    'entretien renforcé et vérification des aptitudes au contact des patients.':'an in-depth interview and assessment of suitability for working with patients.',
    'Pièces à fournir':'Documents to provide','Un dossier complet accélère l’étude de votre candidature.':'A complete application helps speed up the review.',
    'Formulaire de candidature complété et signé':'Completed and signed application form',
    'Copie de la pièce d’identité':'Copy of your identity document','Copie du dernier diplôme ou relevé de notes':'Copy of your latest diploma or transcript',
    'Deux photos d’identité récentes':'Two recent ID photos','Lettre de motivation (une page maximum)':'Cover letter (one page maximum)',
    'Pour les filières santé : carnet de vaccination à jour':'For healthcare programs: up-to-date vaccination record',
    'Total':'Total','Frais de formation (1 an)':'Tuition fee (1 year)',
    'Montants en francs CFA (FRS). Contactez le centre pour connaître les modalités de paiement échelonné.':'Amounts are in CFA francs (FRS). Contact the center for information about installment payments.',
    'Déposez votre dossier en ligne.':'Submit your application online.',
    'Remplissez ce formulaire : notre équipe vous répond sous 48 heures ouvrées pour fixer un entretien d’orientation.':'Complete this form: our team will contact you within 48 business hours to arrange an orientation interview.',
    'Prénom *':'First name *','Nom *':'Last name *','E-mail *':'Email *','Téléphone *':'Phone *',
    'Filière souhaitée *':'Desired program *','Sélectionnez une filière':'Select a program',
    'Dernier niveau d’études':'Highest qualification','Sélectionnez votre niveau...':'Select your qualification...',
    'Baccalauréat / Probatoire':'Baccalaureate / Probatoire','BTS / DUT':'BTS / DUT',
    'Autre équivalence':'Other equivalent qualification','Rentrée visée':'Intended intake',
    'Choisissez le jour, le mois et l’année de rentrée souhaités.':'Choose your preferred intake day, month and year.',
    'Votre projet en quelques mots':'Tell us briefly about your plans',
    'Facultatif, mais utile pour préparer l’entretien.':'Optional, but helpful in preparing for your interview.',
    'Parlez-nous brièvement de votre projet...':'Tell us briefly about your plans...',
    'J’accepte d’être contacté au sujet de ma candidature. Vos données restent confidentielles, servent uniquement au traitement de votre dossier et ne sont jamais revendues.':'I agree to be contacted about my application. Your information remains confidential, is used only to process your application and is never resold.',
    'Envoyer ma candidature':'Send my application','Votre demande sera préparée dans WhatsApp pour être envoyée à notre équipe.':'Your application message will be prepared in WhatsApp for you to send to our team.',
    'Par téléphone :':'By phone:','Par WhatsApp :':'On WhatsApp:',
    'Les questions que l’on nous pose le plus.':'Frequently asked questions.',
    'Une autre question ? Écrivez-nous, nous répondons simplement.':'Have another question? Message us and we’ll be happy to help.',
    'Quels niveaux d’études sont acceptés ?':'Which qualifications are accepted?',
    'La formation est ouverte aux titulaires des diplômes francophones (CEP, BEPC, Baccalauréat, BTS, Licence et plus) ainsi qu’aux titulaires du GCE, GCE Ordinary Level ou Higher Level. L’orientation vers le DQP ou le CQP est confirmée lors de l’entretien selon vos prérequis.':'The program is open to applicants with French-language qualifications (CEP, BEPC, Baccalaureate, BTS, Licence and above), as well as GCE, GCE Ordinary Level or Higher Level. DQP or CQP placement is confirmed during the interview based on your qualifications.',
    'Combien de temps dure la formation ?':'How long does the program last?',
    'La formation dure un an et prépare à un DQP ou à un CQP selon la filière et votre parcours.':'The program lasts one year and prepares you for a DQP or CQP, depending on the program and your background.',
    'Comment se déroule l’admission ?':'How does the admission process work?',
    'Après réception du dossier, un entretien de motivation est organisé. Selon la filière, un test de niveau, de logique ou de créativité peut être proposé. Une réponse est communiquée sous 48 heures ouvrées.':'After your application is received, a motivation interview is arranged. Depending on the program, a skills, logic or creativity test may be offered. A response is provided within 48 business hours.',
    'Le centre aide-t-il à trouver un stage ?':'Does the center help find an internship?',
    'Le stage académique est trouvé par le centre, encadré et validé en fin de parcours.':'The center finds and supervises the academic internship, which is validated at the end of the program.',
    'Quels sont les frais de formation ?':'What are the tuition fees?',
    'Les frais d’inscription s’élèvent à 10 000 FRS et les frais de formation pour un an à 250 000 FRS. Contactez le centre pour les modalités de paiement échelonné.':'Registration fees are 10,000 FRS and one-year tuition is 250,000 FRS. Contact the center for information about installment payments.',
    'Nous sommes à votre écoute.':'We’re here to help.','Caugéfar Village':'Caugéfar Village','Appel':'Call',
    'Banque et micro-finance':'Banking and microfinance',
    'Transport et logistique':'Transport and logistics',
    'Maintenance informatique et réseaux':'Computer maintenance and networking',
    'Notre centre':'Our center',
    'Former des professionnels utiles, autonomes et fiers de leur métier.':'Train capable, independent professionals who take pride in their work.',
    'Precious est un centre de formation professionnelle agréé —':'Precious is an accredited vocational training center —',
    '— sous le haut patronage du MINFOP. Notre rôle : transformer un projet personnel en compétence reconnue, en 1 an, jusqu’au DQP ou au CQP.':'— under the high patronage of MINFOP. Our role is to turn a personal goal into a recognized skill in one year, leading to a DQP or CQP.',
    'Atelier de formation au centre Precious':'Training workshop at Precious',
    'Notre mission':'Our mission',
    'Moins de théorie apprise par cœur. Plus de gestes maîtrisés.':'Less memorized theory. More practical skills.',
    'Nous avons construit Precious autour d’une conviction simple : on ne devient pas assistant médical, comptable ou technicien en écoutant un cours. On le devient en répétant les bons gestes, sur du vrai matériel, avec quelqu’un qui les exerce lui-même.':'Precious is built around a simple belief: you do not become a medical assistant, accountant or technician by listening to a lecture. You learn by practicing the right skills with real equipment and guidance from people who use them professionally.',
    'C’est pourquoi chaque filière associe des ateliers pratiques, des logiciels métiers, des mises en situation et un stage encadré. Et parce qu’un diplôme ne suffit pas, nous accompagnons nos étudiants dans la préparation de leur CV, de leur entretien et de leur recherche de stage.':'That is why each program combines practical workshops, professional software, workplace simulations and a supervised internship. A diploma is only part of the journey, so we also help students prepare their CV, interviews and internship search.',
    'Une formation qui vise l’emploi':'Training focused on employment',
    'Chaque programme est défini à partir des tâches réellement confiées aux débutants en entreprise.':'Each program is based on tasks commonly assigned to entry-level staff in the workplace.',
    'Un cadre exigeant et bienveillant':'A supportive, high-standard environment',
    'Assiduité, ponctualité, respect du patient et confidentialité font partie de l’évaluation.':'Attendance, punctuality, respect for patients and confidentiality are part of the assessment.',
    'Notre pédagogie':'Our teaching approach',
    'Apprendre, pratiquer, prouver.':'Learn, practice, demonstrate.',
    'Trois temps structurent chaque module : la démonstration, la répétition guidée, puis la mise en situation autonome évaluée.':'Each module has three stages: demonstration, guided practice, then an assessed independent exercise.',
    '01 — DÉMONTRER':'01 — DEMONSTRATE','Le geste expliqué':'The skill explained',
    'Le formateur, professionnel en exercice, montre le geste au rythme réel, explique les erreurs fréquentes et les points de vigilance.':'An active professional demonstrates the skill at a real-world pace, explains common mistakes and highlights key points to watch.',
    '02 — RÉPÉTER':'02 — PRACTICE','Le geste maîtrisé':'The skill mastered',
    'Par petits groupes, les étudiants reproduisent le geste sur matériel réel ou simulateur, avec une correction immédiate.':'In small groups, students repeat the skill using real equipment or a simulator, with immediate feedback.',
    '03 — PROUVER':'03 — DEMONSTRATE','Le geste évalué':'The skill assessed',
    'Mise en situation notée, dossier technique ou portfolio : la compétence est démontrée, pas seulement déclarée.':'Through a graded simulation, technical file or portfolio, students demonstrate their skills rather than simply claim them.',
    'Nos valeurs':'Our values','Ce que nous ne négocions pas.':'Our non-negotiables.',
    'L’exigence':'High standards',
    'Un niveau professionnel réel, évalué sur des critères connus des étudiants dès le premier jour.':'Real professional standards, assessed against criteria students know from day one.',
    'Le respect':'Respect',
    'Des groupes à taille humaine, une écoute réelle et zéro tolérance pour le harcèlement ou la discrimination.':'Small groups, genuine support, and zero tolerance for harassment or discrimination.',
    'La proximité du terrain':'Close ties to the workplace',
    'Des partenariats d’accueil de stage et des intervenants qui travaillent encore dans leur secteur.':'Internship partnerships and instructors who continue to work in their field.',
    'L’honnêteté':'Honesty',
    'Nous disons clairement ce que chaque formation permet — et ne permet pas — d’exercer.':'We are clear about what each program does—and does not—qualify you to do.',
    'Étudiants du centre Precious':'Precious students','Étudiants en cours pratique':'Students in a practical class','Étudiants en stage':'Students on internship',
    'Le campus':'The campus','Des espaces conçus pour apprendre le métier.':'Spaces designed for hands-on learning.',
    'vers un DQP ou un CQP':'toward a DQP or CQP',
    'Salles de cours lumineuses, atelier de soins, laboratoire, salle informatique, espace administratif reconstitué et lieu de vie : chaque espace du centre correspond à une situation professionnelle.':'Bright classrooms, a care workshop, laboratory, computer room, simulated administrative office and shared spaces: each area reflects a professional setting.',
    'Salles équipées de vidéoprojection':'Classrooms equipped with projectors',
    'Atelier santé et salle de soins':'Healthcare workshop and care room',
    'Laboratoire d’analyses pédagogique':'Teaching laboratory',
    'Salle informatique et réseau':'Computer and networking room',
    'Espace documentation et travail en groupe':'Study resources and group-work area',
    'Accueil et services aux étudiants':'Reception and student services',
    'Centre de formation professionnelle':'Vocational Training Center',
    'Centre agréé —':'Accredited center —',
    '— sous le haut patronage du MINFOP. En un an, nous accompagnons votre projet vers une compétence professionnelle et un DQP ou un CQP.':'— under the high patronage of MINFOP. In one year, we help turn your goal into professional skills and a DQP or CQP.',
    'Nos savoir-faire':'Our expertise',
    'Des compétences concrètes dans plusieurs domaines professionnels.':'Practical skills across several professional fields.',
    'TIC & métiers numériques':'ICT & digital careers',
    'Douane & logistique':'Customs & logistics',
    'Assistant en cabinet médical, assistante sage-femme, vendeur en pharmacie, auxiliaire de vie et laboratoire.':'Medical office assistant, midwife assistant, pharmacy sales assistant, care assistant and laboratory studies.',
    'Maintenance informatique et réseaux, infographie et marketing digital.':'Computer maintenance and networking, graphic design and digital marketing.',
    'Comptabilité informatisée de gestion, banque et microfinance.':'Computerized management accounting, banking and microfinance.',
    'Douane et transit, transport et logistique.':'Customs and transit, transport and logistics.',
    'Organisation administrative, rédaction et outils bureautiques.':'Administrative organization, writing and office software.',
    'Voir toutes les formations':'View all programs',
    'Des compétences pour élargir vos horizons':'Skills to broaden your horizons',
    'Construisez votre avenir professionnel, ici et au-delà des frontières.':'Build your professional future, here and beyond borders.',
    'Les compétences acquises et un DQP ou un CQP peuvent soutenir un projet d’emploi ou de poursuite d’études à l’international. La reconnaissance du diplôme et l’accès à ces opportunités dépendent des règles du pays d’accueil, des établissements, des employeurs et des visas.':'The skills you gain and a DQP or CQP may support plans to work or continue your studies internationally. Diploma recognition and access to these opportunities depend on the rules of the destination country, educational institutions, employers and visa requirements.',
    'Avant votre départ, renseignez-vous auprès des autorités et organismes compétents du pays visé sur l’équivalence du diplôme et les conditions d’admission ou d’emploi.':'Before making plans, check diploma equivalency and admission or employment requirements with the relevant authorities and organizations in your destination country.',
    'Catalogue 2026 · 13 filières':'2026 Catalog · 13 programs',
    'Apprenez un métier.':'Learn a profession.',
    'Préparez votre avenir.':'Prepare for your future.',
    'Des formations en santé, TIC et gestion, organisées sur un an pour développer des compétences professionnelles et préparer un DQP ou un CQP.':'One-year healthcare, ICT and business programs to build professional skills and prepare for a DQP or CQP.',
    'de formation':'of training','qualifications':'qualifications','Stage':'Internship','académique':'academic',
    'Parler aux admissions':'Talk to admissions','Filières professionnalisantes':'Career-focused programs',
    'Santé · TIC · Gestion':'Healthcare · ICT · Business',
    'Insertion & mobilité internationale':'Career integration & international mobility',
    'Des compétences pour construire votre avenir, ici ou ailleurs.':'Skills to build your future, here or abroad.',
    'Votre formation et votre stage académique peuvent s’inscrire dans un projet d’insertion au Cameroun ou de mobilité internationale. Vous envisagez un voyage pour étudier ou travailler dans un pays francophone ou anglophone ? Renseignez-vous sur les conditions d’entrée et de séjour, le type de visa, l’autorisation d’études ou de travail et la reconnaissance de votre qualification. Échangez avec notre équipe pour parler de votre projet et de la formation adaptée.':'Your training and academic internship can be part of a career plan in Cameroon or an international mobility project. Planning to travel to study or work in a French- or English-speaking country? Check entry and stay requirements, visa type, study or work authorization, and recognition of your qualification. Talk to our team about your plans and a suitable training path.',
    'Parler de mon projet':'Discuss my plans',
    'Chaque destination applique ses propres règles : voyage, visa, équivalence du DQP ou du CQP, autorisation de travail et embauche ne sont jamais automatiques. Vérifiez les informations auprès des autorités et organismes officiels du pays visé.':'Each destination has its own rules: travel, visas, DQP or CQP equivalency, work authorization and hiring are never automatic. Check requirements with the relevant official authorities and organizations in your destination country.',
    'Votre projet, étape par étape':'Your plan, step by step',
    'Choisir une filière':'Choose a program','Construire des compétences dans un métier.':'Build skills for a profession.',
    'Préparer l’insertion':'Prepare for employment','Valoriser son parcours et son stage académique.':'Showcase your training and academic internship.',
    'Se renseigner dans le pays visé':'Check requirements in your destination country',
    'Vérifier voyage, entrée, visas, études, travail et équivalences auprès des autorités officielles.':'Check travel, entry, visa, study, work and equivalency requirements with official authorities.',
    'Appel : +237 658 813 181':'Call: +237 658 813 181',
    'WhatsApp : +237 681 574 613':'WhatsApp: +237 681 574 613',
    'WhatsApp : +237 681 574 613 →':'WhatsApp: +237 681 574 613 →',
    'Appel :':'Call:',
    'WhatsApp :':'WhatsApp:',
    'Téléphone / WhatsApp *':'Phone / WhatsApp *',
    'Indicatif du Cameroun':'Cameroon country code',
    '+237 6XX XXX XXX':'+237 6XX XXX XXX'
  }
};

const originalTextNodes = new WeakMap();

function applyLanguage(lang) {
  const safeLang = lang === 'en' ? 'en' : 'fr';
  document.documentElement.lang = safeLang;
  localStorage.setItem('precious-language', safeLang);
  document.querySelectorAll('.language-select').forEach(select => {
    select.value = safeLang;
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const parentTag = node.parentElement?.tagName;
    if (parentTag === 'SCRIPT' || parentTag === 'STYLE') continue;
    if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
    const original = originalTextNodes.get(node) || '';
    const trimmed = original.trim();
    const translated = safeLang === 'en' ? (translations.en[trimmed] || trimmed) : trimmed;
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    node.nodeValue = `${leading}${translated}${trailing}`;
  }

  document.querySelectorAll('[placeholder]').forEach(element => {
    if (!element.dataset.originalPlaceholder) element.dataset.originalPlaceholder = element.getAttribute('placeholder');
    const original = element.dataset.originalPlaceholder;
    element.setAttribute('placeholder', safeLang === 'en' ? (translations.en[original] || original) : original);
  });
}

document.querySelectorAll('.language-select').forEach(select => {
  select.addEventListener('change', () => {
    applyLanguage(select.value);
    document.dispatchEvent(new CustomEvent('precious:languagechange', {
      detail: { language: select.value }
    }));
  });
});

applyLanguage(localStorage.getItem('precious-language') || 'fr');

const header = document.querySelector('.header');
if (header) {
  window.addEventListener('scroll', () => {
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  }, { passive: true });
}

const revealTargets = document.querySelectorAll(
  '.section-heading, .intro-copy, .intro-image, .advantage-list article, .testimonial-copy, .testimonial-image, .faq-grid, .contact-grid, .course-grid article, .gallery-grid img, .admission-info, .detailed-form, .map-grid, .support-grid, .fee-cards div, .center-copy, .center-photo-stack, .pedagogy-grid article, .values-grid article, .center-campus-photos img, .expertise-grid article'
);

revealTargets.forEach((element, index) => {
  element.classList.add('reveal');
  element.style.transitionDelay = `${Math.min((index % 4) * 70, 210)}ms`;
});

const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' })
  : null;

document.querySelectorAll('.reveal, .formation-card, .course-card, .support-list article, .fee-cards div, .stats-grid div, .hero-copy, .hero-media, .alternance-visual, .support-visual, .support-copy, .detail-main, .detail-sidebar').forEach(element => {
  if (revealObserver) revealObserver.observe(element);
  else element.classList.add('is-visible');
});
